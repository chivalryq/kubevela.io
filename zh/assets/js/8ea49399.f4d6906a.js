(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{226:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),i=(n(0),n(341)),c={title:"\u4ece\u5b9a\u4e49\u4e2d\u751f\u6210\u8868\u5355"},o={unversionedId:"platform-engineers/openapi-v3-json-schema",id:"platform-engineers/openapi-v3-json-schema",isDocsHomePage:!1,title:"\u4ece\u5b9a\u4e49\u4e2d\u751f\u6210\u8868\u5355",description:"\u5bf9\u4e8e\u4efb\u4f55\u901a\u8fc7\u5b9a\u4e49\u5bf9\u8c61 \u5b89\u88c5\u7684 capability, KubeVela \u4f1a\u81ea\u52a8\u6839\u636e OpenAPI v3 JSON schema \u7684\u53c2\u6570\u5217\u8868\u6765\u751f\u6210 OpenAPI v3 JSON schema\uff0c\u5e76\u628a\u5b83\u50a8\u5b58\u5230\u4e00\u4e2a\u548c\u5b9a\u4e49\u5bf9\u8c61\u5904\u4e8e\u540c\u4e00\u4e2a namespace \u7684 ConfigMap \u4e2d\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/platform-engineers/openapi-v3-json-schema.md",slug:"/platform-engineers/openapi-v3-json-schema",permalink:"/zh/docs/next/platform-engineers/openapi-v3-json-schema",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/platform-engineers/openapi-v3-json-schema.md",version:"current",lastUpdatedBy:"yangsoon",lastUpdatedAt:1620312981,formattedLastUpdatedAt:"5/6/2021",sidebar:"docs",previous:{title:"\u5b9a\u4e49CRD",permalink:"/zh/docs/next/platform-engineers/definition-and-templates"},next:{title:"How-to",permalink:"/zh/docs/next/platform-engineers/cue/component"}},p=[{value:"\u5217\u51fa Schema",id:"\u5217\u51fa-schema",children:[]},{value:"\u6e32\u67d3\u8868\u5355",id:"\u6e32\u67d3\u8868\u5355",children:[]}],s={toc:p};function l(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u5bf9\u4e8e\u4efb\u4f55\u901a\u8fc7",Object(i.b)("a",{parentName:"p",href:"./definition-and-templates"},"\u5b9a\u4e49\u5bf9\u8c61")," \u5b89\u88c5\u7684 capability, KubeVela \u4f1a\u81ea\u52a8\u6839\u636e OpenAPI v3 JSON schema \u7684\u53c2\u6570\u5217\u8868\u6765\u751f\u6210 OpenAPI v3 JSON schema\uff0c\u5e76\u628a\u5b83\u50a8\u5b58\u5230\u4e00\u4e2a\u548c\u5b9a\u4e49\u5bf9\u8c61\u5904\u4e8e\u540c\u4e00\u4e2a ",Object(i.b)("inlineCode",{parentName:"p"},"namespace")," \u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"ConfigMap")," \u4e2d\u3002"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u9ed8\u8ba4\u7684 KubeVela \u7cfb\u7edf ",Object(i.b)("inlineCode",{parentName:"p"},"namespace")," \u662f ",Object(i.b)("inlineCode",{parentName:"p"},"vela-system"),"\uff0c\u5185\u7f6e\u7684 capability \u548c schema \u4f4d\u4e8e\u6b64\u5904\u3002")),Object(i.b)("h2",{id:"\u5217\u51fa-schema"},"\u5217\u51fa Schema"),Object(i.b)("p",null,"\u8fd9\u4e2a ",Object(i.b)("inlineCode",{parentName:"p"},"ConfigMap")," \u4f1a\u6709\u4e00\u4e2a\u901a\u7528\u7684\u6807\u7b7e ",Object(i.b)("inlineCode",{parentName:"p"},"definition.oam.dev=schema"),"\uff0c\u6240\u4ee5\u4f60\u53ef\u4ee5\u8f7b\u677e\u5730\u901a\u8fc7\u4e0b\u8ff0\u65b9\u6cd5\u627e\u5230\u4ed6\u4eec:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get configmap -n vela-system -l definition.oam.dev=schema\nNAME                DATA   AGE\nschema-ingress      1      19s\nschema-scaler       1      19s\nschema-task         1      19s\nschema-webservice   1      19s\nschema-worker       1      20s\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"ConfigMap")," \u547d\u540d\u7684\u683c\u5f0f\u4e3a ",Object(i.b)("inlineCode",{parentName:"p"},"schema-<your-definition-name>"),"\uff0c\u6570\u636e\u952e\u4e3a ",Object(i.b)("inlineCode",{parentName:"p"},"openapi-v3-json-schema"),"."),Object(i.b)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u6765\u83b7\u53d6 ",Object(i.b)("inlineCode",{parentName:"p"},"webservice")," \u7684JSON schema\u3002"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'$ kubectl get configmap schema-webservice -n vela-system -o yaml\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: schema-webservice\n  namespace: vela-system\ndata:\n  openapi-v3-json-schema: \'{"properties":{"cmd":{"description":"Commands to run in\n    the container","items":{"type":"string"},"title":"cmd","type":"array"},"cpu":{"description":"Number\n    of CPU units for the service, like `0.5` (0.5 CPU core), `1` (1 CPU core)","title":"cpu","type":"string"},"env":{"description":"Define\n    arguments by using environment variables","items":{"properties":{"name":{"description":"Environment\n    variable name","title":"name","type":"string"},"value":{"description":"The value\n    of the environment variable","title":"value","type":"string"},"valueFrom":{"description":"Specifies\n    a source the value of this var should come from","properties":{"secretKeyRef":{"description":"Selects\n    a key of a secret in the pod\'\'s namespace","properties":{"key":{"description":"The\n    key of the secret to select from. Must be a valid secret key","title":"key","type":"string"},"name":{"description":"The\n    name of the secret in the pod\'\'s namespace to select from","title":"name","type":"string"}},"required":["name","key"],"title":"secretKeyRef","type":"object"}},"required":["secretKeyRef"],"title":"valueFrom","type":"object"}},"required":["name"],"type":"object"},"title":"env","type":"array"},"image":{"description":"Which\n    image would you like to use for your service","title":"image","type":"string"},"port":{"default":80,"description":"Which\n    port do you want customer traffic sent to","title":"port","type":"integer"}},"required":["image","port"],"type":"object"}\'\n')),Object(i.b)("p",null,"\u5177\u4f53\u6765\u8bf4\uff0c\u8be5 schema \u662f\u6839\u636ecapability \u5b9a\u4e49\u4e2d\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"parameter")," \u90e8\u5206\u751f\u6210\u7684\uff1a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5bf9\u4e8e\u57fa\u4e8e CUE \u7684\u5b9a\u4e49\uff1a",Object(i.b)("inlineCode",{parentName:"li"},"parameter")," CUE \u6a21\u677f\u4e2d\u7684\u5173\u952e\u8bcd\u3002"),Object(i.b)("li",{parentName:"ul"},"\u5bf9\u4e8e\u57fa\u4e8e Helm \u7684\u5b9a\u4e49\uff1a",Object(i.b)("inlineCode",{parentName:"li"},"parameter")," \u662f\u4ece\u5728 Helm Chart \u4e2d\u7684 ",Object(i.b)("inlineCode",{parentName:"li"},"values.yaml")," \u751f\u6210\u7684\u3002")),Object(i.b)("h2",{id:"\u6e32\u67d3\u8868\u5355"},"\u6e32\u67d3\u8868\u5355"),Object(i.b)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 ",Object(i.b)("a",{parentName:"p",href:"https://github.com/alibaba/form-render"},"form-render")," \u6216\u8005 ",Object(i.b)("a",{parentName:"p",href:"https://github.com/rjsf-team/react-jsonschema-form"},"React JSON Schema form")," \u6e32\u67d3\u4e0a\u8ff0 schema \u5230\u8868\u5355\u4e2d\u5e76\u8f7b\u677e\u5730\u96c6\u6210\u5230\u4f60\u7684\u4eea\u8868\u76d8\u4e2d\u3002"),Object(i.b)("p",null,"\u4ee5\u4e0b\u662f\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"p"},"form-render")," \u6e32\u67d3\u7684\u8868\u5355\uff1a"),Object(i.b)("p",null,Object(i.b)("img",{src:n(439).default})),Object(i.b)("h1",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),Object(i.b)("p",null,"\u6839\u636e\u8bbe\u8ba1\uff0cKubeVela \u652f\u6301\u591a\u79cd\u65b9\u6cd5\u6765\u5b9a\u4e49 schematic\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u5c06\u5728\u63a5\u4e0b\u6765\u7684\u6587\u6863\u6765\u8be6\u7ec6\u89e3\u91ca ",Object(i.b)("inlineCode",{parentName:"p"},".schematic")," \u5b57\u6bb5\u3002"))}l.isMDXComponent=!0},341:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,d=m["".concat(c,".").concat(u)]||m[u]||b[u]||i;return n?r.a.createElement(d,o(o({ref:t},s),{},{components:n})):r.a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},439:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/json-schema-render-example-531b0a75ce10cf51ce46d9c48c6cdb58.jpg"}}]);