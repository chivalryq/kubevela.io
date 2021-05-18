(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[1676],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||l[d]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61335:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),a={title:"Task"},c={unversionedId:"end-user/components/task",id:"version-v1.0/end-user/components/task",isDocsHomePage:!1,title:"Task",description:"Description",source:"@site/versioned_docs/version-v1.0/end-user/components/task.md",sourceDirName:"end-user/components",slug:"/end-user/components/task",permalink:"/zh/docs/end-user/components/task",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/end-user/components/task.md",version:"v1.0",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1621321946,formattedLastUpdatedAt:"5/18/2021",frontMatter:{title:"Task"},sidebar:"version-v1.0/docs",previous:{title:"Web Service",permalink:"/zh/docs/end-user/components/webservice"},next:{title:"Worker",permalink:"/zh/docs/end-user/components/worker"}},s=[{value:"Description",id:"description",children:[]},{value:"Samples",id:"samples",children:[]},{value:"Specification",id:"specification",children:[]}],p={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Describes jobs that run code or a script to completion."),(0,i.kt)("h2",{id:"samples"},"Samples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: app-worker\nspec:\n  components:\n    - name: mytask\n      type: task\n      properties:\n        image: perl\n        count: 10\n        cmd: ["perl",  "-Mbignum=bpi", "-wle", "print bpi(2000)"]\n')),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"# Properties\n+---------+--------------------------------------------------------------------------------------------------+----------+----------+---------+\n|  NAME   |                                           DESCRIPTION                                            |   TYPE   | REQUIRED | DEFAULT |\n+---------+--------------------------------------------------------------------------------------------------+----------+----------+---------+\n| cmd     | Commands to run in the container                                                                 | []string | false    |         |\n| count   | specify number of tasks to run in parallel                                                       | int      | true     |       1 |\n| restart | Define the job restart policy, the value can only be Never or OnFailure. By default, it's Never. | string   | true     | Never   |\n| image   | Which image would you like to use for your service                                               | string   | true     |         |\n+---------+--------------------------------------------------------------------------------------------------+----------+----------+---------+\n")))}u.isMDXComponent=!0}}]);