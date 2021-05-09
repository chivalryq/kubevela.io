(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[7239],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8615:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p},default:function(){return u}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),l={title:"Quick Start"},i={unversionedId:"quick-start",id:"quick-start",isDocsHomePage:!1,title:"Quick Start",description:"Welcome to KubeVela! In this guide, we'll walk you through how to install KubeVela, and deploy your first simple application.",source:"@site/docs/quick-start.md",sourceDirName:".",slug:"/quick-start",permalink:"/docs/next/quick-start",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/quick-start.md",version:"current",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1620154848,formattedLastUpdatedAt:"5/4/2021",frontMatter:{title:"Quick Start"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/next/install"},next:{title:"How it Works",permalink:"/docs/next/concepts"}},p=[{value:"Step 1: Install",id:"step-1-install",children:[]},{value:"Step 2: Deploy Your First Application",id:"step-2-deploy-your-first-application",children:[]},{value:"What&#39;s Next",id:"whats-next",children:[]}],s={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Welcome to KubeVela! In this guide, we'll walk you through how to install KubeVela, and deploy your first simple application."),(0,o.kt)("h2",{id:"step-1-install"},"Step 1: Install"),(0,o.kt)("p",null,"Make sure you have finished and verified the installation following ",(0,o.kt)("a",{parentName:"p",href:"./install"},"this guide"),"."),(0,o.kt)("h2",{id:"step-2-deploy-your-first-application"},"Step 2: Deploy Your First Application"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/docs/examples/vela-app.yaml\napplication.core.oam.dev/first-vela-app created\n")),(0,o.kt)("p",null,"Check the status until we see ",(0,o.kt)("inlineCode",{parentName:"p"},"status")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"running")," and services are ",(0,o.kt)("inlineCode",{parentName:"p"},"healthy"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$  kubectl get application first-vela-app -o yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\n...\nstatus:\n  ...\n  services:\n  - healthy: true\n    name: express-server\n    traits:\n    - healthy: true\n      message: 'Visiting URL: testsvc.example.com, IP: your ip address'\n      type: ingress\n  status: running\n")),(0,o.kt)("p",null,"If your cluster has a working ingress, you can visit the service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ curl -H "Host:testsvc.example.com" http://<your ip address>/\n<xmp>\nHello World\n\n\n                                       ##         .\n                                 ## ## ##        ==\n                              ## ## ## ## ##    ===\n                           /""""""""""""""""\\___/ ===\n                      ~~~ {~~ ~~~~ ~~~ ~~~~ ~~ ~ /  ===- ~~~\n                           \\______ o          _,/\n                            \\      \\       _,\'\n                             `\'--.._\\..--\'\'\n</xmp>\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Voila!")," You are all set to go."),(0,o.kt)("h2",{id:"whats-next"},"What's Next"),(0,o.kt)("p",null,"Here are some recommended next steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Learn KubeVela starting from its ",(0,o.kt)("a",{parentName:"li",href:"./concepts"},"core concepts")),(0,o.kt)("li",{parentName:"ul"},"Learn more details about ",(0,o.kt)("a",{parentName:"li",href:"end-user/application"},(0,o.kt)("inlineCode",{parentName:"a"},"Application"))," and what it can do for you."),(0,o.kt)("li",{parentName:"ul"},"Learn how to attach ",(0,o.kt)("a",{parentName:"li",href:"end-user/scopes/rollout-plan"},"rollout plan")," to this application, or ",(0,o.kt)("a",{parentName:"li",href:"end-user/scopes/appdeploy"},"place it to multiple runtime clusters"),"."),(0,o.kt)("li",{parentName:"ul"},"Join ",(0,o.kt)("inlineCode",{parentName:"li"},"#kubevela")," channel in CNCF ",(0,o.kt)("a",{parentName:"li",href:"https://cloud-native.slack.com"},"Slack")," and/or ",(0,o.kt)("a",{parentName:"li",href:"https://gitter.im/oam-dev/community"},"Gitter"))),(0,o.kt)("p",null,"Welcome onboard and sail Vela!"))}u.isMDXComponent=!0}}]);