---
sidebar_label: 'Manual Meta-Analysis Tutorial: Cognitive Control & Aging'
sidebar_position: 3
---

# Cognitive Control & Aging

*Neurosynth Compose* provides a streamlined workflow to help you curate studies, extract coordinate data, and run a cloud-based meta-analysis—while keeping your decision process transparent and reproducible.

:::tip
This tutorial is written to feel similar to the [Manual Meta-Analysis tutorial (deprecated)](./manual.md), but showcases the new *Neurosynth Compose* interface and features.
:::

## Your research question

We’ll investigate *differences in cognitive control* between **older adults (65+)** and **younger adults**, using common cognitive control task families:

- Stroop
- Flanker
- Go/NoGo
- Stop-signal
- N-back

In practice, “cognitive control” is broad. A small up-front investment in defining what you mean (and what you do *not* mean) will save you from painful rework during Eligibility.

:::note Figure placeholder
Add a simple schematic showing the study flow: Search → Screen → Eligibility → Extract → Specify → Run.
:::

## Inclusion & exclusion criteria (copy/paste checklist)

Write these down *before* you start screening. You’ll use them repeatedly.

### Inclusion criteria

1. **Older group is 65+** (older adults are defined as age 65 or above).
2. **Task is one of:** Stroop, Flanker, Go/NoGo, Stop-signal, N-back.
3. **Contrast is older vs younger** (a between-group comparison between an older and a younger group).
4. **Whole-brain results** (exclude ROI-only studies).

### Exclusion criteria

1. **Connectivity-only**: exclude studies that report only connectivity measurements (e.g., functional connectivity) without task-evoked coordinate peaks suitable for coordinate-based meta-analysis.
2. **No coordinates**: exclude studies that do not report any stereotaxic coordinates.

:::tip
If you anticipate running separate meta-analyses by task (e.g., Stroop-only vs N-back-only), keep the same criteria and add task labels during Extraction using Annotations.
:::

## Creating a new Project

*Projects* contain all the Steps necessary to create a meta-analysis in Neurosynth Compose.

To get started, *sign in*, and select **New Project**.
Name your project something you’ll recognize later, such as: “Cognitive control in older adults”.

:::note Figure placeholder
Insert a screenshot of the new Project dialog and the three stages (Search & Curate → Extract & Annotate → Specify Meta-Analyses).
:::

## Search & Curate (PRISMA workflow)

The goal of this phase is to go from a *broad* literature search to a final, defensible StudySet that matches your criteria.

Select the **PRISMA** curation workflow to keep your decisions structured (Identification → Screening → Eligibility → Included).

### Importing studies (NeuroStore + PubMed)

Click **Import Studies** to add papers to your PRISMA board. You can:

- search within *NeuroStore* (fastest when the study already has extracted coordinates), or
- import from external sources like PubMed (best when you want maximal coverage).

#### A practical PubMed query (starting point)

Use this as a starting point, then refine based on what you see during Screening:

```
("fMRI" OR "PET" OR "neuroimaging" OR "functional MRI" OR "functional magnetic resonance imaging")
AND ("aging" OR "ageing" OR "older adult*" OR elderly)
AND (stroop OR flanker OR "go/no-go" OR go-nogo OR "stop signal" OR "stop-signal" OR "n-back" OR nback)
AND (young OR younger)
```

:::tip
If your query returns many electrophysiology-only papers, add a stricter imaging clause (e.g., require fMRI in the title/abstract).
:::

#### NeuroStore search tips

If you use NeuroStore search, try one task family at a time (e.g., “stroop older younger”), and filter to **coordinate** data when available.

:::note Figure placeholder
Insert a screenshot of an Import Studies dialog with example search terms and filters for coordinate-based studies.
:::

### Step 1: Identification (deduplicate)

Import your candidate studies (via NeuroStore search, PubMed IDs, or your reference manager export), then remove duplicates during **Identification**.

:::note Figure placeholder
Insert a screenshot of the Identification column showing duplicates and the deduplication UI.
:::

### Step 2: Screening (title/abstract relevance)

In **Screening**, you’re trying to answer one question quickly:

“Is this plausibly a neuroimaging study of cognitive control that could include older (65+) and younger groups?”

