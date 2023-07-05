---
title: Extraction
sidebar_position: 0
---

import AnnotationTableExample from '@site/src/components/annotation-table-example';
import ReadOnlyStudyBanner from '@site/src/components/readonly-study-banner';
import OutOfSyncBanner from '@site/src/components/out-of-sync-banner-example';

# Extraction

## Introduction

The extraction phase is the second step when creating a meta-analysis. It involves taking the 
new [**studyset**](/compose-docs/guide/glossary#studyset) that has been curated during the previous phase 
and going through the papers, extracting relevant information like [**annotations**](/compose-docs/guide/glossary#annotation), 
relevant **metadata**, and [**points**](/compose-docs/guide/glossary#point).

## Getting Started with Extraction

Right after the curation phase is complete, the user is redirected to the project page. Here, the extraction phase starts when 
a wizard that pops up and guides the user through the process of initializing the extraction phase. On top of creating the 
initial [**annotation columns**](/compose-docs/guide/pages/Project/Extraction#annotations), this wizard also guides the user through the
process of [**ingestion** ](/compose-docs/guide/pages/Project/Extraction#ingestion) of the curated studies to create a new [**studyset**](/compose-docs/guide/glossary#studyset).

## Annotations

[Annotations](/compose-docs/guide/glossary#annotation) are an abstracted way to attach data to a given analysis within a study. The purpose of this could be in order to 
assign a piece of metadata to each analysis, or filter the analyses that you want to include within the meta-analysis.

In this walkthrough, we'll focus on the latter case.

:::info
At this stage, only boolean annotation values can be used to filter analyses to include within the meta-analysis. Further improvements will 
be added to support other types of values. 
:::

What is an annotation? You can think of an annotation as a layer on top of the studyset that attaches additional information.

For an imaginary studyset with the following studies and analyses:
 - Effects of varenicline on smoking cue-triggered neural and craving responses
    - Analyses:
        - smoking < nonsmoking
        - smoking > nonsmoking
        - smoking vs placebo
 - Nicotine effects on default mode network during resting state
    - Analyses:
        - post placebo < pre placebo
 - Effects of an alpha 7-nicotinic agonist on default network activity in schizophrenia
    - Analyses:
        - Placebo > DMXB-A

The resulting annotations interface would look something like this:

<AnnotationTableExample />

**Rows in the spreadsheet represent all the analyses in the studyset.** In the above annotation example, the first study has multiple analyses.

**The columns in the spreadsheet represent the variable names.** In the above annotation example, the first two columns are reserved for the names of the 
studies and analyses. The third column is a variable ```included```. The checkboxes in this column show the values for each 
analysis corresponding to the ```included``` variable.

:::info
**included** is a variable that is added by default to all annotations. Every time an analysis is created and added to a study, ```included``` is automatically 
set to true for that analysis.
:::

You can always view the annotations view by clicking the <span style={{ color: 'orange' }}>VIEW ANNOTATIONS</span> button in the extraction page on the top right.
Alternatively, if you want to view the analyses only for a specific study, you can click the on the study in the extraction page and expand the <span style={{ color: 'orange' }}>Study Annotations</span> section.

## Ingestion

Ingestion describes the process of taking the studies from the curation phase and inserting them into the database one by one.

For each study, neurosynth-compose searches the neurostore database and checks to see if a matching study exists. If a match 
does not exist, then a new study is created and the user must go to the paper to fill out the relevant details.
If one or more matches are found, the user has the option of either ignoring the existing options and creating a new study anyway, or selecting 
one of the existing matches.

**Selecting an existing study is recommended as opposed to creating a new study from scratch. By selecting an existing neurostore study, you 
are leveraging neurostore's automatic extraction. As the coordinates have already been extracted for you, this will save you a lot of time and effort 
during the extraction process.** 

:::info Why ingestion?
During the curation phase, studies are actually not inserted into the database. A vast majority of the studies that 
are imported into the curation phase are excluded during the curation process. Inserting these studies into the database would clutter 
it and create a lot of empty entries which don't have coordinates and might not even be used. By waiting until we have our finalized 
included subset of studies, we reduce the number of empty, useless studies in the database.
:::

## Study Editing

Studies in the extraction phase are categorized to help better organize and facilitate the overall process. Initially, all studies 
start as **Uncategorized**. The user can then decide to mark them as **Save For Later** if they want to bookmark the study in the future,
or **Completed** to note that extraction is complete for that study.

There are two ways to mark a study as Save For Later/Completed. 
 - You can do it on the main extraction page when viewing the list of studies. 
    - If you are viewing studies within the Uncategorized tab, each study in the list will have two buttons on the right to either set the study as completed or to set it as save for later. 
    - If viewing studies in the Save For Later tab, each study will have the option to set it as completed. 
    - If viewing studies in the Completed tab, each study will have the option to set it back to Save For Later.
 - You can do it when viewing a single study. Once you click on a study (or if you are editing a study) the right side of the page will have two buttons
 to either set the study as completed or set it as save for later.

**The extraction process is complete when all studies have been marked as completed**.

:::tip
To effectively skip the extraction step and rely solely on the automatically extracted coordinates, you can go to the project page and 
under the **Extract & Annotate** section click <span style={{ color: 'darkgreen' }}>MARK ALL AS COMPLETE</span>. This will automatically 
move all the studies in the extration phase to **Completed**.
:::

### Read Only Studies

When ingesting and when a match exists, you have the option of choosing to use an existing neurostore study or to create your own. The 
benefit of choosing an existing neurostore study is that the coordinates have already been extracted for you. Because the study is an existing one 
and not one that you own, you will be greeted by a banner:

<ReadOnlyStudyBanner />

If there are no changes that you need to make to the study, then you can ignore the banner and move on.

If you need to make changes to the study, then click the <span style={{ color: "orange" }}>CLONE AND EDIT</span> button. This will replace your copy
of the study with a newly created one, setting you as the owner.

:::tip
You do not need to clone a study in order to edit that study's annotations.
:::

### Study Annotations

As mentioned in the [annotations section](/compose-docs/guide/pages/Project/Extraction#annotations), annotations variables can be added to 
analyses within studies to attribute a value to them. This can either be done in the larger annotations view by clicking <span style={{ color: 'orange' }}>View Annotations</span> in the extraction page, or clicking on a given study and expanding the <span style={{ color: 'orange' }}> Study Annotations</span> accordion.

While in the study annotations view you can only modify analysis values for the given study, within the larger annotations view you can
modify analyses for all studies as well as add additional annotation variables (i.e. annotation columns).

### Study Edit Interface

Editing a study is split into 3 different sections.
 - Details
    - Edit the study name, authors, PMID, DOI, year, journal, and description.
 - Metadata
    - Add/remove/edit any metadata associated with the study itself.
 - Analyses
    - Represents the contrasts that exist within a given study. For each analysis, create a contrast and enter in the coordinates that are associated with that contrast.

## Syncing Between Curation and Extraction

Moving to extraction signifies that you have completed the previous curation phase and no changes are needed.
In practice however you may find that after initializing the extraction phase, you accidentally included a study you didn't want to include, or forgot to import/include 
some studies.

If this is the case, go ahead and make the curation phase changes as required. Once complete, go back to the extraction phase. You will notice that a new banner has appeared:

<OutOfSyncBanner />

neurosynth-compose will automatically detect if there are any inconsistencies between the curation phase and the extraction phase. By clicking <span style={{ color: '#0a77b4' }}>FIX THIS ISSUE</span>, neurosynth-compose will add/remove studies from the extraction phase, reingesting new ones if necessary.