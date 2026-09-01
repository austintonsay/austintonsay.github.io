---
title: "ARO1021L · Model-to-Flight Apogee Comparison"
order: 5
category: "Rocketry · Experimental Methods"
year: "Course Project"
summary: "Used three kit rockets to examine how an apogee result changes with the method used to obtain it: simulation, static-fire analysis, line-of-sight geometry, or onboard pressure sensing."
role: "Experimental analysis & method comparison"
duration: "ARO 1021L laboratory project"
tools: ["OpenRocket", "Static-Fire Analysis", "Inclinometer", "Altimeter"]
image: "/assets/images/aro1021l-inclinometer-field-use.png"
image_position: "center"
hero_image: "/assets/images/aro1021l-inclinometer-field-use.png"
hero_position: "center"
hero_alt: "A handheld model-rocket inclinometer being used in a field to measure an elevation angle."
---

## Objective

The experiment asked a deceptively simple question: how high did each rocket
fly? Three kit rockets—Alpha, Bravo, and Charlie—were evaluated through methods
that rely on different measurements and assumptions. The goal was not merely to
produce one altitude value, but to understand why valid-looking methods can
disagree.

<div class="project-data-table-wrap project-figure--wide">
  <table class="project-data-table">
    <thead><tr><th>Rocket</th><th>Static-fire analysis</th><th>OpenRocket</th><th>Inclinometer</th><th>Onboard altimeter</th></tr></thead>
    <tbody>
      <tr><th>Alpha</th><td>237 ft</td><td>327 ft</td><td>398 ft</td><td>—</td></tr>
      <tr><th>Bravo</th><td>166 ft</td><td>157 ft</td><td>167 ft</td><td>222 ft</td></tr>
      <tr><th>Charlie</th><td>286 ft</td><td>176 ft</td><td>221 ft</td><td>—</td></tr>
    </tbody>
  </table>
</div>

## Measurement chain

OpenRocket depended on the modeled vehicle, motor, mass, and drag assumptions.
The static-fire calculation propagated measured motor behavior through an
analytical flight estimate. The inclinometer converted a line-of-sight angle
and observer distance into altitude, making observer alignment and flight-path
offset important. Bravo's onboard altimeter added a pressure-based measurement,
but that method also depends on sensor behavior and atmospheric conditions.

<div class="data-gallery data-gallery--three">
  <figure><a href="{{ '/assets/images/aro1021l-inclinometer-field-use.png' | relative_url }}"><img src="{{ '/assets/images/aro1021l-inclinometer-field-use.png' | relative_url }}" alt="Handheld model-rocket inclinometer used to observe flight elevation angle."></a><figcaption>Handheld inclinometer used for line-of-sight apogee estimation.</figcaption></figure>
  <figure><a href="{{ '/assets/images/aro1021l-three-rockets-on-pad.png' | relative_url }}"><img src="{{ '/assets/images/aro1021l-three-rockets-on-pad.png' | relative_url }}" alt="Three ARO1021L kit rockets installed on separate launch rods in a grass field."></a><figcaption>Alpha, Bravo, and Charlie prepared on the launch rack.</figcaption></figure>
  <figure><a href="{{ '/assets/images/aro1021l-launch-angle-reference.png' | relative_url }}"><img src="{{ '/assets/images/aro1021l-launch-angle-reference.png' | relative_url }}" alt="Close view of a launch rod and circular angle reference at the rocket pad."></a><figcaption>Launch-rod angle reference used to document initial test geometry.</figcaption></figure>
</div>

## What the disagreement revealed

Bravo produced a particularly useful contrast: OpenRocket and the inclinometer
were separated by only about 6.17%, while OpenRocket and the onboard altimeter
differed by about 34.3%. That does not automatically make one method “correct.”
It shows that agreement between two methods can be conditional, and that the
measurement chain must be examined before treating any result as ground truth.

Across the three rockets, likely contributors included drag-model assumptions,
as-built differences, motor variation, environmental conditions, observer
geometry, and sensor limitations. The project became an early lesson in model
validation: the useful output is not only a predicted number, but an explanation
of what information each method uses and where uncertainty enters.

## Connection to later work

This course experiment informed the later high-power Crow/Eagle project. It made
as-built mass calibration, controlled comparisons, recoverable onboard data,
and explicit test requirements feel necessary rather than optional.
