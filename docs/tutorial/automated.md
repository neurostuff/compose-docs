---
sidebar_label: 'Automated Meta-Analysis'
sidebar_position: 3
---

# Automated Meta-Analysis

:::caution
This tutorial, and the functionality for automated meta-analysis, is under construction.
To view existing automated meta-analyses, you can use [Neurosynth Original](https://neurosynth.org)
:::

## Why automated meta-analysis?
The principal difference between an automated and a [manual meta-analysis](manual.md) is *the process used to select the final set of Studies and Analyses to include* into your meta-analysis. 

In a **manual meta-analysis**, researchers cast a wide net to find a wide range of potentially relevant articles, and use their expertise (read: painstakingly review hundreds of articles) to decide which of articles are relevant to their research question. Our platform seeks streamline this process through a user-friendly interface and pre-extracted data for over 20,000 neuroimaging studies. Yet, **a gold standard meta-analysis still requires a significant time investment**, limiting their application in routine scientific practice.

In an **automated meta-analysis**, we  instead use data-driven text mining metrics to *select* articles. The original *Neurosynth* pioneered this approach by developing text mining techniques to automatically extract brain coordinates and semantic text features from thousands of articles. 

Surprisingly, this works! For example, by meta-analyzing all studies that mention the term ["emotional"](https://neurosynth.org/analyses/terms/emotional/) above a certain frequency, we observe a strong association with activity in the amygdala. By and large, the sheer number of studies overcomes the inherent noisiness of automated data extraction and study selection. 

### Flexible automated meta-analysis in Neurosynth Compose

Although automated meta-analyses have proved to be a useful tool, there are several limitations. The overall goal of *Neurosynth Compose* is to give users a flexible data curation platform, to overcome these limitations using their expert knowledge. For example:
 
- *Flexible selection criteria.* The original Neurosynth has a fixed number of terms and meta-analyses. With*Neurosynth Compose* you can flexibly search the NeuroStore database using a powerful and flexible search to  precisely define your search criteria. 
 - *Combine expert knowledge with automated selection.* Automated study selection is inherently an noisy and imperfect measure. With *Neurosynth Compose*, you can use automated study selection as a first pass, and later apply your own expert criteria to refine study inclusion criteria. 
 - *Correct data extraction errors.* Automated extraction can miss entire tables of coordinates (e.g. supplementary materials), duplicate coordinates, and groups distinct sets of Analyses (e.g. Contrasts) into a single group. Now, you can correct these data to make your meta-analysis more precise. 

## Tutorial

An automated meta-analysis in *Neurosynth Compose* looks a lot like a manual one, except  data curation is optional. We reccomeend following the [manual meta-analysis](manual.md) tutorial to learn in depth about our platform.

### Search & Curate

One of the main differences between a *manual* and *automated* meta-analysis, is the steps required to select studies. As such, we reccomeend selecting the "Simple" curation workflow, which only consists of a single data curation step (which is optional). 

![Simple Workflow](/tutorial/automated_workflow.png). 

:::tip
Decide ahead of time if you want to perform a Coordinate or an Image based meta-analysis. Image-based Meta-Analysis (IBMA) is more precise and powerful, but there are much fewer studies available. 
:::

#### Import from Neurostore

Let's add studies to our curation board by clicking **Import Studies**. 
In an automated meta-analysis, you'll want to select *Import via NeuroStore*, as all indexed studies are guaranteed to contain imaging data (saving you from manual data extraction).

:::caution
Although the NeuroStore database is continuously growing, it is necessarily an incomplete snapshot of the neuroimaging literature
:::

Input any search term to narrow down studies. This will search the Title and Abstract fields. You may also add additional search filters using the **+ Add Filter** button, and *select the desired modality of the imaging data*. 

![Neurostore Search](/tutorial/automated_search_neurostore.png). 

To import your search, click "Import Studies From Neurostore" at the bottom right. Give your import a name to Tag all imported studies, and continue back to your Curation board. 

:::note
You must import an entire set of search results into your curation board. If you want to exclude any specific studies, you will do so on your board. This allows the Search & Curate process to be fully reproducible.
:::

#### Promote studies

Back to your Curation board, you will now see all studies from your NeuroStore search on the left most column.

![Curation board](/tutorial/automated_curation.png). 

At this point, you have two options: manually review the search results and select which studies to include, or perform a fully automated meta-analysis by including all search results. 

For this tutorial, we'll skip manual curation and **Promote All Uncategorized Studies** to the right-most "Included" column. 

We can now click *Move to Extraction Phase*.

### Extraction and Annotation

At this point, you will create a StudySet containing all of your Studies. Advance through the dialog to begin *Extraction*.

The goal of this phase is to add or correct imaging data (e.g. Coordinates) in imported studies, and create Annotations to determine which Analyses (e.g. Contrasts), should be included in your meta-analysis.

Since we are performing a manual meta-analysis, we're going to skip these steps!

From the main *Project* page, we can click "Mark All as Complete".

![Skip Extraction](/tutorial/automated_skip_extraction.png). 

:::tip
It's up to you if you want to skip this step. The validity of your meta-analysis is highly dependant on input data, so we only recommend skipping all curation for exploratory analyses.
:::

### Specify Meta-Analyses

You can now specify your meta-analysis. This step will be identical between automated and manual meta-analyses.

First, we select the "included" column, which by default includes *all* Study Analyses as inputs.

![Inclusion column](/tutorial/automated_included_column.png). 

Next, we select a meta-analysis algorithm. This time, we'll select MKDA Chi-Squared (`MKDAChi2`) with `FDRCorrector`. 

MKDA Chi-Square compares your StudySet to a reference set of studies (all the studies in NeuroStore that you did *not* select), allowing you to identify areas of stronger association with your selected studies. This is the algorithm used in the original Neurosynth Platform.


### Execute

Once you specify your meta-analysis, you can execute it in the cloud using Google Colab using your unique meta-analysis id. 

![Automated execute](/tutorial/automated_execute.png). 

Congratulations, you have now run an automated meta-analysis!

Remember, just because it is easy to run a meta-analysis and get results, does not mean the results are valid. 
It is important to think about the validity of your study selection process, for both manual and automated meta-analyses.

