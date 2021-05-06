(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{341:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,b=d["".concat(i,".").concat(m)]||d[m]||u[m]||r;return n?o.a.createElement(b,l(l({ref:t},c),{},{components:n})):o.a.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),r=(n(0),n(341)),i={title:"Known Limitations"},l={unversionedId:"platform-engineers/helm/known-issues",id:"platform-engineers/helm/known-issues",isDocsHomePage:!1,title:"Known Limitations",description:"Limitations",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/platform-engineers/helm/known-issues.md",slug:"/platform-engineers/helm/known-issues",permalink:"/zh/docs/next/platform-engineers/helm/known-issues",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/platform-engineers/helm/known-issues.md",version:"current",lastUpdatedBy:"yangsoon",lastUpdatedAt:1620312981,formattedLastUpdatedAt:"5/6/2021",sidebar:"docs",previous:{title:"trait",permalink:"/zh/docs/next/platform-engineers/helm/trait"},next:{title:"How-to",permalink:"/zh/docs/next/platform-engineers/kube/component"}},s=[{value:"Limitations",id:"limitations",children:[{value:"Workload Type Indicator",id:"workload-type-indicator",children:[]},{value:"Always Use Full Qualified Name",id:"always-use-full-qualified-name",children:[]},{value:"Control the Application Upgrade",id:"control-the-application-upgrade",children:[]}]},{value:"Issues",id:"issues",children:[{value:"Rollout Strategy",id:"rollout-strategy",children:[]},{value:"Updating Traits Properties may Also Lead to Pods Restart",id:"updating-traits-properties-may-also-lead-to-pods-restart",children:[]}]}],c={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"limitations"},"Limitations"),Object(r.b)("p",null,"Here are some known limitations for using Helm chart as application component."),Object(r.b)("h3",{id:"workload-type-indicator"},"Workload Type Indicator"),Object(r.b)("p",null,'Following best practices of microservice, KubeVela recommends only one workload resource present in one Helm chart. Please split your "super" Helm chart into multiple charts (i.e. components). Essentially, KubeVela relies on the ',Object(r.b)("inlineCode",{parentName:"p"},"workload")," filed in component definition to indicate the workload type it needs to take care, for example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\n...\nspec:\n  workload:\n    definition:\n      apiVersion: apps/v1\n      kind: Deployment\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"...\nspec:\n  workload:\n    definition:\n      apiVersion: apps.kruise.io/v1alpha1\n      kind: Cloneset\n")),Object(r.b)("p",null," Note that KubeVela won't fail if multiple workload types are packaged in one chart, the issue is for further operational behaviors such as rollout, revisions, and traffic management, they can only take effect on the indicated workload type."),Object(r.b)("h3",{id:"always-use-full-qualified-name"},"Always Use Full Qualified Name"),Object(r.b)("p",null,"The name of the workload should be templated with ",Object(r.b)("a",{parentName:"p",href:"https://github.com/helm/helm/blob/543364fba59b0c7c30e38ebe0f73680db895abb6/pkg/chartutil/create.go#L415"},"fully qualified application name")," and please do NOT assign any value to ",Object(r.b)("inlineCode",{parentName:"p"},".Values.fullnameOverride"),". As a best practice, Helm also highly recommend that new charts should be created via ",Object(r.b)("inlineCode",{parentName:"p"},"$ helm create")," command so the template names are automatically defined as per this best practice."),Object(r.b)("h3",{id:"control-the-application-upgrade"},"Control the Application Upgrade"),Object(r.b)("p",null,"Changes made to the component ",Object(r.b)("inlineCode",{parentName:"p"},"properties")," will trigger a Helm release upgrade. This process is handled by Flux v2 Helm controller, hence you can define remediation\nstrategies in the schematic based on ",Object(r.b)("a",{parentName:"p",href:"https://github.com/fluxcd/helm-controller/blob/main/docs/api/helmrelease.md#upgraderemediation"},"Helm Release\ndocumentation"),"\nand ",Object(r.b)("a",{parentName:"p",href:"https://toolkit.fluxcd.io/components/helm/helmreleases/#configuring-failure-remediation"},"specification"),"\nin case failure happens during this upgrade."),Object(r.b)("p",null,"For example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nmetadata:\n  name: webapp-chart\nspec:\n...\n  schematic:\n    helm:\n      release:\n        chart:\n          spec:\n            chart: "podinfo"\n            version: "5.1.4"\n        upgrade:\n          remediation:\n            retries: 3 \n            remediationStrategy: rollback\n      repository:\n        url: "http://oam.dev/catalog/"\n\n')),Object(r.b)("p",null,"Though one issue is for now it's hard to get helpful information of a living Helm release to figure out what happened if upgrading failed. We will enhance the observability to help users track the situation of Helm release in application level."),Object(r.b)("h2",{id:"issues"},"Issues"),Object(r.b)("p",null,"The known issues will be fixed in following releases."),Object(r.b)("h3",{id:"rollout-strategy"},"Rollout Strategy"),Object(r.b)("p",null,"For now, Helm based components cannot benefit from ",Object(r.b)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/blob/master/design/vela-core/rollout-design.md#applicationdeployment-workflow"},"application level rollout strategy"),". As shown in ",Object(r.b)("a",{parentName:"p",href:"./trait#update-an-applicatiion"},"this sample"),", if the application is updated, it can only be rollouted directly without canary or blue-green approach."),Object(r.b)("h3",{id:"updating-traits-properties-may-also-lead-to-pods-restart"},"Updating Traits Properties may Also Lead to Pods Restart"),Object(r.b)("p",null,"Changes on traits properties may impact the component instance and Pods belonging to this workload instance will restart. In CUE based components this is avoidable as KubeVela has full control on the rendering process of the resources, though in Helm based components it's currently deferred to Flux v2 controller."))}p.isMDXComponent=!0}}]);