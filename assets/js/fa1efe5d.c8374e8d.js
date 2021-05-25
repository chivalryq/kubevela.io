(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[6290],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},33787:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s},default:function(){return u}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),l={title:"Want More?"},o={unversionedId:"end-user/traits/more",id:"end-user/traits/more",isDocsHomePage:!1,title:"Want More?",description:"Traits in KubeVela are designed as modularized building blocks, they are fully customizable and pluggable.",source:"@site/docs/end-user/traits/more.md",sourceDirName:"end-user/traits",slug:"/end-user/traits/more",permalink:"/docs/next/end-user/traits/more",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/end-user/traits/more.md",version:"current",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1621934545,formattedLastUpdatedAt:"5/25/2021",frontMatter:{title:"Want More?"},sidebar:"docs",previous:{title:"Description",permalink:"/docs/next/end-user/traits/service-binding"},next:{title:"Placement",permalink:"/docs/next/end-user/scopes/appdeploy"}},s=[{value:"1. Get from capability canter",id:"1-get-from-capability-canter",children:[{value:"1. list",id:"1-list",children:[]},{value:"2. install",id:"2-install",children:[]},{value:"3.verify",id:"3verify",children:[]}]},{value:"2. Designed by yourself",id:"2-designed-by-yourself",children:[]}],c={toc:s};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Traits in KubeVela are designed as modularized building blocks, they are fully customizable and pluggable."),(0,i.kt)("h2",{id:"1-get-from-capability-canter"},"1. Get from capability canter"),(0,i.kt)("p",null,"KubeVela allows you to explore capabilities maintained by platform team. There are two commands in kubectl vela\nplugin: ",(0,i.kt)("inlineCode",{parentName:"p"},"comp")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"trait"),"."),(0,i.kt)("p",null,"In case you haven't installed kubectl vela plugin: see ",(0,i.kt)("a",{parentName:"p",href:"../../kubectl-plugin"},"this"),"."),(0,i.kt)("h3",{id:"1-list"},"1. list"),(0,i.kt)("p",null,"For example, let's try to list all available traits in registry:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl vela trait --discover\nShowing traits from registry: https://github.com/oam-dev/catalog/tree/master/registry\nNAME            REGISTRY      DEFINITION                            APPLIES-TO               \nservice-account default                                             [webservice worker]      \nenv             default                                             [webservice worker]      \nflagger-rollout default       canaries.flagger.app                  [webservice]             \ninit-container  default                                             [webservice worker]      \nkeda-scaler     default       scaledobjects.keda.sh                 [deployments.apps]       \nmetrics         default       metricstraits.standard.oam.dev        [webservice backend task]\nnode-affinity   default                                             [webservice worker]      \nroute           default       routes.standard.oam.dev               [webservice]             \nvirtualgroup    default                                             [webservice worker] \n")),(0,i.kt)("p",null,"Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"--discover")," flag means show all traits not in your cluster."),(0,i.kt)("h3",{id:"2-install"},"2. install"),(0,i.kt)("p",null,"Then you can install a trait like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl vela trait get init-container\nInstalling component capability init-container\nSuccessfully install trait: init-container                                                                                                 \n")),(0,i.kt)("h3",{id:"3verify"},"3.verify"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ kubectl get traitdefinition  -n vela-system\nNAME             APPLIES-TO                DESCRIPTION\ninit-container   ["webservice","worker"]   add an init container with a shared volume.\n...(other trait definitions)\n')),(0,i.kt)("p",null,"By default, the two commands will retrieve capabilities\nfrom ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/catalog/tree/master/registry"},"repo")," maintained by KubeVela."),(0,i.kt)("h2",{id:"2-designed-by-yourself"},"2. Designed by yourself"),(0,i.kt)("p",null,"Check ",(0,i.kt)("a",{parentName:"p",href:"../../platform-engineers/cue/trait"},"this documentation")," about how to design and enable your own traits in\nKubeVela platform."))}u.isMDXComponent=!0}}]);