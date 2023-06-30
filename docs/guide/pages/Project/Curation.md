---
title: Curation
sidebar_position: 0
---

# Curation
## Introduction

The curation phase is the first step when creating a meta-analysis. In the most basic case, it involves
searching for and importing studies into the project and then selecting out any
studies that may possibly be relevant to the meta-analysis by systematically categorizing each one.
This involves **excluding** the study if is not relevant, or choosing to **include** it within the meta-analysis.

## Getting Started With Curation

The curation interface uses columns as a way to label studies based on their current status. 
The left most column is the starting point and all studies imported into the project will begin there. 
The right most column is the **inclusion column** and is the place where studies will go to be included in the meta-analysis. 

The overall goal is to get studies from the left most starting column, and narrow them down to a final subset of included studies in the right most column.
If a study is not eligible for inclusion at any point of the process, it should be set as "excluded" before it reaches the inclusion column.
(Studies within the inclusion column cannot be excluded.)

The curation step is complete when all studies have been categorized, either by being included or excluded.

When you first start the curation phase, a button appears prompting you to get started. Clicking this button will 
yield a few workflow options in a dropdown. Depending on the workflow option you choose, different curation columns 
will be created to best suite your approach. This sets the tone for how you would like to approach the curation phase, 
as well as the meta-analysis in general.

The options are explained in more detail below:

### PRISMA Workflow

