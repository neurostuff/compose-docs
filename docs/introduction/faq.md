---
sidebar_label: 'FAQ'
sidebar_position: 3
---

# Frequently Asked Questions

* Is this service free to use?

Yes! Note, however, that NS-Compose is a web-based engine for neuroimaging meta-analysis specification; at the moment, we don’t (yet?) provide free computing resources for the execution of the resulting meta-analysis specifications. However, you can easily run your meta-analysis in the cloud using Google Colab, or locally using Python. Instructions are provided after you complete a meta-analysis. 

* Are there any restrictions on meta-analyses created?

Yes. Once a meta-analysis specification is executed and results are uploaded to our platform, you will no longer be able to *delete* or *edit* the analysis specification. A complete copy of the StudySet and Analysis is kept on our system to ensure compelte provenance. You can, however, keep the analysis as private to ensure it is unlisted in the public search.

If you wish to make any edits, you can edit the StudySet and create a new Analysis specification, which will receive a new unique ID.

Also, in the event that you publish any results generated using the Neurosynth Compose, you MUST provide a link to the corresponding meta-analysis specification ID on the platform.

* I've noticed that a study on your platform contains errors or is incomplete, can I fix them?

Yes! We welcome user contributions. You can correct or add details on a study, including meta-data and peak activation coordinates.
A key piece of information that you may want to correct is how Activation coordinates are grouped into distinct Analyses (i.e. Contrasts).
Please ensure that any edits you make are as objective as possible and reflect what is represented in the original Study, and *not* the goals of your meta-analysis. 

Note, that to avoid debates about the ground truth of a Study, when you make edits a new Version of the study is created, which is associated with your User. 

* If I contribute new studies to the platform, or edit existing studies, will other users be able to see them?

Yes! Althuogh a new Version of the study is created when you make any edits, we default to displaying user edited Versions over the automatically extracted versions.
This is because we assume that any edits made by users will be an improvements on the extraction algorithm. Please ensure any changes you make reflect this.
You may also make a Version private if you don't want to share your edits with others. 

* How does this project relate to the original Neurosynth?
  
Neurosynth 1.0 was an online platform for browsing automatically generated large-scale neuroimaging meta-analyses. However, because all analyses were pre-generated, users were unable to define custom meta-analyses using the Neurosynth database. Instead, Neurosynth 1.0 used text mining techniques to automatically group studies based on the frequency of the terms mentioned in the text. Neurosynth Compose is focused on allowing users to overcome the limitations of automated large-scale meta-analysis, by enabling users to annotate studies, and curate sets of studies amenable for meta-analysis. This way, users can systematically define meta-analyses using their own expertise, while still leveraging the Neurosynth database, and an easy-to-use web-based analysis builder to accelerate the meta-analysis process.

  You can read more about the relationship between Neurosynth 1.0 and Neurosynth Compose under [Ecosystem](./ecosystem#neurosynth-compose)


* What is the difference between importing and ingesting studies?

Importing studies refers to adding studies for curation,
ingesting studies means that you are adding studies to a StudySet for a meta-analysis.

