# Vero Designer

Vero Designer is an automatic Vero layout generator that converts electronic schematics into buildable stripboard (Vero) layouts.

Simply draw your schematic, click **Generate Vero**, and Vero Designer will create a Vero layout ready for your next project.

![image alt](https://github.com/blazethablunt/VeroDesigner/blob/8716f07b9a0e0129d6802d445a81a264514ca792/soss.png)

![image alt](https://github.com/blazethablunt/VeroDesigner/blob/8716f07b9a0e0129d6802d445a81a264514ca792/sos.png)

---

## Creating a Schematic

Use the left sidebar to select components and place them on the schematic grid.

* Use the **Select** tool to select and move components.
* Use the **Wire** tool to connect components.
* When a component is selected, use the left sidebar to change its value, type, or rotation.

---

## Editing the Generated Vero Layout

The generated Vero layout includes editing features, allowing you to fine-tune the result before building.

You can:

* Move any component
* Move links (jumpers)
* Move strip cuts
* Resize the board using the bottom-right resize handle

When a strip cut is placed beneath a component, the component's opacity is automatically reduced to improve visibility.

---

## Net Labels

Quick net labels are available for:

* 9V
* GND
* Input
* Output

Custom nets can also be created using the **Net Label** component.

Each net supports two placement modes:

* **Offboard** – Creates a connection point on the edge of the Vero board.
* **Onboard** – Creates an internal label only.

All nets default to **Offboard**, but this can be changed at any time.

---

## Project Management

Projects can be saved and reopened later.

You can also:

* Give your circuit a name
* Add a project description
* Export PNG images from both the schematic editor and the generated Vero layout

---

## Circuit Data & Vero Settings

Connection nets are automatically detected, grouped, and color-coded. They are displayed in the **Circuit Data** panel on the right side of the interface.

The **Vero Settings** section provides several useful options, including:

* Maximum board columns
* Component opacity
* **Update IDs** – Reassigns IDs to all schematic components (schematic page only)
* **Update Vero** – Applies schematic changes to the existing Vero layout without generating a new layout
* **Regenerate Layout** – Generates a completely new layout after major schematic changes

---

## Available Components

### Passive Components

* Resistors
* Capacitors
* Diodes
* Potentiometers
* Switches
* LEDs

### Voltage Regulators

* 5V Voltage Regulator

### Integrated Circuits

Currently supported:

* PT2399

### Operational Amplifiers

**Dual**

* TL072
* NE5532
* LM833
* JRC4558

**Single**

* LM741

### Transistors

**BJT (NPN)**

* BC547
* 2N3904

**BJT (PNP)**

* BC557
* 2N3906

**JFET**

* J201
* 2N5457
* 2N5459

---

## Offline Use

Vero Designer has no external dependencies.

You can download the HTML file and run it completely offline in your web browser.
