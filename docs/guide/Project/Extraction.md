---
title: Extraction
sidebar_position: 1
---

# Extraction

Extraction is the second step in creating a meta-analysis. It involves using the
[**Studyset**](/compose-docs/guide/glossary#studyset) created during the curation step to extract relevant information from studies, such as [**annotations**](/compose-docs/guide/glossary#annotation), and peak activation coordinates, or [**points**](/compose-docs/guide/glossary#point).

## Getting Started

Once curation is complete, the user is redirected to the extraction phase.

This phase begins with a wizard that guides the user through initializing the extraction process. In addition to creating initial [**annotation columns**](./Extraction#annotations), the wizard assists the user with the [**ingestion** ](./Extraction#ingestion) of curated studies to generate a new [**studyset**](../glossary#studyset).

## Ingestion

Ingestion is the process of importing studies from the curation phase into the database.

For each study, Neurosynth-Compose searches the Neurostore database for matches. If a study is not already in the database, a new entry is created, requiring the user to extract relevant information from the corresponding paper (e.g., activation coordinates). 

If multiple matches are found, the most recently updated one is selected, though the user can switch to a different version if desired. Existing versions may have been automatically extracted by the database or contributed by other users.

:::info Why Ingestion? 
During curation, studies are not yet inserted into the database. Many studies imported during curation are excluded from the final set. Inserting all studies at this stage would clutter the database with entries that lack coordinates or may never be used. By waiting until the final subset is selected, we reduce the number of empty or irrelevant entries in the database. 
:::

## Extraction Table

![Extraction Table](/guide/extraction_table.png)

Once ingestion is complete, the user is shown a table listing the studies within the studyset. The extraction step involves iteratively reviewing each study to make sure they contain information suitable for meta-analysis.
Studies in the extraction phase are filtered and categorized to better organize and streamine the process. Initially, all studies
are marked as **Unreviewed**, and the user can decide to mark them as **Save For Later** if they want to revisit the study, or **Completed** when they are finished.

If a study does not have any extracted coordinates, the user must manually locate the original paper and find the coordinates to add to the study.

If the study has automatically extracted coordinates, the user needs only to verify that these coordinates are satisfactory.

The table provides functionality for filtering amongst various columns as well as sorting. To start editing a study, click on one of the table rows.

## Annotations

![Annotations Table](/guide/annotation_spreadsheet.png)

[Annotations](../glossary#annotation) are a way to assign data to each [**analysis**](../glossary#analysis) within the studyset. Annotation values can be later used to filter out analyses to include within a meta-analysis.

In the extraction page, click the "Annotations" button on the top right. Annotations are represented with a spreadsheet like interface, where the row headers are the respective studies and their analyses, and the column headers are the properties for
each of those study analyses. Each cell in the spreadsheet repreesnts the value for a given property of a study's analysis.

By default, all annotations will include a column labeled included, which is initially set to true. This column can be modified if needed.

## Study Editing

![Study Editing](/guide/study_edit.png)

Clicking on a study in the extraction table leads to the study editing page. Here, users can edit study coordinates, add new analyses to the study, and modify details such as the study's name, authors, PMID, DOI, etc. If you wish to update annotation values for a specific study, you can do so using the study's annotations table.

## Syncing Between Curation and Extraction

![Out of Sync](/guide/out_of_sync.png)

Ideally, once the curation phase is complete, no further changes are made. However, in practice, this is not always possible.

If changes are made during the curation phase (for example, if a previously included study is excluded or an excluded study is included), the extraction phase will no longer align with the output of the curation phase. In such cases, the extraction phase needs to be resynchronized with the updates from the curation phase. When Neurosynth-Compose detects a mismatch between the two phases, a banner will appear prompting the user to resynchronize the extraction phase with the updated curation phase.

## Completion

The extraction phase is considered complete once all studies have been marked as Completed. At this point, the user is prompted to proceed to the meta-analysis configuration step. Once all studies are marked as complete, a button will appear, allowing the user to continue with the meta-analysis process.

:::info
If you would like to skip the extraction step, you can return to the project page and click the "Mark all as complete" button under the extraction section.

![Mark all as complete](/guide/mark_all_as_complete.png)
:::
