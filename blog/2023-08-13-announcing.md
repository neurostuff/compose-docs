---
slug: announcing-ns-compose
title: Announcing Neurosynth Compose!
authors: alejandro
tags: [hello, neurosynth]
---
Dear Neurosynth Community,

My name is Alejandro, and I am the current project leader of the Neurosynth project.

I am very excited to announce to you that the Neurosynth project lives on, and we are officially announcing the (beta) release of the latest member of the ecosystem: Neurosynth Compose.

_Neurosynth Compose_ enables users to easily perform custom neuroimaging meta-analyses using a web-based platform, with no programming experience required. This project addresses one of the most commonly request features, which is the ability to customize large-scale meta-analyses using you own expert knowledge.

_Neurosynth Compose_ is _free to use_ and helps users:

- 🔎 **Search** across over 20,000 studies in the Neurosynth database, or import from external databses such as PubMed.
- 🗃️ **Curate** your StudySet using systematic review tools conforming to the [PRISMA](https://www.prisma-statement.org/) guidelines.
- 📝 **Extract** coordinates and metadata for each study, leveraging thousands of pre-extracted studies to minimize effort.
- 📊 **Analyze** by specifying a reproducible [NiMARE](https://readthedocs.org/projects/nimare/) workflow, and execute it locally or in the cloud.
- 🔗 **Share** with the community with complete provenance and reproducibility.

The goal of *Neurosynth Compose* is to enable researchers to go beyond the finite set of automatically generated meta-analyses from the original platform and overcome limitations from automated coordinate and semantic extraction. The end result is a gold standard meta-analysis, in much less time than a manual workflow, and with much greater reproducible. 

Currently, *Neurosynth Compose* is in beta, and under active development. We welcome feedback to ensure our platform meets the needs of the community. Please leave us feedback using the button on the bottom right corner of the screen!

We are working on several upcoming features that will make the platform even better. Many of these features are already available in our Python meta-analysis library, NiMARE, and we are actively working on the user facing online interfaces.

- **Image-based Meta-Analysis (IBMA)**. We have developed algorithms in NiMARE for using whole-brain statistical maps as inputs to meta-analysis. This is more powerful and sensitive technique compared to Coordinate-base Meta-Analysis. Soon, you will be able to use NeuroVault data as inputs for your meta-analyses.
- **MKDA Chi-squared / Association test**. A hallmark feature of Neurosynth is the ability to relate meta-analytic findings to the rest of the literature, to determine the strength and specificity of an association (this was previously called "reverse inference"). This will soon be possible on your custom meta-analyses.
- **A wide range of improvements to the user experience**. We are in the process of re-working parts of the online interface to decrease friction when creating a StudySet, making study utilization, and editing more intuitive. 

I would like to thank everyone involved in this highly-collaborative project, but especially James Kent, a postdoctoral fellow, and Nick Lee, a software engineer, who did the lion's share of the work.

We are excited for you to try it and let us know what you think.

-Alejandro
