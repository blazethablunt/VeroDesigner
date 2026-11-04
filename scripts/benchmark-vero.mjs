#!/usr/bin/env node

import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { mkdtemp, readFile as readTempFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { spawn, spawnSync } from "node:child_process";
import { setTimeout as delay } from "node:timers/promises";

const root = resolve(import.meta.dirname, "..");
const html = await readFile(join(root, "index.html"));
const args = new Map(process.argv.slice(2).map(argument => {
  const [key, value] = argument.replace(/^--/, "").split("=", 2);
  return [key, value ?? "true"];
}));
const repeats = Math.max(1, Number(args.get("repeats") || 1));
const selectedFixtures = args.get("fixture") ? [args.get("fixture")] : ["small", "dense", "package-heavy"];
const fixtures = {
  small: { resistors: 6, capacitors: 2, ics: 0 },
  dense: { resistors: 12, capacitors: 4, ics: 0 },
  "package-heavy": { resistors: 4, capacitors: 2, ics: 2 }
};

for (const name of selectedFixtures) {
  if (!fixtures[name]) throw new Error(`Unknown fixture "${name}". Choose small, dense, or package-heavy.`);
}

function findChrome() {
  const configured = process.env.CHROME_BIN;
  const candidates = configured ? [configured] : ["google-chrome", "chromium", "chromium-browser", "/opt/google/chrome/chrome"];
  for (const candidate of candidates) {
    const result = spawnSync("which", [candidate], { encoding: "utf8" });
    if (result.status === 0 && result.stdout.trim()) return result.stdout.trim();
    if (candidate.startsWith("/") && result.error?.code === "ENOENT") continue;
    if (candidate.startsWith("/") && result.status !== 0) continue;
  }
  throw new Error("Chrome/Chromium not found. Set CHROME_BIN to its executable path.");
}

const server = createServer((request, response) => {
  if (request.url !== "/" && request.url !== "/index.html") {
    response.writeHead(404).end("Not found");
    return;
  }
  response.writeHead(200, { "content-type": "text/html; charset=utf-8" }).end(html);
});
server.listen(0, "127.0.0.1");
await new Promise((resolveListen, reject) => {
  server.once("listening", resolveListen);
  server.once("error", reject);
});

const profile = await mkdtemp(join(tmpdir(), "vero-benchmark-"));
const chrome = spawn(findChrome(), [
  "--headless=new", "--no-sandbox", "--disable-gpu", "--no-first-run",
  "--no-default-browser-check", "--remote-debugging-port=0",
  `--user-data-dir=${profile}`, "about:blank"
], { stdio: "ignore" });
const chromeExited = new Promise(resolveExit => chrome.once("exit", resolveExit));

let socket;
let closeBrowser = () => Promise.resolve();
try {
  let port;
  for (let attempt = 0; attempt < 100; attempt += 1) {
    try {
      port = Number((await readTempFile(join(profile, "DevToolsActivePort"), "utf8")).split("\n")[0]);
      break;
    } catch {
      if (chrome.exitCode !== null) throw new Error("Chrome exited before starting its DevTools endpoint.");
      await delay(100);
    }
  }
  if (!port) throw new Error("Timed out waiting for Chrome DevTools.");

  const targets = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
  const target = targets.find(item => item.type === "page");
  if (!target) throw new Error("Chrome did not create a page target.");
  socket = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((resolveOpen, reject) => {
    socket.addEventListener("open", resolveOpen, { once: true });
    socket.addEventListener("error", reject, { once: true });
  });

  let nextId = 0;
  const pending = new Map();
  socket.addEventListener("message", event => {
    const message = JSON.parse(event.data);
    if (!message.id) return;
    const request = pending.get(message.id);
    if (!request) return;
    pending.delete(message.id);
    if (message.error) request.reject(new Error(message.error.message));
    else request.resolve(message.result);
  });
  const call = (method, params = {}) => new Promise((resolveCall, reject) => {
    const id = ++nextId;
    pending.set(id, { resolve: resolveCall, reject });
    socket.send(JSON.stringify({ id, method, params }));
  });
  closeBrowser = () => call("Browser.close");
  const evaluate = async expression => {
    const result = await call("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
    if (result.exceptionDetails) throw new Error(result.exceptionDetails.exception?.description || result.exceptionDetails.text);
    return result.result.value;
  };

  await call("Page.enable");
  await call("Runtime.enable");
  const loaded = new Promise(resolveLoad => {
    const handler = event => {
      const message = JSON.parse(event.data);
      if (message.method === "Page.loadEventFired") {
        socket.removeEventListener("message", handler);
        resolveLoad();
      }
    };
    socket.addEventListener("message", handler);
  });
  await call("Page.navigate", { url: `http://127.0.0.1:${server.address().port}/` });
  await loaded;

  const results = [];
  for (const fixtureName of selectedFixtures) {
    for (const routerMode of ["x", "xy", "perf"]) {
      for (let repetition = 1; repetition <= repeats; repetition += 1) {
        const fixture = fixtures[fixtureName];
        const result = await evaluate(`(async () => {
          const api = window.__VD;
          const state = api.state;
          state.components = [];
          state.wires = [];
          state.veroLayout = null;
          state.routerMode = ${JSON.stringify(routerMode)};
          let id = 1;
          const resistors = [];
          const capacitors = [];
          for (let i = 0; i < ${fixture.resistors}; i += 1) {
            const componentId = "R" + id++;
            const component = api.addComponent("resistor", 120 + (i % 6) * 150, 140 + Math.floor(i / 6) * 120, "10k", componentId);
            if (i === 0) component.veroLeadSpan = 3;
            if (i === 1) component.veroLeadSpan = 5;
            resistors.push(componentId);
          }
          for (let i = 0; i < ${fixture.capacitors}; i += 1) {
            const componentId = "C" + (i + 1);
            api.addComponent("capacitor", 120 + (i % 6) * 150, 500 + Math.floor(i / 6) * 120, "100n", componentId);
            capacitors.push(componentId);
          }
          const ics = [];
          for (let i = 0; i < ${fixture.ics}; i += 1) {
            const componentId = "IC" + (i + 1);
            api.addComponent("otherIC", 900 + i * 220, 500, "PT2399", componentId);
            ics.push(componentId);
          }
          const components = [...resistors, ...capacitors, ...ics];
          const wires = [];
          for (const pin of ["1", "2"]) {
            for (let i = 1; i < components.length; i += 1) {
              wires.push({ id: "BENCH-" + pin + "-" + i, a: components[i - 1] + ":" + pin, b: components[i] + ":" + pin });
            }
          }
          state.wires = wires;
          api.renderAll();
          const startedAt = performance.now();
          const layout = await api.buildVeroLayout();
          const elapsedMs = performance.now() - startedAt;
          if (!layout || layout.error) throw new Error(layout?.error || "Router returned no layout.");
          for (let a = 0; a < layout.placements.length; a += 1) {
            const first = layout.placements[a];
            for (let b = a + 1; b < layout.placements.length; b += 1) {
              const second = layout.placements[b];
              if (first.x < second.x + second.footprint.width && second.x < first.x + first.footprint.width &&
                  first.y < second.y + second.footprint.height && second.y < first.y + first.footprint.height) {
                throw new Error("Overlapping placements: " + first.component.id + " and " + second.component.id);
              }
            }
          }
          if (${JSON.stringify(routerMode)} !== "perf" && !api.verifyRoutedConnectivity(layout)) throw new Error("Compact routed-connectivity validation failed.");
          for (const [componentId, span] of [[resistors[0], 3], [resistors[1], 5]]) {
            const placement = layout.placements.find(item => item.component.id === componentId);
            const pins = placement?.footprint.pins || [];
            if (pins.length < 2) throw new Error("Missing footprint pins for " + componentId);
            const actual = Math.abs(pins[0].x - pins[1].x) + Math.abs(pins[0].y - pins[1].y);
            if (actual !== span) throw new Error(componentId + " expected lead span " + span + ", got " + actual);
          }
          return {
            fixture: ${JSON.stringify(fixtureName)},
            routerMode: ${JSON.stringify(routerMode)},
            repetition: ${repetition},
            elapsedMs: Math.round(elapsedMs),
            components: layout.placements.length,
            columns: layout.columns,
            rows: layout.rows,
            routes: layout.routes?.length || layout.perfTraces?.length || 0,
            cuts: layout.cuts?.length || 0,
            searchStats: layout.perfSearchStats || null,
            generationStats: api.getGenerationMetrics()
          };
        })()`);
        results.push(result);
        console.log(JSON.stringify(result));
      }
    }
  }
  console.log(`Completed ${results.length} validated runs.`);
} finally {
  await closeBrowser().catch(() => {});
  socket?.close();
  if (chrome.exitCode === null) {
    await Promise.race([chromeExited, delay(5000)]);
    if (chrome.exitCode === null) {
      chrome.kill("SIGTERM");
      await Promise.race([chromeExited, delay(2000)]);
    }
  }
  await new Promise(resolveClose => server.close(resolveClose));
  await rm(profile, { recursive: true, force: true });
}
