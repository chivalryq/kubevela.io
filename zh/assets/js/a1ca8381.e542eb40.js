(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[4993],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return d}});var a=t(7294);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,p=function(e,n){if(null==e)return{};var t,a,p={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,p=e.mdxType,r=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(t),d=p,k=u["".concat(i,".").concat(d)]||u[d]||m[d]||r;return t?a.createElement(k,l(l({ref:n},s),{},{components:t})):a.createElement(k,l({ref:n},s))}));function d(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var r=t.length,l=new Array(r);l[0]=u;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:p,l[1]=o;for(var c=2;c<r;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5161:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return i},default:function(){return s}});var a=t(2122),p=t(9756),r=(t(7294),t(3905)),l={title:"\u591a\u96c6\u7fa4\u5e94\u7528\u90e8\u7f72"},o={unversionedId:"end-user/scopes/appdeploy",id:"end-user/scopes/appdeploy",isDocsHomePage:!1,title:"\u591a\u96c6\u7fa4\u5e94\u7528\u90e8\u7f72",description:"\u7b80\u4ecb",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/end-user/scopes/appdeploy.md",sourceDirName:"end-user/scopes",slug:"/end-user/scopes/appdeploy",permalink:"/zh/docs/next/end-user/scopes/appdeploy",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/end-user/scopes/appdeploy.md",version:"current",lastUpdatedBy:"yangsoon",lastUpdatedAt:1620312981,formattedLastUpdatedAt:"5/6/2021",frontMatter:{title:"\u591a\u96c6\u7fa4\u5e94\u7528\u90e8\u7f72"},sidebar:"docs",previous:{title:"Specify Definition Revision in Application",permalink:"/zh/docs/next/end-user/definition-revision"},next:{title:"Rollout Plan",permalink:"/zh/docs/next/end-user/scopes/rollout-plan"}},i=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",children:[]},{value:"AppDeployment CRD",id:"appdeployment-crd",children:[]},{value:"Cluster CRD",id:"cluster-crd",children:[]},{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",children:[]}],c={toc:i};function s(e){var n=e.components,t=(0,p.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,r.kt)("p",null,"\u4e3a\u786e\u4fdd\u4e1a\u52a1\u7684\u9ad8\u53ef\u7528\u5e76\u6700\u5927\u5316\u670d\u52a1\u7684\u541e\u5410\u91cf\uff0c\u73b0\u4ee3\u5e94\u7528\u57fa\u7840\u8bbe\u65bd\u4f1a\u6d89\u53ca\u5230\u5c06\u5e94\u7528\u90e8\u7f72\u5230\u591a\u4e2a\u7fa4\u96c6\u3002\u5728\u672c\u90e8\u5206\u4e2d\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 KubeVela \u5728\u652f\u6301\u4ee5\u4e0b\u529f\u80fd\u7684\u60c5\u51b5\u4e0b\u5b9e\u73b0\u8de8\u591a\u4e2a\u96c6\u7fa4\u90e8\u7f72\u5e94\u7528\u7a0b\u5e8f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6eda\u52a8\u66f4\u65b0\uff08Rolling Upgrade\uff09\uff1a\u4e3a\u6ee1\u8db3\u5e94\u7528\u6301\u7eed\u90e8\u7f72\u7684\u8981\u6c42\uff0c\u5e76\u4e14\u4ee5\u5b89\u5168\u7684\u65b9\u5f0f\u8fdb\u884c\u7070\u5ea6\u5347\u7ea7\uff0c\u901a\u5e38\u9700\u8981\u6309\u6b65\u5206\u4e0d\u540c\u6279\u6b21\u8fdb\u884c\u90e8\u7f72\u5e76\u5bf9\u7ed3\u679c\u8fdb\u884c\u9a8c\u8bc1\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6d41\u91cf\u5207\u6362\uff08Traffic shifting\uff09\uff1a\u5728\u6eda\u52a8\u5347\u7ea7\u5e94\u7528\u65f6\uff0c\u5b83\u9700\u8981\u5c06\u6d41\u91cf\u62c6\u5206\uff0c\u4e00\u90e8\u5206\u5bfc\u5411\u65e7\u7248\u672c\uff0c\u4e00\u90e8\u5206\u5bfc\u5411\u65b0\u7248\u672c\uff0c\u4ece\u800c\u4fdd\u8bc1\u9a8c\u8bc1\u65b0\u7248\u672c\u7684\u540c\u65f6\u4fdd\u8bc1\u670d\u52a1\u59cb\u7ec8\u662f\u53ef\u7528\u7684\u3002")),(0,r.kt)("h2",{id:"appdeployment-crd"},"AppDeployment CRD"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AppDeployment")," CRD \u7684\u8bbe\u8ba1\u5c31\u662f\u7528\u6765\u6ee1\u8db3\u4e0a\u8ff0\u9700\u6c42\u7684\u3002\u4e0b\u9762\u662f API \u7684\u7b80\u5355\u4ecb\u7ecd:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: AppDeployment\nmetadata:\n  name: sample-appdeploy\nspec:\n  traffic:\n    hosts:\n      - example.com\n\n    http:\n      - match:\n          # match any requests to 'example.com/example-app'\n          - uri:\n              prefix: \"/example-app\"\n\n        # split traffic 50/50 on v1/v2 versions of the app\n        weightedTargets:\n          - revisionName: example-app-v1\n            componentName: testsvc\n            port: 80\n            weight: 50\n          - revisionName: example-app-v2\n            componentName: testsvc\n            port: 80\n            weight: 50\n\n  appRevisions:\n    - # Name of the AppRevision.\n      # Each modification to Application would generate a new AppRevision.\n      revisionName: example-app-v1\n\n      # Cluster specific workload placement config\n      placement:\n        - clusterSelector:\n            # You can select Clusters by name or labels.\n            # If multiple clusters is selected, one will be picked via a unique hashing algorithm.\n            labels:\n              tier: production\n            name: prod-cluster-1\n\n          distribution:\n            replicas: 5\n\n        - # If no clusterSelector is given, it will use the host cluster in which this CR exists\n          distribution:\n            replicas: 5\n\n    - revisionName: example-app-v2\n      placement:\n        - clusterSelector:\n            labels:\n              tier: production\n            name: prod-cluster-1\n          distribution:\n            replicas: 5\n        - distribution:\n            replicas: 5\n")),(0,r.kt)("h2",{id:"cluster-crd"},"Cluster CRD"),(0,r.kt)("p",null,"\u5728\u4e0a\u8ff0\u793a\u4f8b\u91cc\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"placement")," \u7b56\u7565\u901a\u8fc7\u9009\u62e9 ",(0,r.kt)("inlineCode",{parentName:"p"},"Cluster CRD")," \u4e2d\u5b9a\u4e49\u7684\u96c6\u7fa4\u6765\u6307\u5b9a\u8981\u90e8\u7f72\u7684\u96c6\u7fa4\u3002\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Cluster\nmetadata:\n  name: prod-cluster-1\n  labels:\n    tier: production\nspec:\n  kubeconfigSecretRef:\n    name: kubeconfig-cluster-1 # the secret name\n")),(0,r.kt)("p",null,"\u8fd9\u4e2a secret \u4e2d\u5fc5\u987b\u8981\u5305\u542b\u8bf4\u660e ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeconfig")," \u79d8\u94a5\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," \u5b57\u6bb5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: kubeconfig-cluster-1\ndata:\n  config: ... # kubeconfig data\n")),(0,r.kt)("h2",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u4f60\u53ef\u4ee5\u81ea\u5df1\u52a8\u624b\u5c1d\u8bd5\u7684\u793a\u4f8b\u3002 \u6240\u6709\u7684 yaml \u6587\u4ef6\u90fd\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/tree/master/docs/examples/appdeployment"},(0,r.kt)("inlineCode",{parentName:"a"},"docs/examples/appdeployment/")),"\u4e2d\u3002\n\u4f60\u5fc5\u987b\u8fd0\u884c\u90a3\u4e2a\u76ee\u5f55\u4e0b\u6240\u6709\u7684 command\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u5e94\u7528"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ cat <<EOF | kubectl apply -f -\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: example-app\n  annotations:\n    app.oam.dev/revision-only: "true"\nspec:\n  components:\n    - name: testsvc\n      type: webservice\n      properties:\n        addRevisionLabel: true\n        image: crccheck/hello-world\n        port: 8000\nEOF\n')),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u4f1a\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"example-app-v1")," AppRevision. \u67e5\u770b\u4e00\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get applicationrevisions.core.oam.dev\nNAME             AGE\nexample-app-v1   116s\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f: \u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},'app.oam.dev/revision-only: "true"')," \u6ce8\u91ca, \u4e0a\u9762\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Application")," \u8d44\u6e90\u4e0d\u4f1a\u521b\u5efa\u4efb\u4f55pod\u5b9e\u4f8b\u5e76\u4f1a\u628a\u771f\u6b63\u7684\u90e8\u7f72\u8fdb\u7a0b\u7559\u7ed9 ",(0,r.kt)("inlineCode",{parentName:"p"},"AppDeployment")," \u5904\u7406\u3002"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4e4b\u540e\u4f7f\u7528\u4e0a\u9762\u7684 AppRevision \u6765\u521b\u5efa AppDeployment\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f appdeployment-1.yaml\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f: \u4e3a\u4e86\u4f7f AppDeployment \u80fd\u6b63\u5e38\u5de5\u4f5c\uff0c\u4f60\u7684\u5de5\u4f5c\u8d1f\u8f7d\u5bf9\u8c61\u5fc5\u987b\u6709\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"spec.replicas"),"\u5b57\u6bb5\u4ee5\u8fdb\u884c\u6269\u5c55\u3002"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u73b0\u5728\u4f60\u53ef\u4ee5\u67e5\u770b\u5230\u67091\u4e2a deployment \u548c2\u4e2a pod \u5b9e\u4f8b\u5df2\u7ecf\u88ab\u90e8\u7f72\u4e86\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get deploy\nNAME         READY   UP-TO-DATE   AVAILABLE   AGE\ntestsvc-v1   2/2     2            0           27s\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u66f4\u65b0\u5e94\u7528\u5b57\u6bb5:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ cat <<EOF | kubectl apply -f -\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: example-app\n  annotations:\n    app.oam.dev/revision-only: "true"\nspec:\n  components:\n    - name: testsvc\n      type: webservice\n      properties:\n        addRevisionLabel: true\n        image: nginx\n        port: 80\nEOF\n')),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"example-app-v2")," AppRevision\u3002\u68c0\u67e5\u4e00\u4e0b:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get applicationrevisions.core.oam.dev\nNAME\nexample-app-v1\nexample-app-v2\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u63a5\u4e0b\u6765\u6211\u4eec\u66f4\u65b0 AppDeployment \u5bf9\u8c61\uff0c\u5c1d\u8bd5\u90e8\u7f72 2 \u4e2a\u4e0d\u540c\u7684\u5e94\u7528\u7248\u672c:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f appdeployment-2.yaml\n")),(0,r.kt)("p",{parentName:"li"},"\uff08\u53ef\u9009\uff09\u5982\u679c\u4f60\u5df2\u5b89\u88c5\u4e86 Istio\uff0c\u4f60\u53ef\u4ee5\u5c06 AppDeployment \u7ed3\u5408\u6d41\u91cf\u5207\u5206\u7684\u529f\u80fd\u4e00\u8d77\u4f7f\u7528:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# set up gateway if not yet\n$ kubectl apply -f gateway.yaml\n\n$ kubectl apply -f appdeployment-2-traffic.yaml\n")),(0,r.kt)("p",{parentName:"li"},"\u6ce8\u610f\uff1a\u4e3a\u4e86\u4f7f\u6d41\u91cf\u5207\u5206\u80fd\u6b63\u5e38\u5de5\u4f5c\uff0c\u4f60\u5fc5\u987b\u5728\u5de5\u4f5c\u8d1f\u8f7d\u7684 cue templates \u4e2d\u8bbe\u7f6e\u4e0b\u9762\u6240\u793a\u7684pod label(\u8be6\u89c1 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/blob/master/hack/vela-templates/cue/webservice.cue"},"webservice.cue"),"):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'"app.oam.dev/component": context.name\n"app.oam.dev/appRevision": context.appRevision\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u73b0\u5728\u4f60\u53ef\u4ee5\u67e5\u770b\u5230\u6bcf\u4e00\u4e2a\u7248\u672c\u6709 1 \u4e2a deployment \u548c 1 \u4e2a pod\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get deploy\nNAME         READY   UP-TO-DATE   AVAILABLE   AGE\ntestsvc-v1   1/1     1            1           2m14s\ntestsvc-v2   1/1     1            1           8s\n")),(0,r.kt)("p",{parentName:"li"},"\uff08\u53ef\u9009\uff09\u6765\u9a8c\u8bc1\u4e0b\u6d41\u91cf\u5207\u5206:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# run this in another terminal\n$ kubectl -n istio-system port-forward service/istio-ingressgateway 8080:80\nForwarding from 127.0.0.1:8080 -> 8080\nForwarding from [::1]:8080 -> 8080\n\n# The command should return pages of either docker whale or nginx in 50/50\n$ curl -H "Host: example-app.example.com" http://localhost:8080/\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Cleanup:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete appdeployments.core.oam.dev  --all\nkubectl delete applications.core.oam.dev --all\n")))))}s.isMDXComponent=!0}}]);