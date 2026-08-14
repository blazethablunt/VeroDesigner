<h1 align="left">
  <img src="https://i.ibb.co/23C8HbmF/Vero-Designer-Logo2.png" alt="Logo" width="50" align="left">
  <span margin-top:"0">Vero Designer</span>
</h1>

![GitHub Release](https://img.shields.io/github/v/release/blazethablunt/veroDesigner) [![See What's New](https://img.shields.io/badge/See-What's_New-blue)](#whats-new) ![Static Badge](https://img.shields.io/badge/dependencies-none-red) ![GitHub Repo stars](https://img.shields.io/github/stars/blazethablunt/veroDesigner)



Vero Designer is an automatic Vero layout generator that converts electronic schematics into buildable stripboard (Vero) layouts.

Simply draw your schematic, click **Generate Vero**, and Vero Designer will create a Vero layout ready for your next project.

![image alt](https://github.com/blazethablunt/VeroDesigner/blob/6a879b6973c17424ade8f4feb4defaa748776c8d/screenshots/soss.png)

![image alt](https://github.com/blazethablunt/VeroDesigner/blob/6a879b6973c17424ade8f4feb4defaa748776c8d/screenshots/sos.png)

---

## Manual VS Automatic

The following example compares a manually designed stripboard layout with one generated automatically by Vero Designer.

Despite being created automatically, it produces a layout nearly identical in size and overall efficiency to one designed by an experienced human builder.

![image alt](https://github.com/blazethablunt/VeroDesigner/blob/6a879b6973c17424ade8f4feb4defaa748776c8d/screenshots/d%2B%20comparison.png)

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
* Delete links/cuts

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

* **Maximum board columns**
* **Component opacity**
* **Update IDs** – Reassigns IDs to all schematic components (schematic page only)
* **Update Vero** – Applies schematic changes to the existing Vero layout without generating a new layout
* **Regenerate Layout** – Generates a completely new layout after major schematic changes
* **Auto Describe** – Generates a description for the layout based on used components **\*NEW\***
* **Standing resistors** – Optional feature to save space, off by default **\*NEW\***

---

## Project Management

Projects can be saved and reopened later.

You can also:

* Give your circuit a name
* Add a project description
* Export PNG images from both the schematic editor and the generated Vero layout
* Export BOM
* Import .kicad_sch files  **\*NEW\***


![image alt](https://i.ibb.co/VWDH2ktB/import-Button.png)

---

## Available Components

* Resistors
* Capacitors
* Op-Amps
* Transistors
* Diodes
* Potentiometers
* Switches
* LEDs
* Trimmers
* 5V Voltage Regulator

### Operational Amplifiers

**Dual**

* TL072
* NE5532
* LM833
* JRC4558
* OPA2134 **\*NEW\***
* TL082 **\*NEW\***
* JRC4580 **\*NEW\***
* LM358 **\*NEW\***

**Single**

* LM741
* NE5534 **\*NEW\***
* TL071 **\*NEW\***
* LM308 **\*NEW\***
* OPA134 **\*NEW\***

**Quad**

* LM324 **\*NEW\***
* TL064 **\*NEW\***
* TL074 **\*NEW\***
* TL084 **\*NEW\***

### Transistors

**BJT (NPN)**

* BC547
* 2N3904
* BC548
* BC549
* BC550
* MPSA13 **\*NEW\***
* MPSA14 **\*NEW\***
* MPSA18 **\*NEW\***
* BC184 **\*NEW\***

**BJT (PNP)**

* BC557
* 2N3906
* BC558
* BC559
* BC550

**JFET**

* J201
* 2N5457
* 2N5458
* 2N5459
* 2N3819 **\*NEW\***
* 2N5484 **\*NEW\***
* MPF102 **\*NEW\***
* MPF103 **\*NEW\***
* BF245 **\*NEW\***
* 2SK30A **\*NEW\***
* 2SK117 **\*NEW\***

### Integrated Circuits

* PT2399
* NE555 **\*NEW\***
* LM386 **\*NEW\***
* LM13700 **\*NEW\***
* LM3914 **\*NEW\***
* LM3915 **\*NEW\***
  
---

## Offline Use

Vero Designer has no external dependencies.

You can [Download](https://github.com/blazethablunt/VeroDesigner/releases/download/v1.2.0/Vero.Designer.1.2.0.html) the HTML file and run it completely offline in your web browser.

---

## What's New
### Version 1.2.0

* Added KiCad importer (**BETA**)
* Added marquee selection
* Added new component models
* Added Auto-describe
* Added generic IC (under "Other IC's")
* Added 3PST & 3PDT
* Added ground symbol to GND quick net
* Added new icons for the editing tools
* Added standing resistors option
* Added duplicate shortcut (Ctrl/Cmd+D)
* Expanded grid
* Improved wiring (each line is editable)
* Fixed transistor's schematic symbol pinout letters
* Fixed component icons on left sidebar
* Moved layout to the center
* "Checks" tab shows which component is unconnected
