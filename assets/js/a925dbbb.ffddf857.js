"use strict";(self.webpackChunkns_compose_docs=self.webpackChunkns_compose_docs||[]).push([[5770],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),u=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return o.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),h=r,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||a;return t?o.createElement(m,i(i({ref:n},c),{},{components:t})):o.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},712:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=t(7462),r=(t(7294),t(3905));const a={title:"Running Analyses",sidebar_position:2},i="Running Analyses",l={unversionedId:"guide/Running/index",id:"guide/Running/index",title:"Running Analyses",description:"You have a several options for running the analysis. In all cases, you will need your unique ``, which you can access for each Meta-Analysis within your Project.",source:"@site/docs/guide/Running/index.mdx",sourceDirName:"guide/Running",slug:"/guide/Running/",permalink:"/compose-docs/guide/Running/",draft:!1,editUrl:"https://github.com/neurostuff/compose-docs/edit/master/docs/guide/Running/index.mdx",tags:[],version:"current",lastUpdatedBy:"Adam Thomas",lastUpdatedAt:1722613388,formattedLastUpdatedAt:"Aug 2, 2024",sidebarPosition:2,frontMatter:{title:"Running Analyses",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Searching",permalink:"/compose-docs/guide/Explore/Searching"},next:{title:"Glossary",permalink:"/compose-docs/guide/glossary"}},s={},u=[{value:"Google Colab",id:"google-colab",level:2},{value:"Docker",id:"docker",level:2},{value:"Updating the Docker image",id:"updating-the-docker-image",level:3},{value:"Manually prepared environment using pip",id:"manually-prepared-environment-using-pip",level:2}],c={toc:u},p="wrapper";function d(e){let{components:n,...a}=e;return(0,r.kt)(p,(0,o.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"running-analyses"},"Running Analyses"),(0,r.kt)("p",null,"You have a several options for running the analysis. In all cases, you will need your unique ",(0,r.kt)("inlineCode",{parentName:"p"},"<meta-analysis-id>"),", which you can access for each Meta-Analysis within your Project."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Meta-analysis run",src:t(3349).Z,width:"2994",height:"1030"})),(0,r.kt)("p",null,"Under the hood, analyses are managed by the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/neurostuff/nsc-runner"},"nsc-runner")," Python package, and executed by the ",(0,r.kt)("a",{parentName:"p",href:"https://nimare.readthedocs.io/en/stable/"},"NiMARE")," (Neuroimaging Meta-Analysis Research Environment) Python package. "),(0,r.kt)("h2",{id:"google-colab"},"Google Colab"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/neurostuff/neurosynth-compose-notebook/blob/main/run_and_explore.ipynb"},(0,r.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"text"}))),(0,r.kt)("p",null,"The easiest way to run an analysis is to use the ",(0,r.kt)("a",{parentName:"p",href:"https://colab.research.google.com/"},"Google Colab")," notebook linked above."),(0,r.kt)("p",null,"The provided notebook runs entirely in the cloud, and does not require any local installation of software.\nTo use simply paste your analysis ID into the first cell (",(0,r.kt)("inlineCode",{parentName:"p"},"META_ID"),"), and using the Toolbar selet (Runtime -> Run All)\nor the keyboard shortcut (Ctrl or \u2318 + F9) to run the notebook."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Colab notebook",src:t(9128).Z,width:"971",height:"1046"})),(0,r.kt)("p",null,"The notebook will install all required software, run the analysis, and upload the results to Neurosynth Compose.\nOnce the analysis is complete, you can use the notebook to explore the results using the interative report, download an archive\nof the results, or browse the results in the Neurosynth Compose web interface, in the Meta-Analysis section of your Project."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The Colab notebook has limited and varying freely available resources, and may not be able to run large analyses.\nIf your analysis fails, try running it again, or using one of the other methods below.")),(0,r.kt)("h2",{id:"docker"},"Docker"),(0,r.kt)("p",null,"The easiest way to run analyses locally is to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"nsc-runner")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," image provided by Neurosynth Compose."),(0,r.kt)("p",null,"Docker is a containerization technology that allows you to run software in a consistent environment, regardless of the underlying operating system."),(0,r.kt)("p",null,"To run the Docker image, you will need to install Docker on your local machine.\nInstructions for installing Docker can be found ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"here"),"."),(0,r.kt)("p",null,"Once Docker is installed, you can run your analysis using the using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker run -it -v -v /local/dir:/results ghcr.io/neurostuff/nsc-runner:latest <meta-analysis-id>\n")),(0,r.kt)("p",null,"where ",(0,r.kt)("inlineCode",{parentName:"p"},"/local/dir")," is the path to a local directory where you would like to save the results of your analysis, and ",(0,r.kt)("inlineCode",{parentName:"p"},"<meta-analysis-id>")," is the ID of the meta-analysis you would like to run."),(0,r.kt)("p",null,"The Docker image will download all required software, run the analysis, and upload the results to Neurovault & Neurosynth Compose.\nAn HTML report will be saved in the results directory, and the results will be available in the Meta-Analysis section of your Project on Neurosynth Compose."),(0,r.kt)("h3",{id:"updating-the-docker-image"},"Updating the Docker image"),(0,r.kt)("p",null,"For every release of ",(0,r.kt)("inlineCode",{parentName:"p"},"nsc-runner"),", we publish a corresponding Docker image."),(0,r.kt)("p",null,"You can manually download a specific neuroscout-cli release as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker pull ghcr.io/neurostuff/nsc-runner:<version>\n")),(0,r.kt)("p",null,"where ",(0,r.kt)("inlineCode",{parentName:"p"},"<version>")," is the version of ",(0,r.kt)("inlineCode",{parentName:"p"},"nsc-runner")," that you want to download. If you omit version, the latest stable version will be downloaded."),(0,r.kt)("p",null,"You can see the tags available for download on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/neurostuff/compose-runner/pkgs/container/nsc-runner"},"GitHub")),(0,r.kt)("h2",{id:"manually-prepared-environment-using-pip"},"Manually prepared environment using pip"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Manually installing ",(0,r.kt)("inlineCode",{parentName:"p"},"nsc-runner")," may be difficult due to complex dependencies in the SciPy stack, or fMRI-specific tooling. Proceed only if you know what you\u2019re doing.")),(0,r.kt)("p",null,"Use pip to install ",(0,r.kt)("inlineCode",{parentName:"p"},"nsc-runner")," from PyPI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pip install nsc-runner\n")),(0,r.kt)("p",null,"and then run the analysis using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nsc-runner <meta-analysis-id>\n")))}d.isMDXComponent=!0},9128:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/nsc_colab_notebook-6dd430542ed9282c3b94937633f9c1d2.png"},3349:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/ma_run-21ff60898e902524975d8fc965d4a08c.png"}}]);