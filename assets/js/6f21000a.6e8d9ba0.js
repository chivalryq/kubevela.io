(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[2],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5621:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return s},default:function(){return p}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),l={title:"How it Works"},i={unversionedId:"concepts",id:"version-v1.1/concepts",isDocsHomePage:!1,title:"How it Works",description:"In this documentation, we will explain the core idea of KubeVela and clarify some technical terms that are widely used in the project.",source:"@site/versioned_docs/version-v1.1/concepts.md",sourceDirName:".",slug:"/concepts",permalink:"/docs/v1.1/concepts",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/concepts.md",version:"v1.1",lastUpdatedBy:"yangsoon",lastUpdatedAt:1623737988,formattedLastUpdatedAt:"6/15/2021",frontMatter:{title:"How it Works"},sidebar:"version-v1.1/docs",previous:{title:"Quick Start",permalink:"/docs/v1.1/quick-start"},next:{title:"Application",permalink:"/docs/v1.1/end-user/application"}},s=[{value:"Architecture",id:"architecture",children:[{value:"Control Plane Cluster",id:"control-plane-cluster",children:[]},{value:"Runtime Clusters",id:"runtime-clusters",children:[]}]},{value:"API",id:"api",children:[]},{value:"Workflow",id:"workflow",children:[]},{value:"Environment",id:"environment",children:[]},{value:"What&#39;s Next",id:"whats-next",children:[]}],c={toc:s};function p(e){var t=e.components,l=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this documentation, we will explain the core idea of KubeVela and clarify some technical terms that are widely used in the project."),(0,o.kt)("h2",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,"The overall architecture of KubeVela is shown as below:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt",src:n(74131).Z})),(0,o.kt)("h3",{id:"control-plane-cluster"},"Control Plane Cluster"),(0,o.kt)("p",null,"The main part of KubeVela. It is the component that users will interact with and where the KubeVela controllers are running on. Control plane cluster will deploy the application to multiple ",(0,o.kt)("em",{parentName:"p"},"runtime clusters"),". "),(0,o.kt)("h3",{id:"runtime-clusters"},"Runtime Clusters"),(0,o.kt)("p",null,"Runtime clusters are where the applications are actually running on. The needed addons in runtime cluster are automatically discovered and installed with leverage of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cloudnativeapp/CLM"},"CRD Lifecycle Management (CLM)"),"."),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("p",null,"On control plane cluster, KubeVela introduces ",(0,o.kt)("a",{parentName:"p",href:"https://oam.dev"},"Open Application Model (OAM)")," as the higher level API. Hence users of KubeVela only work on application level with a consistent experience, regardless of the complexity of heterogeneous runtime environments."),(0,o.kt)("p",null,"This API could be explained as below:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt",src:n(96092).Z})),(0,o.kt)("p",null,"In detail:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Components - deployable/provisionable entities that compose your application.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"e.g. a Helm chart, a Kubernetes workload, a CUE or Terraform module, or a cloud database instance etc."))),(0,o.kt)("li",{parentName:"ul"},"Traits - attachable features that will ",(0,o.kt)("em",{parentName:"li"},"overlay")," given component with operational behaviors.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"e.g. autoscaling rules, rollout strategies, ingress rules, sidecars, security policies etc."))),(0,o.kt)("li",{parentName:"ul"},"Application - full description of your application deployment assembled with components and traits."),(0,o.kt)("li",{parentName:"ul"},"Environment - the target environments to deploy this application.")),(0,o.kt)("p",null,"We also reference components and traits as ",(0,o.kt)("em",{parentName:"p"},'"capabilities"')," in KubeVela."),(0,o.kt)("h2",{id:"workflow"},"Workflow"),(0,o.kt)("p",null,"To ensure simple yet consistent user experience across hybrid environments. KubeVela introduces a workflow with separate of concerns as below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Platform Team"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Model and manage platform capabilities as components or traits, together with target environments specifications."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Application Team"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Choose a environment, assemble the application with components and traits per needs, and deploy it to target environment.")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that either platform team or application team application will only talk to the control plane cluster. KubeVela is designed to hide the details of runtime clusters except for debugging or verifying purpose.")),(0,o.kt)("p",null,"Below is how this workflow looks like:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt",src:n(61942).Z})),(0,o.kt)("p",null,"All the capability building blocks can be updated or extended easily at any time since they are fully programmable (currently support CUE, Terraform and Helm)."),(0,o.kt)("h2",{id:"environment"},"Environment"),(0,o.kt)("p",null,'Before releasing an application to production, it\'s important to test the code in testing/staging workspaces. In KubeVela, we describe these workspaces as "environments". Each environment has its own configuration (e.g., domain, Kubernetes cluster and namespace, configuration data, access control policy, etc.) to allow user to create different deployment environments such as "test" and "production".'),(0,o.kt)("p",null,"Currently, a KubeVela ",(0,o.kt)("inlineCode",{parentName:"p"},"environment")," only maps to a Kubernetes namespace. In the future, a ",(0,o.kt)("inlineCode",{parentName:"p"},"environment")," will contain multiple clusters."),(0,o.kt)("h2",{id:"whats-next"},"What's Next"),(0,o.kt)("p",null,"Here are some recommended next steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Learn how to ",(0,o.kt)("a",{parentName:"li",href:"end-user/application"},"deploy an application")," and understand how it works."),(0,o.kt)("li",{parentName:"ul"},"Join ",(0,o.kt)("inlineCode",{parentName:"li"},"#kubevela")," channel in CNCF ",(0,o.kt)("a",{parentName:"li",href:"https://cloud-native.slack.com"},"Slack")," and/or ",(0,o.kt)("a",{parentName:"li",href:"https://gitter.im/oam-dev/community"},"Gitter"))),(0,o.kt)("p",null,"Welcome onboard and sail Vela!"))}p.isMDXComponent=!0},74131:function(e,t,n){"use strict";t.Z=n.p+"assets/images/arch-2be2292900594650cc1eaac54cfc74a6.png"},96092:function(e,t,n){"use strict";t.Z=n.p+"assets/images/concepts-7e8654d51a1c18d198d26599e7e8772e.png"},61942:function(e,t,n){"use strict";t.Z=n.p+"assets/images/how-it-works-bcfe960f7933b102764d6881e016dfb7.png"}}]);