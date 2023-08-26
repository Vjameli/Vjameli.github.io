---
layout: archive
title: ""
permalink: /research/
author_profile: true
--- 

<h1> Radiotherapy planning </h1>

<hr>


<h3><u>First of all: what is <i>radiotherapy</i>?</u> </h3>

Given the premise that certain types of radiation can deal more harm to tumor cell DNA than to their healthy counterparts, [radiotherapy](https://en.wikipedia.org/wiki/Radiation_therapy) comprises the use of radiation such as photons, electron beams, or protons, to extinguish or shrink tumors while spare healthy organs as much as possible.

In a nutshell: 

<div style="text-align: center;">
  <q><i>Radiotherapy is the art of treating cancer with something that may cause cancer</i></q>
</div>



<hr>

<h3> <u>From the beginning</u></h3>

Once a patient is diagnosed with cancer and referred to radiotherapy treatment, the oncologist often requisitions a [tomography](https://en.wikipedia.org/wiki/Tomography) or occasionally an [MRI](https://en.wikipedia.org/wiki/Magnetic_resonance_imaging). These diagnostic tools provide crucial insights into the tumor's position and geometry before commencing treatment.

<div style="text-align: center;">
  <img src="/images/slices.png" alt="" width="468" height="279">
  <br> <small>Image taken from the website https://www.mayoclinic.org/tests-procedures/ct-scan/multimedia/ct-scan-slices/img-20008348</small>
</div>


By utilizing CT scans, the oncologist can prescribe a radiation dose, measured in Gray, for each structure that's a part of the treatment.
<h3><u>Linear Accelerator</u></h3>

At this juncture, you might wonder, 'How do medical experts manipulate radiation and incorporate it into patients?' or 'What's the source of this radiation?'
This is where the genius of engineers and physicists shines: they've crafted the linear accelerator, an enormous apparatus capable of circumnavigating the patient, skillfully delivering radiation from various angles.
<h3><u>The MLC</u></h3>

Nevertheless, as uncle Ben would say: "With great power comes great responsibility."

In radiotherapy, the ultimate goal is to direct radiation precisely at the tumor while sparing the patient's healthy organs. To fulfill this mission, modern linear accelerators feature a multi-leaf collimator (MLC) – an assembly of collimating blades that dynamically shape the radiation field during treatment, allowing several non-trivial apertures per angle."

<div style="text-align: center;">
  <img src="/images/linac.gif" alt="" width="768" height="432">
  <br> <small>Bear in mind that this is a simple case where the MLC apertures chosen are only matching the tumor's contour.</small>
</div>

<h3><u>Planning phase</u></h3>

Finally, with the [DICOM](https://en.wikipedia.org/wiki/DICOM) data from the CT scan and the prescribed radiation doses, the team of medical physicists embarks on the task of orchestrating the synergy between the linear accelerator and the MLC to precisely deliver the required radiation dose to the patient. This intricate orchestration is what's known as radiotherapy planning.

<h3><u>Okay, but where does the optimization come in?</u></h3>

One way of interpreting the *dose delivery problem* is to **minimize** the total dose delivered to the patient, **subject to** the dose prescriptions given by the oncologist. In other words, the planning phase always wants to **optimize** the dose distribution on the patient. Which is, of course, what this is all about: optimization!

The prevalent approach for most optimization problems pertaining to radiotherapy planning involves discretizing the patient's organs into voxels through a "3D reconstruction" of CT scan data (which is why DICOM files wield such significance in this phase) and optimize the dose in every patient’s voxel. The treatment's outcome is a tailored suggestion for the radiation dose distribution that will be deposited in the patient's body post-treatment. For our luck, this solution can be visualized in a very nice way:

<div style="text-align: center;">
  <img src="/images/dicom.gif" alt="" width="1200" height="629">
  <br> <small>This is a loop through the tomographic slices of the patient with the resultant radiation dose plotted on top.</small>
</div>

In closing, for a more in-depth yet still beginner-friendly dive into this subject, I highly recommend the initial sections of my report ["Primal-dual interior point algorithm for the fluence map optimization problem"](https://www.researchgate.net/publication/361526900_Primal-dual_interior_point_algorithm_for_the_fluence_map_optimization_problem).


<hr>

Congratulations for reading this far! I am glad I managed to catch your attention talking about radiotherapy. Feel free to send me an email if you have any questions :)

<!---
 {% if author.googlescholar %}
   You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
 {% endif %}

 {% include base_path %}

 {% for post in site.publications reversed %}
  {% include archive-single.html %}
 {% endfor %}
-->
