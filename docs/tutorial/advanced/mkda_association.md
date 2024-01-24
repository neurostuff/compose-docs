---
sidebar_label: 'MKDA Chi-Squared Association'
sidebar_position: 3
---

# MKDA Chi-Squared and large-scale association tests
*How to perform large-scale association tests using MKDA Chi-Squared Meta-Analysis, with a Social Processing example*

import { Card, CardContent, Typography, Button } from '@mui/material';
import { FaDownload } from 'react-icons/fa'

## The Problem

A key feature that sets aside the Neurosynth platform is large-scale “association" maps (which we previously called "reverse inference" maps).

In a neuroimaging meta-analysis, researchers pool a set of studies that invoke a common psychological construct or task to determine where brain activity is consistently activated.

Although this is a useful approach, there is a significant inferential challenge-- namely, determining how *specific* the relationship between activity in a given region and the cognitive state invoked by the target task. This is difficult, in part because brain regions vary widely in how specifically they activate for different tasks. Some brain regions, such as the insula or lateral prefrontal cortex, play a very broad role in cognition, and hence consistently activate for many different tasks and cognitive constructs. 

For example, in a recent high-quality meta-analysis of RDoC social constructs across 864 fMRI contrasts, [Pintos Lobo et al., (2022)](https://pubmed.ncbi.nlm.nih.gov/36436737/) found converging activation across a variety of regions for "All Social Processing Tasks", including mPFC, anterior cingulate cortex (ACC), PCC, TPJ, bilateral insula, amygdala, fusiform gyrus, precuneus, and thalamus. However, some of these regions are known to be involved general task maintenance and other domain-general processes, making it difficult to know how specific the relationship is between activity in these regions and social processing. 

![Lobos Pinto](/tutorial/lobos_pinto_figa.png)

Thus, perhaps a more useful question is if brain activity occurs *more consistently* for studies investigating a task or construct (in this case, social processing) than studies that *do not* elicit that task or construct. The Neurosynth dataset (or any other large-scale neuroimaging datasets) is a useful reference, as it consists of tens of thousands of diverse neuroimaging studies automatically sample from the literature.

## MKDA Chi-Squared
 
We can perform this test using the `Multilevel kernel density (MKDA) analysis - Chi-square` analysis, originally introduced in [Wager et al.,](https://doi.org/10.1093/scan/nsm015). For every voxel, we test if a greater proportion of studies in our meta-analysis activate a given voxel than in a large set of studies that *we did not select* for our inclusion criteria. 

Conceptually, this tests if there's evidence of a *population level* association between the task or psychological construct in our meta-analysis and brain activation (for every voxel). It is equivalent to conducting a chi-squared test of independence for a 2-by-2 table of counts for each voxel, where the binary variables are foci occurrence in the meta-analysis of interest and foci occurrence in the reference set of unselected studies.

:::info   
**What happened to the "forward inference" and "reverse inference" analysis?**

On Neurosynth.org, we renamed the pre-generated forward and reverse inference maps; they're now referred to as the "uniformity test" and "association test" maps that we discuss here.

Although the method we used hasn't changed (MKDA Chi-Squared), the latter names more accurately capture what these maps actually mean. It was a mistake on our part to have used the forward and reverse inference labels; those labels should properly be reserved for posterior probability maps generated via a Bayesian estimation analysis, rather than for z-scores resulting from a frequentist inferential test of association. Probability maps are more difficult to interpret and use correctly, as they depend on the *prior* assumed by the researcher. Since setting an appropriate prior is highly non-trivial, these maps are disabled by default.

See "Further Reading" below for more information on this problem.
:::

## Specifying MKDA Chi-Squared Meta-Analysis

Specifying an MKDA Chi-Square meta-analysis in Neurosynth is easy. Simply, select a target set of Analyses to include from your StudySet as you would for any other meta-analysis. 

In Step 3 ("Create Meta-Analysis Specification") of your Project, select *MKDAChi2* as the *algorithm*. 

![MKDA Chi Squared](/tutorial/mkda_chi_squared_algo.png)

:::note
By default, the `FDRCorrector` is selected, which will perform cluster correction using False Detection Rate with an *alpha* of 0.05.
This is a fast algorithm, however, it is recommended to use `FWECorrector` (family-wise-error) with the `montecarlo` method for more accurate, publication-quality results.
:::

Next, select the annotation inclusion column you want to use, as before (by default, the "included" column will be used).

Now, select a reference dataset from the dropdown list below. The Neurosynth dataset represents the latest release of the legacy *Neurosynth* dataset (version 7), released July, 2018. The *Neurostore* dataset represents the latest update of our continuously updating "live" dataset, spanning over 20,000 neuroimaging studies. 

![MKDA Chi Squared Reference](/tutorial/mkda_chi_squared_reference.png)

Now simply complete the rest of the meta-analysis specification wizard to finish. 

## Executing your analysis

As usual, you can execute your meta-analysis using Google Colab or on a local computational resource using Docker. 

:::tip
The `MKDAChi2` algorithm should take between ~30s-2minutes to execute. However, that the `FWECorrector` with 5,000+ montecarlo iterations can take several hours to complete.
We recommend executing this on a workstation or high performance computer with multiple parallel cores
:::

## Interpreting results

The *MKDA Chi-Squared* Workflow outputs two types of maps: **uniformity** and **association** test maps.

- **Uniformity test map:** z-scores from a one-way ANOVA testing whether the proportion of studies that report activation at a given voxel differs from the rate that would be expected if activations were uniformly distributed throughout gray matter.

The uniformity test map can be interpreted in roughly the same way as most standard whole-brain fMRI analysis: it displays the degree to which each voxel is consistently activated in studies that use a given term. For instance, for a meta-analysis of "emotion" high z-scores in the amygdala implies that studies that use the word emotion a lot tend to consistently report activation in the amygdala--at least, more consistently than one would expect if activation were uniformly distributed throughout gray matter. 

- **Association test map**: z-scores from a two-way ANOVA testing for the presence of a non-zero association between term use and voxel activation.

The association test maps tell you whether activation in a region **XXX** occurs more consistently for studies in your meta-analytic sample **m** than for other studies in the reference dataset. In other words, a large positive z-score implies that studies in a meta-analysis are more likely to report **XXX** activation than studies whose abstracts don't include the word 'emotion'. 

Note that association maps *do not* tell you what the probability of a given psychological concept or task is. High Z-scores do not imply that a certain region or voxel is *selective* for a given concept or task. Instead, it just means there is evidence that there is at least a non-zero difference between reference studies, and studies in the meta-analysis.

## Example: Pintos Lobo (2022) - All Social Processing Tasks

To demonstrate, we used Neurosynth-Compose to replicate the `Pintos Lobo et al., (2022)` meta-analysis we referenced earlier. For this example, we have already created a `Project` and `StudySet` with the coordinates used in this meta-analysis.

We then specified a `MKDAChi2` Meta-Analysis with `FWECorrector` with the `montecarlo` method with 5,000 iterations. 

### Add Neurovault Links
### Add Links to Output
### Explain results


## Further Reading

#### Add Link to James's Notebook

If you want to understand the nuances of what inferences you can and cannot make using these maps, we recommend reading Tal Yarkoni's blog posts on how these maps do not provide evidence that the dACC is select for pain: [Post 1](https://www.talyarkoni.org/blog/2015/12/05/no-the-dorsal-anterior-cingulate-is-not-selective-for-pain-comment-on-lieberman-and-eisenberger-2015/), [Post 2](https://www.talyarkoni.org/blog/2015/12/14/still-not-selective-comment-on-comment-on-comment-on-lieberman-eisenberger-2015/), as well as a commentary by [Tor Wager et al., 2016](https://www.pnas.org/doi/10.1073/pnas.1600282113)





