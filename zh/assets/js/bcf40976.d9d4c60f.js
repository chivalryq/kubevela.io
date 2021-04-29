(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{268:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return i}));var r=t(3),a=t(7),c=(t(0),t(333)),l={title:"\u80fd\u529b\u7ba1\u7406"},o={unversionedId:"developers/cap-center",id:"developers/cap-center",isDocsHomePage:!1,title:"\u80fd\u529b\u7ba1\u7406",description:"\u5728 KubeVela \u4e2d\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u4ece\u4efb\u4f55\u5305\u542b OAM \u62bd\u8c61\u6587\u4ef6\u7684 GitHub \u4ed3\u5e93\u4e2d\u5b89\u88c5\u66f4\u591a\u7684\u80fd\u529b\uff08\u4f8b\u5982\uff1a\u65b0 component \u7c7b\u578b\u6216\u8005 traits \uff09\u3002\u6211\u4eec\u5c06\u8fd9\u4e9b GitHub \u4ed3\u5e93\u79f0\u4e3a Capability Centers \u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/developers/cap-center.md",slug:"/developers/cap-center",permalink:"/zh/docs/next/developers/cap-center",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/developers/cap-center.md",version:"current",lastUpdatedBy:"zhuhuijun",lastUpdatedAt:1619253316,formattedLastUpdatedAt:"4/24/2021",sidebar:"docs",previous:{title:"\u5728\u5bb9\u5668\u4e2d\u8fd0\u884c\u547d\u4ee4",permalink:"/zh/docs/next/developers/exec-cmd"},next:{title:"\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u914d\u7f6e\u6570\u636e\u6216\u73af\u5883",permalink:"/zh/docs/next/developers/config-app"}},p=[{value:"\u6dfb\u52a0\u80fd\u529b\u4e2d\u5fc3",id:"\u6dfb\u52a0\u80fd\u529b\u4e2d\u5fc3",children:[]},{value:"\u5217\u51fa\u80fd\u529b\u4e2d\u5fc3",id:"\u5217\u51fa\u80fd\u529b\u4e2d\u5fc3",children:[]},{value:"\u53ef\u9009 \u5220\u9664\u80fd\u529b\u4e2d\u5fc3",id:"\u53ef\u9009-\u5220\u9664\u80fd\u529b\u4e2d\u5fc3",children:[]},{value:"\u5217\u51fa\u6240\u6709\u53ef\u7528\u7684\u80fd\u529b\u4e2d\u5fc3",id:"\u5217\u51fa\u6240\u6709\u53ef\u7528\u7684\u80fd\u529b\u4e2d\u5fc3",children:[]},{value:"\u4ece\u80fd\u529b\u4e2d\u5fc3\u5b89\u88c5\u80fd\u529b",id:"\u4ece\u80fd\u529b\u4e2d\u5fc3\u5b89\u88c5\u80fd\u529b",children:[]},{value:"\u4f7f\u7528\u65b0\u5b89\u88c5\u7684\u80fd\u529b",id:"\u4f7f\u7528\u65b0\u5b89\u88c5\u7684\u80fd\u529b",children:[]},{value:"\u5220\u9664\u80fd\u529b",id:"\u5220\u9664\u80fd\u529b",children:[]}],s={toc:p};function i(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u5728 KubeVela \u4e2d\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u4ece\u4efb\u4f55\u5305\u542b OAM \u62bd\u8c61\u6587\u4ef6\u7684 GitHub \u4ed3\u5e93\u4e2d\u5b89\u88c5\u66f4\u591a\u7684\u80fd\u529b\uff08\u4f8b\u5982\uff1a\u65b0 component \u7c7b\u578b\u6216\u8005 traits \uff09\u3002\u6211\u4eec\u5c06\u8fd9\u4e9b GitHub \u4ed3\u5e93\u79f0\u4e3a ",Object(c.b)("em",{parentName:"p"},"Capability Centers")," \u3002"),Object(c.b)("p",null,"KubeVela \u53ef\u4ee5\u4ece\u8fd9\u4e9b\u4ed3\u5e93\u4e2d\u81ea\u52a8\u53d1\u73b0 OAM \u62bd\u8c61\u6587\u4ef6\uff0c\u5e76\u4e14\u540c\u6b65\u8fd9\u4e9b\u80fd\u529b\u5230\u6211\u4eec\u7684 KubeVela \u5e73\u53f0\u4e2d\u3002"),Object(c.b)("h2",{id:"\u6dfb\u52a0\u80fd\u529b\u4e2d\u5fc3"},"\u6dfb\u52a0\u80fd\u529b\u4e2d\u5fc3"),Object(c.b)("p",null,"\u65b0\u589e\u4e14\u540c\u6b65\u80fd\u529b\u4e2d\u5fc3\u5230 KubeVela\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"$ vela cap center config my-center https://github.com/oam-dev/catalog/tree/master/registry\nsuccessfully sync 1/1 from my-center remote center\nSuccessfully configured capability center my-center and sync from remote\n\n$ vela cap center sync my-center\nsuccessfully sync 1/1 from my-center remote center\nsync finished\n")),Object(c.b)("p",null,"\u73b0\u5728\uff0c\u8be5\u80fd\u529b\u4e2d\u5fc3 ",Object(c.b)("inlineCode",{parentName:"p"},"my-center")," \u5df2\u7ecf\u53ef\u4ee5\u4f7f\u7528\u3002"),Object(c.b)("h2",{id:"\u5217\u51fa\u80fd\u529b\u4e2d\u5fc3"},"\u5217\u51fa\u80fd\u529b\u4e2d\u5fc3"),Object(c.b)("p",null,"\u4f60\u53ef\u4ee5\u5217\u51fa\u6216\u8005\u6dfb\u52a0\u66f4\u591a\u80fd\u529b\u4e2d\u5fc3\u3002"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"$ vela cap center ls\nNAME        ADDRESS\nmy-center   https://github.com/oam-dev/catalog/tree/master/registry\n")),Object(c.b)("h2",{id:"\u53ef\u9009-\u5220\u9664\u80fd\u529b\u4e2d\u5fc3"},"[\u53ef\u9009]"," \u5220\u9664\u80fd\u529b\u4e2d\u5fc3"),Object(c.b)("p",null,"\u5220\u9664\u4e00\u4e2a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"$ vela cap center remove my-center\n")),Object(c.b)("h2",{id:"\u5217\u51fa\u6240\u6709\u53ef\u7528\u7684\u80fd\u529b\u4e2d\u5fc3"},"\u5217\u51fa\u6240\u6709\u53ef\u7528\u7684\u80fd\u529b\u4e2d\u5fc3"),Object(c.b)("p",null,"\u5217\u51fa\u67d0\u4e2a\u4e2d\u5fc3\u6240\u6709\u53ef\u7528\u7684\u80fd\u529b\u3002"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"$ vela cap ls my-center\nNAME                CENTER      TYPE                DEFINITION                      STATUS      APPLIES-TO\nclonesetservice     my-center   componentDefinition clonesets.apps.kruise.io        uninstalled []\n")),Object(c.b)("h2",{id:"\u4ece\u80fd\u529b\u4e2d\u5fc3\u5b89\u88c5\u80fd\u529b"},"\u4ece\u80fd\u529b\u4e2d\u5fc3\u5b89\u88c5\u80fd\u529b"),Object(c.b)("p",null,"\u6211\u4eec\u5f00\u59cb\u4ece ",Object(c.b)("inlineCode",{parentName:"p"},"my-center")," \u5b89\u88c5\u65b0 component ",Object(c.b)("inlineCode",{parentName:"p"},"clonesetservice")," \u5230\u4f60\u7684 KubeVela \u5e73\u53f0\u3002"),Object(c.b)("p",null,"\u4f60\u53ef\u4ee5\u5148\u5b89\u88c5 OpenKruise \u3002"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"helm install kruise https://github.com/openkruise/kruise/releases/download/v0.7.0/kruise-chart.tgz\n")),Object(c.b)("p",null,"\u4ece ",Object(c.b)("inlineCode",{parentName:"p"},"my-center")," \u4e2d\u5b89\u88c5 ",Object(c.b)("inlineCode",{parentName:"p"},"clonesetservice")," component \u3002"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"$ vela cap install my-center/clonesetservice\nInstalling component capability clonesetservice\nSuccessfully installed capability clonesetservice from my-center\n")),Object(c.b)("h2",{id:"\u4f7f\u7528\u65b0\u5b89\u88c5\u7684\u80fd\u529b"},"\u4f7f\u7528\u65b0\u5b89\u88c5\u7684\u80fd\u529b"),Object(c.b)("p",null,"\u6211\u4eec\u5148\u68c0\u67e5 ",Object(c.b)("inlineCode",{parentName:"p"},"clonesetservice")," component \u662f\u5426\u5df2\u7ecf\u88ab\u5b89\u88c5\u5230\u5e73\u53f0\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"$ vela components\nNAME            NAMESPACE   WORKLOAD                    DESCRIPTION\nclonesetservice vela-system clonesets.apps.kruise.io    Describes long-running, scalable, containerized services\n                                                        that have a stable network endpoint to receive external\n                                                        network traffic from customers. If workload type is skipped\n                                                        for any service defined in Appfile, it will be defaulted to\n                                                        `webservice` type.\n")),Object(c.b)("p",null,"\u5f88\u68d2\uff01\u73b0\u5728\u6211\u4eec\u90e8\u7f72\u4f7f\u7528 Appfile \u90e8\u7f72\u4e00\u4e2a\u5e94\u7528\u3002"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"$ cat << EOF > vela.yaml\nname: testapp\nservices:\n  testsvc:\n    type: clonesetservice\n    image: crccheck/hello-world\n    port: 8000\nEOF\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"$ vela up\nParsing vela appfile ...\nLoad Template ...\n\nRendering configs for service (testsvc)...\nWriting deploy config to (.vela/deploy.yaml)\n\nApplying application ...\nChecking if app has been deployed...\nApp has not been deployed, creating a new deployment...\nUpdating:  core.oam.dev/v1alpha2, Kind=HealthScope in default\n\u2705 App has been deployed \ud83d\ude80\ud83d\ude80\ud83d\ude80\n    Port forward: vela port-forward testapp\n             SSH: vela exec testapp\n         Logging: vela logs testapp\n      App status: vela status testapp\n  Service status: vela status testapp --svc testsvc\n")),Object(c.b)("p",null,"\u968f\u540e\uff0c\u8be5 cloneset \u5df2\u7ecf\u88ab\u90e8\u7f72\u5230\u4f60\u7684\u73af\u5883\u3002"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get clonesets.apps.kruise.io\nNAME      DESIRED   UPDATED   UPDATED_READY   READY   TOTAL   AGE\ntestsvc   1         1         1               1       1       46s\n")),Object(c.b)("h2",{id:"\u5220\u9664\u80fd\u529b"},"\u5220\u9664\u80fd\u529b"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff0c\u5220\u9664\u80fd\u529b\u524d\u8bf7\u5148\u786e\u8ba4\u6ca1\u6709\u88ab\u5e94\u7528\u5f15\u7528\u3002")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"$ vela cap uninstall my-center/clonesetservice\nSuccessfully uninstalled capability clonesetservice\n")))}i.isMDXComponent=!0},333:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),i=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},b=function(e){var n=i(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=i(t),d=r,m=b["".concat(l,".").concat(d)]||b[d]||u[d]||c;return t?a.a.createElement(m,o(o({ref:n},s),{},{components:t})):a.a.createElement(m,o({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,l=new Array(c);l[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<c;s++)l[s]=t[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);