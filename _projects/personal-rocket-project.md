---
title: "Baseline vs. Altitude-Optimized High-Power Rocket Experiment"
order: 1
category: "Rocketry · Design & Test"
year: "2026"
summary: "I designed a controlled baseline-versus-optimized experiment predicted to improve apogee from 3,089 ft to 4,523 ft, then converted vehicle loss into new tracking and recovery requirements."
role: "Concept, manufacturing, recovery, retention & integration"
duration: "May 2026 - Present"
tools: ["SolidWorks", "OpenRocket", "PrusaSlicer"]
image: "/assets/images/hpr-crow-eagle-comparison.png"
image_position: "right center"
image_fit: "contain"
hero_image: "/assets/images/hpr-crow-eagle-comparison.png"
hero_position: "right center"
hero_fit: "contain"
hero_alt: "Crow, the original white baseline rocket, standing beside Eagle, the blue altitude-optimized rocket."
---

## Objective

Build and compare a baseline rocket, Crow, against an altitude-optimized rocket,
Eagle, while holding body-tube diameter and motor family constant. OpenRocket
predicted 3,089 ft for Crow and 4,523 ft for Eagle - approximately 46% higher
despite Eagle's greater loaded mass.

## OpenRocket comparison

The plots below use a common **2 m/s wind condition**. Crow uses the H219T with
a 10-second delay; Eagle uses the H219T with a 14-second delay. This keeps the
motor family controlled while matching the delay to each vehicle's predicted
time to apogee.

<div class="project-data-table-wrap project-figure--wide">
  <table class="project-data-table">
    <thead><tr><th>Metric</th><th>Crow · baseline</th><th>Eagle · optimized</th></tr></thead>
    <tbody>
      <tr><th>Flight configuration</th><td>H219T-10</td><td>H219T-14</td></tr>
      <tr><th>Wind condition</th><td>2 m/s</td><td>2 m/s</td></tr>
      <tr><th>Predicted apogee shown</th><td>3,095 ft</td><td>4,523 ft</td></tr>
      <tr><th>Loaded mass</th><td>844 g</td><td>941 g</td></tr>
      <tr><th>Length</th><td>29.45 in</td><td>31.66 in</td></tr>
      <tr><th>Initial static margin</th><td>1.75 cal</td><td>1.13 cal</td></tr>
      <tr><th>Maximum velocity</th><td>821 ft/s · Mach 0.737</td><td>797 ft/s · Mach 0.715</td></tr>
      <tr><th>Maximum acceleration</th><td>347 m/s²</td><td>310 m/s²</td></tr>
    </tbody>
  </table>
</div>

> The displayed 2 m/s Crow run predicts 3,095 ft, while the résumé-level final
> configuration record lists 3,089 ft. The six-foot variation does not change
> the engineering conclusion: Eagle is predicted to gain approximately 46%
> more apogee despite greater mass and slightly lower peak velocity.

### Vehicle configuration

<div class="data-gallery data-gallery--stack">
  <figure>
    <a href="{{ '/assets/images/hpr-crow-openrocket-configuration.png' | relative_url }}">
      <img src="{{ '/assets/images/hpr-crow-openrocket-configuration.png' | relative_url }}" alt="OpenRocket side view of Crow showing its four-fin baseline geometry, 844 gram loaded mass, 1.75 caliber stability, and H219T-10 simulation results.">
    </a>
    <figcaption>Crow baseline configuration · H219T-10 · 3,095 ft predicted apogee.</figcaption>
  </figure>
  <figure>
    <a href="{{ '/assets/images/hpr-eagle-openrocket-configuration.png' | relative_url }}">
      <img src="{{ '/assets/images/hpr-eagle-openrocket-configuration.png' | relative_url }}" alt="OpenRocket side view of Eagle showing its three-fin optimized geometry, boattail, 941 gram loaded mass, 1.13 caliber stability, and H219T-14 simulation results.">
    </a>
    <figcaption>Eagle optimized configuration · H219T-14 · 4,523 ft predicted apogee.</figcaption>
  </figure>
