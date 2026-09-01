---
title: "BLADE Odyssey · ToastySat Thermal Control Concept"
order: 3
category: "BalloonSat · Thermal Systems"
year: "2025 - 2026"
summary: "Evaluated three heater options against a 9.25 W / 37.185 Wh payload power constraint and developed thermostat logic for a four-hour high-altitude balloon mission."
role: "Communications & Thermals Engineer"
duration: "August 2025 - May 2026"
tools: ["Trade Studies", "Thermostat Control", "Power Budgeting"]
image: "/assets/images/blade-mission-timeline.png"
image_position: "center"
hero_image: "/assets/images/blade-mission-timeline.png"
hero_position: "center"
hero_alt: "ToastySat high-altitude balloon mission timeline showing ascent to approximately 100,000 feet and a roughly four-hour mission duration."
---

## Objective

Develop a battery-heating concept for ToastySat, a 1U high-altitude balloon
payload intended to compare thermal-coating behavior during an approximately
four-hour mission reaching roughly 100,000 ft. The work focused on heater
selection, power compatibility, and control logic under an established payload
power budget.

## My role and scope

I researched heater options, developed the heating-pad trade matrix, sized the
selected pads against the available power, and wrote the thermostat-control
pseudocode concept. I did **not** implement the flight software, fabricate the
payload, or perform system verification testing. The material below documents
a proposed design decision, not flight-validated hardware.

<div class="project-data-table-wrap project-figure--wide">
  <table class="project-data-table">
    <thead><tr><th>Constraint</th><th>Design value</th><th>Engineering purpose</th></tr></thead>
    <tbody>
      <tr><th>Mission duration</th><td>Approximately 4 hours</td><td>Sets total energy and heater-runtime limits</td></tr>
      <tr><th>Battery</th><td>9.25 W · 37.185 Wh</td><td>Upper system power and energy envelope</td></tr>
      <tr><th>Selected heater concept</th><td>Two pads · 4.2 V · 3 W each</td><td>Approximately 0.71 A per pad</td></tr>
      <tr><th>Heater ON threshold</th><td>Below 0°C</td><td>Protect battery from low temperature</td></tr>
      <tr><th>Heater OFF threshold</th><td>Above 10°C</td><td>Adds hysteresis and limits cycling</td></tr>
      <tr><th>Runtime failsafe</th><td>30% of flight · 1.2 hours maximum</td><td>Caps heater energy use</td></tr>
    </tbody>
  </table>
</div>

## Heater selection

The weighted trade study compared three candidates across cost, power, bus
voltage, and size. The JLC PCB custom heating-pad concept received the highest
weighted score, 35, compared with 33 and 23 for the alternatives.

<figure class="project-figure project-figure--wide">
  <a href="{{ '/assets/images/blade-heater-trade-matrix.png' | relative_url }}">
    <img src="{{ '/assets/images/blade-heater-trade-matrix.png' | relative_url }}" alt="Heating pad trade matrix comparing three candidates across cost, power, bus voltage, and size, with weighted totals of 35, 33, and 23.">
  </a>
  <figcaption>Heating-pad trade matrix. The selected concept achieved the highest weighted score under the stated criteria.</figcaption>
</figure>

## Power-budget check

The budget allocated two 3 W heaters at 4.2 V, approximately 0.7 A each. The
earlier budget slide modeled a 50% heater duty cycle, corresponding to 12 Wh
over four hours. The later thermostat concept imposed a stricter 30%-of-flight
failsafe: 1.2 hours maximum, or 7.2 Wh for both pads. This distinction is
important because the budget assumption and the control limit represent
different stages of the design.

<figure class="project-figure project-figure--wide">
  <a href="{{ '/assets/images/blade-power-budget.png' | relative_url }}">
    <img src="{{ '/assets/images/blade-power-budget.png' | relative_url }}" alt="ToastySat payload power-budget table listing sensors, two heating pads, data storage, real-time clock, battery capacity, and estimated energy use.">
  </a>
  <figcaption>Payload power budget. The heater row uses the earlier 50% duty-cycle assumption; the control concept later adds a 30% hard runtime limit.</figcaption>
</figure>

## Thermostat-control concept

The proposed loop turns the pads on below 0°C and off above 10°C. The 10°C
band provides hysteresis so the controller does not rapidly switch near a
single threshold. A real-time-clock-based accumulator would disable heating
after 30% of the expected mission duration.

<figure class="project-figure project-figure--wide">
  <a href="{{ '/assets/images/blade-thermostat-loop.png' | relative_url }}">
    <img src="{{ '/assets/images/blade-thermostat-loop.png' | relative_url }}" alt="Thermostat-loop concept showing heater activation below zero degrees Celsius, deactivation above ten degrees Celsius, and a thirty-percent flight-duration failsafe.">
  </a>
  <figcaption>Thermostat-control concept and proposed runtime failsafe. This was pseudocode-level logic, not implemented flight software.</figcaption>
</figure>

## Mission context

The timeline planned heating during ascent, pad-use regulation after the
payload passed approximately 50,000 ft, balloon burst near 100,000 ft around
120 minutes, and continued regulation during descent before recovery.

<figure class="project-figure project-figure--wide">
  <a href="{{ '/assets/images/blade-mission-timeline.png' | relative_url }}">
    <img src="{{ '/assets/images/blade-mission-timeline.png' | relative_url }}" alt="ToastySat mission overview from pre-launch through ascent, balloon burst near 100,000 feet, descent, recovery, and post-flight data analysis.">
  </a>
  <figcaption>Planned ToastySat high-altitude balloon mission sequence and approximately four-hour operating context.</figcaption>
</figure>

## What remains unverified

The concept still requires implementation, sensor and heater integration,
thermal testing, endurance testing, and system-level verification. No claim is
made here that the loop was coded for flight or that the proposed thermal
performance was validated.
