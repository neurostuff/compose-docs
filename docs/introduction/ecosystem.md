---
sidebar_label: 'Ecosystem'
sidebar_position: 4
---

# Ecosystem for fMRI Meta-Analysis

![ecosystem](/img/compose_ecosystem_paths.svg "Neurosynth Compose Ecosystem")

*Neurosynth Compose* is part of a broader set of tools for neuroimaging meta-analysis, with complementary roles.


## Neurosynth Compose

Neurosynth-Compose is the evolution of the original [Neurosynth](https://neurosynth.org) project.

In *Neurosynth 1.0*, we developed a web platform for users to browse a large set of pre-computed meta-analyses
synthesizing findings across 14,000+ fMRI studies. The philosophy was to leverage
large scale meta-analysis to provide new insights into the literature, overcoming limitations of database
with sheer scale. With regular updates, Neurosynth was able to keep up with the growth of the literature.
The database was released with a permissive license, and accompanied by a Python package to manipulate and analyze it. 

Although this approach was surprsingly successful, there were several major limitations to Neurosynth 1.0:

* Meta-analyses were limited by **concepts that can be inferred from large scale text mining** (i.e. frequency of terms in the text).
Although these features proved to be surprsingly useful for well-powered and broad cognitive constructs (e.g. 'emotion'), Neurosynth was not able 
to capture the fine-grained details of the neuroimaging literature, or allow users to define their own grouping of studies. 

* The database is not curated, and therefore contains many **inaccuracies and incomplete** data at both the study and coordinate level.
Aside from obvious extraction erors, automated coordinate extraction lacks the ability to determine critical information, such as whether the activation is positive or negative.
In addition, it's not possible to segregate the coordinates into distinct contrast, conditions, or studies without manual curation.

* Coordinate-based analyses are inherently **inferior to image-based** meta-analysis, which is becoming increasingly possible with sharing of unthresholded statisical maps in repositories like [NeuroVault][].

_Neurosynth Compose_ aims to address these limitations:

* Provides a web-based platform for meta-analytic neuroimaging research, allowing users to **curate studies**, and **specify meta-analytic models**. 

* **Flexible and easy to use**, allowing users to perform both large-scale **exploratory** meta-analyses, as well as **targeted, hypothesis-driven** meta-analyses that conform to stringent standards such as the [PRISMA][https://prisma-statement.org] statement.

* Allows users to perfom **image-based meta-analysis** using unthresholded images from NeuroVault (in progress).

* Quick, reproducible and transparent **sharing of results**.

* Incentivizes **collaborative curation** of neuroimaging studies in a accesible **centralized repository** (NeuroStore, see below).


## NeuroStore

NeuroStore is the centralized repository for neuroimaging data amenable to meta-analysis, including coordinates, images, and metadata.
NeuroStore serves as the data backend for Neurosynth Compose, but is also designed to be a standalone interoperable resource for the neuroimaging community.

NeuroStore ingests data from a number of sources, including NeuroVault, NeuroQuery, and Neurosynth (ACE), and provides a unified API for querying the database.

Importantly, data on NeuroStore can be **curated** the community, allowing users to correct errors in coordinate extraction, and add new studies and coordinates. By providing a centralized repository for curated neuroimaging data, NeuroStore aims to facilitate the development of new meta-analytic tools, and to provide a common data format for the neuroimaging community.

## NiMARE

[NiMARE][] (Neuroimaging Meta-Analysis Research Environment) is a Python package for performing neuroimaging meta-analysis. 

NiMARE is an open source, collaboratively-developed package that implements a range of meta-analytic algorithms, including coordinate- and image-based meta-analyses, automated annotation, functional decoding, and meta-analytic coactivation modeling. 

By consolidating meta-analytic methods under a common library and syntax, NiMARE makes it straightforward for users to employ the appropriate approach for a given analysis. 

NeuroSynth Compose uses NiMARE to execute meta-analyses, by exporting datasets in the common NIMADS format (see below), and specifying reproducible NiMARE workflows for common meta-analytic models.

### PyMARE

[PyMARE][] is a Python library for effect-size meta-analysis. NiMARE uses PyMARE for its image-based meta-analysis algorithms
(with some light wrapping to convert image objects to arrays compatible with PyMARE functions).

### NIMADS

[NIMADS][] is a new standard for organizing and representing meta-analytic neuroimaging data.
NIMADS is used as a common, interoperable format by NeuroStore, pyNIMADS, and NiMARE.

## NeuroQuery

[NeuroQuery][] is a web service, Python library, and coordinate database built for large-scale, predictive meta-analysis.
Predictive meta-analysis generates non-statistical brain maps from text, using a database of coordinates and associated texts.

The [NeuroQuery dataset][] is accurate and maintainble than the existing Neurosynth 1.0 database,
this new database will effectively replace the old one within the meta-analytic ecosystem.
NiMARE can ingest the NeuroQuery database and convert it automatically to a NiMARE Dataset object for analysis.
Additionally, the NeuroQuery database will feed directly into NeuroStore as a source of coordinates.

## NeuroVault

[NeuroVault][] is a repository for unthresholded statistical maps from neuroimaging studies.

As of early 2023, NeuroVault contains over 8,000 collections of statistical images, with over 100,000 images in total.
It is the largest repository of unthresholded statistical maps in the world, and is the primary source of data for image-based meta-analyses using 
Neurosynth Compose.

Currently, NeuroVault supports some basic meta-analytic functionality. However, as other tools in this ecosystem are developed,
it is planned that NeuroVault will focus exclusively on image storage and sharing, and will rely on other tools for meta-analysis.


<!-- links -->
[ACE]: https://github.com/neurosynth/ACE
[AFNI]: https://afni.nimh.nih.gov
[BrainMap]: http://www.brainmap.org
[BrainSpell]: http://brainspell.org/
[Cognitive Atlas]: http://www.cognitiveatlas.org/
[Cognitive Paradigm Ontology]: http://www.cogpo.org/
[FSL]: https://fsl.fmrib.ox.ac.uk
[metaCurious]: https://github.com/neurostuff/metaCurious
[NeuroPower]: http://neuropowertools.org
[NeuroQuery]: https://neuroquery.org
[NeuroQuery dataset]: https://github.com/neuroquery/neuroquery_data
[NeuroScout]: https://alpha.neuroscout.org
[NeuroStars]: https://neurostars.org/latest
[NeuroStore]: https://github.com/neurostuff/neurostore
[NeuroVault]: https://neurovault.org/
[Nilearn]: https://nilearn.github.io/
[NIMADS]: https://github.com/neurostuff/NIMADS
[NiMARE]: https://nimare.readthedocs.io/en/latest/
[Nipype]: https://nipype.readthedocs.io/en/latest/index.html
[Nistats]: https://nistats.github.io/
[OpenNeuro]: https://openneuro.org
[peaks2maps]: https://doi.org/10.7490/f1000research.1116395.1
[PyMARE]: https://pymare.readthedocs.io/en/latest/
[scikit-learn]: https://scikit-learn.org/stable/developers/index.html
[Sleuth]: http://www.brainmap.org/software.html#Sleuth
[SPM]: https://www.fil.ion.ucl.ac.uk/spm/