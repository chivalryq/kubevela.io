(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{134:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(341)),i={title:"Overview"},c={unversionedId:"platform-engineers/cloud-services",id:"platform-engineers/cloud-services",isDocsHomePage:!1,title:"Overview",description:"Cloud services are important components of your application, and KubeVela allows you to provision and consume them in a consistent experience.",source:"@site/docs/platform-engineers/cloud-services.md",slug:"/platform-engineers/cloud-services",permalink:"/docs/next/platform-engineers/cloud-services",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/platform-engineers/cloud-services.md",version:"current",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1620154848,formattedLastUpdatedAt:"5/4/2021",sidebar:"docs",previous:{title:"Attach Traits",permalink:"/docs/next/platform-engineers/kube/trait"},next:{title:"Terraform",permalink:"/docs/next/platform-engineers/terraform"}},l=[{value:"How Does KubeVela Manage Cloud Services?",id:"how-does-kubevela-manage-cloud-services",children:[]},{value:"Does KubeVela Talk to the Clouds?",id:"does-kubevela-talk-to-the-clouds",children:[]},{value:"Can a Instance of Cloud Services be Shared by Multiple Applications?",id:"can-a-instance-of-cloud-services-be-shared-by-multiple-applications",children:[]}],s={toc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Cloud services are important components of your application, and KubeVela allows you to provision and consume them in a consistent experience."),Object(a.b)("h2",{id:"how-does-kubevela-manage-cloud-services"},"How Does KubeVela Manage Cloud Services?"),Object(a.b)("p",null,"In KubeVela, the needed cloud services are claimed as ",Object(a.b)("em",{parentName:"p"},"components")," in an application, and consumed via ",Object(a.b)("em",{parentName:"p"},"Service Binding Trait")," by other components."),Object(a.b)("h2",{id:"does-kubevela-talk-to-the-clouds"},"Does KubeVela Talk to the Clouds?"),Object(a.b)("p",null,"KubeVela relies on ",Object(a.b)("a",{parentName:"p",href:"https://github.com/oam-dev/terraform-controller"},"Terraform Controller")," or ",Object(a.b)("a",{parentName:"p",href:"http://crossplane.io/"},"Crossplane")," as providers to talk to the clouds. Please check the documentations below for detailed steps."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/next/platform-engineers/terraform"},"Terraform")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/next/platform-engineers/crossplane"},"Crossplane"))),Object(a.b)("h2",{id:"can-a-instance-of-cloud-services-be-shared-by-multiple-applications"},"Can a Instance of Cloud Services be Shared by Multiple Applications?"),Object(a.b)("p",null,"Yes. Though we currently defer this to providers so by default the cloud service instances are not shared and dedicated per ",Object(a.b)("inlineCode",{parentName:"p"},"Application"),". A workaround for now is you could use a separate ",Object(a.b)("inlineCode",{parentName:"p"},"Application")," to declare the cloud service only, then other ",Object(a.b)("inlineCode",{parentName:"p"},"Application")," can consume it via service binding trait in a shared approach."),Object(a.b)("p",null,"In the future, we are considering making this part as a standard feature of KubeVela so you could claim whether a given cloud service component should be shared or not."))}p.isMDXComponent=!0},341:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return r?o.a.createElement(m,c(c({ref:t},s),{},{components:r})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);