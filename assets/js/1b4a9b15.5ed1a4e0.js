(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[7409],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1333:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var r=t(22122),a=t(19756),i=(t(67294),t(3905)),o={title:"Explore Applications"},s={unversionedId:"end-user/explore",id:"version-v1.0/end-user/explore",isDocsHomePage:!1,title:"Explore Applications",description:"We will introduce how to explore application related resources in this section.",source:"@site/versioned_docs/version-v1.0/end-user/explore.md",sourceDirName:"end-user",slug:"/end-user/explore",permalink:"/docs/end-user/explore",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/end-user/explore.md",version:"v1.0",lastUpdatedBy:"yangsoon",lastUpdatedAt:1621315429,formattedLastUpdatedAt:"5/18/2021",frontMatter:{title:"Explore Applications"},sidebar:"version-v1.0/docs",previous:{title:"Install kubectl plugin",permalink:"/docs/end-user/kubectlplugin"},next:{title:"Debug and Test",permalink:"/docs/end-user/diagnose"}},l=[{value:"List Application",id:"list-application",children:[{value:"View Application Details",id:"view-application-details",children:[]},{value:"List Application Revisions",id:"list-application-revisions",children:[]}]},{value:"Explore Components",id:"explore-components",children:[]},{value:"Explore Traits",id:"explore-traits",children:[]}],c={toc:l};function p(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We will introduce how to explore application related resources in this section."),(0,i.kt)("h2",{id:"list-application"},"List Application"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get application\nNAME        COMPONENT   TYPE         PHASE     HEALTHY   STATUS   AGE\napp-basic   app-basic   webservice   running   true               12d\nwebsite     frontend    webservice   running   true               4m54s\n")),(0,i.kt)("p",null,"You can also use the short name ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl get app"),"."),(0,i.kt)("h3",{id:"view-application-details"},"View Application Details"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ kubectl get app website -o yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  generation: 1\n  name: website\n  namespace: default\nspec:\n  components:\n  - name: frontend\n    properties:\n      image: nginx\n    traits:\n    - properties:\n        cpuPercent: 60\n        max: 10\n        min: 1\n      type: cpuscaler\n    - properties:\n        image: fluentd\n        name: sidecar-test\n      type: sidecar\n    type: webservice\n  - name: backend\n    properties:\n      cmd:\n      - sleep\n      - "1000"\n      image: busybox\n    type: worker\nstatus:\n  ...\n  latestRevision:\n    name: website-v1\n    revision: 1\n    revisionHash: e9e062e2cddfe5fb\n  services:\n  - healthy: true\n    name: frontend\n    traits:\n    - healthy: true\n      type: cpuscaler\n    - healthy: true\n      type: sidecar\n  - healthy: true\n    name: backend\n  status: running\n')),(0,i.kt)("p",null,"Here are some highlight information that you need to know:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"status.latestRevision")," declares current revision of this application."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"status.services")," declares the component created by this application and the healthy state."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"status.status")," declares the global state of this application. ")),(0,i.kt)("h3",{id:"list-application-revisions"},"List Application Revisions"),(0,i.kt)("p",null,"When we update an application, if there's any difference on spec, KubeVela will create a new revision."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get apprev -l app.oam.dev/name=website\nNAME           AGE\nwebsite-v1     35m\n")),(0,i.kt)("h2",{id:"explore-components"},"Explore Components"),(0,i.kt)("p",null,"You can explore what kinds of component definitions supported in your system."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get comp -n vela-system\nNAME              WORKLOAD-KIND   DESCRIPTION                        \ntask              Job             Describes jobs that run code or a script to completion.                                                                                          \nwebservice        Deployment      Describes long-running, scalable, containerized services that have a stable network endpoint to receive external network traffic from customers. \nworker            Deployment      Describes long-running, scalable, containerized services that running at backend. They do NOT have network endpoint to receive external network traffic.\n")),(0,i.kt)("p",null,"The component definition objects are namespace isolated align with application, while the ",(0,i.kt)("inlineCode",{parentName:"p"},"vela-system")," is a common system namespace of KubeVela,\ndefinitions laid here can be used by every application. "),(0,i.kt)("p",null,"You can use ",(0,i.kt)("a",{parentName:"p",href:"./kubectlplugin"},"vela kubectl plugin")," to view the detail usage of specific component definition."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ kubectl vela show webservice\n# Properties\n+------------------+----------------------------------------------------------------------------------+-----------------------+----------+---------+\n|       NAME       |                                   DESCRIPTION                                    |         TYPE          | REQUIRED | DEFAULT |\n+------------------+----------------------------------------------------------------------------------+-----------------------+----------+---------+\n| cmd              | Commands to run in the container                                                 | []string              | false    |         |\n| env              | Define arguments by using environment variables                                  | [[]env](#env)         | false    |         |\n| addRevisionLabel |                                                                                  | bool                  | true     | false   |\n| image            | Which image would you like to use for your service                               | string                | true     |         |\n| port             | Which port do you want customer traffic sent to                                  | int                   | true     |      80 |\n| cpu              | Number of CPU units for the service, like `0.5` (0.5 CPU core), `1` (1 CPU core) | string                | false    |         |\n| volumes          | Declare volumes and volumeMounts                                                 | [[]volumes](#volumes) | false    |         |\n+------------------+----------------------------------------------------------------------------------+-----------------------+----------+---------+\n\n\n##### volumes\n+-----------+---------------------------------------------------------------------+--------+----------+---------+\n|   NAME    |                             DESCRIPTION                             |  TYPE  | REQUIRED | DEFAULT |\n+-----------+---------------------------------------------------------------------+--------+----------+---------+\n| name      |                                                                     | string | true     |         |\n| mountPath |                                                                     | string | true     |         |\n| type      | Specify volume type, options: "pvc","configMap","secret","emptyDir" | string | true     |         |\n+-----------+---------------------------------------------------------------------+--------+----------+---------+\n\n\n## env\n+-----------+-----------------------------------------------------------+-------------------------+----------+---------+\n|   NAME    |                        DESCRIPTION                        |          TYPE           | REQUIRED | DEFAULT |\n+-----------+-----------------------------------------------------------+-------------------------+----------+---------+\n| name      | Environment variable name                                 | string                  | true     |         |\n| value     | The value of the environment variable                     | string                  | false    |         |\n| valueFrom | Specifies a source the value of this var should come from | [valueFrom](#valueFrom) | false    |         |\n+-----------+-----------------------------------------------------------+-------------------------+----------+---------+\n\n\n### valueFrom\n+--------------+--------------------------------------------------+-------------------------------+----------+---------+\n|     NAME     |                   DESCRIPTION                    |             TYPE              | REQUIRED | DEFAULT |\n+--------------+--------------------------------------------------+-------------------------------+----------+---------+\n| secretKeyRef | Selects a key of a secret in the pod\'s namespace | [secretKeyRef](#secretKeyRef) | true     |         |\n+--------------+--------------------------------------------------+-------------------------------+----------+---------+\n\n\n#### secretKeyRef\n+------+------------------------------------------------------------------+--------+----------+---------+\n| NAME |                           DESCRIPTION                            |  TYPE  | REQUIRED | DEFAULT |\n+------+------------------------------------------------------------------+--------+----------+---------+\n| name | The name of the secret in the pod\'s namespace to select from     | string | true     |         |\n| key  | The key of the secret to select from. Must be a valid secret key | string | true     |         |\n+------+------------------------------------------------------------------+--------+----------+---------+\n')),(0,i.kt)("h2",{id:"explore-traits"},"Explore Traits"),(0,i.kt)("p",null,"You can explore what kinds of trait definitions supported in your system."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get trait -n vela-system\nNAME                                       APPLIES-TO            DESCRIPTION                                     \ncpuscaler                                  [webservice worker]   configure k8s HPA with CPU metrics for Deployment\ningress                                    [webservice worker]   Configures K8s ingress and service to enable web traffic for your service. Please use route trait in cap center for advanced usage.\nscaler                                     [webservice worker]   Configures replicas for your service.\nsidecar                                    [webservice worker]   inject a sidecar container into your app\n")),(0,i.kt)("p",null,"The trait definition objects are namespace isolated align with application, while the ",(0,i.kt)("inlineCode",{parentName:"p"},"vela-system")," is a common system namespace of KubeVela,\ndefinitions laid here can be used by every application. "),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl vela show")," to see the usage of specific trait definition."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl vela show sidecar\n# Properties\n+---------+-----------------------------------------+----------+----------+---------+\n|  NAME   |               DESCRIPTION               |   TYPE   | REQUIRED | DEFAULT |\n+---------+-----------------------------------------+----------+----------+---------+\n| name    | Specify the name of sidecar container   | string   | true     |         |\n| image   | Specify the image of sidecar container  | string   | true     |         |\n| command | Specify the commands run in the sidecar | []string | false    |         |\n+---------+-----------------------------------------+----------+----------+---------+\n")))}p.isMDXComponent=!0}}]);