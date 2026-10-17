<h1 align="left">
  <img src="https://i.ibb.co/23C8HbmF/Vero-Designer-Logo2.png" alt="Logo" width="50" align="left">
  <span margin-top:"0">Vero Designer</span>
</h1>

[![GitHub Release](https://img.shields.io/github/v/release/blazethablunt/VeroDesigner)](https://github.com/blazethablunt/VeroDesigner/releases/download/v1.5.0/Vero_Designer_1.5.0.html) [![See What's New](https://img.shields.io/badge/See-What's_New-blue)](#whats-new) ![Static Badge](https://img.shields.io/badge/dependencies-none-red) ![GitHub Downloads (all assets, all releases)](https://img.shields.io/github/downloads/blazethablunt/verodesigner/total)
 ![GitHub Repo stars](https://img.shields.io/github/stars/blazethablunt/verodesigner)





Vero Designer is an automatic layout generator that converts electronic schematics into buildable stripboard and perfboard layouts.

Simply draw your schematic, click **Generate**, and Vero Designer will create a layout ready for your next project.

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

## Board Types

Vero Designer currently has 2 board types and 3 auto routers.

* **Compact (x)** - Creates a vero layout, best for smaller circuits. Width control only.
* **Compact (x+y)** - Creates a vero layout, best for bigger, more complex circuits. Width and height controls.
* **Perf (beta)** - Creates a perfboard layout. Width control only. This router is in beta mode and will be improved.

![image alt](https://i.ibb.co/xtX5CQT0/board-types.png)

---

## Editing the Generated Layout

The generated layout includes editing features, allowing you to fine-tune the result before building.

You can:

* Move any component
* Move links (jumpers)
* Move strip cuts
* Resize the board using the resize handle/s
* Delete links/cuts
* Change electrolytic capacitors size (select capacitor and scroll up or down using the mouse wheel)

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

* **Offboard** – Creates a connection point on the edge of the board.
* **Onboard** – Creates an internal label only.

Quick nets default to **Offboard**, while custom nets default to **Onboard**, but this can be changed at any time.

---

## Circuit Data & Vero Settings

Connection nets are automatically detected, grouped, and color-coded. They are displayed in the **Circuit Data** panel on the right side of the interface.

The **Vero Settings** section provides several useful options, including:

* **Maximum board columns**
* **Component opacity**
* **Update IDs** – Reassigns IDs to all schematic components (schematic page only)
* **Update Vero** – Applies schematic changes to the existing layout without generating a new layout
* **Regenerate layout** – Generates a completely new layout after major schematic changes
* **Auto describe** – Generates a description for the layout based on used components
* **Standing resistors** – Optional feature to save space, off by default

---

## Pinout editor

The pinout editor displays the pin configuration of all built-in transistor models
and lets you customize pin designations to support transistors not included in the built-in library.

![image alt](https://i.ibb.co/xtTz36Jd/pinout-editor.png)

---

## Layout dock

The layout dock appears on the layout pages only when the user mouse-hovers the lower part of the screen. 
The dock has 5 buttons:

* **Add text** - Adds text to the layout, with color and resize options.
* **Add image** - Adds image to the layout.
* **Add link** - Creates a new link on the board.
* **Add cut** - Creates a new cut on the board.
* **Delete** - Deletes selected items.

![image alt](https://i.ibb.co/PZs9wbLh/dock.png)

---

## Project Management

Projects can be saved and reopened later.

You can also:

* Give your circuit a name
* Add a project description
* Export PNG images from both the schematic editor and the generated layout
* Export BOM
* Import .kicad_sch files

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
* 2N2222
* 2N4401
* 2N5551
* BC337
* KSC1845

**BJT (PNP)**

* BC557
* 2N3906
* BC558
* BC559
* BC560
* BC327 
* 2N2907
* 2N4403
* 2N5401
* KSA992

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
* CD40106
* CD4066
* CD4051
* CD4046
* CD4017
* CD4093
* CD4052
* CD4053
* CD4040
* V2164 
* Daisy IC
* Generic IC

### Tubes

* 12AX7
* 12AU7
* 12AT7 **\*NEW\***
* 12AY7 **\*NEW\***
* E88CC **\*NEW\***
  
---

## Offline Use

Vero Designer has no external dependencies.

You can [Download](https://github.com/blazethablunt/VeroDesigner/releases/download/v1.5.0/Vero_Designer_1.5.0.html) the HTML file and run it completely offline in your web browser.

---

## What's New
### Version 1.5.0

* Added perfboards
* Added view modes
* Added tube models (12AT7, 12AY7, E88CC)
* Added voltage regulator types (78L09, 78L12, 78L15)
* Added the option to change electrolytic capactors size
* Added the option to move edge connections to the other side of the board
* Added pinout editor
* Added "export dual display" setting
* Added "Share" option (mobile only)
* Safari/macOS/iOS/iPadOS optimization
* Extended Generic IC to use 4 & 6 total pins
* Fixed "Update IDs"
