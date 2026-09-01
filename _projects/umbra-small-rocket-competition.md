---
title: "UMBRA Small Rocket Competition - Big Blunt"
order: 4
category: "Rocketry · Team Leadership"
year: "2025"
summary: "Led a five-person team that increased predicted apogee from approximately 2,100 ft to 2,900 ft, then traced an internal structural-separation failure to insufficient epoxy cure time."
role: "Team Lead · Aerodynamic design, coordination & avionics"
duration: "September 2025 - November 2025"
tools: ["OpenRocket", "SolidWorks", "Bambu Studio", "Arduino IDE"]
image: "/assets/images/umbra-big-blunt-launch.png"
image_position: "center 42%"
hero_image: "/assets/images/umbra-big-blunt-launch.png"
hero_position: "center 45%"
hero_alt: "Big Blunt ascending from the launch rail over a desert launch field."
---

## Objective

Design and manufacture a small competition rocket capable of maximizing
apogee while integrating onboard altitude, pressure, and temperature sensing.
Our team, **500 Cigarettes**, named the vehicle **Big Blunt**.

<figure class="project-figure project-figure--wide">
  <img src="{{ '/assets/images/umbra-big-blunt-vehicle.png' | relative_url }}" alt="The completed Big Blunt rocket resting horizontally before launch, with an orange nose cone, white airframe, and four fins.">
  <figcaption>Big Blunt before launch. Vehicle: 500 Cigarettes team, UMBRA Small Rocket Competition.</figcaption>
</figure>

## My role

I led the five-person design/build team, coordinated aerodynamic design,
manufacturing, and avionics integration, and kept project milestones within
approximately two days of the planned schedule. I also designed fin and body
geometry and programmed the Arduino-based avionics acquisition system.

## Design and analysis

- Iterated the airframe and fin geometry in OpenRocket, SolidWorks, and Bambu Studio.
- Increased predicted apogee from approximately 2,100 ft to 2,900 ft - a projected improvement of about 38%.
- Programmed avionics to acquire altitude, ambient pressure, and temperature data.
- Coordinated one to two team meetings per week and assigned work across design, manufacturing, and avionics.

<figure class="project-figure project-figure--wide">
  <img src="{{ '/assets/images/umbra-big-blunt-launch.png' | relative_url }}" alt="Big Blunt ascending from the launch rail with a bright exhaust plume over a desert launch field.">
  <figcaption>Big Blunt at liftoff during the UMBRA SRC launch event.</figcaption>
</figure>

## What failed

The vehicle launched, but the internal structure later separated because the
epoxy had not been allowed to cure sufficiently before loading and operation.
The project therefore should not be presented as a successful flight.

## Root cause and lesson

The failure showed that material cure time and manufacturing process control
are structural requirements, not administrative details. A design can be
geometrically sound and still fail when schedule pressure shortens a required
manufacturing step. Future builds should include explicit cure windows,
inspection criteria, and a no-go decision when bonded joints have not reached
the required state.
