---
sidebar_label: 'FAQ'
sidebar_position: 2
---

# Frequently Asked Questions

<details>
<summary>Is this service free to use?</summary>
Yes! Note, however, that NS-Compose is a web-based engine for neuroimaging meta-analysis specification; at the moment, we don’t (yet?) provide free computing resources for the execution of the resulting meta-analysis specifications. However, you can easily run your meta-analysis in the cloud using Google Colab, or locally using Python. Instructions are provided after you complete a meta-analysis. 
</details>

<details>
<summary>Are there any restrictions on meta-analyses created?</summary>
Yes. Once a meta-analysis specification is executed and results are uploaded to our platform, you will no longer be able to <em>delete or edit</em> the analysis specification. A complete copy of the StudySet and Analysis is kept on our system to ensure complete provenance. You can, however, keep the analysis as private to ensure it is unlisted in the public search.<br/>
If you wish to make any edits, you can edit the StudySet and create a new Analysis specification, which will receive a new unique ID.
<br/><br/>
In the event that you publish any results generated using the Neurosynth Compose, you MUST provide a link to the corresponding meta-analysis specification ID on the platform.
</details>

<details>
<summary>I've noticed that a study on your platform contains errors or is incomplete, can I fix them?</summary>
Yes! We welcome user contributions. You can correct or add details on a study, including meta-data and peak activation coordinates.
A key piece of information that you may want to correct is how Activation coordinates are grouped into distinct Analyses (i.e., Contrasts).
Please ensure that any edits you make are as objective as possible and reflect what is represented in the original Study, and *not* the goals of your meta-analysis. 
<br/><br/>
To avoid debates about the ground truth of a Study, when you make edits a new Version of the study is created, which is associated with your User.
</details>

<details>
<summary>If I contribute new studies to the platform, or edit existing studies, will other users be able to see them?</summary>
Yes! Although a new Version of the study is created when you make any edits, we default to displaying user edited Versions over the automatically extracted versions.
This is because we assume that any edits made by users will be improvements on the extraction algorithm. Please ensure any changes you make reflect this.
You may also make a Version private if you don't want to share your edits with others.
</details>

<details>
<summary>How does this project relate to the original Neurosynth?</summary>
Neurosynth 1.0 was an online platform for browsing automatically generated large-scale neuroimaging meta-analyses. However, because all analyses were pre-generated, users were unable to define custom meta-analyses using the Neurosynth database. Instead, Neurosynth 1.0 used text mining techniques to automatically group studies based on the frequency of the terms mentioned in the text. Neurosynth Compose is focused on allowing users to overcome the limitations of automated large-scale meta-analysis, by enabling users to annotate studies, and curate sets of studies amenable for meta-analysis. This way, users can systematically define meta-analyses using their own expertise, while still leveraging the Neurosynth database, and an easy-to-use web-based analysis builder to accelerate the meta-analysis process.<br/>
</details>

<details>
<summary>How do I collaborate with another person on the same meta-analysis project?</summary>
The answer depends on what you want your collaborator(s) to be able to do.
If you just want them to view the project, you can make the project public and share the Project URL with them.
If you want them to be able to edit the project, the best approach is to create a shared account
using a shared email address and create the project under that account.
It is on our roadmap to provide more robust collaboration features in the future.
</details>

<details>
<summary>How do I run a legacy Neurosynth-like meta-analysis?</summary>
Use the <a href="../tutorial/automated">Automated Meta-Analysis tutorial</a> as the closest workflow. In brief: create a Project, use the Simple curation workflow, import studies from NeuroStore using your search term, promote the relevant studies to Included, move to Extraction, and then create a Meta-Analysis Specification. Using the search term is similar to the tf-idf approach used in the original Neurosynth platform since the threshold for inclusion was so low, if the word was mentioned in the abstract, it would be included.
<br/><br/>
For the algorithm, select `MKDAChi2`. This is the large-scale association-test workflow used by the original Neurosynth platform. When prompted for a reference dataset, choose `Neurosynth` if you want the legacy Neurosynth reference sample, or `Neurostore` if you want the newer continuously updated database.
</details>


<details>
<summary>What's an annotation?</summary>
An annotation is a column of structured information attached to the Analyses in a StudySet. You can think of annotations like a spreadsheet: rows are Analyses, and columns are values such as `included`, task type, contrast direction, participant group, or any other variable you need for curation and analysis.
<br/><br/>
Annotations are most often used to decide which Analyses should be included in a meta-analysis. For example, a Boolean annotation can mark each Analysis as included or excluded, and the Meta-Analysis Specification step can use that annotation column to select the final inputs.
<br/><br/>
See the <a href="../guide/glossary#annotation">Glossary entry on Annotations</a> and the <a href="../guide/Project/Extraction#annotations">Extraction guide</a> for more detail.
</details>
