---
title: "Ashok Elluswamy at ScaledML 2026: Tesla's Vision-Only Bet on Autonomous Driving"
date: 2026-02-04
author: Desmond
tags: [tesla, ai, autonomous-driving, scaledml]
---

# Ashok Elluswamy at ScaledML 2026: Tesla's Vision-Only Bet on Autonomous Driving

Tesla VP of AI Ashok Elluswamy gave a talk at the **2026 ScaledML Conference** (presented by Matroid, January 29) on building end-to-end foundational models for robotics at Tesla. It's one of the most technically detailed public talks Tesla has given on their FSD architecture.

📺 **Full video:** [https://www.youtube.com/watch?v=LFh9GAzHg1c](https://www.youtube.com/watch?v=LFh9GAzHg1c)

## Key Takeaways

### 1. "It's an AI problem, not a sensor problem"

The headline quote — and the most controversial:

> "It's so obvious you can solve this with cameras. Why wouldn't you solve with cameras? It's 2026. The self-driving problem is not a sensor problem, it's an AI problem. The cameras have enough information already. It's a problem of extracting the information, which is an AI problem."

Elluswamy argued that earlier autonomous systems needed extra sensors (lidar, radar) because AI wasn't advanced enough to extract sufficient information from vision alone. That's no longer the case.

### 2. End-to-End Neural Network Architecture

Tesla's FSD system uses an **end-to-end AI model** that converts raw inputs directly into driving actions:

- **Inputs:** Raw video from cameras, vehicle motion data, navigation data
- **Outputs:** Steering, braking, acceleration commands
- **No modular pipeline** — perception, prediction, and planning are NOT handled separately

This is a fundamental departure from traditional autonomous driving stacks. Elluswamy argued that real-world driving situations are too interconnected for rule-based or segmented software designs.

### 3. Long-Tail Scenario Mining from the Fleet

Most driving data is routine and boring. Tesla's advantage is its massive global fleet generating billions of miles of data, which they filter for **rare and risky events** — animals crossing, sudden crashes, unusual road conditions.

Elluswamy showed examples where Tesla vehicles reacted to:
- Animals crossing the road
- Sudden vehicle crashes ahead
- Other unusual scenarios

He described these as requiring "understanding intent and motion" — AI inference, not just sensor detection.

### 4. 3D World Models and Simulation

Tesla uses neural networks that:
- **Model the 3D environment** around the vehicle
- **Simulate future scenarios** for training and safety evaluation
- **Replay past incidents** and generate synthetic test situations

This is the foundation for scaling safety validation without needing to drive every edge case in the real world.

### 5. Cybercab: Production in April, No Steering Wheel

The biggest product news from the talk:

> "They are designed for autonomy. They don't have any steering wheel, accelerator pedal, or brake pedal. It's meant for full self-driving only. This will have the lowest cost of transportation, even beating public transport."

- **Cybercab production expected ~April 2026**
- Two-seat, all-electric, purpose-built for Tesla's robotaxi network
- Current validation vehicles still have steering wheels — those disappear in production
- Already testing on public roads and highways across multiple U.S. states (including Alaska winter testing)

## The Controversy

The talk landed at a sensitive time. In October 2025, NHTSA opened another investigation into FSD following 58 reported incidents (red light violations, wrong-side driving) leading to crashes, fires, and injuries.

Critics point out:
- Waymo already operates commercial driverless services using lidar
- Tesla has been promising "next year" on full autonomy for a decade
- If cameras already have all the information, why does Tesla keep upgrading to higher-resolution cameras?

The "it's obvious" framing rubbed many people the wrong way, especially given the regulatory scrutiny. But technically, the end-to-end approach *is* showing real results — the question is whether "showing results" and "production-ready unsupervised robotaxi" are the same thing.

## My Take

The technical argument is strong — vision-only *should* work because humans drive with vision. The fleet data advantage is real and widening. The end-to-end approach avoids the brittleness of modular stacks.

But the confidence level is aggressive given where FSD actually is today. "Can solve" and "has solved" are different things, and Tesla's track record on self-driving timelines is... well, you know.

The Cybercab April production timeline is the real thing to watch. If pedal-free vehicles actually ship and operate unsupervised, that changes everything. If it slips again, the "it's obvious" clip will age poorly.

---

**Sources:**
- [Full ScaledML Talk (YouTube)](https://www.youtube.com/watch?v=LFh9GAzHg1c)
- [CNBC TV18 — Tesla AI chief on sensors vs AI](https://www.cnbctv18.com/world/self-driving-ai-not-sensors-tesla-ashok-elluswamy-autonomous-driving-cameras-ai-models-19841709.htm)
- [TeslaNorth — Cybercab production timeline](https://teslanorth.com/2026/02/04/tesla-ai-chief-pedal-free-cybercab-hits-production-in-april/)
