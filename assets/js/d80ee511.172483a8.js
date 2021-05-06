(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{295:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),s=(n(0),n(341)),o={title:"Ingress"},i={unversionedId:"end-user/traits/ingress",id:"end-user/traits/ingress",isDocsHomePage:!1,title:"Ingress",description:"\u26a0\ufe0f This section requires your runtime cluster has a working ingress controller.",source:"@site/docs/end-user/traits/ingress.md",slug:"/end-user/traits/ingress",permalink:"/docs/next/end-user/traits/ingress",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/end-user/traits/ingress.md",version:"current",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1620154848,formattedLastUpdatedAt:"5/4/2021",sidebar:"docs",previous:{title:"Want More?",permalink:"/docs/next/end-user/components/more"},next:{title:"Manual Scaling",permalink:"/docs/next/end-user/traits/scale"}},c=[],p={toc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"\u26a0\ufe0f This section requires your runtime cluster has a working ingress controller.")),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"ingress")," trait exposes a component to public Internet via a valid domain."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-shell"},"$ kubectl vela show ingress\n# Properties\n+--------+------------------------------------------------------------------------------+----------------+----------+---------+\n|  NAME  |                                 DESCRIPTION                                  |      TYPE      | REQUIRED | DEFAULT |\n+--------+------------------------------------------------------------------------------+----------------+----------+---------+\n| http   | Specify the mapping relationship between the http path and the workload port | map[string]int | true     |         |\n| domain | Specify the domain you want to expose                                        | string         | true     |         |\n+--------+------------------------------------------------------------------------------+----------------+----------+---------+\n")),Object(s.b)("p",null,"Attach a ",Object(s.b)("inlineCode",{parentName:"p"},"ingress")," trait to the component you want to expose and deploy."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},'# vela-app.yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: first-vela-app\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        image: crccheck/hello-world\n        port: 8000\n      traits:\n        - type: ingress\n          properties:\n            domain: testsvc.example.com\n            http:\n              "/": 8000\n')),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/docs/examples/vela-app.yaml\napplication.core.oam.dev/first-vela-app created\n")),Object(s.b)("p",null,"Check the status until we see ",Object(s.b)("inlineCode",{parentName:"p"},"status")," is ",Object(s.b)("inlineCode",{parentName:"p"},"running")," and services are ",Object(s.b)("inlineCode",{parentName:"p"},"healthy"),":"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get application first-vela-app -w\nNAME             COMPONENT        TYPE         PHASE            HEALTHY   STATUS   AGE\nfirst-vela-app   express-server   webservice   healthChecking                      14s\nfirst-vela-app   express-server   webservice   running          true               42s\n")),Object(s.b)("p",null,"Check the trait detail for the its visiting url:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get application first-vela-app -o yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: first-vela-app\n  namespace: default\nspec:\n...\n  services:\n  - healthy: true\n    name: express-server\n    traits:\n    - healthy: true\n      message: 'Visiting URL: testsvc.example.com, IP: 47.111.233.220'\n      type: ingress\n  status: running\n...\n")),Object(s.b)("p",null,"Then you will be able to visit this application via its domain."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'$ curl -H "Host:testsvc.example.com" http://<your ip address>/\n<xmp>\nHello World\n\n\n                                       ##         .\n                                 ## ## ##        ==\n                              ## ## ## ## ##    ===\n                           /""""""""""""""""\\___/ ===\n                      ~~~ {~~ ~~~~ ~~~ ~~~~ ~~ ~ /  ===- ~~~\n                           \\______ o          _,/\n                            \\      \\       _,\'\n                             `\'--.._\\..--\'\'\n</xmp>\n')))}l.isMDXComponent=!0},341:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||s;return n?a.a.createElement(d,i(i({ref:t},p),{},{components:n})):a.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);