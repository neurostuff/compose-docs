"use strict";(self.webpackChunkns_compose_docs=self.webpackChunkns_compose_docs||[]).push([[3730],{5267:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),i=(a(7294),a(3905)),s=a(6464);const o={sidebar_label:"MKDA Chi-Squared Association",sidebar_position:3},r="MKDA Chi-Squared and large-scale association tests",l={unversionedId:"tutorial/advanced/mkda_association",id:"tutorial/advanced/mkda_association",title:"MKDA Chi-Squared and large-scale association tests",description:"How to perform large-scale association tests using MKDA Chi-Squared Meta-Analysis, with a Social Processing example",source:"@site/docs/tutorial/advanced/mkda_association.md",sourceDirName:"tutorial/advanced",slug:"/tutorial/advanced/mkda_association",permalink:"/compose-docs/tutorial/advanced/mkda_association",draft:!1,editUrl:"https://github.com/neurostuff/compose-docs/edit/master/docs/tutorial/advanced/mkda_association.md",tags:[],version:"current",lastUpdatedBy:"James Kent",lastUpdatedAt:1722895109,formattedLastUpdatedAt:"Aug 5, 2024",sidebarPosition:3,frontMatter:{sidebar_label:"MKDA Chi-Squared Association",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Advanced tutorials",permalink:"/compose-docs/tutorial/advanced/"}},c={},p=[{value:"The Reverse Inference Problem",id:"the-reverse-inference-problem",level:2},{value:"MKDA Chi-Squared",id:"mkda-chi-squared",level:2},{value:"How to run MKDA Chi-Squared on Neurosynth Compose",id:"how-to-run-mkda-chi-squared-on-neurosynth-compose",level:2},{value:"Specification",id:"specification",level:3},{value:"Executing your analysis",id:"executing-your-analysis",level:3},{value:"Interpreting results",id:"interpreting-results",level:2},{value:"Example: Pintos Lobo (2022) - All Social Processing Tasks",id:"example-pintos-lobo-2022---all-social-processing-tasks",level:2},{value:"Results",id:"results",level:3},{value:"Footnotes &amp; Limitations",id:"footnotes--limitations",level:2},{value:"References &amp; Further Reading",id:"references--further-reading",level:2}],d={toc:p},m="wrapper";function h(e){let{components:t,...o}=e;return(0,i.kt)(m,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mkda-chi-squared-and-large-scale-association-tests"},"MKDA Chi-Squared and large-scale association tests"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"How to perform large-scale association tests using MKDA Chi-Squared Meta-Analysis, with a Social Processing example")),(0,i.kt)("h2",{id:"the-reverse-inference-problem"},"The Reverse Inference Problem"),(0,i.kt)("p",null,"A common goal of neuroimaging meta-analysis, is to pool a set of studies that invoke common psychological constructs to identify where brain activity is consistently activated."),(0,i.kt)("p",null,"Although this is a useful approach, there is a significant inferential challenge-- namely, determining how ",(0,i.kt)("em",{parentName:"p"},"specific")," the relationship between activity in a given region and the cognitive state invoked by the target task. Ideally, we would like to infer the probability of a mental state given activity in a given region. However, this is exceedingly difficult due to the well-established problem of ",(0,i.kt)("em",{parentName:"p"},"reverse inference")," (Poldrack, 2011). "),(0,i.kt)("p",null,"Even if we establish that a given task (e.g. working memory) activates a region 100% of the time (e.g. lateral prefrontal cortex), this observation only establishes that working memory engagement is a sufficient condition for LPFC activity, but ",(0,i.kt)("em",{parentName:"p"},"not")," that LPFC activity indicates working memory engagement (Poldrack & Yarkoni, 2015). In practice, we know that brain regions are activated by a variety of cognitive processes, and that certain regions of the brain- such as the insula, lateral PFC and medial frontal cingulate cotex (MFCC)- have a high base rate of activation, making it difficult to establish specificity. Using the Neurosynth database (15,000+ studies), we can map the probability of activation of all voxels. Across this large and diverse dataset, certain voxels in MFCC and insula are activate in as many as 20% of studies.  "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Prob-A",src:a(9569).Z,width:"1000",height:"180"}),"\n",(0,i.kt)("em",{parentName:"p"},"Probability of Activity for all Voxels across the Neurosynth Dataset")),(0,i.kt)("p",null,"The reverse inference problem is a challenge even for rigorous, high-quality meta-analyses. For example, a recent meta-analysis of RDoC social constructs across 864 fMRI contrasts, ",(0,i.kt)("a",{parentName:"p",href:"https://pubmed.ncbi.nlm.nih.gov/36436737/"},"Pintos Lobo et al., (2022)"),' found converging activation across a variety of regions for "All Social Processing Tasks", including mPFC, ACC, PCC, TPJ, bilateral insula, amygdala, fusiform gyrus, precuneus, and thalamus. However, some of the regions have a high base rate of activation, making it difficult to know how strongly associated their activity is with social processing.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Lobos Pinto",src:a(9377).Z,width:"517",height:"135"})),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Fig 5a (condensed) from Pintos Lobo et al., (2022). Convergent Activation Patterns Across all social processing tasks (864 contrasts, 1,109 total annotations). ")),(0,i.kt)("p",null,"Although reverse inference poses a serious challenge, there are certain questions we can ask using large-scale meta-analytic databases that can help. Specifically: ",(0,i.kt)("strong",{parentName:"p"},"does activity occur ",(0,i.kt)("em",{parentName:"strong"},"more consistently")," for studies that elicit by the mental construct of interest (in this case, social processing) than studies that ",(0,i.kt)("em",{parentName:"strong"},"do not")," elicit that construct")," Large-scale meta-analytic datasets can serve as a useful reference, as they consists of tens of thousands of diverse neuroimaging studies automatically sampled from the literature."),(0,i.kt)("h2",{id:"mkda-chi-squared"},"MKDA Chi-Squared"),(0,i.kt)("p",null,"We can answer this question using a ",(0,i.kt)("inlineCode",{parentName:"p"},"Multilevel kernel density (MKDA) analysis - Chi-square")," analysis, originally introduced in ",(0,i.kt)("a",{parentName:"p",href:"https://doi.org/10.1093/scan/nsm015"},"Wager et al.,"),". For every voxel, we test if a greater proportion of studies in our meta-analysis activate a given voxel than in a large set of studies that ",(0,i.kt)("em",{parentName:"p"},"we did not select")," for our inclusion criteria. "),(0,i.kt)("p",null,"Conceptually, this tests if there's evidence of a ",(0,i.kt)("em",{parentName:"p"},"population level")," association between the task or psychological construct in our meta-analysis and brain activation (for every voxel). It is equivalent to conducting a chi-squared test of independence for a 2-by-2 table of counts for each voxel, where the binary variables are foci occurrence in the meta-analysis of interest and foci occurrence in the reference set of unselected studies."),(0,i.kt)("h2",{id:"how-to-run-mkda-chi-squared-on-neurosynth-compose"},"How to run MKDA Chi-Squared on Neurosynth Compose"),(0,i.kt)("h3",{id:"specification"},"Specification"),(0,i.kt)("p",null,"Specifying an MKDA Chi-Square meta-analysis in Neurosynth is easy. Simply, select a target set of Analyses to include from your StudySet as you would for any other meta-analysis. "),(0,i.kt)("p",null,'In Step 3 ("Create Meta-Analysis Specification") of your Project, select ',(0,i.kt)("em",{parentName:"p"},"MKDAChi2")," as the ",(0,i.kt)("em",{parentName:"p"},"algorithm"),". "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"MKDA Chi Squared",src:a(541).Z,width:"1169",height:"408"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"By default, the ",(0,i.kt)("inlineCode",{parentName:"p"},"FDRCorrector")," is selected, which will perform cluster correction using False Detection Rate with an ",(0,i.kt)("em",{parentName:"p"},"alpha")," of 0.05.\nThis is a fast algorithm, however, it is recommended to use ",(0,i.kt)("inlineCode",{parentName:"p"},"FWECorrector")," (family-wise-error) with the ",(0,i.kt)("inlineCode",{parentName:"p"},"montecarlo")," method for more accurate, publication-quality results.")),(0,i.kt)("p",null,'Next, select the annotation inclusion column you want to use, as before (by default, the "included" column will be used).'),(0,i.kt)("p",null,"Now, select a reference dataset from the dropdown list below. The Neurosynth dataset represents the latest release of the legacy ",(0,i.kt)("em",{parentName:"p"},"Neurosynth")," dataset (version 7), released July, 2018. The ",(0,i.kt)("em",{parentName:"p"},"Neurostore"),' dataset represents the latest update of our continuously updating "live" dataset, spanning over 20,000 neuroimaging studies. '),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"MKDA Chi Squared Reference",src:a(6344).Z,width:"1136",height:"243"})),(0,i.kt)("p",null,"Now simply complete the rest of the meta-analysis specification wizard to finish. "),(0,i.kt)("h3",{id:"executing-your-analysis"},"Executing your analysis"),(0,i.kt)("p",null,"As usual, you can execute your meta-analysis using Google Colab or on a local computational resource using Docker. "),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"MKDAChi2")," algorithm takes between ~30s-2minutes to run. However, the ",(0,i.kt)("inlineCode",{parentName:"p"},"FWECorrector")," with 5,000+ montecarlo iterations can take several hours to complete.\nWe recommend using a workstation or HPC and specifying ",(0,i.kt)("inlineCode",{parentName:"p"},"--n-cores")," at run-time.")),(0,i.kt)("h2",{id:"interpreting-results"},"Interpreting results"),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"MKDA Chi-Squared")," Workflow outputs two key maps: ",(0,i.kt)("strong",{parentName:"p"},"uniformity")," and ",(0,i.kt)("strong",{parentName:"p"},"association")," test maps."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Uniformity test map:")," z-scores from a one-way ANOVA testing whether the proportion of studies that report activation at a given voxel differs from the rate that would be expected if activations were uniformly distributed throughout gray matter.")),(0,i.kt)("p",null,'The uniformity test map can be interpreted in roughly the same way as most standard whole-brain fMRI analysis: it displays the degree to which each voxel is consistently activated in studies that use a given term. For instance, for a meta-analysis of "emotion" high z-scores in the amygdala implies that studies that use the word emotion a lot tend to consistently report activation in the amygdala--at least, more consistently than one would expect if activation were uniformly distributed throughout gray matter. '),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Association test map"),": z-scores from a two-way ANOVA testing for the presence of a non-zero association between term use and voxel activation.")),(0,i.kt)("p",null,"The association test maps tell you whether activation in a region ",(0,i.kt)("strong",{parentName:"p"},"XXX")," occurs more consistently for studies in your meta-analytic sample ",(0,i.kt)("strong",{parentName:"p"},"m")," than for other studies in the reference dataset. In other words, a large positive z-score implies that studies in a meta-analysis are more likely to report ",(0,i.kt)("strong",{parentName:"p"},"XXX")," activation than studies whose abstracts don't include the word 'emotion'. "),(0,i.kt)("p",null,"Note that association maps ",(0,i.kt)("em",{parentName:"p"},"do not")," tell you what the probability of a given psychological concept or task is. High Z-scores do not imply that a certain region or voxel is ",(0,i.kt)("em",{parentName:"p"},"selective")," for a given concept or task. Instead, it just means there is evidence that there is at least a non-zero difference between reference studies, and studies in the meta-analysis."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("em",{parentName:"p"},"NiMARE")," outputs a variety of maps, including cluster-corrected and uncorrected versions of all maps. "),(0,i.kt)("p",{parentName:"admonition"},"See the documentation sections on ",(0,i.kt)("a",{parentName:"p",href:"https://nimare.readthedocs.io/en/stable/outputs.html"},"Outputs of NIMARE")," and ",(0,i.kt)("a",{parentName:"p",href:"https://nimare.readthedocs.io/en/stable/cbma.html#the-monte-carlo-multiple-comparisons-correction-method"},"Monte Carlo multiple comparisons")," for more details.")),(0,i.kt)("h2",{id:"example-pintos-lobo-2022---all-social-processing-tasks"},"Example: Pintos Lobo (2022) - All Social Processing Tasks"),(0,i.kt)("p",null,"To demonstrate, we used Neurosynth-Compose to replicate the ",(0,i.kt)("a",{parentName:"p",href:"https://pubmed.ncbi.nlm.nih.gov/36436737/"},"Pintos Lobo et al., (2022)")," meta-analysis for All Social Processing Tasks. For this example, we have already created a ",(0,i.kt)("inlineCode",{parentName:"p"},"Project")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"StudySet")," with the coordinates used in this meta-analysis."),(0,i.kt)("p",null,"We then specified a ",(0,i.kt)("inlineCode",{parentName:"p"},"MKDAChi2")," Meta-Analysis with ",(0,i.kt)("inlineCode",{parentName:"p"},"FWECorrector")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"montecarlo")," method with 5,000 iterations. "),(0,i.kt)(s.Z,{variant:"contained",color:"primary",href:"https://compose.neurosynth.org/projects/4x4NsrWg8heS/meta-analyses/7K9BVG9hJQRu",mdxType:"Button"},"Meta-Analysis Specification and Results on Neurosynth Compose"),(0,i.kt)("h3",{id:"results"},"Results"),(0,i.kt)("p",null,"First, let's look at the FWE cluster corrected ",(0,i.kt)("strong",{parentName:"p"},"uniformity test")," map."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"z_desc-uniformityMass_level-cluster_corr-FWE_method-montecarlo"),"\n",(0,i.kt)("img",{alt:"Uniformity",src:a(4568).Z,width:"950",height:"180"})),(0,i.kt)("p",null,"In this analysis, we replicate the findings of Pinto Lobos (2022), showing consistent activation for social processing across a variety of regions."),(0,i.kt)("p",null,"Next, let's look at the FWE cluster corrected ",(0,i.kt)("strong",{parentName:"p"},"association map"),":"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"z_desc-associationMass_level-cluster_corr-FWE_method-montecarlo"),"\n",(0,i.kt)("img",{alt:"Association",src:a(2167).Z,width:"950",height:"180"})),(0,i.kt)("p",null,"As before, regions which have been previously implicated with social processing, such as the tempo-parietal junction (TPJ), and dorso-medial and ventro-medial PFC are present, meaning that activity in these social processing studies report activity in these regions with greater frequency than other studies in the Neurosynth database."),(0,i.kt)("p",null,"However, certain regions which we know to have low specificity, such as the insula, medial frontal cingulate cortex (MFCC) and parts of dorso-lateral PFC, are absent, meaning that there is ",(0,i.kt)("em",{parentName:"p"},"no evidence")," that social processing tasks report activity in these regions ",(0,i.kt)("em",{parentName:"p"},"more frequently")," than other studies in the database."),(0,i.kt)("p",null,"This example demonstrates how ",(0,i.kt)("inlineCode",{parentName:"p"},"MKDA Chi-Squared")," association analysis can help determine the specificity activity and tasks in a meta-analysis, even for high-quality manual meta-analyses."),(0,i.kt)("h2",{id:"footnotes--limitations"},"Footnotes & Limitations"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},'What happened to the "forward inference" and "reverse inference" maps?')),(0,i.kt)("p",null,'We renamed the pre-generated forward and reverse inference maps; they\'re now referred to as the "uniformity test" and "association test" maps that we discuss here.'),(0,i.kt)("p",null,"Although the method we used hasn't changed (",(0,i.kt)("inlineCode",{parentName:"p"},"MKDA Chi-Squared"),"), the latter names more accurately capture what these maps actually mean. It was a mistake on our part to have used the forward and reverse inference labels; those labels should properly be reserved for posterior probability maps generated via a Bayesian estimation analysis, rather than for z-scores resulting from a frequentist inferential test of association. Probability maps are more difficult to interpret and use correctly, as they depend on the ",(0,i.kt)("em",{parentName:"p"},"prior")," assumed by the researcher. Since setting an appropriate prior is highly non-trivial, these maps are disabled by default."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," Using MKDA Chi Squared on manual meta-analyses ")),(0,i.kt)("p",null,"In this tutorial, we applied ",(0,i.kt)("inlineCode",{parentName:"p"},"MKDA Chi-Squared"),' to a manual meta-analysis. However, this is not a perfect comparison, as there are differences between the reference sample (Neurosynth), the high-quality manual annotations given as input. Studies in large-scale meta-analytic databases are automatically populated, meaning there are potential sampling biases. Most notably, studies in Neurosynth include all reported coordinates, not only "target" analyses/contrasts. Thus, it is possible that low-level task > no task contrasts are over-represented in this reference sample. '),(0,i.kt)("h2",{id:"references--further-reading"},"References & Further Reading"),(0,i.kt)("p",null,"If you want to understand the nuances of what inferences you can and cannot make using these maps, we recommend reading Tal Yarkoni's blog posts on how these maps do not provide evidence that the dACC is select for pain: ",(0,i.kt)("a",{parentName:"p",href:"https://www.talyarkoni.org/blog/2015/12/05/no-the-dorsal-anterior-cingulate-is-not-selective-for-pain-comment-on-lieberman-and-eisenberger-2015/"},"Post 1"),", ",(0,i.kt)("a",{parentName:"p",href:"https://www.talyarkoni.org/blog/2015/12/14/still-not-selective-comment-on-comment-on-comment-on-lieberman-eisenberger-2015/"},"Post 2"),", as well as a commentary by ",(0,i.kt)("a",{parentName:"p",href:"https://www.pnas.org/doi/10.1073/pnas.1600282113"},"Tor Wager et al., 2016")),(0,i.kt)("p",null,"Poldrack RA. Inferring mental states from neuroimaging data: from reverse inference to large-scale decoding. Neuron. 2011 Dec 8;72(5):692-7. doi: 10.1016/j.neuron.2011.11.001. PMID: 22153367; PMCID: PMC3240863."),(0,i.kt)("p",null,"Poldrack RA, Yarkoni T. From Brain Maps to Cognitive Ontologies: Informatics and the Search for Mental Structure. Annu Rev Psychol. 2016;67:587-612. doi: 10.1146/annurev-psych-122414-033729. Epub 2015 Sep 21. PMID: 26393866; PMCID: PMC4701616."))}h.isMDXComponent=!0},541:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mkda_chi_squared_algo-ccaec6b8f53a020b314e09162dccf9b7.png"},6344:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mkda_chi_squared_reference-418d3c236f463dcdd4f007e4a649c1ba.png"},9377:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pinto_lobos_figa-115dccb8db33fc1a969fa252124b9e96.png"},2167:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pinto_lobos_z_desc-associationMass_level-cluster_corr-FWE_method-montecarlo.nii.gz-7f5395616d7b1943c618393fca6e4e88.png"},4568:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pinto_lobos_z_desc-uniformityMass_level-cluster_corr-FWE_method-montecarlo.nii.gz-db297c21a1e3a0c952b683a8d0f07981.png"},9569:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/prob-A_neurosynth-8d7c0db5edbb4d6862b9e503cc30e694.png"}}]);