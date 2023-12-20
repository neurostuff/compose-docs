---
sidebar_label: 'MKDA Chi-Squared Association'
sidebar_position: 3
---

# MKDA Chi-Squared and large-scale association tests
*How to perform large-scale association tests using MKDA Chi-Squared Meta-Analysis*

import { Card, CardContent, Typography, Button } from '@mui/material';
import { FaDownload } from 'react-icons/fa'

## The Problem

A key feature that sets aside the Neurosynth platform is large-scale “association" maps (which we previously called "reverse inference" maps).

In a neuroimaging meta-analysis, researchers pool a set of studies that invoke a common psychological construct or task to determine where brain activity is consistently activated. For example, in our [manual meta-analysis](../manual) tutorial, we identified 13 studies where subjects underwent nicotine administration. By combining the results of individual studies, we can see which brain regions that consistently activate for this task.

Although this is a useful approach, there is a significant inferential challenge-- namely, determining how *specific* the relationship between activity in a given region and the cognitive state invoked by the target task. This is difficult, in part because brain regions vary widely in how specifically they activate for different tasks. Some brain regions, such as the insula or lateral prefrontal cortex, play a very broad role in cognition, and hence consistently activate for many different tasks and cognitive constructs. 

Thus, perhaps a more useful question is if and where brain activity occurs *more consistently* for studies investigating a task or construct (in our case, nictoine administration) than studies that *do not* elicit that task or construct. The Neurosynth dataset (or any other large-scale neuroimaging datasets) is a useful reference, as it consists of tens of thousands of diverse neuroimaging studies automatically sample from the literature.

## MKDA Chi-Squared

In our example we want to know if and where studies of nicotine administration show more consistent brain activiation, than *all other studies* in the Neurosynth database (15,000+ studies). 

We can perform this test using the `Multilevel kernel density (MKDA) analysis- Chi-square` analysis, originally introduced in [Wager et al.,](https://doi.org/10.1093/scan/nsm015). For every voxel, can then test if a greater proportion of studies in our meta-analysis consistently activate a given voxel greater than what we observe in a large set of studies that we did not select for our meta-analysis. 

Conceptually, this tests if there's evidence of a *population level* association between the task or psychological construct in our meta-analysis and brain activation (for every voxel).

:::info   
**What happened to the "forward inference" and "reverse inference" analysis?**

On Neurosynth.org, we renamed the pre-generated forward and reverse inference maps; they're now referred to as the "uniformity test" and "association test" maps, performed by the MKDA Chi-Squared algorithm.

Although the method we used hasn't change,d the latter names more accurately capture what these maps actually mean. It was a mistake on our part to have used the forward and reverse inference labels; those labels should properly be reserved for probabilistic maps generated via a Bayesian estimation analysis, rather than for z-scores resulting from frequentist inferential tests. These maps are more difficult to interpret and use correctly, which is why we don't currently support this approach.

See "Further Reading" below to read more about why this change was made
:::

## Specifying MKDA Chi-Squared Meta-Analysis

Specifying an MKDA Chi-Square meta-analysis in Neurosynth is easy. Simply, select a target set of studies as you would for any other meta-analysis, using either automated or manual selection methods. 

In Step 3 ("Create Meta-Analysis Specification") of your Project, select *MKDAChi2* as the *algorithm*. 


![MKDA Chi Squared](/tutorial/mkda_chi_squared_algo.png). 

Next, select the annotation inclusion column you want to use, as before (by default, the "included" column will be used).

Now, select a reference dataset from the dropdown list below. The Neurosynth dataset represents the latest release of the legacy *Neurosynth* dataset (version 7), released July, 2018. The *Neurostore* dataset represents the latest update of our continuously updating "live" dataset, spanning over 20,000 neuroimaging studies. 

![MKDA Chi Squared Reference](/tutorial/mkda_chi_squared_reference.png). 

Now simply complete the rest of the meta-analysis specification wizard to finish. 

## Executing your analysis

The *MKDA Chi-Squared* algorithm is more computational expensive than a traditional *MKDA Density* analysis. As a result, it's unlikely to complete with the freely available resources available on Google Colab.

You can run this workflow locally in one line using docker by copying the command your screen. See the *execution* documentation page for more information. 

:::tip 
We recommend at least 32GB of RAM to perform a MKDA Chi-Squared analysis
:::

## Interpreting results

![Neurosynth Maps](/tutorial/neurosynth_paper_fig2.jpg). 

**Figure 1**. Comparison of Uniformity and Association maps from the original Neurosynth article, on three automatically generated meta-analyses.

The *MKDA Chi-Squared* Workflow outputs two types of maps: **uniformity** and **association** test maps.

- **Uniformity test map:** z-scores from a one-way ANOVA testing whether the proportion of studies that report activation at a given voxel differs from the rate that would be expected if activations were uniformly distributed throughout gray matter.

The uniformity test map can be interpreted in roughly the same way as most standard whole-brain fMRI analysis: it displays the degree to which each voxel is consistently activated in studies that use a given term. For instance, for a meta-analysis of "emotion" high z-scores in the amygdala implies that studies that use the word emotion a lot tend to consistently report activation in the amygdala--at least, more consistently than one would expect if activation were uniformly distributed throughout gray matter. Note that, unlike other coordinate based meta-analysis algorithms (e.g., ALE or MKDA), z-scores aren't generated through permutation, but using a chi-square test

- **Association test map**: z-scores from a two-way ANOVA testing for the presence of a non-zero association between term use and voxel activation.

The association test maps tell you whether activation in a region occurs more consistently for studies in your meta-analysis m than for other studies in the reference dataset. In other words, a large positive z-score implies that studies in a meta-analysis are more likely to report XXX activation than studies whose abstracts don't include the word 'emotion'. 

Note that association maps *do not* tell you what the probability of a given psychological concept or task is. High Z-scores do not imply that a certain region or voxel is *selective* for a given concept or task. Instead, it just means there is evidence that there is at least a non-zero difference between reference studies, and studies in the meta-analysis.

## Further Reading

If you want to understand the nuances of what inferences you can and cannot make using these maps, we recommend reading Tal Yarkoni's blog posts on how these maps do not provide evidence that the dACC is select for pain: [Post 1](https://www.talyarkoni.org/blog/2015/12/05/no-the-dorsal-anterior-cingulate-is-not-selective-for-pain-comment-on-lieberman-and-eisenberger-2015/), [Post 2](https://www.talyarkoni.org/blog/2015/12/14/still-not-selective-comment-on-comment-on-comment-on-lieberman-eisenberger-2015/), as well as a commentary by [Tor Wager et al., 2016](https://www.pnas.org/doi/10.1073/pnas.1600282113)





