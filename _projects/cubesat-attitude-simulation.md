---
title: "CubeSat Attitude Simulation"
order: 3
category: "GNC · Software"
year: "2025"
summary: "A six-degree-of-freedom simulation used to size reaction wheels and evaluate detumbling logic."
role: "Simulation & controls"
duration: "8 weeks"
tools: ["Python", "NumPy", "SciPy", "Git"]
---

## Mission context

The model explored whether a candidate actuator set could detumble a 3U CubeSat and meet a representative pointing requirement.

## Method

The simulation propagated quaternion attitude and body rates, included gravity-gradient and magnetic disturbance torques, and exposed actuator saturation. Unit tests covered quaternion normalization, coordinate transforms, and conservation behavior in simplified cases.

## What I learned

The first controller met settling-time targets only when actuator limits were omitted. Modeling saturation early changed the sizing recommendation and made the final result credible.

