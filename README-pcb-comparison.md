# AI PCB Design Tool Comparison - Research Notes

**Date:** February 25, 2026 (DesignCon week)  
**Status:** Blog post complete, screenshots captured

## Deliverables

1. **Blog Post:** `ai-pcb-design-tools-quilter-vs-jitx.md`
   - Executive summary with comparison table
   - Detailed hands-on findings for both tools
   - TI relevance analysis
   - Use case recommendations

2. **Screenshots:** `screenshots/`
   - `quilter-dashboard.png` - Quilter main interface
   - `quilter-upload-wizard.png` - Upload workflow
   - `jitx-homepage.jpg` - JITX marketing page
   - `jitx-plans.png` - Pricing tiers
   - `jitx-signup-form.png` - Account creation (shows OSS requirements)
   - `jitx-email-confirm.png` - Email verification step

3. **Test Project:** `/Users/adrianai/.openclaw/workspace/pcb-test/kicad-blinky/`
   - KiCAD 8 format (modern .kicad_sch, .kicad_pcb)
   - 555 timer LED blinky circuit
   - Ready for Quilter upload testing

## Key Findings

### Quilter
- **Access:** Self-serve via app.quilter.ai
- **Approach:** Upload existing CAD files → AI generates layout candidates
- **Free tier:** Appears accessible without restrictions
- **Best for:** Accelerating existing PCB workflow

### JITX
- **Access:** Requires account creation + email verification
- **Approach:** Write code in Stanza language → generates schematics and PCBs
- **Free tier:** ⚠️ ONLY for open-source designs (CERN OHL-Permissive v2)
- **Best for:** Building design automation infrastructure
- **DesignCon:** Booth 1464 (Feb 25-26)

### Critical Difference
Quilter and JITX solve different problems:
- Quilter = "Make my existing designs faster"
- JITX = "Generate designs from requirements"

## Further Testing Needed

1. **Quilter:** Complete file upload and run through full workflow
2. **JITX:** Verify email and explore VS Code integration
3. **Output comparison:** Same design through both tools
4. **TI-specific:** Test with actual TI MSP430 reference design

## Related Files

- Test KiCAD projects: `/Users/adrianai/.openclaw/workspace/pcb-test/`
- Quilter docs: https://docs.quilter.ai
- JITX cookbook: https://github.com/JITx-Inc/jitx-cookbook
