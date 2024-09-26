"use strict";(self.webpackChunkns_compose_docs=self.webpackChunkns_compose_docs||[]).push([[7068],{4894:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=a(7462),n=(a(7294),a(3905)),o=a(5154);const s={sidebar_label:"Manual Meta-Analysis",sidebar_position:1},l="Manual Meta-Analysis",r={unversionedId:"tutorial/manual",id:"tutorial/manual",title:"Manual Meta-Analysis",description:"How to create a custom, manual meta-analysis.",source:"@site/docs/tutorial/manual.md",sourceDirName:"tutorial",slug:"/tutorial/manual",permalink:"/compose-docs/tutorial/manual",draft:!1,editUrl:"https://github.com/neurostuff/compose-docs/edit/master/docs/tutorial/manual.md",tags:[],version:"current",lastUpdatedBy:"James Kent",lastUpdatedAt:1727371486,formattedLastUpdatedAt:"Sep 26, 2024",sidebarPosition:1,frontMatter:{sidebar_label:"Manual Meta-Analysis",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorials",permalink:"/compose-docs/tutorial/"},next:{title:"Automated Meta-Analysis",permalink:"/compose-docs/tutorial/automated"}},d={},c=[{value:"Creating a new Project",id:"creating-a-new-project",level:2},{value:"Search &amp; Curate",id:"search--curate",level:2},{value:"Importing studies",id:"importing-studies",level:3},{value:"Searching PubMed",id:"searching-pubmed",level:4},{value:"Identification",id:"identification",level:3},{value:"Screening",id:"screening",level:3},{value:"Eligibility",id:"eligibility",level:3},{value:"Included",id:"included",level:3},{value:"Extract and Annotation",id:"extract-and-annotation",level:2},{value:"Ingestion",id:"ingestion",level:3},{value:"Editing studies",id:"editing-studies",level:3},{value:"Analysis Data",id:"analysis-data",level:4},{value:"Annotations",id:"annotations",level:4},{value:"Meta-analysis specification",id:"meta-analysis-specification",level:2},{value:"Run your meta-analysis!",id:"run-your-meta-analysis",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...s}=e;return(0,n.kt)(p,(0,i.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"manual-meta-analysis"},"Manual Meta-Analysis"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"How to create a custom, manual meta-analysis.")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This is a condensed adaptation of a course taught at OHBM 2023.\nSee the ",(0,n.kt)("a",{parentName:"p",href:"https://neurostuff.github.io/meta-analysis-book/"},"course materials")," for a complete overview.")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Neurosynth Compose")," provides a streamlined workflow to facilitate study selection and\ndata extraction. You can then easily specify a high-quality manual meta-analysis and execute it in the cloud,\nrapidly generating results that you can inspect and share."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"We will perform a slimmed down replication of the following meta-analysis:\n",(0,n.kt)("a",{parentName:"p",href:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4494985/"},"Neurobiological impact of nicotinic acetylcholine receptor agonists: An ALE meta-analysis of pharmacological neuroimaging studies"),"."),(0,n.kt)("p",{parentName:"admonition"},"For more guidance on how to choose a topic for meta-analysis, see the ",(0,n.kt)("a",{parentName:"p",href:"https://www.bmj.com/content/372/bmj.n71"},"PRISMA statement")," and the ",(0,n.kt)("a",{parentName:"p",href:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5918306/"},"10 simple rules for neuroimaging meta-analyses"),".")),(0,n.kt)("h2",{id:"creating-a-new-project"},"Creating a new Project"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Projects")," contain all the Steps necessary to create a new meta-analysis in Neurosynth Compose.\nWe'll step through this process in detail."),(0,n.kt)("p",null,"To get started, ",(0,n.kt)("em",{parentName:"p"},"sign in"),", and select ",(0,n.kt)("strong",{parentName:"p"},"New Project"),". "),(0,n.kt)("p",null,"You'll now see the Project page, showing the three stages of a meta-analysis:\n",(0,n.kt)("strong",{parentName:"p"},"Search & Curate, Extract & Annotate")," and ",(0,n.kt)("strong",{parentName:"p"},"Specify Meta-Analyses"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"New Project",src:a(4819).Z,width:"1557",height:"501"}),". "),(0,n.kt)("h2",{id:"search--curate"},"Search & Curate"),(0,n.kt)("p",null,"The first step in a meta-analysis is to ",(0,n.kt)("em",{parentName:"p"},"Search")," for studies, and ",(0,n.kt)("em",{parentName:"p"},"Curate")," these studies into a\nfinal ",(0,n.kt)("em",{parentName:"p"},"StudySet")," that contains the studies we want to include in a Meta-Analysis."),(0,n.kt)("p",null,"To get started, we must choose a Curation workflow. There are three options: Simple, PRISMA and Custom. The main difference between these options is the number of review steps involved in creating a final list of studies. ",(0,n.kt)("strong",{parentName:"p"},'For a rigorous Manual Meta-Analysis, select "PRISMA".')),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Reviewers typically require Preferred Reporting Items for Systematic Reviews and Meta-Analyses (PRISMA) reporting\nfor gold-standard meta-analyses. The PRISMA guidelines ensure a systematic selection and reporting process.\nHowever, a Simple workflow may be useful for exploratory and automated meta-analyses. ")),(0,n.kt)("p",null,"Next, you will be presented with the Curation board, consisting of four columns representing\nthe steps of a PRISMA workflow:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Identification"),": Remove duplicate studies")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Screening"),": Remove irrelevant studies")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Elibility"),": Remove studies that do not meet inclusion criteria or do not have retrievable information")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Included"),": Double check the studies and view which studies will be included in the meta-analysis"))),(0,n.kt)("p",null,"The overall goal is to go from a large number of studies from a broad search results, to only the\nstudies that are relevant to your research question. These steps should be completed in order!"),(0,n.kt)("h3",{id:"importing-studies"},"Importing studies"),(0,n.kt)("p",null,"But first, we must add studies to our Project.  Click the ",(0,n.kt)("strong",{parentName:"p"},"Import Studies")," button. "),(0,n.kt)("p",null,"You can search for studies within the ",(0,n.kt)("em",{parentName:"p"},"NeuroStore")," database\u2014which we maintain and indexes over 20,000 pre-processed neuroimaging studies\u2014or from external sources, such as PubMed or a Citation manager file. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Import Studies",src:a(3569).Z,width:"622",height:"238"}),". "),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Import via NeuroStore")," is simpler and faster, as these studies already exist on in our system\nand have pre-extracted imaging data (e.g. coordinates).\nAs a result, there will be fewer irrelevant studies to exclude, and less data extraction to complete."),(0,n.kt)("p",null,"However, ",(0,n.kt)("em",{parentName:"p"},"searching other sources")," is often recommended for a comprehensive literature search, as a single source can never index all possible studies."),(0,n.kt)("p",null,"To replicate the Nicotine meta-analysis, we will replicate the author's PubMed search."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Searching NeuroStore is a valid option for a manual meta-analysis to balance rigor and efficiency. To learn more, see the ",(0,n.kt)("a",{parentName:"p",href:"/compose-docs/tutorial/automated"},"Automated Meta-Analysis tutorial"),". ")),(0,n.kt)("h4",{id:"searching-pubmed"},"Searching PubMed"),(0,n.kt)("p",null,"We can export any PubMed search result to file, and import that file into Neurosynth Compose.\nIn this example, we perform the following search which in the ",(0,n.kt)("a",{parentName:"p",href:"https://pubmed.ncbi.nlm.nih.gov/"},"PubMed")," search field:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'("fMRI" OR "PET" OR "neuroimaging" OR "Functional magnetic resonance imaging" OR "functional MRI") \nAND ("nicotine" OR "cigarette" OR "smok*" OR "DMXB-A")\n')),(0,n.kt)("p",null,"This results in over 3,000 studies that are potentially relevant for this meta-analysis."),(0,n.kt)("p",null,"Next, we save the results to ",(0,n.kt)("inlineCode",{parentName:"p"},"PMID")," format, with a PubMed ID on each line."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Download PubMed",src:a(6652).Z,width:"1053",height:"475"})),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Reviewing 3,000 studies can take a long time!\nOnly a small percentage of these studies will meet all inclusion criteria. For the sake of the tutorial, we provide a shortened list of ",(0,n.kt)(o.aBF,{size:20,mdxType:"FaDownload"})," ",(0,n.kt)("a",{target:"_blank",href:a(7555).Z},"PUBMED IDS"),".")),(0,n.kt)("p",null,"We can import this file into our Project by clicking ",(0,n.kt)("strong",{parentName:"p"},"Upload File"),". Give this import a name for future reference.\nAll studies imported from this search will be ",(0,n.kt)("strong",{parentName:"p"},"Tagged")," with the search name. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Import name",src:a(212).Z,width:"1282",height:"354"})),(0,n.kt)("h3",{id:"identification"},"Identification"),(0,n.kt)("p",null,"All the imported studies are now visible in the first column of our PRISMA curation board. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Identification",src:a(8665).Z,width:"3595",height:"939"})),(0,n.kt)("p",null,"The purpose ",(0,n.kt)("strong",{parentName:"p"},"Identification")," is to find ",(0,n.kt)("em",{parentName:"p"},"duplicate studies"),", which is common when importing from multiple sources.\n",(0,n.kt)("em",{parentName:"p"},"Neurosynth Compose")," will automatically find potential duplicates (based on the Title, DOI, and PMID).\nHowever, you can also manually review studies to identify any duplicates we might have missed."),(0,n.kt)("p",null,"To review studies, click on the ",(0,n.kt)("strong",{parentName:"p"},"Identification"),' column header, or an individual study.\nFor each study, you can choose to "Promote" it to the next phase, "Exclude" as a duplicate, or flag for later review.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Identification review",src:a(3615).Z,width:"2251",height:"1211"})),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"To remain PRISMA compliant, you should only exclude studies for being a duplicate in the Identification step.")),(0,n.kt)("p",null,"In this example, there are no duplicates. To quickly advance, click ",(0,n.kt)("strong",{parentName:"p"},"Promote All Uncategorized Studies")," under ",(0,n.kt)("em",{parentName:"p"},"Identification"),"."),(0,n.kt)("h3",{id:"screening"},"Screening"),(0,n.kt)("p",null,"The goal of ",(0,n.kt)("em",{parentName:"p"},"Screening")," is to determine if imported studies are relevant  to your research question, based on the the Tile\nand Abstract of each."),(0,n.kt)("p",null,"To begin, click on the Screening column header from the main Curation board. The interface is\nidentical to the previous phase, except the default Exclusion reason is now ",(0,n.kt)("strong",{parentName:"p"},"irrelevant"),". "),(0,n.kt)("p",null,"Go ahead and review all 13 studies to determine if they are relevant to the topic of ",(0,n.kt)("em",{parentName:"p"},'"Nicotine administration'),'".\nAny studies that are not relevant will remain in this column and not advance.'),(0,n.kt)("h3",{id:"eligibility"},"Eligibility"),(0,n.kt)("p",null,"The goal ",(0,n.kt)("em",{parentName:"p"},"Eligibility")," is to determine studies meet the eligibility criteria of your meta-analysis.\nYou will need to read the ",(0,n.kt)("strong",{parentName:"p"},"full text")," to make this determination. "),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The eligibility criteria depends on your research question!\nThis is where your expertise is most necessary, in order to create an interesting research question,\nand filter studies accordingly. The results of this step depends on the researcher, and there may be reasonable scientific disagreements.")),(0,n.kt)("p",null,'To begin, click on the "Eligibility" column header, or a study, as before.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Custom Eligibility",src:a(940).Z,width:"2341",height:"1449"})),(0,n.kt)("p",null,"For this example, we will include studies that meet these criteria:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"* fMRI or PET\n* Reported brain activity in stereotaxic coordinates (Talairach or MNI space)\n* Reported a set of coordinates (i.e., foci) from a within-subjects or between-subjects contrast assessing the effects of nAChR agonist administration (i.e., pharmacological administration or cigarette smoking) relative to a baseline condition (i.e., placebo administration or smoking-abstinence condition)\n* Examined brain activity using a cognitive or affective task paradigm or at rest. \n* Studies examining functional connectivity, brain morphology, or neurochemistry are excluded.\n")),(0,n.kt)("p",null,"For this tutorial, go ahead and review all studies in this column, and Promote relevant studies to the next phase."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Given that this phase is more open-ended, there is no default Exclusion reason. We provide four default options for you, and\nyou may define custom Exclusion reasons if you see fit.")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},'For open source studies, we will link to the article full text (PDF). If not available, click\n"view article link" to view article\'s PubMed page, and access the full text using your credentials.')),(0,n.kt)("h3",{id:"included"},"Included"),(0,n.kt)("p",null,"Congratulations! Once you have reviewed all studies, you should have a set of studies that you want to include in your meta-analysis. "),(0,n.kt)("p",null,"At this point, you can review this final list, and view a PRISMA diagram visually outlining your review process:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"PRISMA",src:a(8718).Z,width:"1714",height:"1448"})),(0,n.kt)("p",null,"To finish ",(0,n.kt)("em",{parentName:"p"},"Curation"),", and create a final StudySet, click ",(0,n.kt)("em",{parentName:"p"},"Move on to Extraction")," at the top right. "),(0,n.kt)("h2",{id:"extract-and-annotation"},"Extract and Annotation"),(0,n.kt)("p",null,"The goal of this phase is to ",(0,n.kt)("strong",{parentName:"p"},"extract data")," from the text of studies (such as coordinates)\nthat will be used in the meta-analysis. You will also want to ",(0,n.kt)("strong",{parentName:"p"},"annotate")," relevant Study meta-data.\nMost commonly, for each Study you will designate which Analyses (i.e. Contrasts) to included in your meta-analysis."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Studies that are already indexed by NeuroStore will have automatically extracted data (such as coordinates)\nsaving you a lot of time and effort. However, you may want to verify and improve this information.")),(0,n.kt)("h3",{id:"ingestion"},"Ingestion"),(0,n.kt)("p",null,"But first, we must create a StudySet containing your studies! "),(0,n.kt)("p",null,"New studies not in the NeuroStore database will be created, and studies that match existing studies will be added to a newly created StudySet."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Studies in NeuroStore have multiple Versions, including those created by other users, as well as the original copy."),(0,n.kt)("p",{parentName:"admonition"},"If you ingest a study that is already indexed in the database, we will match to the newest possible Version, by default.\nIdeally, this will be a Version that another user has already improved, saving you even more time!"),(0,n.kt)("p",{parentName:"admonition"},"You can switch Study Versions at anytime (including to the original automate copy) by clicking ",(0,n.kt)("em",{parentName:"p"},"Switch Study Version")," at the bottom\nof Study's page. Any edits you make will automatically be saved as a new Version.")),(0,n.kt)("h3",{id:"editing-studies"},"Editing studies"),(0,n.kt)("p",null,"Once your StudySet is created, it's time to edit studies. You will see a list of your studies:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Extraction",src:a(9774).Z,width:"1655",height:"799"})),(0,n.kt)("p",null,"Click on any Study to edit:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Extraction study view",src:a(5362).Z,width:"2418",height:"856"})),(0,n.kt)("h4",{id:"analysis-data"},"Analysis Data"),(0,n.kt)("p",null,"Let's start by editing a Study's Analyses."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Extraction study view",src:a(369).Z,width:"2128",height:"923"})),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("em",{parentName:"p"},"Analyses"),' are groups of images or coordinates reported in a given study fir a specific analysis. This is often referred to as "Contrasts", but we use the more general term "Analyses" to accommodate a wider range of fMRI models. ')),(0,n.kt)("p",null,"For new studies, we will not have any data, and it is necessary to manually enter these data from the text of a study.\nWe can create a new Analysis for each group of Coordinates, and input the data from the text:"),(0,n.kt)("p",null,"For studies already indexed by NeuroStore, we will already have pre-extracted Coordinates. You can use this same interface to verify and correct these data. "),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Automatically extracted coordinates can contain a number of errors. Mostly commonly, several distinct Analyses (i.e. contrasts), will get grouped into a single Analyses. You will want to create new Analyses to split up the Coordinates into distinct units. "),(0,n.kt)("p",{parentName:"admonition"},"Another common error is that Analyses are duplicated, meaning you may want to delete extra Analyses. ")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You can copy and paste coordinates from Microsoft Excel or Google Sheets.")),(0,n.kt)("h4",{id:"annotations"},"Annotations"),(0,n.kt)("p",null,"A key goal of the Extraction phase, is to add Annotations that can help us distinguish Analyses, and include/exclude specific Analyses from a meta-analysis. Annotations are simply columns of data with a value for all Analyses within a StudySet."),(0,n.kt)("p",null,"Annotations can be explained as a way to categorize analyses within each study. For example, they can be categorized by task (e.g., Stroop, N-back, etc.), by modality (e.g., fMRI, PET, etc.), or by any other category that you want to use to filter the analyses. "),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},'By default, a single Annotation called "included" is created, which includes all Analyses.\nYou can modify this Annotation to select the relevant Analyses of interest to your research question')),(0,n.kt)("p",null,"For this replication, we are interested in the effects of nAChR agonists on the brain, which can either be excitatory or inhibitory, so we add both an \u201cactivation\u201d and \u201cdeactivation\u201d column. "),(0,n.kt)("p",null,'First create an Annotation. From the main Extraction page, click "View Annotations" on the top right. Here you can view all annotations and the value for each Analyses, as well as create new Annotations. You can choose the data type of each column as either a Number, String, or Boolean. Selected a Boolean data type for the \u201cactivation\u201d and \u201cdeactivation\u201d columns, which will allow you to filter the analyses by whether they are excitatory or inhibitory. By default you will have an \u201cinclude\u201d column to help get you started.'),(0,n.kt)("p",null,'Below, I am creating a new Annotation for "deactivations"'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"annotation for a study",src:a(8669).Z,width:"1795",height:"758"})),(0,n.kt)("p",null,'Now, when I look at a study, I can edit the value for Analyses, assigning each group of coordinates as "activations" or "deactivations":'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"annotation for a study",src:a(4235).Z,width:"850",height:"128"})),(0,n.kt)("h2",{id:"meta-analysis-specification"},"Meta-analysis specification"),(0,n.kt)("p",null,"You are finally ready to specify a meta-analysis! "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"start meta-analysis specification",src:a(234).Z,width:"834",height:"308"})),(0,n.kt)("p",null,"After clicking ",(0,n.kt)("strong",{parentName:"p"},'"+ Meta-Analysis Specification"'),", you'll see the following dialog:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Meta-analysis wizard",src:a(588).Z,width:"1762",height:"1014"})),(0,n.kt)("p",null,'For each Meta-Analysis, you will select an Annotation to filter the Analyses to include.\nRemember, by default, the "included" column will be created and include ',(0,n.kt)("em",{parentName:"p"},"all")," Analyses. "),(0,n.kt)("p",null,"Next, you will ",(0,n.kt)("strong",{parentName:"p"},"select a meta-analysis Algorithm and Corrector"),":"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Meta-analysis algorithm",src:a(3556).Z,width:"1762",height:"1014"})),(0,n.kt)("p",null,'A variety of common meta-analysis algorithms such as "ALE" and "MKDA" are available, as well as two\nstrategies for controlling for multiple comparisons: FDR (false detection rate) and FWE (family wise error).'),(0,n.kt)("p",null,'For this example, we\'ll choose "MKDADensity" and and "FDRCorrection". You can modify the parameters for each, if you want,\nbut we provide sane defaults for all. '),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Learn more about meta-analysis algorithms in the ",(0,n.kt)("a",{parentName:"p",href:"https://nimare.readthedocs.io/en/stable/index.html"},"NiMARE Documentation"))),(0,n.kt)("p",null,"Next, you'll give your meta-analysis a name, and review the details of your specification. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Meta-analysis review",src:a(7832).Z,width:"1771",height:"1575"})),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You can define multiple Meta-Analysis specifications in a Project, paired to the same StudySet")),(0,n.kt)("h2",{id:"run-your-meta-analysis"},"Run your meta-analysis!"),(0,n.kt)("p",null,"Congratulations! You now have a Meta-Analysis specification that is ready to run."),(0,n.kt)("p",null,"You can execute your Meta-Analysis for free in the cloud on Google Colab by copying the unique ",(0,n.kt)("em",{parentName:"p"},"meta-analysis id"),"\nand pasting it into our Google Colab notebook."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Meta-analysis run",src:a(3349).Z,width:"2994",height:"1030"})))}m.isMDXComponent=!0},7555:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/files/tutorial_pmids-434d072c0087956ffdef61013ba6d0da.txt"},369:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/add_coordinates-8bea486d4904648bcafa7ea0aa3ccf05.png"},5362:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/annotate_and_extract_study-ca3e4d3930ebf9dc60ad23185a36eefc.png"},8669:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/annotation_create-1b42a849c3fa25379a4492e899c883bd.png"},4235:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/annotation_view-bb152fb9777b96fa48ecf95ada750d97.png"},940:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/custom_exclusion-16ad73f8fbab6041651f04bf3deb4f80.png"},6652:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/download_search_results-d5ec087db9b8527d9891715d987540a0.png"},9774:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/extraction_and_annotation-3f2588aa81794ea975ca13e54b3ae968.png"},8665:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/identification-7f834ceb21aa8027ee29b527ead7700d.png"},3615:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/identification_review-95da15912e8e3b0ecd45612d88ce8ae7.png"},212:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/import_name-47b2b52fb0476898def227448666b9c9.png"},3569:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/import_studies_options-d58951af444810f76b35e77050c7deb4.png"},3556:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/ma_algorithm-76b551077f36af384173d025dd8d39cb.png"},7832:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/ma_review-dca9072320631a4c2b7bd8a3939763bf.png"},3349:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/ma_run-21ff60898e902524975d8fc965d4a08c.png"},588:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/ma_wizard-94f17423e2d4a4df7e23f88cb26c4595.png"},4819:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/new_project_view-865234e6c83825dde8320121d1d9c773.png"},8718:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/prisma_diagram-399aba8441e1b00d3ffb3cdc7b5c6d9c.png"},234:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/proceed_meta_analysis-ccd673905b3f5425823cc947b282bd48.png"}}]);