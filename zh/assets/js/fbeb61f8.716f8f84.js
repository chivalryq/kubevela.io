(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[8326],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(n),d=a,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},58215:function(e,t,n){"use strict";var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},41395:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(67294),a=n(80944),o=n(86010),i="tabItem_1uMI",l="tabItemActive_2DSg";var c=37,u=39;var s=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,p=e.values,f=e.groupId,d=e.className,m=(0,a.Z)(),v=m.tabGroupChoices,b=m.setTabGroupChoices,y=(0,r.useState)(s),h=y[0],g=y[1],k=r.Children.toArray(e.children),w=[];if(null!=f){var O=v[f];null!=O&&O!==h&&p.some((function(e){return e.value===O}))&&g(O)}var x=function(e){var t=e.currentTarget,n=w.indexOf(t),r=p[n].value;g(r),null!=f&&(b(f,r),setTimeout((function(){var e,n,r,a,o,i,c,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,c=i.innerHeight,u=i.innerWidth,n>=0&&o<=u&&a<=c&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},E=function(e){var t,n;switch(e.keyCode){case u:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case c:var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":h===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:E,onFocus:x,onClick:x},n)}))),t?(0,r.cloneElement)(k.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},79443:function(e,t,n){"use strict";var r=(0,n(67294).createContext)(void 0);t.Z=r},80944:function(e,t,n){"use strict";var r=n(67294),a=n(79443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},68287:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=(n(41395),n(58215),{title:"Kubectl plugin"}),l={unversionedId:"developers/references/kubectl-plugin",id:"developers/references/kubectl-plugin",isDocsHomePage:!1,title:"Kubectl plugin",description:"Install vela kubectl plugin can help you to ship applications more easily!",source:"@site/docs/developers/references/kubectl-plugin.mdx",sourceDirName:"developers/references",slug:"/developers/references/kubectl-plugin",permalink:"/zh/docs/next/developers/references/kubectl-plugin",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/developers/references/kubectl-plugin.mdx",version:"current",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1622277651,formattedLastUpdatedAt:"2021/5/29",frontMatter:{title:"Kubectl plugin"},sidebar:"docs",previous:{title:"Restful API",permalink:"/zh/docs/next/developers/references/restful-api/rest"},next:{title:"KubeVela Roadmap",permalink:"/zh/docs/next/roadmap/README"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}],u={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Install vela kubectl plugin can help you to ship applications more easily!"),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"../../advanced-install#install-kubectl-vela-plugin"},"advanced-install")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ kubectl vela -h\nA Highly Extensible Platform Engine based on Kubernetes and Open Application Model.\n\nUsage:\n  kubectl vela [flags]\n  kubectl vela [command]\n\nAvailable Commands:\n\n    comp        Show components in capability registry\n    dry-run     Dry Run an application, and output the K8s resources as\n                result to stdout, only CUE template supported for now\n    live-diff   Dry-run an application, and do diff on a specific app\n                revison. The provided capability definitions will be used\n                during Dry-run. If any capabilities used in the app are not\n                found in the provided ones, it will try to find from\n                cluster.\n    show        Show the reference doc for a workload type or trait\n    trait       Show traits in capability registry\n    version     Prints out build version information\n\nFlags:\n  -h, --help   help for vela\n\nUse "kubectl vela [command] --help" for more information about a command.\n')))}s.isMDXComponent=!0},86010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);