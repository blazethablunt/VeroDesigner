# Copilot instructions

## Build, test, and run

- The application is the standalone `index.html`; its markup, styles, and JavaScript are inline. There is no package manifest, build step, automated test runner, or linter configured, and no dependencies to install.
- Run it by opening `index.html` in a modern browser. For local HTTP serving, run `python3 -m http.server 8000` from the repository root and open `http://localhost:8000/`.
- There is no automated single-test command. For a focused manual smoke test, load the example circuit, generate a Compact or Perf layout, make an edit, then save or export it. The browser console also exposes selected state and helpers under `window.__VD`.

## Architecture

- `index.html` contains the complete application. `README.md` documents the product and user-facing workflows; the PNG directories contain example layouts and screenshots, not source modules.
- The JavaScript runs in one closure and uses a central `state` object for the schematic, editor interaction, generated board, and separate undo histories. `applicationSettings` holds interface and board preferences.
- Component definitions describe schematic pins and board footprints. Schematic components and wires feed `deriveNets()`, which unions connected pins (including matching terminal labels) into nets. Board metadata is built from that electrical model before layout generation.
- `buildVeroLayout()` selects the Compact x, Compact x+y, or Perf router. Routers return layout data (placements, routes/traces, cuts, terminals, and related metadata); the SVG renderers and editing layers display and modify that data. Keep electrical connectivity, routing, and rendering responsibilities aligned when changing layout behavior.
- `renderAll()` synchronizes the schematic, properties, inspector, and current layout. Schematic edits deliberately flag an existing generated board as out of date rather than replacing the user's board edits.
- Projects are serialized as JSON and autosaved in `localStorage`; layout serialization, project snapshots, and history helpers preserve editable board state. Import/export and image rendering use browser APIs, so avoid introducing server-only assumptions.

## Code conventions

- Make application changes in the existing inline script and styles unless the task explicitly calls for restructuring the standalone app. There is no module or build pipeline.
- Treat component definitions, canonical component/model helpers, and pin keys as the source of truth for pin identity and connectivity. Normalize aliases before relying on component types or models.
- Keep schematic and board edits flowing through their respective state/history and snapshot helpers; update the appropriate render/UI refresh path after changes.
- The two SVG canvases use their own viewBox coordinate systems. Convert pointer/client coordinates through the existing SVG mapping helpers rather than mixing screen pixels with board or schematic coordinates.
- Layout generation is asynchronous and yields to the browser. Preserve its busy/progress behavior and seeded-search inputs when changing the routers; avoid blocking the editor during longer searches.
