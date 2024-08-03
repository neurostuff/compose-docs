"use strict";(self.webpackChunkns_compose_docs=self.webpackChunkns_compose_docs||[]).push([[606],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},549:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={},i=void 0,s={unversionedId:"guide/Explore/Searching",id:"guide/Explore/Searching",title:"Searching",description:"Neurosynth-Compose works with the neurostore database to provide a convenient and functional interface to search for studies.",source:"@site/docs/guide/Explore/Searching.md",sourceDirName:"guide/Explore",slug:"/guide/Explore/Searching",permalink:"/compose-docs/guide/Explore/Searching",draft:!1,editUrl:"https://github.com/neurostuff/compose-docs/edit/master/docs/guide/Explore/Searching.md",tags:[],version:"current",lastUpdatedBy:"Nicholas Lee",lastUpdatedAt:1722645541,formattedLastUpdatedAt:"Aug 3, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Explore",permalink:"/compose-docs/guide/Explore/"},next:{title:"Running Analyses",permalink:"/compose-docs/guide/Running/"}},l={},p=[{value:"Search Mechanics",id:"search-mechanics",level:3},{value:"Study Data Type",id:"study-data-type",level:3},{value:"Sorting Results",id:"sorting-results",level:3},{value:"Filtering",id:"filtering",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Neurosynth-Compose works with the neurostore database to provide a convenient and functional interface to search for studies."),(0,o.kt)("h3",{id:"search-mechanics"},"Search Mechanics"),(0,o.kt)("p",null,'Searching for semantically relevant results utilizes PostgreSQL\'s support of tokens/vectors when searching documents for relevant text. This approach excludes commonly used words like "a", "it", "on", and "the". It also aims to return similar words and word forms during the search (the term "brain" should return "brains" for example). For a more in depth understanding, you can take a look at the ',(0,o.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/textsearch-controls.html"},"docs for text search"),"."),(0,o.kt)("p",null,"Searches are conducted across title and abstract fields.\nThe input supports ",(0,o.kt)("inlineCode",{parentName:"p"},"AND"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"OR"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"NOT")," operations. "),(0,o.kt)("p",null,"For example to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"AND")," operator, you can enter in a value like ",(0,o.kt)("inlineCode",{parentName:"p"},"nicotine and memory"),". Similarly, you can enter an input like ",(0,o.kt)("inlineCode",{parentName:"p"},"smoking or nicotine")," for the ",(0,o.kt)("inlineCode",{parentName:"p"},"OR")," operator, and ",(0,o.kt)("inlineCode",{parentName:"p"},"smoking -marijuana")," for the ",(0,o.kt)("inlineCode",{parentName:"p"},"NOT")," operator (where marijuana is the excluded term)."),(0,o.kt)("p",null,"In order to ensure that text is grouped together (i.e. one word follows the other) you can include the words in quotes. For example, the search ",(0,o.kt)("inlineCode",{parentName:"p"},'"anterior insula"'),' will only yield results where the word "anterior" is followed by the word "insula". You can then use the above search operators on grouped words: ',(0,o.kt)("inlineCode",{parentName:"p"},'smokers -"anterior insula"')),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"PostgreSQL's search treats the ",(0,o.kt)("inlineCode",{parentName:"p"},"OR")," operator as a union between multiple different search groups. This means that for more complicated queries, you will need to repeat\ncertain ",(0,o.kt)("inlineCode",{parentName:"p"},"AND")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"NOT")," operators amongst multiple clauses."),(0,o.kt)("p",{parentName:"admonition"},"For example, consider the search: ",(0,o.kt)("inlineCode",{parentName:"p"},"nicotine OR smoking -marijuana"),".\nIn this example, the search results returned to you will be all the results yielded from ",(0,o.kt)("inlineCode",{parentName:"p"},"nicotine")," unioned with all the results of ",(0,o.kt)("inlineCode",{parentName:"p"},"smoking -marijuana"),". Having ",(0,o.kt)("inlineCode",{parentName:"p"},"-marijuana")," here does not relate to the entire search term - just ",(0,o.kt)("inlineCode",{parentName:"p"},"smoking"),"."),(0,o.kt)("p",{parentName:"admonition"},"To ensure that you do not have any mention of marijuana in your returned papers, you must search: ",(0,o.kt)("inlineCode",{parentName:"p"},"nicotine -marijuana or smoking -marijuana"),"."),(0,o.kt)("p",{parentName:"admonition"},"The same case applies for ",(0,o.kt)("inlineCode",{parentName:"p"},"AND")," operations. In general, ",(0,o.kt)("inlineCode",{parentName:"p"},"OR")," unions between various search groups consisting of ",(0,o.kt)("inlineCode",{parentName:"p"},"and"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"not"),", and quoted search terms. ")),(0,o.kt)("h3",{id:"study-data-type"},"Study Data Type"),(0,o.kt)("p",null,"Studies can either report their findings as coordinate data, image data, or in some cases, both. Using the Study Data Type button, you\ncan filter the results so that only coordinate or image data appears. For example, if you are doing a coordinate based meta-analysis, you\nwill want to filter the results to show only studies that report coordinates."),(0,o.kt)("h3",{id:"sorting-results"},"Sorting Results"),(0,o.kt)("p",null,"Use the Sort By feature to sort the results based on a given property. You can also set this to be ascending or descending."),(0,o.kt)("h3",{id:"filtering"},"Filtering"),(0,o.kt)("p",null,"To filter the results of the search, click on the orange ",(0,o.kt)("span",{style:{fontWeight:"bold",color:"orange"}},"Add Filter")," button. You have the option of filtering by title, description, author, or publication. Enter the string you want to filter by and click add to apply the filter."),(0,o.kt)("p",null,"Only one filter can be applied for each field. In order to remove a filter, simply click on the delete button on the given filter."))}d.isMDXComponent=!0}}]);