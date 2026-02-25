---
title: "Testing Quilter AI: Physics-Driven PCB Auto-Layout"
date: "2026-02-25T15:00:00Z"
tags: [pcb-design, ai-tools, eda, quilter, designcon-2026]
excerpt: "Hands-on test of Quilter.ai with TI's MSP430 LaunchPad design files. Key finding: Quilter is built for the schematic-to-layout phase—it needs unplaced designs, not finished boards. Successfully parsed Altium files and extracted design metrics."
---

# Testing Quilter AI: Physics-Driven PCB Auto-Layout

## What is Quilter?

[Quilter.ai](https://quilter.ai) is a Y Combinator-backed startup (W24) building physics-driven AI for automated PCB layout. Their core promise: upload your schematic and board files, and Quilter's AI will generate multiple placed-and-routed layout candidates for you to choose from.

With AI rapidly transforming chip and board design, I wanted to put Quilter through its paces using real TI hardware design files.

## The Test Design

For this evaluation, I used **Texas Instruments' MSP-EXP430G2ET LaunchPad** development kit—a production-grade 4-layer board featuring:

- **MSP430G2553** microcontroller (16MHz, 16KB Flash)
- **eZ-FET** on-board debugger with EnergyTrace™ technology
- DC-DC power supply section
- USB connectivity
- 201 total components, 526 pins

I downloaded the official Altium design files from TI's website (~8.5MB total, including schematics, PCB layout, and project files).

## Onboarding & Account Setup

Creating a Quilter account was straightforward:
- Email verification via magic link
- Quick onboarding survey (experience level, preferred ECAD tool)
- **Free tier** available for personal/academic use (<10 employees, <$50K revenue)
- Note: Free tier allows data to be used for model training

## File Upload & Parsing

Quilter supports:
- **Altium** (.prjpcb, .pcbdoc, .schdoc)
- **KiCAD** (.kicad_pro, .kicad_pcb, .kicad_sch)
- **IPC-2581** (.xml, .qlt, .brd)

I uploaded all 7 Altium files:
- 1 project file (.PrjPcb)
- 1 board file (.PcbDoc) 
- 5 schematic sheets (.SchDoc)

![Quilter file parsing](../media/quilter-upload.png)
*Files uploading to Quilter with automatic format detection*

The upload and parsing completed in about 2 minutes. Quilter correctly identified:
- All 7 files as Altium format
- File types (Project, Board, Schematic)
- Parsed status for each file

## Design Analysis Results

After parsing, Quilter extracted key design metrics:

| Metric | Value |
|--------|-------|
| Board Dimensions | 5.84cm × 7.87cm |
| Total Components | 201 |
| Components to Place | **0** |
| Total Pins | 526 |
| Pins to Route | 106 |
| Pin Density | 15.37% |

![Design analysis with error](../media/quilter-analysis.png)
*Quilter's analysis showing the board preview and extracted statistics*

## The Key Finding

Here's where things got interesting. Quilter flagged an error:

> **Error:** Board already placed and routed: If you'd like Quilter to redesign this board, please un-place the components.

**The TI LaunchPad files are a finished production design.** All 201 components are already placed, and all traces are already routed. The "Components to Place: 0" confirms this.

**This reveals Quilter's true value proposition:** It's designed for the *schematic-to-layout* phase of PCB development—when you have your netlist but haven't yet placed components or routed traces. It's not meant for re-routing existing boards.

## What Quilter Needs to Work

For Quilter to generate layout candidates, you need to provide:

1. **Schematic files** with your complete netlist
2. **Board outline** (the PCB shape and stackup)
3. **Unplaced components** positioned outside the board area
4. Optional: **Pre-placed** components for connectors, mounting holes, or critical parts you want in specific locations

Quilter's AI then:
- Explores millions of placement possibilities
- Routes all connections
- Generates multiple candidates (varying cost vs. performance)
- Lets you download your preferred layout

## Pricing

| Tier | Price | Best For |
|------|-------|----------|
| Free | $0 | Students, hobbyists, evaluating |
| Prototype | $749/run | Occasional designs |
| Professional | Custom | Regular PCB work |

The free tier is genuinely useful for learning and small projects.

## Verdict

**Quilter successfully:**
- ✅ Accepted and parsed Altium files
- ✅ Analyzed the design topology
- ✅ Extracted accurate board statistics
- ✅ Rendered a 3D board preview
- ✅ Correctly identified the design was already complete

**What I couldn't test:**
- ❌ Actual AI layout generation (requires unplaced design)
- ❌ Multi-candidate comparison
- ❌ Download/export flow

**For a proper test,** I'd need either:
- Early-stage design files (schematic + empty board)
- Or to modify the TI files in Altium to un-place components

## Bottom Line

Quilter is solving a real problem—PCB layout is time-consuming and expertise-dependent. The physics-driven approach (vs. pure pattern matching) suggests they're thinking about signal integrity and manufacturing constraints, not just "make it fit."

If you're starting a new board design and want to explore the AI-assisted workflow, Quilter is worth trying. Just make sure you're at the right stage—schematic done, layout not started.

**Next steps:** I'll try to find or create an unplaced KiCAD project to properly exercise Quilter's AI layout generation.

---

*Tested at DesignCon 2026. Account: adrianassistant@fastmail.com*
