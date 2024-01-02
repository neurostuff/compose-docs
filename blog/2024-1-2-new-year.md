---
slug: january-2024-updates
title: New Year Updates
authors: alejandro
tags: [neurosynth]
---
Hello Neurosynth Users,

Happy New Year! 

2023 was a very exciting year for Neurosynth, having launched our Compose platform to the public and announced it on social media. In the December we’ve saw **over 1,200 new user visits**, with **200 users signing up for an account**! 🚀

Help us keep this growth going by [sharing our announcement](http://localhost:3000/compose-docs/blog/announcing-ns-compose) with your colleagues. 🧑‍🔬

# 🌟 What’s New 🌟

We’ve also continued to introduce new features and improve the user experience. Here’s some highlights:

**Large-scale association tests**

A key feature that set aside Neurosynth were large-scale “association tests” (previously referred to as “reverse inference” tests).

Whereas a typical meta-analysis tells you about the consistency of activation in a set of studies, an association test tells you whether activation in a region occurs *more consistently for studies in your set of studies versus a large reference sample of studies*. 

Neurosynth leverages large-scale neuroimaging datasets as a reference to which you can compare the specific studies in given meta-analysis. 

That's important, because this effectively allows you to control for base rate differences between regions. Certain regions, such as the insula or lateral PFC for instance, play a very broad role in cognition, and hence tend to be consistently activated for many different terms. Thus, if you see insula activity in your meta-analysis, you might erroneously conclude that the insula is involved in the process of your study. A large-scale association test lets you determine if the activity you observe in a region occurs to a greater extent in your meta-analysis than in other studies, making it possible to make more confident claims that a given region is involved in a particular process, and isn't involved in just about every task.

Previously these association tests were available for the automatically generated maps on neurosynth.org. **Now you can perform large-scale association tests for your custom meta-analyses in Neurosynth Compose.**

import Button from '@mui/material/Button';
<Button variant="contained" color="primary" href='tutorial'>
    MKDA Chi-Squared Tutorial 🧑‍🎓
</Button>

**User Experience Enhancements**

Based on your valuable feedback, we've made numerous bug fixes and improvements, notably: 

* **Simplified Curation**: The review import page has been removed, and summary information is now added directly to the tag step.

* **Searching UI**: We've replaced the dropdown with a selection gallery, making it easier to choose your preferred search method, and we now pre-populate search names for Neurostore.

* **Streamlined Duplicate Resolution**: The 'resolve duplicates' function will only appear if duplicates are present. 

* **Improved Editing Workflow**: The process of editing studies has been made more straightforward, allowing you to start editing with ease.

We hope you enjoy these changes, and be sure to leave us feedback or ask questions if you have any problems or suggestions.


Cheers,

The Neurosynth Team 🧠
