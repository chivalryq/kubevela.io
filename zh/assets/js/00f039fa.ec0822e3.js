(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[9850],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3474:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return s},default:function(){return c}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),o={title:"Quick Start"},i={unversionedId:"quick-start",id:"version-v1.1/quick-start",isDocsHomePage:!1,title:"Quick Start",description:"Welcome to KubeVela! In this guide, we'll walk you through how to install KubeVela, and deploy your first simple application.",source:"@site/versioned_docs/version-v1.1/quick-start.md",sourceDirName:".",slug:"/quick-start",permalink:"/zh/docs/v1.1/quick-start",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/quick-start.md",version:"v1.1",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1621052799,formattedLastUpdatedAt:"2021/5/15",frontMatter:{title:"Quick Start"},sidebar:"version-v1.1/docs",previous:{title:"Installation",permalink:"/zh/docs/v1.1/install"},next:{title:"How it Works",permalink:"/zh/docs/v1.1/concepts"}},s=[{value:"Step 1: Install",id:"step-1-install",children:[]},{value:"Step 2: Deploy Your First Application",id:"step-2-deploy-your-first-application",children:[]},{value:"What&#39;s Next",id:"whats-next",children:[]}],p={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Welcome to KubeVela! In this guide, we'll walk you through how to install KubeVela, and deploy your first simple application."),(0,l.kt)("h2",{id:"step-1-install"},"Step 1: Install"),(0,l.kt)("p",null,"Make sure you have finished and verified the installation following ",(0,l.kt)("a",{parentName:"p",href:"./install"},"this guide"),"."),(0,l.kt)("h2",{id:"step-2-deploy-your-first-application"},"Step 2: Deploy Your First Application"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"script",script:!0},"kubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/docs/examples/vela-app.yaml\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"application.core.oam.dev/first-vela-app created\n")),(0,l.kt)("p",null,"Check the status until we see ",(0,l.kt)("inlineCode",{parentName:"p"},"status")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"running")," and services are ",(0,l.kt)("inlineCode",{parentName:"p"},"healthy"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"script",script:!0},"kubectl get application first-vela-app -o yaml\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\n...\nstatus:\n  ...\n  services:\n  - healthy: true\n    name: express-server\n    traits:\n    - healthy: true\n      message: 'Visiting URL: testsvc.example.com, IP: your ip address'\n      type: ingress\n  status: running\n")),(0,l.kt)("p",null,"If your cluster has a working ingress, you can visit the service."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"script",script:!0},'curl -H "Host:testsvc.example.com" http://<your ip address>/\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},'<xmp>\nHello World\n\n\n                                       ##         .\n                                 ## ## ##        ==\n                              ## ## ## ## ##    ===\n                           /""""""""""""""""\\___/ ===\n                      ~~~ {~~ ~~~~ ~~~ ~~~~ ~~ ~ /  ===- ~~~\n                           \\______ o          _,/\n                            \\      \\       _,\'\n                             `\'--.._\\..--\'\'\n</xmp>\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Voila!")," You are all set to go."),(0,l.kt)("h2",{id:"whats-next"},"What's Next"),(0,l.kt)("p",null,"Here are some recommended next steps:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Learn KubeVela starting from its ",(0,l.kt)("a",{parentName:"li",href:"./concepts"},"core concepts")),(0,l.kt)("li",{parentName:"ul"},"Learn more details about ",(0,l.kt)("a",{parentName:"li",href:"end-user/application"},(0,l.kt)("inlineCode",{parentName:"a"},"Application"))," and what it can do for you."),(0,l.kt)("li",{parentName:"ul"},"Learn how to attach ",(0,l.kt)("a",{parentName:"li",href:"end-user/scopes/rollout-plan"},"rollout plan")," to this application, or ",(0,l.kt)("a",{parentName:"li",href:"end-user/scopes/appdeploy"},"place it to multiple runtime clusters"),"."),(0,l.kt)("li",{parentName:"ul"},"Join ",(0,l.kt)("inlineCode",{parentName:"li"},"#kubevela")," channel in CNCF ",(0,l.kt)("a",{parentName:"li",href:"https://cloud-native.slack.com"},"Slack")," and/or ",(0,l.kt)("a",{parentName:"li",href:"https://gitter.im/oam-dev/community"},"Gitter"))),(0,l.kt)("p",null,"Welcome onboard and sail Vela!"))}c.isMDXComponent=!0}}]);