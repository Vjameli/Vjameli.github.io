---
layout: archive
title: ""
permalink: /research/
author_profile: true
--- 

<h1> Radiotherapy planning </h1>

<hr>


<h3><u>First of all: what is <i>radiotherapy</i>?</u> </h3>

Given the premise that some types of radiation can cause more damage to the DNA of tumor cells than to healthy ones, [radiotherapy](https://en.wikipedia.org/wiki/Radiation_therapy) comprises the use of radiation to extinguish or shrink tumors, where the goal is to eliminate the tumor before causing more damage to the patient.

In a nutshell: 

<div style="text-align: center;">
  <q><i>Radiotherapy is the art of treating cancer with something that may cause cancer!</i></q>
</div>

Got curious? Check out the next paragraphs to understand how it is possible to accomplish this ambitious goal.

<hr>

<h3> <u>From the beginning!</u></h3>

Once a patient is diagnosed with cancer and referred to radiotherapy treatment, the oncologist physician commonly orders a [tomography](https://en.wikipedia.org/wiki/Tomography) (or sometimes a [MRI](https://en.wikipedia.org/wiki/Magnetic_resonance_imaging)) of the patient before the proper treatment to get more information about the tumour’s position and geometry (you will see the importance of this data soon!).

<div style="text-align: center;">
  <img src="/images/slices.png" alt="" width="468" height="279">
  <br> <small>Image taken from the website https://www.mayoclinic.org/tests-procedures/ct-scan/multimedia/ct-scan-slices/img-20008348</small>
</div>

While regular doctors prescribe ordinary medicine, an oncologists can prescribe a radiation dose. Cool, isn't it?

Using the CT scans, an oncologist doctor can prescribe radiation dose, measured in [Gray](https://en.wikipedia.org/wiki/Gray_(unit)), for each structure involved in the treatment.

<h3><u>Linear accelerator</u></h3>

At this point, you may ask yourself "How exactly can doctors throw radiation into patinents?", or "Where does this radiation comes from?"
This is where engineers and physicists can be pround of themselves: they created the *linear accelerator*. An enormous machine that can make a complete loop around the patient, delivering radiation from any angle very precisely.

<h3><u>The MLC</u></h3>

Nevertheless, as uncle Ben would say: "*With great power comes great responsibility*".

One of the main objectives in radiotherapy is to aim radiation at the tumor, and not at healthy organs of the patient. For that purpose, recent linear accelerators include a multi-leaf collimator (MLC). A set of collimating blades that can change the shape of the radiation field during the treatment, adjusting the aperture at each treatment angle as much as possible to the tumor’s contour.

<div style="text-align: center;">
  <img src="/images/linac.gif" alt="" width="768" height="432">
</div>


<h3><u>Planning phase</u></h3>

Finally, with the [DICOM](https://en.wikipedia.org/wiki/DICOM) data from the CT scan and the dose prescriptions, it is time for the team of medical physicists to decide how the linear accelerator; together with the MLC; are supposed to work to deliver the radiation dose to the patient. And this is what is known as radiotherapy planning!

<h3><u>Okay, but where does the optimization come in?</u></h3>

One way of interpreting the *dose delivery problem* is to **minimize** the total dose delivered to the patient, **subject to** the dose prescriptions given by the oncologist. In other words, the planning phase always wants to **optimize** the dose distribution on the patient. Which is, of course, what this is all about: optimization!

The main approach for most of the optimization problems related with radiotherapy planning is to discretize the patient’s organs into voxels using a “3D-reconstruction” of the CT scan data (that is why the DICOM files are so important in the planning phase!) and optimize the dose in every patient’s voxel! The final product of the treatment plan must be a suggestion of the resultant radiation dose deposited on the patient after the treatment session. For our luck, this solution can be visualized in a very nice way:

<div style="text-align: center;">
  <img src="/images/dicom.gif" alt="" width="1200" height="629">
  <br> <small>This is a loop through the tomographic slices of the patient with the resultant radiation dose plotted on top. </small>
</div>

Ultimately, for a deeper, but still beginner-friendly explanation about the topic, I highly recommend the first sections of my report ["Optimization of external beam radiation therapy"](https://www.researchgate.net/publication/362482036_Optimization_of_external_beam_radiation_therapy).


**Obs:** *the 3D-reconstruction is not actually calculated. However, it is the first step for understanding what is called "pencil-beam matrix", or "dose deposition matrix"*.

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
