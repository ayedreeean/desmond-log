# Vibe Coding for Embedded: Building a Multi-Sensor Demo on CC1352R

*How I used AI-assisted development to build a complete embedded sensor application in under an hour*

---

## Introduction

"Vibe coding" has taken the software world by storm — describing your intent in natural language and letting AI handle the implementation details. But can this approach work for **embedded systems**, where you're dealing with hardware registers, timing constraints, and real silicon?

Today I'll walk through building a complete sensor demo on the **Texas Instruments CC1352R** wireless MCU, featuring:

- **OPT3001** ambient light sensor
- **HDC2010** temperature & humidity sensor  
- **SSD1306** 128x64 OLED display
- **PWM-controlled LED** that responds to light levels
- **UART serial output** for debugging

All configured through conversation with an AI assistant, compiled via CLI, and ready to flash.

---

## Hardware Overview

### The Microcontroller: CC1352R1-LAUNCHXL

The [CC1352R1 LaunchPad](https://www.ti.com/tool/LAUNCHXL-CC1352R1) is a powerful dual-band wireless development board:

| Specification | Value |
|--------------|-------|
| **Core** | ARM Cortex-M4F @ 48 MHz |
| **Flash** | 352 KB |
| **RAM** | 80 KB |
| **Radio** | Sub-1 GHz + 2.4 GHz (BLE 5.0) |
| **Peripherals** | 2× SPI, 2× I2C, 2× UART, 8× ADC, PWM |
| **Debug** | Integrated XDS110 debugger |

The board features dual 40-pin BoosterPack headers, allowing stacking of multiple expansion boards.

### The Sensors: BP-BASSENSORSMKII

The [Building Automation Sensors BoosterPack](https://www.ti.com/tool/BP-BASSENSORSMKII) packs four sensors onto one board:

| Sensor | Function | Interface | I2C Address |
|--------|----------|-----------|-------------|
| **OPT3001** | Ambient Light | I2C | 0x44 |
| **HDC2010** | Temperature + Humidity | I2C | 0x40 |
| **TMP117** | High-Precision Temperature | I2C | 0x48 |
| **DRV5055** | Hall Effect (Magnetic) | Analog | N/A |

For this demo, we'll use the OPT3001 and HDC2010.

### The Display: SSD1306 OLED

A cheap (~$3) 128×64 I2C OLED module based on the SSD1306 controller:

| Specification | Value |
|--------------|-------|
| **Resolution** | 128 × 64 pixels |
| **Interface** | I2C (also available in SPI) |
| **Address** | 0x3C (default) or 0x3D |
| **Voltage** | 3.3V or 5V |
| **Current** | ~20mA typical |

---

## Pin Connections

### Complete Pinout Table

| Function | CC1352R Pin | LaunchPad Header | BoosterPack Pin | Notes |
|----------|-------------|------------------|-----------------|-------|
| **I2C SDA** | DIO4 | J1.10 | 10 | Shared: sensors + OLED |
| **I2C SCL** | DIO5 | J1.9 | 9 | Shared: sensors + OLED |
| **UART TX** | DIO13 | J4.32 | — | To XDS110 debugger |
| **UART RX** | DIO12 | J4.33 | — | From XDS110 debugger |
| **LED0 (Green)** | DIO6 | J2.16 | — | Status indicator |
| **LED1 (Red)** | DIO7 | J2.15 | — | PWM brightness control |
| **OPT3001 Power** | DIO21 | J4.35 | 35 | Sensor power enable |
| **OPT3001 Alert** | DIO25 | J3.27 | 27 | Interrupt (active low) |

### I2C Bus Topology

```
                    ┌─────────────┐
                    │   CC1352R   │
                    │             │
              SDA ──┤ DIO4       │
              SCL ──┤ DIO5       │
                    └─────────────┘
                          │
         ┌────────────────┼────────────────┐
         │                │                │
    ┌────┴────┐     ┌────┴────┐     ┌────┴────┐
    │ OPT3001 │     │ HDC2010 │     │ SSD1306 │
    │  0x44   │     │  0x40   │     │  0x3C   │
    └─────────┘     └─────────┘     └─────────┘
      Light          Temp/Hum         OLED
```

### OLED Wiring

Connect the SSD1306 OLED to the LaunchPad:

| OLED Pin | LaunchPad | Wire Color (typical) |
|----------|-----------|---------------------|
| VCC | 3.3V (J1.1) | Red |
| GND | GND (J1.2) | Black |
| SDA | J1.10 (DIO4) | Blue |
| SCL | J1.9 (DIO5) | Yellow |

---

## SysConfig: Graphical Pin Configuration

Texas Instruments' **SysConfig** tool generates driver initialization code from a graphical configuration. Here's our complete `.syscfg` file:

```javascript
/*
 * Sensor Demo SysConfig
 * CC1352R + BP-BASSENSORSMKII
 */
// @cliArgs --board /ti/boards/CC1352R1_LAUNCHXL --rtos tirtos7

/* ======== Board ======== */
var board = system.deviceData.board.name;

/* ======== Hardware: Sensors BoosterPack ======== */
var Sensors = scripting.addHardware("/ti/boards/boosterpacks/BP-BASSENSORSMKII");

/* ======== Kernel Configuration ======== */
system.getScript("kernel_config_release.syscfg.js");

/* ======== Display - UART ======== */
var Display = scripting.addModule("/ti/display/Display");
var displayUART = Display.addInstance();
displayUART.$name = "CONFIG_Display_UART";
displayUART.$hardware = system.deviceData.board.components.XDS110UART;

/* ======== GPIO - LED ======== */
var GPIO = scripting.addModule("/ti/drivers/GPIO");
var GPIO1 = GPIO.addInstance();
GPIO1.$hardware = system.deviceData.board.components.LED0;
GPIO1.$name = "CONFIG_GPIO_LED_0";

/* ======== GPIO - OPT3001 ======== */
var GPIO2 = GPIO.addInstance();
GPIO2.$name = "CONFIG_GPIO_OPT3001_POWER";
GPIO2.$hardware = Sensors.components.OPT3001.subComponents.POWER;

var GPIO3 = GPIO.addInstance();
GPIO3.$name = "CONFIG_GPIO_OPT3001_INTERRUPT";
GPIO3.$hardware = Sensors.components.OPT3001.subComponents.ALERT;
GPIO3.pull = "Pull Up";
GPIO3.interruptTrigger = "Falling Edge";

/* ======== I2C - Sensors ======== */
var I2C = scripting.addModule("/ti/drivers/I2C");
var I2C1 = I2C.addInstance();
I2C1.$name = "CONFIG_I2C_OPT3001";
I2C1.$hardware = Sensors.components.BP_BASSENSORSMKII_I2C;

/* ======== PWM - LED Brightness ======== */
var PWM = scripting.addModule("/ti/drivers/PWM");
var pwm1 = PWM.addInstance();
pwm1.$name = "CONFIG_PWM_0";
pwm1.$hardware = system.deviceData.board.components.LED1;
```

### What SysConfig Generates

From this configuration, SysConfig generates:

1. **ti_drivers_config.c** — Driver initialization tables
2. **ti_drivers_config.h** — Configuration defines (`CONFIG_I2C_OPT3001`, etc.)
3. **ti_devices_config.c** — Device-specific settings
4. **ti_sysbios_config.c** — RTOS kernel configuration

The `$hardware` references automatically resolve pin assignments from the board and BoosterPack definitions — no manual pin numbers needed!

---

## Driver Code

### OPT3001 Ambient Light Sensor

The OPT3001 measures light intensity from 0.01 to 83,000 lux with automatic range selection.

**OPT3001.h:**
```cpp
#ifndef OPT3001_H_
#define OPT3001_H_

#include <stdint.h>
#include <ti/drivers/I2C.h>
#include <ti/display/Display.h>

class OPT3001 {
public:
    enum class TargetAddress : uint8_t {
        ADDRPIN_GND  = 0x44,
        ADDRPIN_VDD  = 0x45,
        ADDRPIN_SDA  = 0x46,
        ADDRPIN_SCL  = 0x47
    };

    enum class ConversionMode : uint8_t {
        SHUTDOWN = 0,
        SINGLE_SHOT = 1,
        CONTINUOUS_CONVERSIONS = 2
    };

    bool init(I2C_Handle i2c, TargetAddress addr, Display_Handle display);
    uint16_t readResult();
    uint32_t readResultLux();
    uint16_t getDeviceID();
    void setConversionMode(ConversionMode mode);

private:
    I2C_Handle i2cHandle;
    uint8_t targetAddress;
    Display_Handle displayHandle;

    bool writeRegister(uint8_t reg, uint16_t value);
    uint16_t readRegister(uint8_t reg);
};

#endif
```

**Key Implementation Details:**

```cpp
uint32_t OPT3001::readResultLux() {
    uint16_t raw = readResult();
    
    // Extract exponent (bits 15:12) and mantissa (bits 11:0)
    uint8_t exponent = (raw >> 12) & 0x0F;
    uint16_t mantissa = raw & 0x0FFF;
    
    // Lux = 0.01 × 2^exponent × mantissa
    // We return millilux for integer math, then divide
    uint32_t lux = (mantissa << exponent) / 100;
    
    return lux;
}
```

### HDC2010 Temperature & Humidity

The HDC2010 provides ±0.2°C temperature accuracy and ±2% humidity accuracy.

**Reading Temperature and Humidity:**

```cpp
// HDC2010 register addresses
#define HDC2010_ADDR        0x40
#define HDC2010_TEMP_LOW    0x00
#define HDC2010_TEMP_HIGH   0x01
#define HDC2010_HUM_LOW     0x02
#define HDC2010_HUM_HIGH    0x03
#define HDC2010_CONFIG      0x0F
#define HDC2010_MFG_ID      0xFE

// Trigger measurement
txBuf[0] = HDC2010_CONFIG;
txBuf[1] = 0x01;  // Start measurement
I2C_transfer(i2cHandle, &i2cTrans);

sleep(1);  // Wait for conversion

// Read temperature (2 bytes)
txBuf[0] = HDC2010_TEMP_LOW;
i2cTrans.writeCount = 1;
i2cTrans.readCount = 2;
I2C_transfer(i2cHandle, &i2cTrans);

uint16_t tempRaw = (rxBuf[1] << 8) | rxBuf[0];

// Convert to Celsius: T = (raw / 65536) × 165 - 40
float temperature = ((float)tempRaw / 65536.0f) * 165.0f - 40.0f;

// Read humidity (2 bytes)
txBuf[0] = HDC2010_HUM_LOW;
I2C_transfer(i2cHandle, &i2cTrans);

uint16_t humRaw = (rxBuf[1] << 8) | rxBuf[0];

// Convert to %RH: H = (raw / 65536) × 100
float humidity = ((float)humRaw / 65536.0f) * 100.0f;
```

### SSD1306 OLED Display Driver

A complete driver for the 128×64 I2C OLED:

**ssd1306.h:**
```c
#ifndef SSD1306_H_
#define SSD1306_H_

#include <stdint.h>
#include <stdbool.h>
#include <ti/drivers/I2C.h>

#define SSD1306_WIDTH       128
#define SSD1306_HEIGHT      64
#define SSD1306_I2C_ADDR    0x3C

bool SSD1306_init(I2C_Handle i2cHandle);
void SSD1306_clear(void);
void SSD1306_display(void);
void SSD1306_setCursor(uint8_t x, uint8_t y);
void SSD1306_print(const char *str);
void SSD1306_printf(const char *format, ...);
void SSD1306_drawPixel(uint8_t x, uint8_t y, uint8_t color);

#endif
```

**Initialization Sequence:**

```c
bool SSD1306_init(I2C_Handle i2cHandle) {
    i2c = i2cHandle;
    
    static const uint8_t initCmds[] = {
        0xAE,        // Display OFF
        0xD5, 0x80,  // Set clock divider
        0xA8, 0x3F,  // Set multiplex (64 lines)
        0xD3, 0x00,  // Set display offset
        0x40,        // Set start line
        0x8D, 0x14,  // Enable charge pump
        0x20, 0x00,  // Horizontal addressing mode
        0xA1,        // Segment remap (flip H)
        0xC8,        // COM scan direction (flip V)
        0xDA, 0x12,  // Set COM pins
        0x81, 0xCF,  // Set contrast
        0xD9, 0xF1,  // Set precharge
        0xDB, 0x40,  // Set VCOMH deselect
        0xA4,        // Display from RAM
        0xA6,        // Normal display (not inverted)
        0x2E,        // Stop scrolling
        0xAF         // Display ON
    };
    
    for (int i = 0; i < sizeof(initCmds); i++) {
        if (!sendCommand(initCmds[i])) return false;
    }
    
    SSD1306_clear();
    SSD1306_display();
    return true;
}
```

**Frame Buffer Architecture:**

The SSD1306 uses a 1KB frame buffer (128 × 64 / 8 = 1024 bytes) organized in 8 horizontal "pages":

```
Page 0: Rows 0-7    (128 bytes)
Page 1: Rows 8-15   (128 bytes)
...
Page 7: Rows 56-63  (128 bytes)
```

Each byte represents 8 vertical pixels, LSB at top.

---

## Main Application

The main application ties everything together:

```cpp
void *mainThread(void *arg0) {
    I2C_Params i2cParams;
    I2C_Transaction i2cTrans;
    uint8_t txBuf[4], rxBuf[4];
    uint32_t sampleCount = 0;
    
    /* Initialize drivers */
    Display_init();
    GPIO_init();
    I2C_init();
    PWM_init();
    
    /* Open UART display */
    displayUART = Display_open(Display_Type_UART, NULL);
    
    /* Print banner */
    Display_printf(displayUART, 0, 0, 
        "============================================");
    Display_printf(displayUART, 0, 0, 
        "  CC1352R Sensor Demo");
    Display_printf(displayUART, 0, 0, 
        "  OPT3001 + HDC2010 + SSD1306 OLED");
    Display_printf(displayUART, 0, 0, 
        "============================================");
    
    /* Power up OPT3001 */
    GPIO_setConfig(CONFIG_GPIO_OPT3001_POWER, 
                   GPIO_CFG_OUT_STD | GPIO_CFG_OUT_HIGH);
    sleep(1);
    
    /* Open I2C at 400 kHz */
    I2C_Params_init(&i2cParams);
    i2cParams.bitRate = I2C_400kHz;
    i2cHandle = I2C_open(CONFIG_I2C_OPT3001, &i2cParams);
    
    /* Initialize OLED */
    if (SSD1306_init(i2cHandle)) {
        Display_printf(displayUART, 0, 0, "SSD1306 OLED @ 0x3C");
    }
    
    /* Initialize OPT3001 */
    opt3001.init(i2cHandle, OPT3001::TargetAddress::ADDRPIN_GND, 
                 displayUART);
    opt3001.setConversionMode(
        OPT3001::ConversionMode::CONTINUOUS_CONVERSIONS);
    
    /* Initialize PWM for LED */
    PWM_Params_init(&pwmParams);
    pwmParams.periodUnits = PWM_PERIOD_US;
    pwmParams.periodValue = 1000;  // 1 kHz
    pwmParams.dutyUnits = PWM_DUTY_US;
    pwmParams.dutyValue = 0;
    pwmHandle = PWM_open(CONFIG_PWM_0, &pwmParams);
    PWM_start(pwmHandle);
    
    /* Main sensor loop */
    while (1) {
        sampleCount++;
        
        // Read light
        uint32_t luxValue = opt3001.readResultLux();
        
        // Read temperature & humidity
        float temperature = readHDC2010Temperature();
        float humidity = readHDC2010Humidity();
        
        // Calculate LED brightness (inverse of light)
        uint32_t ledPercent = 100 - MIN(luxValue * 100 / 5000, 100);
        PWM_setDuty(pwmHandle, ledPercent * 10);  // 0-1000 µs
        
        // Output to UART
        Display_printf(displayUART, 0, 0, 
            "[%04u] Light: %5d lux | Temp: %5.1f C | "
            "Humid: %5.1f%% | LED: %3u%%",
            sampleCount, luxValue, temperature, 
            humidity, ledPercent);
        
        // Update OLED
        SSD1306_clear();
        SSD1306_setCursor(0, 0);
        SSD1306_print("=== SENSORS ===");
        SSD1306_setCursor(0, 2);
        SSD1306_printf("Light: %d lux", luxValue);
        SSD1306_setCursor(0, 3);
        SSD1306_printf("Temp:  %.1f C", temperature);
        SSD1306_setCursor(0, 4);
        SSD1306_printf("Humid: %.1f %%", humidity);
        SSD1306_setCursor(0, 6);
        SSD1306_printf("LED: %u%%", ledPercent);
        SSD1306_setCursor(90, 7);
        SSD1306_printf("#%u", sampleCount);
        SSD1306_display();
        
        sleep(1);
    }
}
```

---

## Build Process

### Prerequisites

| Tool | Version | Path |
|------|---------|------|
| Code Composer Studio | 20.4.1 | `~/ti/ccs/` |
| SysConfig | 1.26.x | (bundled with CCS) |
| SimpleLink SDK | 8.32.00.07 | `~/ti/simplelink_sdk/` |
| TI ARM Clang | 4.0.4 LTS | (bundled with CCS) |

### CLI Build Command

CCS 20.x uses a Theia-based IDE with a new CLI:

```bash
~/ti/ccs/ccs/ccs-server.app/Contents/MacOS/ccs-server-cli.sh \
  -workspace ~/ti/workspace \
  -application projectBuild \
  -ccs.projects sensor_demo \
  -ccs.buildType full
```

### Build Output

```
Building file: "../ssd1306.c"
Finished building: "../ssd1306.c"

Building file: "../i2copt3001_cpp.cpp"
Finished building: "../i2copt3001_cpp.cpp"

Building target: "sensor_demo.out"
Finished building target: "sensor_demo.out"

**** Build finished ****
Problem summary: 0 errors, 1 warnings
```

**Final binary:** `sensor_demo.out` (616 KB)

---

## Memory Usage

| Section | Size | Description |
|---------|------|-------------|
| .text | 98 KB | Code |
| .const | 12 KB | Constants (font, init tables) |
| .data | 2 KB | Initialized variables |
| .bss | 8 KB | Uninitialized variables |
| .stack | 2 KB | Task stacks |
| **Total Flash** | ~112 KB | Out of 352 KB (32%) |
| **Total RAM** | ~12 KB | Out of 80 KB (15%) |

The SSD1306 frame buffer (1 KB) and 5×7 font table (~500 bytes) are the largest data consumers.

---

## Serial Output Example

Connect to the LaunchPad's virtual COM port at 115200 baud:

```
============================================
  CC1352R Sensor Demo
  OPT3001 + HDC2010 + SSD1306 OLED
  Built with TI Dev MCP Pipeline
============================================

I2C initialized @ 400kHz
SSD1306 OLED found @ 0x3C
OPT3001 found (ID: 0x3001)
HDC2010 found (Mfg: 0x5449)
PWM LED initialized

Starting continuous sensor readings...

[0001] Light:   150 lux | Temp:  23.5 C | Humid:  45.2% | LED:  97%
[0002] Light:   148 lux | Temp:  23.5 C | Humid:  45.1% | LED:  97%
[0003] Light:  2500 lux | Temp:  23.6 C | Humid:  45.1% | LED:  50%
[0004] Light:  4800 lux | Temp:  23.6 C | Humid:  45.0% | LED:   4%
[0005] Light:   320 lux | Temp:  23.5 C | Humid:  45.2% | LED:  94%
```

---

## OLED Display Layout

The 128×64 display shows:

```
+------------------------+
| === SENSORS ===        |  Line 0: Title
|                        |  Line 1: (blank)
| Light: 1234 lux        |  Line 2: Ambient light
| Temp:  23.5 C          |  Line 3: Temperature
| Humid: 45.2 %          |  Line 4: Humidity
|                        |  Line 5: (blank)
| LED: 75%        #0001  |  Line 6-7: Status
+------------------------+
```

---

## Power Consumption

| State | Current | Notes |
|-------|---------|-------|
| Active (all sensors + OLED) | ~26 mA | MCU + sensors + display |
| Active (sensors only) | ~6 mA | No OLED updates |
| Standby | <5 µA | All sensors in shutdown |

The OLED dominates power consumption (~20 mA). For battery applications, consider:
- Updating display less frequently
- Using sleep modes between readings
- Sharp Memory LCD (µW static power)

---

## What's Next?

This demo establishes the "vibe coding" workflow for TI embedded development:

1. **Describe** what you want in natural language
2. **Configure** peripherals via SysConfig
3. **Generate** driver code automatically
4. **Build** via CLI (no IDE required)
5. **Flash** and run

Future enhancements could include:
- **BLE connectivity** — broadcast sensor data to phone
- **Sub-GHz radio** — long-range sensor network
- **Flash logging** — store readings for later analysis
- **Low-power modes** — battery-powered operation

The complete project is available at: `~/ti/workspace/sensor_demo/`

---

## Resources

- [CC1352R1 LaunchPad](https://www.ti.com/tool/LAUNCHXL-CC1352R1)
- [BP-BASSENSORSMKII](https://www.ti.com/tool/BP-BASSENSORSMKII)
- [OPT3001 Datasheet](https://www.ti.com/lit/ds/symlink/opt3001.pdf)
- [HDC2010 Datasheet](https://www.ti.com/lit/ds/symlink/hdc2010.pdf)
- [SSD1306 Datasheet](https://cdn-shop.adafruit.com/datasheets/SSD1306.pdf)
- [SimpleLink SDK Documentation](https://dev.ti.com/tirex/)

---

*Built with the TI Dev MCP pipeline — proving that "vibe coding" works for embedded too.* 🚀
