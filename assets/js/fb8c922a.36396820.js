"use strict";(self.webpackChunkns_compose_docs=self.webpackChunkns_compose_docs||[]).push([[9687],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(r),h=a,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||o;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9820:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"Project",sidebar_position:0},i="Project",l={unversionedId:"guide/Project/index",id:"guide/Project/index",title:"Project",description:"Overview",source:"@site/docs/guide/Project/index.mdx",sourceDirName:"guide/Project",slug:"/guide/Project/",permalink:"/compose-docs/guide/Project/",draft:!1,editUrl:"https://github.com/neurostuff/compose-docs/edit/master/docs/guide/Project/index.mdx",tags:[],version:"current",lastUpdatedBy:"Nicholas Lee",lastUpdatedAt:1722645541,formattedLastUpdatedAt:"Aug 3, 2024",sidebarPosition:0,frontMatter:{title:"Project",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"User Guide",permalink:"/compose-docs/guide/"},next:{title:"Curation",permalink:"/compose-docs/guide/Project/Curation"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Create a project",id:"create-a-project",level:2},{value:"Create a blank project",id:"create-a-blank-project",level:3},{value:"Create a project from a sleuth file",id:"create-a-project-from-a-sleuth-file",level:3},{value:"Sleuth file format requirements",id:"sleuth-file-format-requirements",level:4},{value:"1. File Reference.",id:"1-file-reference",level:5},{value:"2. Identifier (DOI or PubMed Id)",id:"2-identifier-doi-or-pubmed-id",level:5},{value:"3. Author, year &amp; experiment name",id:"3-author-year--experiment-name",level:5},{value:"4.Subjects",id:"4subjects",level:5},{value:"5. Coordinates",id:"5-coordinates",level:5},{value:"Common Import errors",id:"common-import-errors",level:4},{value:"Opening a project",id:"opening-a-project",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"project"},"Project"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"A project organizes the the various steps needed to create a meta-analysis from start to finish."),(0,a.kt)("p",null,"Within a project you will be able to:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"./Project/Curation"},"Curate"))," studies of interest and select the ones to be included in the meta-analysis"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"./Project/Extraction"},"Extract"))," the relevant data such as activation coordinates and other meta-data"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"./Project/Specification"},"Specify"))," the algorithm and corrector you would like to use")),(0,a.kt)("p",null,"In each project, you can define a single studyset (i.e. a collection of related studies defined and used in the extraction phase), and one or more meta-analysis specifications."),(0,a.kt)("h2",{id:"create-a-project"},"Create a project"),(0,a.kt)("p",null,"There are two ways to create a project and do your meta-analysis."),(0,a.kt)("h3",{id:"create-a-blank-project"},"Create a blank project"),(0,a.kt)("p",null,'The first method is to click on the "NEW PROJECT" button in the top navigation menu. This will create a new blank project. You will then be asked to get started on the ',(0,a.kt)("a",{parentName:"p",href:"/compose-docs/guide/Project/Curation"},"curation phase")," in order to progress."),(0,a.kt)("h3",{id:"create-a-project-from-a-sleuth-file"},"Create a project from a sleuth file"),(0,a.kt)("p",null,'The second method of creating a project is to click on the dropdown button on the right of "NEW PROJECT". This will show an option: "Create project from sleuth file". Click on that option and you will be brought to a new page to begin creating a new project from your sleuth file.'),(0,a.kt)("p",null,"Please note that neurosynth-compose requires a specific format in order to proceed with the import. We require that each experiment within the sleuth file ",(0,a.kt)("em",{parentName:"p"},"references either a PubMed ID or a DOI"),". The exact requirements are specified below:"),(0,a.kt)("h4",{id:"sleuth-file-format-requirements"},"Sleuth file format requirements"),(0,a.kt)("h5",{id:"1-file-reference"},"1. File Reference."),(0,a.kt)("p",null,"This reference specifies the coordinate space and must appear at the top of the file. Do not omit the first two forward slashes.",(0,a.kt)("br",null)),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// Reference=MNI\n")),(0,a.kt)("h5",{id:"2-identifier-doi-or-pubmed-id"},"2. Identifier (DOI or PubMed Id)"),(0,a.kt)("p",null,"The next lines of the file represents an experiment. We expect an identifier: ",(0,a.kt)("em",{parentName:"p"},"this can either be a DOI, a PubMedId, or both"),". Do not omit the first two forward slashes.",(0,a.kt)("br",null)),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// DOI=10.1038/nmeth.1635\nor\n// PubMedId=21706013\nor\n// DOI=10.1038/nmeth.1635\n// PubMedId=21706013\n")),(0,a.kt)("h5",{id:"3-author-year--experiment-name"},"3. Author, year & experiment name"),(0,a.kt)("p",null,"We expect a line containing the authors, year, and experiment name. The authors + year should be separated from the experiment name by a colon. There can be 1 or more lines representing multiple authors + year and experiment name. Do not omit the first two forward slashes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// Smith et al., 1996: 1 Back vs 0 Back\nor\n// Smith et al., 1996: 1 Back vs 0 Back\n// Graeff et al., 1995: 2 Back vs 1 Back\n// Edwards et al., 2017: 2 Back vs 0 Back\n")),(0,a.kt)("h5",{id:"4subjects"},"4.Subjects"),(0,a.kt)("p",null,"After the lines representing one or more authors + year and experiment name, add a line for the number of subjects in the experiment."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// Subjects=23\n")),(0,a.kt)("h5",{id:"5-coordinates"},"5. Coordinates"),(0,a.kt)("p",null,"Add the X, Y, and Z coordinates. Do not add the two forward slashes. The coordinates should be ",(0,a.kt)("strong",{parentName:"p"},"delimited by tabs"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-27 34  72\n-7  -8   -9\n10  -12 -62\n")),(0,a.kt)("p",null,"Your sleuth file should look something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// Reference=MNI\n// DOI=10.1016/1234567\n// PubMedId=67123237\n// Smith et al., 2019: Working Memory vs Baseline\n// Subjects=23\n-2  8    9\n10  -12 -62\n21  -14 -2\n0   -9  16\n\n// DOI=10.217/1234568\n// PubMedId=23782389\n// Roberts et al., 1995: 2 Back vs 1 Back\n// Graeff et al., 2000: 1 Back vs 0 Back\n// Edwards et al., 2017: 2 Back vs 0 Back\n// Subjects=62\n82  12  0\n-27 34  72\n-7  -8  -9\n10  -12 -62\n")),(0,a.kt)("h4",{id:"common-import-errors"},"Common Import errors"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Either DOI or PMID is required. (Hint: is it in the right format?) Encountered error at <...>"),(0,a.kt)("br",null),"\nThis error indicates that neither a DOI nor PMID was found at the given line. Please check that the DOI or PubMedId given was correctly formulated."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// DOI=10.1038/nmeth.1635\n// PubMedId=21706013\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Unexpected format. (Hint: Did you omit a colon or use a semi colon instead of a colon?) Encountered error at: <...>"),(0,a.kt)("br",null),"\nThis error indicates that neurosynth-compose expected to find a valid author + year and experiment name separated by a colon. Instead, it found a string that it did not recognize (or no experiment name was provided at all). Check that the line of the file indicated in the error message contains a correctly formulated author + year and experiment pairing like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// Roberts et al., 1995: 2 Back vs 1 Back\n")),(0,a.kt)("p",null,"or multiple"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// Roberts et al., 1995: 2 Back vs 1 Back\n// Graeff et al., 2000: 1 Back vs 0 Back\n// Edwards et al., 2017: 2 Back vs 0 Back\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Expected valid DOI but did not find one. Encountered error at: <...>")," ",(0,a.kt)("br",null),"\nThis error indicates that the format of the file did not adhere to the expected requirements due to an invalid DOI. Check that the line of the file indicated in the error message contains a correctly formulated DOI like: ",(0,a.kt)("inlineCode",{parentName:"p"},"// DOI=10.1038/nmeth.1635")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"At least one experiment name is required. Encountered error at: <...>"),(0,a.kt)("br",null),"\nThis error indicates that no experiments were found at the line given by the error message. Please check that the sleuth file has at least one author + year and experiment name, or that the format is correctly formatted like: ",(0,a.kt)("inlineCode",{parentName:"p"},"// Smith et al., 2019: Working Memory vs Baseline")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Expected valid PMID but did not find one. Encountered error at: <...>"),(0,a.kt)("br",null),"\nThis error indicates that the format of the file did not adhere to the expected requirements due to an invalid PubMedId. Check that the line of the file indicated in the error message contains a correctly formulated PubMedId like: ",(0,a.kt)("inlineCode",{parentName:"p"},"// PubMedId=21706013")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Encountered multiple DOIs: <...>"),(0,a.kt)("br",null),"\nThis error indicates that multiple DOIs were discovered for the same experiment while parsing the file. Check that the line of the file indicated is part of an experiment that only has one DOI."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Encountered multiple PubMed IDs: <...>"),(0,a.kt)("br",null),"\nThis error indicates that multiple PubMedIds were discovered for the same experiment while parsing the file. Check that the line of the file indicated is part of an experiment that only has one PubMedId."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Expected number of subjects. Encountered error at: <...>"),(0,a.kt)("br",null),"\nThis error indicates that the format of the file did not adhere to the expected requirements due to an invalid Subjects field. Check that the line of the file indicated in the error message contains a correctly formulated Subjects field like: ",(0,a.kt)("inlineCode",{parentName:"p"},"// Subjects=23"),". Make sure that it is not separated by a new line."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Invalid coordinates: <...>"),(0,a.kt)("br",null),"\nThe coordinates given were not in a valid format. Check that the line of the file indicated in the error message contains correctly formulated, tab separated coordinates. They should look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"82  12  0\n-27 34  72\n-7  -8  -9\n10  -12 -62\n10  -12 -62\n21  -14 -2\n0   -9  16\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Unexpected format. Encountered error at: <...>"),(0,a.kt)("br",null),"\nThis error indicates that neurosynth-compose tried to extract the author data from the file but was unable to do so either because the author was not provided or the string was formed in such a way that was not recognized. Check that the line of the file indicated in the error message contains a correctly formulated string like: ",(0,a.kt)("inlineCode",{parentName:"p"},"// Roberts et al., 1995: 2 Back vs 1 Back")),(0,a.kt)("h2",{id:"opening-a-project"},"Opening a project"),(0,a.kt)("p",null,"You can open a specific project by logging in, navigating to the\n",(0,a.kt)("a",{parentName:"p",href:"https://compose.neurosynth.org/projects"},"My Projects")," page, and selecting a project you've created."),(0,a.kt)("p",null,'When you view a project for the first time, you\'ll notice that you\'ll default to the "Edit Project" tab. Another tab, "View Meta-Analyses", will become visible when you have completed both the curation and extraction phases.'))}u.isMDXComponent=!0}}]);