<h1 align="left">
  <img src="https://i.ibb.co/23C8HbmF/Vero-Designer-Logo2.png" alt="Logo" width="50" align="left">
  <span margin-top:"0">Vero Designer</span>
</h1>

![GitHub Release](https://img.shields.io/github/v/release/blazethablunt/veroDesigner) [![See What's New](https://img.shields.io/badge/See-What's_New-blue)](#whats-new) ![Static Badge](https://img.shields.io/badge/dependencies-none-red) ![GitHub Repo stars](https://img.shields.io/github/stars/blazethablunt/veroDesigner)



Vero Designer is an automatic Vero layout generator that converts electronic schematics into buildable stripboard (Vero) layouts.

Simply draw your schematic, click **Generate Vero**, and Vero Designer will create a Vero layout ready for your next project.

![image alt](https://github.com/blazethablunt/VeroDesigner/blob/da29e9d6d0868b72613d06b9ee6b693afcf495da/screenshots/soss.png)

![image alt](https://github.com/blazethablunt/VeroDesigner/blob/da29e9d6d0868b72613d06b9ee6b693afcf495da/screenshots/sos.png)

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
* **Regenerate layout** – Generates a completely new layout after major schematic changes
* **Auto describe** – Generates a description for the layout based on used components
* **Standing resistors** – Optional feature to save space, off by default

---

## Project Management

Projects can be saved and reopened later.

You can also:

* Give your circuit a name
* Add a project description
* Export PNG images from both the schematic editor and the generated Vero layout
* Export BOM
* Import .kicad_sch files


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
* 2N5088 **\*NEW\***
* 2N5089 **\*NEW\***

**BJT (PNP)**

* BC557
* 2N3906
* BC558
* BC559
* BC550

**JFET**

* J201
* J112 **\*NEW\***
* J113 **\*NEW\***
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

* 2N7000 **\*NEW\***
* BS170 **\*NEW\***
* BS250 **\*NEW\***
* ZVP3306A **\*NEW\***

### Integrated Circuits

* PT2399
* NE555 
* LM386 
* LM13700 
* LM3914 
* LM3915
* Daisy IC **\*NEW\***

**Tubes**

* 12AX7 **\*NEW\***
* 12AU7 **\*NEW\***
  
---

## Offline Use

Vero Designer has no external dependencies.

You can [Download](https://github.com/blazethablunt/VeroDesigner/releases/download/v1.2.0/Vero.Designer.1.2.0.html) the HTML file and run it completely offline in your web browser.

---

## What's New
### Version 1.3.0

* Added tubes
* Added MOSFETs
* Added settings
* Added 'change net color' option
* Added component count
* Added estimated board size
* Added resize board from all sides
* Added themes
* Added color customization
* Added vero grid
* Added zoom in & zoom out shortcuts (W - zoom in, Q - zoom out)
* Added full screen button
* Added mouse scroll button navigation
* Added option to 'verify' layouts
* Added creator name
* Added daisy IC (under "Other IC's")
* Moved critical errors to status bar
* Fixed 'Auto-describe' not describing input connected through potentiometer
* Fixed 2SK30A pinout and package orientation
* Fixed common wiring issues
* Reduced interactive area around component pins

