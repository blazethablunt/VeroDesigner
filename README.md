<h1 align="left">
  <img src="https://i.ibb.co/23C8HbmF/Vero-Designer-Logo2.png" alt="Logo" width="50" align="left">
  <span margin-top:"0">Vero Designer</span>
</h1>

![GitHub Release](https://img.shields.io/github/v/release/blazethablunt/veroDesigner) [![See What's New](https://img.shields.io/badge/See-What's_New-blue)](#whats-new) ![Static Badge](https://img.shields.io/badge/dependencies-none-red) ![GitHub Repo stars](https://img.shields.io/github/stars/blazethablunt/veroDesigner)



Vero Designer is an automatic Vero layout generator that converts electronic schematics into buildable stripboard (Vero) layouts.

Simply draw your schematic, click **Generate Vero**, and Vero Designer will create a Vero layout ready for your next project.

![image alt](https://github.com/blazethablunt/VeroDesigner/blob/15af387eeed43089cafe2e3abc69304f792e8856/screenshots/soss2.png)

![image alt](https://github.com/blazethablunt/VeroDesigner/blob/15af387eeed43089cafe2e3abc69304f792e8856/screenshots/sos2.png)

---

## Manual VS Automatic

The following example compares a manually designed stripboard layout with one generated automatically by Vero Designer.
The generated layout required no manual editing. 

Despite being created automatically, it produces a layout nearly identical in size and overall efficiency to one designed by an experienced human builder.

![image alt](https://github.com/blazethablunt/VeroDesigner/blob/36137a4fac1d879d4df5c459f1d175e3580945cc/d%2B%20comp.png)

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
* Delete links/cuts **\*NEW\***

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

Quick nets default to **Offboard**, while custom nets default to **Onboard**, but this can be changed at any time.

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

## Project Management

Projects can be saved and reopened later.

You can also:

* Give your circuit a name
* Add a project description
* Export PNG images from both the schematic editor and the generated Vero layout

---

## Available Components

### Passive Components

* Resistors
* Capacitors
* Diodes
* Potentiometers
* Switches
* LEDs
* Trimmers **\*NEW\***

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
* BC548 **\*NEW\***
* BC549 **\*NEW\***
* BC550 **\*NEW\***

**BJT (PNP)**

* BC557
* 2N3906
* BC558 **\*NEW\***
* BC559 **\*NEW\***
* BC550 **\*NEW\***

**JFET**

* J201
* 2N5457
* 2N5459
* 2N5458 **\*NEW\***

### Integrated Circuits

Currently supported:

* PT2399

### Voltage Regulators

* 5V Voltage Regulator
  
---

## Offline Use

Vero Designer has no external dependencies.

You can [Download](https://github.com/blazethablunt/VeroDesigner/releases/download/v1.1.0/index.html) the HTML file and run it completely offline in your web browser.

---

## What's New
### Version 1.1.0

* Added "sticky components" option
* Added flip (mirror) component option
* Added Copy/Paste buttons
* Added schematic view zoom
* Added minimize right sidebar option
* Added transistor models
* Added trim pots
* Added SP3T & DP3T
* Added zener & schottky diodes
* Added potentiometer resistance value field
* Added "Export BOM" button
* Improved component selection
* Improved wiring & wires selection
* Improved tool switching
* Fixed component connection points drawn off-grid
* Fixed transistor displayed wrong package orientation
* Fixed polarized capacitor schematic symbol
* Fixed component symbol sizes
* Fixed "Input" quick label orientation
* Fixed op-amp text
* Links & cuts can be deleted from the generated layout
* Changed transistor look & feel
* Generated vero saved with the project file
* Custom net labels default to "Onboard"
* Changing net label affects duplicates
* Broken net/physical short message highlighted in red


 




