(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[105],{3905:function(e,a,t){"use strict";t.d(a,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),i=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=i(e.components);return r.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=i(t),d=n,v=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return t?r.createElement(v,o(o({ref:a},p),{},{components:t})):r.createElement(v,o({ref:a},p))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=m;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var i=2;i<l;i++)o[i]=t[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},49013:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var r=t(22122),n=t(19756),l=(t(67294),t(3905)),o={title:"\u5b89\u88c5\uff08\u8fdb\u9636\uff09"},c={unversionedId:"advanced-install",id:"advanced-install",isDocsHomePage:!1,title:"\u5b89\u88c5\uff08\u8fdb\u9636\uff09",description:"\u5e26\u7740\u8bc1\u4e66\u7ba1\u7406\u5668\u5b89\u88c5 KubeVela",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/advanced-install.md",sourceDirName:".",slug:"/advanced-install",permalink:"/zh/docs/next/advanced-install",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/advanced-install.md",version:"current",lastUpdatedBy:"Casper-Mars",lastUpdatedAt:1620020915,formattedLastUpdatedAt:"2021/5/3",frontMatter:{title:"\u5b89\u88c5\uff08\u8fdb\u9636\uff09"},sidebar:"docs",previous:{title:"KubeVela Roadmap",permalink:"/zh/docs/next/roadmap/README"},next:{title:"FAQ",permalink:"/zh/docs/next/developers/references/devex/faq"}},s=[{value:"\u5e26\u7740\u8bc1\u4e66\u7ba1\u7406\u5668\u5b89\u88c5 KubeVela",id:"\u5e26\u7740\u8bc1\u4e66\u7ba1\u7406\u5668\u5b89\u88c5-kubevela",children:[]},{value:"\u5b89\u88c5\u9884\u53d1\u5e03\u7248",id:"\u5b89\u88c5\u9884\u53d1\u5e03\u7248",children:[]},{value:"\u5347\u7ea7",id:"\u5347\u7ea7",children:[{value:"\u7b2c\u4e00\u6b65 \u66f4\u65b0 Helm \u4ed3\u5e93",id:"\u7b2c\u4e00\u6b65-\u66f4\u65b0-helm-\u4ed3\u5e93",children:[]},{value:"\u7b2c\u4e8c\u6b65 \u5347\u7ea7 KubeVela \u7684 CRDs",id:"\u7b2c\u4e8c\u6b65-\u5347\u7ea7-kubevela-\u7684-crds",children:[]},{value:"\u7b2c\u4e09\u6b65 \u5347\u7ea7 KubeVela Helm chart",id:"\u7b2c\u4e09\u6b65-\u5347\u7ea7-kubevela-helm-chart",children:[]}]},{value:"\u5378\u8f7d",id:"\u5378\u8f7d",children:[]}],i={toc:s};function p(e){var a=e.components,t=(0,n.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},i,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u5e26\u7740\u8bc1\u4e66\u7ba1\u7406\u5668\u5b89\u88c5-kubevela"},"\u5e26\u7740\u8bc1\u4e66\u7ba1\u7406\u5668\u5b89\u88c5 KubeVela"),(0,l.kt)("p",null,"KubeVela \u53ef\u4ee5\u4f7f\u7528\u8bc1\u4e66\u7ba1\u7406\u5668\u4e3a\u4f60\u7684\u5e94\u7528\u751f\u6210\u8bc1\u4e66\uff0c\u4f46\u662f\u4f60\u9700\u8981\u63d0\u524d\u5b89\u88c5\u597d\u8bc1\u4e66\u7ba1\u7406\u5668\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo add jetstack https://charts.jetstack.io\nhelm repo update\nhelm install cert-manager jetstack/cert-manager --namespace cert-manager --version v1.2.0 --create-namespace --set installCRDs=true\n")),(0,l.kt)("p",null,"\u5b89\u88c5 KubeVela \u540c\u65f6\u542f\u7528\u8bc1\u4e66\u7ba1\u7406\u5668\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm install --create-namespace -n vela-system --set admissionWebhooks.certManager.enabled=true kubevela kubevela/vela-core\n")),(0,l.kt)("h2",{id:"\u5b89\u88c5\u9884\u53d1\u5e03\u7248"},"\u5b89\u88c5\u9884\u53d1\u5e03\u7248"),(0,l.kt)("p",null,"\u5728\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"helm search")," \u547d\u4ee4\u65f6\uff0c\u6dfb\u52a0\u6807\u8bb0\u53c2\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"--devel")," \u5373\u53ef\u641c\u7d22\u51fa\u9884\u53d1\u5e03\u7248\u3002\u9884\u53d1\u5e03\u7248\u7684\u7248\u672c\u53f7\u683c\u5f0f\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"<next_version>-rc-master"),"\uff0c\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"0.4.0-rc-master"),"\uff0c\u4ee3\u8868\u7684\u662f\u4e00\u4e2a\u57fa\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"master")," \u5206\u652f\u6784\u5efa\u7684\u53d1\u5e03\u5019\u9009\u7248\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm search repo kubevela/vela-core -l --devel\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"    NAME                      CHART VERSION         APP VERSION           DESCRIPTION\n    kubevela/vela-core        0.4.0-rc-master         0.4.0-rc-master         A Helm chart for KubeVela core\n    kubevela/vela-core        0.3.2                   0.3.2                   A Helm chart for KubeVela core\n    kubevela/vela-core        0.3.1                 0.3.1                 A Helm chart for KubeVela core\n")),(0,l.kt)("p",null,"\u7136\u540e\u5c1d\u8bd5\u8ddf\u7740\u4ee5\u4e0b\u7684\u547d\u4ee4\u5b89\u88c5\u4e00\u4e2a\u9884\u53d1\u5e03\u7248\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm install --create-namespace -n vela-system kubevela kubevela/vela-core --version <next_version>-rc-master\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"NAME: kubevela\nLAST DEPLOYED: Thu Apr  1 19:41:30 2021\nNAMESPACE: vela-system\nSTATUS: deployed\nREVISION: 1\nNOTES:\nWelcome to use the KubeVela! Enjoy your shipping application journey!\n")),(0,l.kt)("h2",{id:"\u5347\u7ea7"},"\u5347\u7ea7"),(0,l.kt)("h3",{id:"\u7b2c\u4e00\u6b65-\u66f4\u65b0-helm-\u4ed3\u5e93"},"\u7b2c\u4e00\u6b65 \u66f4\u65b0 Helm \u4ed3\u5e93"),(0,l.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u83b7\u53d6 KubeVela \u6700\u65b0\u53d1\u5e03\u7684 chart\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo update\nhelm search repo kubevela/vela-core -l\n")),(0,l.kt)("h3",{id:"\u7b2c\u4e8c\u6b65-\u5347\u7ea7-kubevela-\u7684-crds"},"\u7b2c\u4e8c\u6b65 \u5347\u7ea7 KubeVela \u7684 CRDs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_componentdefinitions.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_workloaddefinitions.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_traitdefinitions.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_applications.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_approllouts.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_applicationrevisions.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_scopedefinitions.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_appdeployments.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_applicationcontexts.yaml\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u63d0\u793a\uff1a\u5982\u679c\u770b\u5230\u8bf8\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},'* is invalid: spec.scope: Invalid value: "Namespaced": filed is immutable')," \u4e4b\u7c7b\u7684\u9519\u8bef\uff0c\u8bf7\u5220\u9664\u51fa\u9519\u7684 CRD \u540e\u518d\u91cd\u65b0\u5b89\u88c5\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"}," kubectl delete crd \\\n  scopedefinitions.core.oam.dev \\\n  traitdefinitions.core.oam.dev \\\n  workloaddefinitions.core.oam.dev\n")),(0,l.kt)("h3",{id:"\u7b2c\u4e09\u6b65-\u5347\u7ea7-kubevela-helm-chart"},"\u7b2c\u4e09\u6b65 \u5347\u7ea7 KubeVela Helm chart"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm upgrade --install --create-namespace --namespace vela-system  kubevela kubevela/vela-core --version <the_new_version>\n")),(0,l.kt)("h2",{id:"\u5378\u8f7d"},"\u5378\u8f7d"),(0,l.kt)("p",null,"\u8fd0\u884c\u547d\u4ee4:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm uninstall -n vela-system kubevela\nrm -r ~/.vela\n")),(0,l.kt)("p",null,"\u547d\u4ee4\u4f1a\u5378\u8f7d KubeVela \u670d\u52a1\u548c\u76f8\u5173\u7684\u4f9d\u8d56\u7ec4\u4ef6\uff0c\u540c\u65f6\u4f1a\u6e05\u7406\u672c\u5730 CLI \u7684\u7f13\u5b58",(0,l.kt)("br",{parentName:"p"}),"\n","\u7136\u540e\u6e05\u7406 CRDs\uff08\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0chelm \u4e0d\u4f1a\u79fb\u9664 CRDs\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0}," kubectl delete crd \\\n  appdeployments.core.oam.dev \\\n  applicationconfigurations.core.oam.dev \\\n  applicationcontexts.core.oam.dev \\\n  applicationrevisions.core.oam.dev \\\n  applications.core.oam.dev \\\n  approllouts.core.oam.dev \\\n  componentdefinitions.core.oam.dev \\\n  components.core.oam.dev \\\n  containerizedworkloads.core.oam.dev \\\n  healthscopes.core.oam.dev \\\n  manualscalertraits.core.oam.dev \\\n  podspecworkloads.standard.oam.dev \\\n  scopedefinitions.core.oam.dev \\\n  traitdefinitions.core.oam.dev \\\n  workloaddefinitions.core.oam.dev\n")))}p.isMDXComponent=!0}}]);