Helpful heuristics for Screening:

- Look for the task keywords (stroop/flanker/go-no-go/stop-signal/n-back).
- Look for aging terms (older, elderly, aging, age-related).
- Look for imaging terms (fMRI, PET, neuroimaging).

Don’t overthink Screening. If you’re unsure, **promote** it and decide during Eligibility with the full text.

### Step 3: Eligibility (full-text criteria)

Eligibility is where your criteria become enforceable. Open the full text and verify:

- The older group is **65+**
- The task is **one of stroop/flanker/go-no-go/stop-signal/n-back**
- The results include a **between-group contrast** (older vs younger)
- The paper reports **stereotaxic coordinates**
- The paper is not **connectivity-only**

:::tip
When you exclude a study at Eligibility, write the exclusion reason as if you’re explaining it to a collaborator who hasn’t read the paper. Future-you will thank you.
:::

:::note Figure placeholder
Insert a screenshot of the Eligibility review dialog highlighting custom exclusion reasons (e.g., “Connectivity-only”, “No coordinates”, “No older-vs-younger contrast”).
:::

### Step 4: Included (final check)

Once you’ve promoted studies into **Included**, pause and sanity-check:

- Do you have a reasonable mix of tasks, or is everything one task family?
- Are you accidentally including “aging” studies with no younger comparison group?
- Are any studies duplicates in disguise (e.g., same sample reported across multiple papers)?

When ready, click *Move on to Extraction*.

## Extract & Annotate

The goal of this phase is to make sure the analyses you run are *exactly* the ones you intend: correct coordinates, correct task labels, and correct older-vs-younger contrasts.

### Extract coordinates (when needed)

For studies not already indexed with coordinates, add them from the paper:

- Find the table(s) of peak coordinates (MNI or Talairach).
- Create an **Analysis** per relevant contrast.
- Enter each reported peak as a coordinate row (X, Y, Z), with the correct space.

:::note Figure placeholder
Insert a screenshot of the Analysis editor showing the coordinate table and the coordinate-space selector.
:::

:::caution
Many papers report multiple contrasts (and sometimes multiple tasks) within the same table. Be careful not to mix peaks from different contrasts into the same Analysis.
:::

### Add Annotations to keep yourself organized

Annotations let you tag each Analysis so you can filter precisely later.

Recommended annotation columns for this tutorial:

- `task` (String): `stroop`, `flanker`, `go_nogo`, `stop_signal`, `n_back`
- `contrast_direction` (String): `older_gt_younger` or `younger_gt_older`
- `eligible` (Boolean): a final, manual “yes/no” that reflects your criteria

:::tip
Start with broad labels. You can always add finer-grained labels later (e.g., “Stroop interference” vs “congruent vs neutral”) once you see what the literature actually reports.
:::

## Specify your meta-analysis (one question per model)

From the Project page, proceed to **Meta-Analysis Specification**.

To keep interpretations clean, define separate specifications when you’re asking meaningfully different questions, for example:

- All tasks combined, `older_gt_younger`
- All tasks combined, `younger_gt_older`

In the specification wizard, select the Annotation you want to filter on (e.g., `older_gt_younger`), then choose an algorithm/corrector with the default parameters unless you have a strong reason to change them.

:::note Figure placeholder
Insert a screenshot of the meta-analysis specification wizard showing filtering by annotations.
:::

## Run, inspect, and iterate

Run your meta-analysis using the provided cloud workflow (e.g., the linked notebook).

As you inspect results, keep the human question front-and-center:

- “Do these maps reflect *cognitive control differences*—or did I unintentionally mix in working memory, motor inhibition, or error monitoring contrasts that aren’t comparable?”

If something looks off, the most common fix is upstream:

- tighten Eligibility criteria,
- correct mislabeled Analyses,
- split mixed Analyses into separate contrasts,
- or run task-specific sub-analyses.

:::note Figure placeholder
Insert a screenshot of a results view (thresholded + unthresholded) and a short caption space for interpretation notes.
:::

## Wrap-up

You now have a reproducible workflow for a coordinate-based meta-analysis of **cognitive control and aging**, grounded in explicit criteria and organized around the contrasts you actually care about.

