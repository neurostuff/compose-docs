---
title: New Year Updates
authors: alejandro
tags: [neurosynth]
---
Hello Neurosynth Users,

Happy New Year! 

2023 was a very exciting year for Neurosynth, having launched our Compose platform to the public and announced it on social media. In the December we’ve saw **over 500 new user visits**, with **200 users signing up for an account**! 🚀

Help us keep this growth going by [sharing our announcement](./announcing-ns-compose) with your colleagues. 🧑‍🔬

# 🌟 What’s New 🌟

We’ve also continued to introduce new features and improve the user experience. Here’s some highlights:

### Large-scale association tests

A key feature that set Neurosynth aside were large-scale association maps (previously known as “reverse inference”).

Whereas a typical meta-analysis tells you if activity is consistently reported in a target set of studies, an association test tells you if **activation occurs more consistently in this set of studies versus a large and diverse reference sample**. 

That's important, because this allows you to control for base rate differences between regions. Certain regions, such as the insula or lateral PFC for instance, play a very broad role in cognition, and hence are consistently activated for many different tasks and cognitive states. Thus, if you see insula activity in your meta-analysis, you might erroneously conclude that the insula is involved in the cognitive state you're studying. A large-scale association test lets you determine if the activity you observe in a region occurs *more consistently* in your meta-analysis than in other studies, making it possible to make more confident claims that a given region is involved in a particular process, and isn't involved in just about every task.

Previously association tests were available for the automatically generated maps on neurosynth.org. **Now you can perform large-scale association tests for your custom meta-analyses in Neurosynth Compose.**

We have created a full primer and tutorial on MKDA Chi-Squared, including an example from a recent meta-analysis on social processing. Check it out!

import Button from '@mui/material/Button';

<Button variant="contained" color="primary" href='tutorial/advanced/mkda_association'>
    MKDA Chi-Squared Tutorial 🧑‍🎓
</Button>

### UX Enhancements ✨

Based on your valuable feedback, we've made numerous bug fixes and improvements: 

* **Simplified Curation**: The review import page has been removed, and summary information is now added directly to the tag step.

* **Searching UI**: We've replaced the dropdown with a selection gallery, making it easier to choose your preferred search method, and we now auto-generate search import names. In addition, resolving duplicates is skipped if none are present. 

* **Improved Editing Workflow**: The editing interface has been improved, streamlining the extraction process. 

* **Various UX Improvements and Fixes**: We fixed many papercuts, especially in the *Extraction* phase.


We hope you enjoy these changes.

Email us any [feedback](mailto:neurosynthorg@gmail.com), or ask a question on [NeuroStars](https://neurostars.org/tag/neurosynth-compose) if you have issues.


Cheers,

The Neurosynth Team 🧠
