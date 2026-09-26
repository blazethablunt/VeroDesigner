<h1 align="left">
  <img src="https://i.ibb.co/23C8HbmF/Vero-Designer-Logo2.png" alt="Logo" width="50" align="left">
  <span margin-top:"0">Vero Designer</span>
</h1>

[![GitHub Release](https://img.shields.io/github/v/release/blazethablunt/VeroDesigner)](https://github.com/blazethablunt/VeroDesigner/releases/download/v1.4.0/Vero_Designer_1.4.0.html) [![See What's New](https://img.shields.io/badge/See-What's_New-blue)](#whats-new) ![Static Badge](https://img.shields.io/badge/dependencies-none-red) ![GitHub Downloads (all assets, all releases)](https://img.shields.io/github/downloads/blazethablunt/verodesigner/total)
 ![GitHub Repo stars](https://img.shields.io/github/stars/blazethablunt/veroDesigner) 





Vero Designer is an automatic vero layout generator that converts electronic schematics into buildable stripboard layouts.

Simply draw your schematic, click **Generate Vero**, and Vero Designer will create a vero layout ready for your next project.

![image alt](https://github.com/blazethablunt/VeroDesigner/blob/da29e9d6d0868b72613d06b9ee6b693afcf495da/screenshots/soss.png)

![image alt](https://github.com/blazethablunt/VeroDesigner/blob/da29e9d6d0868b72613d06b9ee6b693afcf495da/screenshots/sos.png)

---

## Walkthrough

Click the image to watch the full walkthrough video 

[![Vero Designer Demo](https://i.ibb.co/6J4vbY21/verodesigner-thumb-github.png)](https://www.youtube.com/watch?v=3N8e078Pl40)

---

## Manual VS Automatic

The following example compares a manually designed stripboard layout with one generated automatically by Vero Designer.

Despite being created automatically, it produces a layout nearly identical in size and overall efficiency to one designed by an experienced human builder.

![image alt](https://github.com/blazethablunt/VeroDesigner/blob/da29e9d6d0868b72613d06b9ee6b693afcf495da/screenshots/d%2B%20comparison.png)

---

## Creating a Schematic

Use the left sidebar to select components and place them on the schematic grid.

* Use the **Select** tool to select and move components.
* Use the **Wire** tool to connect components.
* When a component is selected, use the left sidebar to change its value, type, or rotation.

---

## Editing the Generated Vero Layout

The generated vero layout includes editing features, allowing you to fine-tune the result before building.

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

* **Offboard** – Creates a connection point on the edge of the vero board.
* **Onboard** – Creates an internal label only.

Quick nets default to **Offboard**, while custom nets default to **Onboard**, but this can be changed at any time.

---

## Circuit Data & Vero Settings

Connection nets are automatically detected, grouped, and color-coded. They are displayed in the **Circuit Data** panel on the right side of the interface.

The **Vero Settings** section provides several useful options, including:

* **Maximum board columns**
* **Component opacity**
* **Update IDs** – Reassigns IDs to all schematic components (schematic page only)
* **Update Vero** – Applies schematic changes to the existing vero layout without generating a new layout
* **Regenerate layout** – Generates a completely new layout after major schematic changes
* **Auto describe** – Generates a description for the layout based on used components
* **Standing resistors** – Optional feature to save space, off by default

---

## Project Management

Projects can be saved and reopened later.

You can also:

* Give your circuit a name
* Add a project description
* Export PNG images from both the schematic editor and the generated vero layout
* Export BOM
* Import .kicad_sch files


![image alt](https://i.ibb.co/VWDH2ktB/import-Button.png)

---

## Available Components

* Resistors
* Capacitors
* Op-Amps
* Transistors
* Tubes
* ICs
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
* OPA2134 
* TL082 
* JRC4580 
* LM358

**Single**

* LM741
* NE5534 
* TL071 
* LM308 
* OPA134 

**Quad**

* LM324 
* TL064 
* TL074 
* TL084 

### Transistors

**BJT (NPN)**

* BC547
* 2N3904
* BC548
* BC549
* BC550
* MPSA13 
* MPSA14 
* MPSA18 
* BC184
* 2N5088
* 2N5089
* 2N2222 **\*NEW\***
* 2N4401 **\*NEW\***
* 2N5551 **\*NEW\***
* BC337 **\*NEW\***
* KSC1845 **\*NEW\***

**BJT (PNP)**

* BC557
* 2N3906
* BC558
* BC559
* BC560
* BC327 **\*NEW\***
* 2N2907 **\*NEW\***
* 2N4403 **\*NEW\***
* 2N5401 **\*NEW\***
* KSA992 **\*NEW\***

**JFET**

* J201
* J112
* J113
* 2N5457
* 2N5458
* 2N5459
* 2N3819 
* 2N5484 
* MPF102 
* MPF103 
* BF245 
* 2SK30A 
* 2SK117 

**MOSFET**

* 2N7000
* BS170
* BS250
* ZVP3306A

### Integrated Circuits

* PT2399
* NE555 
* LM386 
* LM13700 
* LM3914 
* LM3915
* CD40106 **\*NEW\***
* CD4066 **\*NEW\***
* CD4051 **\*NEW\***
* CD4046 **\*NEW\***
* CD4017 **\*NEW\***
* CD4093 **\*NEW\***
* CD4052 **\*NEW\***
* CD4053 **\*NEW\***
* CD4040 **\*NEW\***
* V2164 **\*NEW\***
* Daisy IC
* Generic IC

**Tubes**

* 12AX7
* 12AU7
  
---

## Offline Use

Vero Designer has no external dependencies.

You can [Download](https://github.com/blazethablunt/VeroDesigner/releases/download/v1.4.0/Vero_Designer_1.4.0.html) the HTML file and run it completely offline in your web browser.

---

## What's New
### Version 1.4.0

* Added an option to move edge connections
* Added cycling component models and types using mouse scroll wheel when drawing (Op-amps and transistors only)
* Added optional smaller components in schematic view
* Added "Show pin numbers" option
* Added live component count
* Moved text labels closer to the component when vertical
* Added new transistors
* Added new ICs
* Added trimpot types
* Added adjustable pin space on "Other ICs"
* Added "Other ICs" to auto describe
* Fixed "generated layout" data not being reset after closing project
* Changed regulator UI to transistor UI