PRISMA stands for the **Preferred Reporting Items for Systematic Review and Meta-Analyses**. The
[PRISMA guidelines](http://www.prisma-statement.org/?AspxAutoDetectCookieSupport=1) are a set of rules for reporting a 
systematic review, and are the gold standard for producing a proper, rigorous, and transparent meta-analysis.

If you are trying to create a rigorous [manual meta-analysis](/compose-docs/tutorial/manual), or if you are trying to create a
[PRISMA compliant semi-automated meta-analysis](/compose-docs/tutorial/semi-automated), you will want to select this option.

When you select this option, neurosynth-compose will automatically initialize the curation step with 4 distinct columns as
dictated by PRISMA guidelines: **Identification, Screening, Eligibility, Included**.

After importing studies into neurosynth, they will be placed into the identification column and studies are triaged from there.

:::info PRISMA Summary
The **Identification** column is where all imported studies are deposited into initially. As alluded to by the name, the identification
column is where you identify all records yielded from your search. In this column, you wil exclude studies purely based on whether they are 
duplicates of existing studies. All other studies are promoted.

The **Screening** column consists of all records that have been screened for duplicates. In this column, you want to review the titles/abstracts of studies 
and exclude purely based on whether they are irrelevant to your research question or domain. All other studies are promoted. 

The **Eligibility** column consists of all records that have been screened for duplicates and irrelevant content. In this column, you want to 
review the full text of studies and exclude based on whether the study described aligns with the standards of the meta-analysis itself. Reasons 
for exclusion may include wrong setting, wrong patient population, wrong intervention, wrong paragdigm, etc.

The **Included** column consists of all records that have passed previous levels of exclusion and can be considered for the next step of the project.

For more information, consult the [PRISMA guidelines](http://www.prisma-statement.org/?AspxAutoDetectCookieSupport=1).
:::

### Simple Workflow

If you are trying to create a less rigorous [semi-automated meta-analysis](/compose-docs/tutorial/semi-automated), 
or if you want to create an [automated meta-analysis](/compose-docs/tutorial/large-scale) but filter the studies that go into it, 
you will want to select this option.

Selecting this option will initialize the curation phase with two columns. Similar to the PRISMA compliant workflow, the left most column 
is where studies will be placed when they are imported into the project. However, this workflow is much more straightforward. If a study needs to be 
excluded for any reason, it is excluded in this column. All other studies should then be promoted to the right most inclusion column which will include them
within the meta-analysis.

### Custom Workflow

If there is another workflow that is needed but not supported by the above two options, you can select this option to manually set the number of 
curation columns as well as the curation column names.

The left most column will still be where imported studies are placed into, and the right most column will remain the inclusion column.

## Importing

After selecting a workflow, you need to import studies into the curation phase. There are multiple ways to do this to allow for maximum 
flexibility.

To begin, click the **IMPORT STUDIES** button on the top right. This will bring you to a wizard which will walk you through the steps required 
to import studies into neurosynth-compose. After selecting the studies for import, you will be asked to give your import a name and address 
any potential duplicates that may arise.

:::tip
When it comes to naming your import, we recommend giving a name that is useful or semantically meaningful. This will be useful when you come back 
and want to know where a certain study was imported from and helps with provenance.
:::

The import options are explained in more details below:

### Import from Neurostore

Importing from neurostore utilizes the Study search UI similar to the [Study Page](https://compose.neurosynth.org/studies).
After entering your search, click the bottom right button to import the searched studies into your project.

:::tip
We recommend importing from neurostore whenever possible. Studies imported from neurostore are highly likely to have coordinates that are 
already present. This will save a lot of time and effort during the extraction phase.
:::

### Import from PubMed

Use this option to import studies directly from PubMed. To start, you need to go to the [PubMed Site](https://pubmed.ncbi.nlm.nih.gov/) 
and either enter in a search or navigate to a previously created collection. 

To import the search or collection from PubMed into neurosynth-compose, you will need a text file containing a list of PMIDs.
You can obtain this by going to your collection/search and clicking the **Save** button. Set **Selection** to **All results** 
and set **Format** to **PMID**. Click **Create file** and your text file containing the PMIDs will be generated and downloaded.

:::caution
Neurosynth-Compose uses the PubMed API to import studies. As a result, the maximum number of PMIDs that can be imported at once is 1,500.
If your collection or search has more than 1,500 PMIDs, consider splitting the import into multiple different text files.
:::

### Import from BibTex/RIS/endnote

Use this option to import studies via a .bib, .RIS, or .enw file. This may be useful if you want to import from a citation manager like Zotero.

### Create Custom Study

If there is any record that cannot be easily imported using one of the methods listed above, you can also manually create a study. This may be necessary 
to include resources like unpublished studies.

### Handling Duplicates

When neurosynth-compose detects duplicates, it will ask the user to choose how they want to reconcile. In most cases 
the user will want to mark one study as a duplicate and keep the other one. However, the user always has the flexibility to keep both.

If the "KEEP THIS STUDY" button is selected, the interface will immediately set the other options as "THIS IS A DUPLICATE". This feature is 
a convenience and is the most common use case, but can be overridden simply by selecting a different option for the given study.

:::info
Neurosynth-compose does not delete studies. When a duplicate is discovered, neurosynth-compose has the user decide how they want to 
proceed. If a study is marked as a duplicate, it is set as **excluded** but it is not discarded. This is to ensure that provenance during the 
curation process is maintained.
:::

There are two potential ways that duplicates can occur.

#### Duplicates are detected between the studies being imported and the studies already in the project

This will happen if you are importing a study and we have detected that either the title, PMID, or DOI is the same as 
one already in the project. If this happens, step (5) of the import page will ask you to reconcile these duplicates.

If a study has already been promoted, marking it as a duplicate will effectively "demote" it, bringing it back to the first column.
This occurs even for non-PRISMA workflows.

#### Duplicates are detected within the file you are importing

Although rare, it is possible to have duplicates within a given import. This can happen if the RIS file you are importing has duplicate entries for example.
If this occurs, neurosynth-compose will prompt the user to select which study they want to keep, and which ones they want to discard just like 
in the above case.

Studies marked as duplicate in the import are not deleted.

## Excluding and Promoting Studies

Once studies have been imported into the first column of the curation phase, they need to be triaged. Depending on what kind of rigor you want to 
employ for your meta-analysis, this process of excluding and promoting studies may be quite involved.

To begin, either click on the button at the top of the column or click on any study in the column. This will open up a dialog page which will show the study 
along with a bunch of options: **PROMOTE, NEEDS REVIEW**, and **EXCLUDE**. There is also a button to **ADD TAGS** which will assign an informational tag to the 
study.

All studies must be either excluded or moved to the inclusion column in order to progress to the extraction phase.

### Exclude

To exclude a study, click the **EXCLUDE** button and select the exclusion reason. You can either choose from the preset exclusion reasons or you can begin 
typing to create a new one.

For the PRISMA workflow, the button looks a bit different. Depending on the column you are on (identification vs screening vs eligibility) a default exclusion 
reason will be down on the button. While we do not recommend it, you can click the arrow button and start typing in the input to create a new exclusion reason.
Revisit the [PRISMA workflow section](/compose-docs/guide/pages/Project/Curation#prisma-workflow) for a reminder of what exclusion criteria to use for each 
column. 

### Promote

If you have determined that you have no issues with the study for the current curation column, you can click the **PROMOTE** button which will move the 
study forward to the next curation column on the right. If it is moved into the right most inclusion column, then it will be included in the meta-analysis.

For the first column (and especially in the case of a PRISMA workflow) it can be quite tedious to promote all the studies to the next curation column. If you think that all duplicates have been resolved, you can exit the dialog and click the **PROMOTE ALL UNCATEGORIZED STUDIES** button. This will promote all studies in the first 
curation column that have not been excluded.

## Move to Extraction

When you have successfully categorized all the imported studies by either excluding them or moving them to the inclusion column, then you have 
successfully completed the curation portion of the meta-analysis.
Neurosynth-Compose can detect this and will reveal a new button: **MOVE TO EXTRACTION PHASE**.

Clicking this button will move you back to the project page and get you started on the next major component to building your meta-analysis: extraction.