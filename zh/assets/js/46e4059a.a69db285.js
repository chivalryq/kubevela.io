(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{161:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return s}));var a=t(3),r=t(7),c=(t(0),t(341)),o={title:"Scale"},l={unversionedId:"end-user/traits/scale",id:"end-user/traits/scale",isDocsHomePage:!1,title:"Scale",description:"In the Deploy Application section, we use cpuscaler trait as an auto-scaler for the sample application.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/end-user/traits/scale.md",slug:"/end-user/traits/scale",permalink:"/zh/docs/next/end-user/traits/scale",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/end-user/traits/scale.md",version:"current",lastUpdatedBy:"yangsoon",lastUpdatedAt:1620312981,formattedLastUpdatedAt:"5/6/2021",sidebar:"docs",previous:{title:"Expose Application",permalink:"/zh/docs/next/end-user/traits/ingress"},next:{title:"Labels and Annotations",permalink:"/zh/docs/next/end-user/traits/labels"}},i=[{value:"Manuel Scale",id:"manuel-scale",children:[]}],p={toc:i};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"In the ",Object(c.b)("a",{parentName:"p",href:"../application"},"Deploy Application")," section, we use ",Object(c.b)("inlineCode",{parentName:"p"},"cpuscaler")," trait as an auto-scaler for the sample application. "),Object(c.b)("h2",{id:"manuel-scale"},"Manuel Scale"),Object(c.b)("p",null,"You can use scale your application manually by using ",Object(c.b)("inlineCode",{parentName:"p"},"scaler")," trait."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"$ kubectl vela show scaler \n# Properties\n+----------+--------------------------------+------+----------+---------+\n|   NAME   |          DESCRIPTION           | TYPE | REQUIRED | DEFAULT |\n+----------+--------------------------------+------+----------+---------+\n| replicas | Specify replicas of workload   | int  | true     |       1 |\n+----------+--------------------------------+------+----------+---------+\n")),Object(c.b)("p",null,"Deploy the application."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-yaml"},'# sample-manual.yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: website\nspec:\n  components:\n    - name: frontend\n      type: webservice\n      properties:\n        image: nginx\n      traits:\n        - type: scaler\n          properties:\n            replicas: 2\n        - type: sidecar\n          properties:\n            name: "sidecar-test"\n            image: "fluentd"\n    - name: backend\n      type: worker\n      properties:\n        image: busybox\n        cmd:\n          - sleep\n          - \'1000\'\n')),Object(c.b)("p",null,"Change and Apply the sample application:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"$ kubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/docs/examples/enduser/sample-manual.yaml\napplication.core.oam.dev/website configured\n")),Object(c.b)("p",null,"After a while, you can see the underlying deployment of ",Object(c.b)("inlineCode",{parentName:"p"},"frontend")," component has two replicas now."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deploy -l app.oam.dev/name=website\nNAME       READY   UP-TO-DATE   AVAILABLE   AGE\nbackend    1/1     1            1           19h\nfrontend   2/2     2            2           19h\n")),Object(c.b)("p",null,"To scale up or scale down, you can just modify the ",Object(c.b)("inlineCode",{parentName:"p"},"replicas")," field of ",Object(c.b)("inlineCode",{parentName:"p"},"scaler")," trait and apply the application again."))}s.isMDXComponent=!0},341:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),s=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(t),b=a,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||c;return t?r.a.createElement(m,l(l({ref:n},p),{},{components:t})):r.a.createElement(m,l({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=b;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<c;p++)o[p]=t[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);