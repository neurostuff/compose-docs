---
title: Extraction
sidebar_position: 0
---

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

## Annotations

## Study Editing

Studies in the extraction phase are filtered and categorized to help better organize and facilitate the process. Initially, all studies 
start as **Uncategorized**. The user can then decide to mark them as **Save For Later** if they want to revisit the study, or **Completed**.


### Read Only Studies

### Study Annotations

### Study Edit Interface

## Syncing Between Curation and Extraction