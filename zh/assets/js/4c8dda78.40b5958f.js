(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{167:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),o=(t(0),t(341)),c={title:"Manual Scaling"},l={unversionedId:"end-user/traits/scaler",id:"end-user/traits/scaler",isDocsHomePage:!1,title:"Manual Scaling",description:"The scaler trait allows you to scale your component instance manually.",source:"@site/docs/end-user/traits/scaler.md",slug:"/end-user/traits/scaler",permalink:"/zh/docs/next/end-user/traits/scaler",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/end-user/traits/scaler.md",version:"current",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1620380042,formattedLastUpdatedAt:"5/7/2021",sidebar:"docs",previous:{title:"Expose Application",permalink:"/zh/docs/next/end-user/traits/ingress"},next:{title:"Labels and Annotations",permalink:"/zh/docs/next/end-user/traits/labels"}},i=[],s={toc:i};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"scaler")," trait allows you to scale your component instance manually."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ kubectl vela show scaler \n# Properties\n+----------+--------------------------------+------+----------+---------+\n|   NAME   |          DESCRIPTION           | TYPE | REQUIRED | DEFAULT |\n+----------+--------------------------------+------+----------+---------+\n| replicas | Specify replicas of workload   | int  | true     |       1 |\n+----------+--------------------------------+------+----------+---------+\n")),Object(o.b)("p",null,"Declare an application with scaler trait."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'# sample-manual.yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: website\nspec:\n  components:\n    - name: frontend\n      type: webservice\n      properties:\n        image: nginx\n      traits:\n        - type: scaler\n          properties:\n            replicas: 2\n        - type: sidecar\n          properties:\n            name: "sidecar-test"\n            image: "fluentd"\n    - name: backend\n      type: worker\n      properties:\n        image: busybox\n        cmd:\n          - sleep\n          - \'1000\'\n')),Object(o.b)("p",null,"Apply the sample application:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ kubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/docs/examples/enduser/sample-manual.yaml\napplication.core.oam.dev/website configured\n")),Object(o.b)("p",null,"In runtime cluster, you can see the underlying deployment of ",Object(o.b)("inlineCode",{parentName:"p"},"frontend")," component has 2 replicas now."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deploy -l app.oam.dev/name=website\nNAME       READY   UP-TO-DATE   AVAILABLE   AGE\nbackend    1/1     1            1           19h\nfrontend   2/2     2            2           19h\n")),Object(o.b)("p",null,"To scale up or scale down, you just need to modify the ",Object(o.b)("inlineCode",{parentName:"p"},"replicas")," field of ",Object(o.b)("inlineCode",{parentName:"p"},"scaler")," trait and re-apply the YAML."))}p.isMDXComponent=!0},341:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return t?a.a.createElement(b,l(l({ref:n},s),{},{components:t})):a.a.createElement(b,l({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var s=2;s<o;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);