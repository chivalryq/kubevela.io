(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[326],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,v=m["".concat(p,".").concat(d)]||m[d]||u[d]||s;return n?r.createElement(v,i(i({ref:t},c),{},{components:n})):r.createElement(v,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67011:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p},default:function(){return c}});var r=n(22122),a=n(19756),s=(n(67294),n(3905)),i={title:"Ingress"},o={unversionedId:"end-user/traits/ingress",id:"version-v1.0/end-user/traits/ingress",isDocsHomePage:!1,title:"Ingress",description:"\u26a0\ufe0f This section requires your runtime cluster has a working ingress controller.",source:"@site/versioned_docs/version-v1.0/end-user/traits/ingress.md",sourceDirName:"end-user/traits",slug:"/end-user/traits/ingress",permalink:"/zh/docs/end-user/traits/ingress",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/end-user/traits/ingress.md",version:"v1.0",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1621321946,formattedLastUpdatedAt:"5/18/2021",frontMatter:{title:"Ingress"},sidebar:"version-v1.0/docs",previous:{title:"Want More?",permalink:"/zh/docs/end-user/components/more"},next:{title:"Manual Scaling",permalink:"/zh/docs/end-user/traits/scaler"}},p=[],l={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f This section requires your runtime cluster has a working ingress controller.")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"ingress")," trait exposes a component to public Internet via a valid domain."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl vela show ingress\n# Properties\n+--------+------------------------------------------------------------------------------+----------------+----------+---------+\n|  NAME  |                                 DESCRIPTION                                  |      TYPE      | REQUIRED | DEFAULT |\n+--------+------------------------------------------------------------------------------+----------------+----------+---------+\n| http   | Specify the mapping relationship between the http path and the workload port | map[string]int | true     |         |\n| domain | Specify the domain you want to expose                                        | string         | true     |         |\n+--------+------------------------------------------------------------------------------+----------------+----------+---------+\n")),(0,s.kt)("p",null,"Attach a ",(0,s.kt)("inlineCode",{parentName:"p"},"ingress")," trait to the component you want to expose and deploy."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'# vela-app.yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: first-vela-app\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        image: crccheck/hello-world\n        port: 8000\n      traits:\n        - type: ingress\n          properties:\n            domain: testsvc.example.com\n            http:\n              "/": 8000\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/docs/examples/vela-app.yaml\napplication.core.oam.dev/first-vela-app created\n")),(0,s.kt)("p",null,"Check the status until we see ",(0,s.kt)("inlineCode",{parentName:"p"},"status")," is ",(0,s.kt)("inlineCode",{parentName:"p"},"running")," and services are ",(0,s.kt)("inlineCode",{parentName:"p"},"healthy"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get application first-vela-app -w\nNAME             COMPONENT        TYPE         PHASE            HEALTHY   STATUS   AGE\nfirst-vela-app   express-server   webservice   healthChecking                      14s\nfirst-vela-app   express-server   webservice   running          true               42s\n")),(0,s.kt)("p",null,"Check the trait detail for the its visiting url:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get application first-vela-app -o yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: first-vela-app\n  namespace: default\nspec:\n...\n  services:\n  - healthy: true\n    name: express-server\n    traits:\n    - healthy: true\n      message: 'Visiting URL: testsvc.example.com, IP: 47.111.233.220'\n      type: ingress\n  status: running\n...\n")),(0,s.kt)("p",null,"Then you will be able to visit this application via its domain."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'$ curl -H "Host:testsvc.example.com" http://<your ip address>/\n<xmp>\nHello World\n\n\n                                       ##         .\n                                 ## ## ##        ==\n                              ## ## ## ## ##    ===\n                           /""""""""""""""""\\___/ ===\n                      ~~~ {~~ ~~~~ ~~~ ~~~~ ~~ ~ /  ===- ~~~\n                           \\______ o          _,/\n                            \\      \\       _,\'\n                             `\'--.._\\..--\'\'\n</xmp>\n')))}c.isMDXComponent=!0}}]);