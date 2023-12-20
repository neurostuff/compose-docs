---
sidebar_label: 'MKDA Chi-Squared Association'
sidebar_position: 3
---

# MKDA Chi-Squared and large-scale association tests
*How to perform large-scale association tests using MKDA Chi-Squared Meta-Analysis*

import { Card, CardContent, Typography, Button } from '@mui/material';
import { FaDownload } from 'react-icons/fa'

## The Problem

A key feature that set aside the original Neurosynth platform was large-scale “association" maps (which we previously called "reverse inference" maps).

In a neuroimaging meta-analysis, researchers pool a set of studies that invoke a common psychological construct or task in order to determine if and where brain activity is consistently activated. For example, in our manual meta-analysis tutorial, we selected 13 studies where subject underwent brain imaging during nicotine administration. By combining the results of individual studies with a meta-analysis (e.g. with the ALE or MKDA Density algorithms), we can see which brain regions that consistently activate for this task.

Although this is a useful approach, there is a significant inferential challenge-- namely, determining how specific the relationship between activity in a given region and the cognitive state invoked by the target task. This is difficult, in part because brain regions vary widely in how specifically they activate for different tasks. Some brain regions, such as the insula or lateral prefrontal cortex, play a very broad role in cognition, and hence consistently activate for many different tasks and cognitive constructs. 

Thus, perhaps a more useful question is not only how consistently a given set of studies of a given task elicit brain activity, but if this brain activity occurs *more consistently* for these studies compared to a large, diverse reference dataset of studies. 

Back to our example, we want to know if nicotine administration shows *more consistent activity* than all other studies that do not perform nicotine administration, and if so where?

## MKDA Chi-Squared association test

One way to answer this question is by comparing activity in a given set of studies to a large reference dataset. The Neurosynth dataset is a natural candidate, as this dataset encompasses a sample of tens of thousands of studies automatically retrieved from the neuroimaging literature. This should provide a reasonable (although imperfect) baseline to control for base rate differences across the brain.  

We can perform this test using the `Multilevel kernel density (MKDA) analysis- Chi-square` analysis, originally introduced in [Wager et al.,](https://doi.org/10.1093/scan/nsm015). For every voxel, can then test if studies in our meta-analysis consistent activate greater than what we would expect given the large-scale Neurosynth dataset. 

:::info   
**What happened to the "forward inference" and "reverse inference" analysis**

On Neurosynth.org, we renamed the pre-generated forward and reverse inference maps; they're now referred to as the "uniformity test" and "association test" maps, performed by the MKDA Chi-Squared algorithm.

Although the method we used hasn't change,d the latter names more accurately capture what these maps actually mean. It was a mistake on our part to have used the forward and reverse inference labels; those labels should properly be reserved for probabilistic maps generated via a Bayesian estimation analysis, rather than for z-scores resulting from frequentist inferential tests. These maps are more difficult to interpret and use correctly, which is why we don't currently support this approach.
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

## Intepreting results

- Consistency Maps
- Association Maps
- Not getting carried away with results

## Further Reading
Pair-wise tests, ALE SUbstraction....