</div>

### Simulated motion and stability

<div class="data-gallery">
  <figure>
    <a href="{{ '/assets/images/hpr-crow-vertical-motion-2ms.png' | relative_url }}">
      <img src="{{ '/assets/images/hpr-crow-vertical-motion-2ms.png' | relative_url }}" alt="Crow OpenRocket plot of altitude, vertical velocity, and vertical acceleration versus time under the 2 meter per second wind condition.">
    </a>
    <figcaption>Crow · vertical motion versus time · 2 m/s.</figcaption>
  </figure>
  <figure>
    <a href="{{ '/assets/images/hpr-eagle-vertical-motion-2ms.png' | relative_url }}">
      <img src="{{ '/assets/images/hpr-eagle-vertical-motion-2ms.png' | relative_url }}" alt="Eagle OpenRocket plot of altitude, vertical velocity, and vertical acceleration versus time under the 2 meter per second wind condition.">
    </a>
    <figcaption>Eagle · vertical motion versus time · 2 m/s.</figcaption>
  </figure>
  <figure>
    <a href="{{ '/assets/images/hpr-crow-stability-2ms.png' | relative_url }}">
      <img src="{{ '/assets/images/hpr-crow-stability-2ms.png' | relative_url }}" alt="Crow OpenRocket plot of stability margin, center of pressure, and center of gravity versus time.">
    </a>
    <figcaption>Crow · stability margin through deployment.</figcaption>
  </figure>
  <figure>
    <a href="{{ '/assets/images/hpr-eagle-stability-2ms.png' | relative_url }}">
      <img src="{{ '/assets/images/hpr-eagle-stability-2ms.png' | relative_url }}" alt="Eagle OpenRocket plot of stability margin, center of pressure, and center of gravity versus time.">
    </a>
    <figcaption>Eagle · stability margin through deployment.</figcaption>
  </figure>
</div>

## My role

I developed the original project concept and contributed material selection,
manufacturing, assembly, recovery design, motor-retention and avionics-bay CAD,
slicing, printing, and as-built mass and CG calibration. My teammate led most of
the ANSYS Fluent work and contributed avionics, requirements, test planning,
SolidWorks design, manufacturing, and purchasing.

## Design and iteration

- Iterated five packaging-driven motor-retention concepts before developing a custom bayonet-style mechanism with ramp/detent behavior.
- Designed an interchangeable 6-in avionics bay to reduce duplicated hardware and keep instrumentation consistent between vehicles.
- Updated OpenRocket component masses and CG values from physical measurements of the manufactured vehicles rather than relying on ideal CAD values.
- Treated PETG-CF printing as an anisotropic manufacturing process, including orientation, cooling, adhesion, overhang, dimensional-fit, and post-processing decisions.

<figure class="project-figure project-figure--wide project-figure--portrait">
  <img src="{{ '/assets/images/hpr-mid-manufacturing-airframes.png' | relative_url }}" alt="Eagle's blue airframe and Crow's white baseline airframe standing upright during filler application and surface preparation.">
  <figcaption>Mid-manufacturing stage: Eagle at left and Crow at right during filler application and surface preparation before final finishing and assembly.</figcaption>
</figure>

<figure class="project-figure project-figure--wide project-figure--portrait">
  <img src="{{ '/assets/images/hpr-crow-av-bay-slot.png' | relative_url }}" alt="CAD view looking into Crow's baseline nose cone and showing the rectangular avionics-bay mounting slot.">
  <figcaption>Baseline nose-cone CAD showing the internal slot used to locate the removable avionics bay.</figcaption>
</figure>

## Flight test and corrective action

Crow flew with a stable ascent and deployed its parachute near apogee, but
drifted out of sight and was not recovered. The mission therefore did not
produce baseline apogee data or a Level 1 certification. The rebuild adds
electronic tracking and high-visibility paint, turning recoverability into an
explicit mission-level requirement before the comparison continues.
