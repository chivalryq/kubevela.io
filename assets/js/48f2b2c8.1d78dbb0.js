(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{155:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(341)),c={title:"Setting Routes"},l={unversionedId:"developers/extensions/set-route",id:"developers/extensions/set-route",isDocsHomePage:!1,title:"Setting Routes",description:"The route section is used to configure the access to your app.",source:"@site/docs/developers/extensions/set-route.md",slug:"/developers/extensions/set-route",permalink:"/docs/next/developers/extensions/set-route",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/developers/extensions/set-route.md",version:"current",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1620154848,formattedLastUpdatedAt:"5/4/2021"},i=[{value:"Prerequisite",id:"prerequisite",children:[]},{value:"Setting route policy",id:"setting-route-policy",children:[]}],p={toc:i};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"route")," section is used to configure the access to your app."),Object(o.b)("h2",{id:"prerequisite"},"Prerequisite"),Object(o.b)("p",null,"Make sure route trait controller is installed in your cluster"),Object(o.b)("p",null,"Install route trait controller with helm"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Add helm chart repo for route trait"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo add oam.catalog  http://oam.dev/catalog/\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Update the chart repo"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo update\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Install route trait controller"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm install --create-namespace -n vela-system routetrait oam.catalog/routetrait\n")))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: route is one of the extension capabilities ",Object(o.b)("a",{parentName:"p",href:"../cap-center"},"installed from cap center"),",\nplease install it if you can't find it in ",Object(o.b)("inlineCode",{parentName:"p"},"vela traits"),".")),Object(o.b)("h2",{id:"setting-route-policy"},"Setting route policy"),Object(o.b)("p",null,"Add routing config under ",Object(o.b)("inlineCode",{parentName:"p"},"express-server"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"services:\n  express-server:\n    ...\n\n    route:\n      domain: example.com\n      rules:\n        - path: /testapp\n          rewriteTarget: /\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The full specification of ",Object(o.b)("inlineCode",{parentName:"p"},"route")," could show up by ",Object(o.b)("inlineCode",{parentName:"p"},"$ vela show route"),".")),Object(o.b)("p",null,"Apply again:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ vela up\n")),Object(o.b)("p",null,"Check the status until we see route is ready:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ vela status testapp\nAbout:\n\n  Name:         testapp\n  Namespace:    default\n  Created at:   2020-11-04 16:34:43.762730145 -0800 PST\n  Updated at:   2020-11-11 16:21:37.761158941 -0800 PST\n\nServices:\n\n  - Name: express-server\n    Type: webservice\n    HEALTHY Ready: 1/1\n    Last Deployment:\n      Created at: 2020-11-11 16:21:37 -0800 PST\n      Updated at: 2020-11-11T16:21:37-08:00\n    Routes:\n      - route:  Visiting URL: http://example.com    IP: <ingress-IP-address>\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"In ",Object(o.b)("a",{parentName:"strong",href:"../../install#kind"},"kind cluster setup")),", you can visit the service via localhost:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If not in kind cluster, replace 'localhost' with ingress address")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'$ curl -H "Host:example.com" http://localhost/testapp\nHello World\n')))}s.isMDXComponent=!0},341:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(m,l(l({ref:t},p),{},{components:r})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);