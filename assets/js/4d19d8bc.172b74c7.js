"use strict";(self.webpackChunkns_compose_docs=self.webpackChunkns_compose_docs||[]).push([[7999],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,p=d["".concat(l,".").concat(m)]||d[m]||y[m]||r;return n?a.createElement(p,s(s({ref:t},c),{},{components:n})):a.createElement(p,s({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8522:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>y,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_label:"FAQ",sidebar_position:2},s="Frequently Asked Questions",i={unversionedId:"introduction/faq",id:"introduction/faq",title:"Frequently Asked Questions",description:"Is this service free to use?",source:"@site/docs/introduction/faq.md",sourceDirName:"introduction",slug:"/introduction/faq",permalink:"/compose-docs/introduction/faq",draft:!1,editUrl:"https://github.com/neurostuff/compose-docs/edit/master/docs/introduction/faq.md",tags:[],version:"current",lastUpdatedBy:"James Kent",lastUpdatedAt:1722895109,formattedLastUpdatedAt:"Aug 5, 2024",sidebarPosition:2,frontMatter:{sidebar_label:"FAQ",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"About Compose!",permalink:"/compose-docs/"},next:{title:"Our Team",permalink:"/compose-docs/introduction/team"}},l={},u=[],c={toc:u},d="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Is this service free to use?"),"Yes! Note, however, that NS-Compose is a web-based engine for neuroimaging meta-analysis specification; at the moment, we don\u2019t (yet?) provide free computing resources for the execution of the resulting meta-analysis specifications. However, you can easily run your meta-analysis in the cloud using Google Colab, or locally using Python. Instructions are provided after you complete a meta-analysis."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Are there any restrictions on meta-analyses created?"),"Yes. Once a meta-analysis specification is executed and results are uploaded to our platform, you will no longer be able to ",(0,o.kt)("em",null,"delete or edit")," the analysis specification. A complete copy of the StudySet and Analysis is kept on our system to ensure complete provenance. You can, however, keep the analysis as private to ensure it is unlisted in the public search.",(0,o.kt)("br",null),"If you wish to make any edits, you can edit the StudySet and create a new Analysis specification, which will receive a new unique ID.",(0,o.kt)("br",null),(0,o.kt)("br",null),"In the event that you publish any results generated using the Neurosynth Compose, you MUST provide a link to the corresponding meta-analysis specification ID on the platform."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"I've noticed that a study on your platform contains errors or is incomplete, can I fix them?"),"Yes! We welcome user contributions. You can correct or add details on a study, including meta-data and peak activation coordinates. A key piece of information that you may want to correct is how Activation coordinates are grouped into distinct Analyses (i.e., Contrasts). Please ensure that any edits you make are as objective as possible and reflect what is represented in the original Study, and *not* the goals of your meta-analysis.",(0,o.kt)("br",null),(0,o.kt)("br",null),"To avoid debates about the ground truth of a Study, when you make edits a new Version of the study is created, which is associated with your User."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"If I contribute new studies to the platform, or edit existing studies, will other users be able to see them?"),"Yes! Although a new Version of the study is created when you make any edits, we default to displaying user edited Versions over the automatically extracted versions. This is because we assume that any edits made by users will be improvements on the extraction algorithm. Please ensure any changes you make reflect this. You may also make a Version private if you don't want to share your edits with others."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"How does this project relate to the original Neurosynth?"),"Neurosynth 1.0 was an online platform for browsing automatically generated large-scale neuroimaging meta-analyses. However, because all analyses were pre-generated, users were unable to define custom meta-analyses using the Neurosynth database. Instead, Neurosynth 1.0 used text mining techniques to automatically group studies based on the frequency of the terms mentioned in the text. Neurosynth Compose is focused on allowing users to overcome the limitations of automated large-scale meta-analysis, by enabling users to annotate studies, and curate sets of studies amenable for meta-analysis. This way, users can systematically define meta-analyses using their own expertise, while still leveraging the Neurosynth database, and an easy-to-use web-based analysis builder to accelerate the meta-analysis process.",(0,o.kt)("br",null)))}y.isMDXComponent=!0}}]);