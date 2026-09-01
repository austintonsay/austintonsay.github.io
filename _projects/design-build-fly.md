---
title: "Design, Build, Fly · Structures & Manufacturing"
order: 2
category: "Aircraft · Structures & Manufacturing"
year: "2025 - Present"
summary: "Across two DBF cycles, I moved from choosing an airframe architecture the team could manufacture reliably to developing a printable tail concept that resolves assembly interfaces in CAD."
role: "Structures/Manufacturing Engineer"
duration: "August 2025 - Present"
tools: ["SolidWorks", "Weighted Trade Studies", "FDM Design", "Aircraft Fabrication"]
image: "/assets/images/dbf-2026-tail-assembly-cad.png"
image_position: "center"
hero_image: "/assets/images/dbf-2026-tail-assembly-cad.png"
hero_position: "center"
hero_alt: "SolidWorks rendering of a printable aircraft tail concept with horizontal and vertical stabilizers and movable control surfaces."
---

## Two school years, two structures problems

My DBF work spans two distinct design cycles. In 2025-26, the challenge was to
turn broad preferences such as “light” and “easy to build” into traceable
material decisions, then manufacture the wing architecture those decisions
supported. In 2026-27, my work shifted toward a printable tail assembly that
uses CAD to control alignment, interfaces, and part count before fabrication.

<div class="project-era-index project-figure--wide" aria-label="DBF work separated by school year">
  <div><span>2025-26</span><strong>Material architecture and wing manufacturing</strong><p>Three weighted decisions followed by an in-progress built wing.</p></div>
  <div><span>2026-27</span><strong>Printable tail integration</strong><p>An ongoing SolidWorks concept for repeatable assembly and control-surface interfaces.</p></div>
</div>

## 2025-26 · Selecting for the real build environment

The matrices did not search for a universally superior material. They encoded
what mattered for this team, aircraft, budget, and shop. Strength remained
important, but a material could still be a poor system choice if it created too
much mass or required a manufacturing process the team could not execute
consistently.

<div class="project-data-table-wrap project-figure--wide">
  <table class="project-data-table">
    <thead><tr><th>Decision</th><th>Highest result</th><th>Engineering interpretation</th></tr></thead>
    <tbody>
      <tr><th>General architecture</th><td>Ultracote over ribs and spars · 1.815</td><td>Manufacturing ease and mass outweighed composite complexity</td></tr>
      <tr><th>Rib material</th><td>Balsa · 2.215</td><td>Low mass and workability fit a repeated rib structure</td></tr>
      <tr><th>Spar/stringer material</th><td>Balsa · 2.15</td><td>The full weighted balance favored buildability over maximum stiffness alone</td></tr>
    </tbody>
  </table>
</div>

### General structural architecture

The first comparison placed composite foam-core concepts, composite
rib-and-spar concepts, and film-covered conventional structures on the same
scale. The selected fabric-covered rib-and-spar approach was not the strongest
option in every category; it was the option whose mass and manufacturing path
best matched the project.

<figure class="project-figure project-figure--wide">
  <a href="{{ '/assets/images/dbf-2025-general-materials-matrix.png' | relative_url }}"><img src="{{ '/assets/images/dbf-2025-general-materials-matrix.png' | relative_url }}" alt="Weighted matrix comparing six general airframe material architectures across cost, bending strength, torsional strength, weight, and manufacturing ease."></a>
  <figcaption>General architecture matrix. Manufacturing ease carried 31% of the decision and weight carried 25%, making those constraints explicit.</figcaption>
</figure>

### Ribs, spars, and stringers

The component-level studies used different weights because the parts do
different jobs. Rib selection emphasized mass and repeatable fabrication, while
the spar/stringer study assigned more combined importance to bending and
torsional strength. Balsa ranked first in both, but for a different balance of
reasons in each matrix.

<div class="data-gallery data-gallery--stack">
  <figure><a href="{{ '/assets/images/dbf-2025-rib-material-matrix.png' | relative_url }}"><img src="{{ '/assets/images/dbf-2025-rib-material-matrix.png' | relative_url }}" alt="Weighted rib-material matrix comparing balsa, basswood, aircraft birch plywood, spruce, and walnut."></a><figcaption>Rib matrix · weight and manufacturing ease each carried 33%.</figcaption></figure>
  <figure><a href="{{ '/assets/images/dbf-2025-spar-stringer-matrix.png' | relative_url }}"><img src="{{ '/assets/images/dbf-2025-spar-stringer-matrix.png' | relative_url }}" alt="Weighted spar and stringer matrix comparing balsa, basswood, aircraft birch plywood, spruce, and walnut."></a><figcaption>Spar/stringer matrix · structural capability was weighed against mass, cost, and workability.</figcaption></figure>
</div>

### From matrix to wing

The in-progress wing shows the decision becoming hardware: repeated wood ribs,
longitudinal members, localized reinforcement, and film covering added in
stages. The useful lesson was that material selection and manufacturing method
cannot be separated. A lightweight architecture only works when alignment,
bonding, reinforcement, and covering are controlled during assembly.

<div class="data-gallery">
  <figure><a href="{{ '/assets/images/dbf-2025-wing-open-structure.png' | relative_url }}"><img src="{{ '/assets/images/dbf-2025-wing-open-structure.png' | relative_url }}" alt="DBF team assembling the 2025-26 wing with exposed wood ribs, spars, and reinforcement members on a workbench."></a><figcaption>2025-26 wing during structural assembly, before covering.</figcaption></figure>
  <figure><a href="{{ '/assets/images/dbf-2025-wing-covering-progress.png' | relative_url }}"><img src="{{ '/assets/images/dbf-2025-wing-covering-progress.png' | relative_url }}" alt="DBF wing in progress with green and yellow film covering, exposed bays, and carbon-fiber reinforcement visible along the structure."></a><figcaption>Covering and reinforcement in progress; several bays remain open for access and inspection.</figcaption></figure>
</div>

## 2026-27 · Designing assembly into the tail

The next cycle shifts the problem from choosing materials to controlling
interfaces. The SolidWorks tail concept is intended for 3D printing so mounting
features, control-surface relationships, and alignment can be defined in the
model rather than recovered manually during assembly.

<figure class="project-figure project-figure--wide">
  <a href="{{ '/assets/images/dbf-2026-tail-assembly-cad.png' | relative_url }}"><img src="{{ '/assets/images/dbf-2026-tail-assembly-cad.png' | relative_url }}" alt="SolidWorks view of the 2026-27 printable DBF tail concept with horizontal and vertical stabilizers and control surfaces."></a>
  <figcaption>2026-27 printable tail concept. This is a design-stage assembly, not a completed or flight-validated part.</figcaption>
</figure>

### Current design questions

- Can part consolidation reduce alignment steps without making the assembly difficult to service?
- Which print orientation best balances support removal, surface quality, and anisotropic strength?
- Can servo and control-surface interfaces remain accessible after installation?
- Does the mass saved through fewer fasteners and separate parts offset the printed material required for integrated features?

## Next evidence

The tail page will become stronger as the design advances through mass
estimation, slicing and orientation studies, prototype fit checks, and revision
after physical testing. Until then, the CAD is presented as an integration
strategy and a set of open engineering questions—not a verified improvement.
