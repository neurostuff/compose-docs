---
title: Extraction
sidebar_position: 1
---

# Extraction

Extraction is the second step in creating a meta-analysis. It involves taking the
new [**Studyset**](/compose-docs/guide/glossary#studyset) creates in the curation step and extracting relevant information from studies, such as [**annotations**](/compose-docs/guide/glossary#annotation),
and peak activation coordinates, or [**points**](/compose-docs/guide/glossary#point).

## Getting Started

After the curation phase is complete, the user is redirected to the extraction phase. You can also access the Extraction phase through the main project page.

Here, the extraction phase starts when
a wizard that pops up and guides the user through the process of initializing the extraction phase. On top of creating the
initial [**annotation columns**](./Extraction#annotations), this wizard also guides the user through the
process of [**ingestion** ](./Extraction#ingestion) of the curated studies to create a new [**studyset**](../glossary#studyset).

## Ingestion

Ingestion describes the process of taking the studies from the curation phase and inserting them into the database one by one.

For each study, neurosynth-compose searches the neurostore database and checks to see if a matching study exists. If a match
does not exist, then a new study is created and the user must go to the paper to fill out the relevant details.
If one or more matches are found, neurosynth-compose will choose the most recently updated one by default. The user can later go in and switch to a different version if the one selected is not the ony they wanted.

:::info Why ingestion?
During the curation phase, studies are actually not inserted into the database. A vast majority of the studies that
are imported into the curation phase are excluded during the curation process. Inserting these studies into the database would clutter
it and create a lot of empty entries which don't have coordinates and might not even be used. By waiting until we have our finalized
included subset of studies, we reduce the number of empty, useless studies in the database.
:::

## Extraction Table

![Extraction Table](/guide/extraction_table.png)

Once ingestion is complete, the user is shown a table listing the studies within the studyset. The extraction step involves iteratively reviewing each study to make sure they contain information amenable to a meta-analysis.
Studies in the extraction phase are filtered and categorized to help better organize and facilitate the process. Initially, all studies
start as **Unreviewed**. The user can then decide to mark them as **Save For Later** if they want to revisit the study, or **Completed**.

If the study does not have any already extracted coordinates, then the user should go and find the original paper and manually search for the coordinates to add to the study.

If the study has automatically extracted coordinates, then the user only has to validate that these coordinates are satisfactory.

The table provides functionality for filtering amongst various columns as well as sorting. To start editing a study, click on one of the table rows.

## Annotations

![Annotations Table](/guide/annotation_spreadsheet.png)

[Annotations](../glossary#annotation) are a way to assign data to each [**analysis**](../glossary#analysis) within the studyset. Annotation values can be later used to filter out analyses to include within a meta-analysis.

In the extraction page, click the "Annotations" button on the top right. Annotations are represented with a spreadsheet like interface, where the row headers are the respective studies and their analyses, and the column headers are the properties for
each of those study analyses. Each cell in the spreadsheet repreesnts the value for a given property of a study's analysis.

By default, all annotations will start with a column **included** which will be set to true. This column can be modified if needed.

## Study Editing

![Study Editing](/guide/study_edit.png)

Clicking on a study in the extraction table will lead you to the study editing page. This page allows you to edit study coordinates, add new analyses to the study, as well as modify the study name, authors, PMID, DOI, etc.
If you would like to update the annotation values just for the given study, you can do so utilizing the study annotations table.

## Syncing Between Curation and Extraction

![Out of Sync](/guide/out_of_sync.png)

In an ideal meta-analysis process, once the curation phase is completed then it is not touched again. However, this is not always possible in the real world.

If the curation phase is modified (for example if a study previously marked as "included" was excluded, or an additional study that was previously excluded was changed to "included") then the extraction phase
no longer represents the output of the curation phase. In a situation like this, we need to resynchronize these two so that the extraction phase is aligned again. When neurosynth-compose encounters a mismatch
between the two phases, a banner will pop up prompting the user to synchronize the extraction phase with the new curation phase updates.

Successfully resynchronizing the two phases will cause the banner to go away.

## Completion

The extraction phase is considered complete and the user is prompted to move on when all studies have been marked as complete. Once this step is complete, it is then time to specify the configurations for your meta-analysis.
When all studies are marked as completed, a button should appear prompting the user to continue the meta-analysis process.

:::info
If you would like to skip the extraction step, then you can go back to the project page and click the button: "Mark all as complete" underneath the extraction section.

![Mark all as complete](/guide/mark_all_as_complete.png)
:::
