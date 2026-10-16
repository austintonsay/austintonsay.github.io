---
title: "Baseline vs. Altitude-Optimized High-Power Rocket Experiment"
order: 1
category: "Rocketry · Design & Test"
year: "2026"
summary: "Built and flight-tested Crow and Eagle with Vi Hung Lien, measuring a 31.7% apogee increase despite 97 g of added mass and earning Level 1 certification with the rebuilt Crow."
role: "Materials, manufacturing, recovery & integration"
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

## One question, two rockets

How effective are changes in rocket geometry on apogee? What started as a summer
plan to earn our Level 1 high-power rocketry certifications became a design,
build, and flight-test experiment with Vi Hung Lien. We compared Crow, a
conventional baseline, with Eagle, an altitude-optimized configuration, using
the same 2.13 in body diameter and Aerotech H219T motor.

Eagle reached **4,131 ft**, compared with **3,136 ft** for the rebuilt Crow:
a measured **995 ft gain, or 31.7%**, despite Eagle being **97 g heavier**.
The recovered Crow flight also earned my Level 1 certification. Eagle's flight
demonstrated a substantial performance gain, while its early deployment and
landing damage exposed recovery-system limitations.

## Prediction versus flight

<div class="project-data-table-wrap project-figure--wide">
  <table class="project-data-table">
    <caption>Preflight predictions and reported flight results</caption>
    <thead><tr><th>Metric</th><th>Crow · baseline</th><th>Eagle · optimized</th></tr></thead>
    <tbody>
      <tr><th>Predicted apogee</th><td>3,095 ft</td><td>4,523 ft</td></tr>
      <tr><th>Measured apogee</th><td>3,136 ft · rebuilt Crow</td><td>4,131 ft</td></tr>
      <tr><th>Prediction difference / measured altitude</th><td>1.3%</td><td>9.5% · early deployment affected flight</td></tr>
      <tr><th>Measured gain over Crow</th><td>Baseline</td><td>995 ft · 31.7%</td></tr>
      <tr><th>Recovery outcome</th><td>Recovered · Level 1 certified</td><td>Hard landing · repairable damage</td></tr>
    </tbody>
  </table>
</div>

The simulation predicted a 1,428 ft gain, or 46.1%. The measured gain was smaller,
but Eagle's recovery event occurred at roughly 12 seconds instead of the intended
14 seconds, while it still had positive vertical velocity. Deployment added drag
during ascent. Its prediction-to-flight difference therefore includes an
off-nominal recovery event; it cannot be attributed entirely to the aerodynamic
model. The available results do not isolate how much altitude that event cost.

Crow finished 41 ft above its prediction. Using the prediction difference divided
by measured altitude gives approximately 1.3% error, supporting the baseline
model for this flight. Our preflight models used measured, as-built component
masses rather than idealized CAD masses.

## What changed between the vehicles

Crow used four trapezoidal fins, an ogive nose cone, no boattail, and a conventional
surface finish. Eagle combined three swept fins, an increased root-to-tip ratio,
thinner leading and trailing edges, and a double-wedge fin profile. PETG-CF fins
were selected for rigidity and flutter resistance. A parabolic nose cone with
roughly 4:1 fineness, a boattail, and sanded and painted surfaces completed the
aerodynamic changes. Increased motor overhang was intended to reduce potential
Krushnic-effect losses; its individual benefit was not measured.

Several variables changed together. This experiment compares the **combined
configurations**; it does not assign a separate altitude gain to fin count, nose
shape, surface finish, or any other individual modification.

## OpenRocket comparison

The plots below use a common **2 m/s wind condition**. Crow uses the H219T with
a 10-second delay; Eagle uses the H219T with a 14-second delay. This keeps the
propulsion consistent while setting a nominal recovery delay for each vehicle.
These are preflight simulation plots, not recorded flight telemetry.

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

I led materials selection, recovery systems, initial airframes, manufacturing
planning, 3D printing, mass management, and the overall project workflow. Vi Hung
Lien led fin optimization, flutter calculations, CFD in ANSYS Fluent, and FEA in
ANSYS Mechanical. We shared the SolidWorks CAD. My work connected the analysis
to hardware that could be printed, fitted, assembled, instrumented, and prepared
for launch.

## Design and iteration

- Iterated five packaging-driven motor-retention concepts before developing a custom bayonet-style mechanism with ramp/detent behavior.
- Designed an interchangeable 6-in avionics bay to reduce duplicated hardware and keep instrumentation consistent between vehicles.
- Updated OpenRocket component masses and CG values from physical measurements of the manufactured vehicles rather than relying on ideal CAD values.
- Treated PETG-CF printing as an anisotropic manufacturing process, including orientation, cooling, adhesion, overhang, dimensional-fit, and post-processing decisions.

The nose cone, boattail, and retention system needed iteration as printing
tolerances and assembly fit became real constraints. Even cutting bulkheads with
a Japanese pull saw required a practical process. The recurring lesson was that
correct CAD geometry is only the beginning: the parts also have to fit together
and survive the flight environment.

<figure class="project-figure project-figure--wide project-figure--portrait">
  <img src="{{ '/assets/images/hpr-mid-manufacturing-airframes.png' | relative_url }}" alt="Eagle's blue airframe and Crow's white baseline airframe standing upright during filler application and surface preparation.">
  <figcaption>Mid-manufacturing stage: Eagle at left and Crow at right during filler application and surface preparation before final finishing and assembly.</figcaption>
</figure>

<figure class="project-figure project-figure--wide project-figure--portrait">
  <img src="{{ '/assets/images/hpr-crow-av-bay-slot.png' | relative_url }}" alt="CAD view looking into Crow's baseline nose cone and showing the rectangular avionics-bay mounting slot.">
  <figcaption>Baseline nose-cone CAD showing the internal slot used to locate the removable avionics bay.</figcaption>
</figure>

## The flight campaign

Our first launch attempt exposed a planning problem: I underestimated integration
and preparation time and arrived without a vehicle ready to fly. Readiness had
to become part of the engineering work, alongside the hardware itself.

On a later trip, the original Crow flew successfully but was lost after descent.
Single deployment above 3,000 ft without GPS tracking left us unable to recover
it. I rebuilt Crow in under three days of physical work, excluding shipping, and
added GPS tracking for the next attempt. The rebuilt rocket was recovered after
reaching 3,136 ft and earned my Level 1 certification.

Eagle reached 4,131 ft, but its recovery sequence introduced two distinct
problems. First, ejection occurred roughly two seconds earlier than intended,
while the vehicle was ascending. Then the slow-deploy parachute wrapped around
the shock cord and never fully inflated. The resulting hard landing snapped a
fin and delaminated the body tube. The damage was repairable, but the flight was
not certifiable for Level 1.

The flight still demonstrated the motor-retention design and reusable avionics
bay, alongside the optimized configuration's performance gain. Recovery remained
the limiting system.

## What I took from the experiment

The most useful result was the connection between prediction, manufacturing,
flight operations, and recovery. As-built modeling gave Crow a close prediction;
geometry changes gave Eagle a measurable performance advantage; deployment
behavior determined how much of that advantage the flight could realize.

Losing and rebuilding Crow made tracking a mission requirement. Eagle's flight
made deployment timing and parachute routing priorities for further recovery
work. The project answered our configuration-level research question, while
showing me that aerodynamic performance only becomes a successful mission when
the rest of the vehicle works with it.
