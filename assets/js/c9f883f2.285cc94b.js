(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[3038],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,f=m["".concat(s,".").concat(d)]||m[d]||l[d]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},29671:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var r=t(22122),o=t(19756),i=(t(67294),t(3905)),a={title:"Task"},c={unversionedId:"end-user/components/task",id:"version-v1.1/end-user/components/task",isDocsHomePage:!1,title:"Task",description:"Description",source:"@site/versioned_docs/version-v1.1/end-user/components/task.md",sourceDirName:"end-user/components",slug:"/end-user/components/task",permalink:"/docs/v1.1/end-user/components/task",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/end-user/components/task.md",version:"v1.1",lastUpdatedBy:"yangsoon",lastUpdatedAt:1623737988,formattedLastUpdatedAt:"6/15/2021",frontMatter:{title:"Task"},sidebar:"version-v1.1/docs",previous:{title:"Web Service",permalink:"/docs/v1.1/end-user/components/webservice"},next:{title:"Worker",permalink:"/docs/v1.1/end-user/components/worker"}},s=[{value:"Description",id:"description",children:[]},{value:"Samples",id:"samples",children:[]},{value:"Specification",id:"specification",children:[]}],p={toc:s};function u(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Describes jobs that run code or a script to completion."),(0,i.kt)("h2",{id:"samples"},"Samples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: app-worker\nspec:\n  components:\n    - name: mytask\n      type: task\n      properties:\n        image: perl\n        count: 10\n        cmd: ["perl",  "-Mbignum=bpi", "-wle", "print bpi(2000)"]\n')),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"# Properties\n+---------+--------------------------------------------------------------------------------------------------+----------+----------+---------+\n|  NAME   |                                           DESCRIPTION                                            |   TYPE   | REQUIRED | DEFAULT |\n+---------+--------------------------------------------------------------------------------------------------+----------+----------+---------+\n| cmd     | Commands to run in the container                                                                 | []string | false    |         |\n| count   | specify number of tasks to run in parallel                                                       | int      | true     |       1 |\n| restart | Define the job restart policy, the value can only be Never or OnFailure. By default, it's Never. | string   | true     | Never   |\n| image   | Which image would you like to use for your service                                               | string   | true     |         |\n+---------+--------------------------------------------------------------------------------------------------+----------+----------+---------+\n")))}u.isMDXComponent=!0}}]);