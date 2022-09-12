---
layout: archive
title: ""
permalink: /research/
author_profile: true
--- 

<h1> Radiotherapy planning </h1>


<h3>First of all: what is <i>radiotherapy</i>? </h3>

Given the premise that some types of radiation can cause more damage to the DNA of tumor cells than healthy ones, [radiotherapy](https://en.wikipedia.org/wiki/Radiation_therapy) comprises the usage of radiation to extinguish or shrink tumors, where the goal is to eliminate the tumor before causing more damage to the patient.

In a nutshell: 

<q> *Radiotherapy is the art of treating cancer with something known to cause cancer!* </q>

Got curious? Check out the next paragraphs to understand how exactly it is possible to accomplish this ambitious goal!

<h3>From the beginning!</h3>

Once a patient is diagnosed with cancer and referred to radiotherapy treatment, the oncologist physician commonly orders a [tomography](https://en.wikipedia.org/wiki/Tomography) (or sometimes a [MRI](https://en.wikipedia.org/wiki/Magnetic_resonance_imaging)) of the patient before the proper treatment in order to obtain more information about the tumour's position and geometry (you will see the importance of this data very soon!).

<div style="text-align: center;">
  <img src="/images/slices.png" alt="" width="468" height="279">
  <br> <small>Image taken from the website https://www.mayoclinic.org/tests-procedures/ct-scan/multimedia/ct-scan-slices/img-20008348</small>
</div>

While regular doctors prescribe ordinary medicine, oncologists can prescribe radiation dose! Cool, isn't it?

Using the CT scans, the oncologist doctor can prescribe radiation dose, measured in [Gray](https://en.wikipedia.org/wiki/Gray_(unit)), for each structure involved on the treatment.

<h3>Linear accelerator</h3>

At this point, you may ask yourself "How exactly doctors can throw radiation onto patinents?", or "Where this radiation comes from?"
This is where engineers and physicists can be pround of themselves: they created a linear accelerator!

An enormous machine that can make a complete loop around the patient, delivering radiation from any angle.

<h3>The MLC</h3>

Nevertheless, "*With great power comes great responsibility!*".

One of the main objectives in radiotherapy is to aim the radiation at the tumor, and not the healthy organs of the patient.
For that purpose, recent linear accelerators inclue a *multileaf collimator* (MLC). A set of collimating blades, that is able to change the shape of the radiation field during the treatment; adjusting the apperture at each treatment angle as much close as possible to the tumor's contour.

<div style="text-align: center;">
  <img src="/images/linac.gif" alt="" width="1200" height="675">
</div>


<h3>Planning phase</h3>

Finally, with the [DICOM](https://en.wikipedia.org/wiki/DICOM) data from the CT scan, and the dose prescriptions, is now duty of the team of *medical physicists* to dictate how the linear accelerator; together with the MLC; are supposed to work in order to deliver the radiation dose to the patient. And this is what is known as radiotherapy planning!

<h3>Okay, but where the optimization comes in?</h3>

One way of interpreting the *dose delivery problem* is to **minimize** the total dose delivered to the patient, **subject to** the dose prescriptions given by the oncologist.

In other words, the planning phase always want to **optimize** the dose distribution on the patient. Which is, of course, what this is all about: optimization!

The main approach for most of the optimization problems related with radiotherapy planing is to discretize the patient's organs into voxels using a "3D-reconstruction" of the CT scan data (that is why the DICOM files are so important in the planning phase!) and analyse the dose in every patient's voxel!

For a deeper, but still beginner-friendly explanation about the topic, I highly recommend the first sections of my report ["Optimization of external beam radiation therapy"](https://www.researchgate.net/publication/362482036_Optimization_of_external_beam_radiation_therapy). I hope you enjoy it :v


<div style="text-align: center;">
  <img src="/images/DICOM_liver_moderate_average.png" alt="" width="632" height="462">
</div>


**Obs:** *the 3D-reconstruction it is not actually calculated. However, it is the first step for understanding what is called "pencil-beam matrix", or "dose deposition matrix"*.

<h2> Publications and conference papers </h2>

You can find both in my [Researchgate](https://www.researchgate.net/profile/Vinicius-Jameli) profile, and their respectives routines and data in my [GitHub](https://github.com/Vjameli).

<!---
 {% if author.googlescholar %}
   You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
 {% endif %}

 {% include base_path %}

 {% for post in site.publications reversed %}
  {% include archive-single.html %}
 {% endfor %}
-->
