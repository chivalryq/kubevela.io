(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[427],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(h,i(i({ref:n},c),{},{components:t})):a.createElement(h,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},69394:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var a=t(22122),r=t(19756),o=(t(67294),t(3905)),i={title:"Application"},l={unversionedId:"end-user/application",id:"version-v1.1/end-user/application",isDocsHomePage:!1,title:"Application",description:"This documentation will walk through how to use KubeVela to design a simple application without any placement rule.",source:"@site/versioned_docs/version-v1.1/end-user/application.md",sourceDirName:"end-user",slug:"/end-user/application",permalink:"/zh/docs/v1.1/end-user/application",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/end-user/application.md",version:"v1.1",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1621052799,formattedLastUpdatedAt:"2021/5/15",frontMatter:{title:"Application"},sidebar:"version-v1.1/docs",previous:{title:"How it Works",permalink:"/zh/docs/v1.1/concepts"},next:{title:"Web Service",permalink:"/zh/docs/v1.1/end-user/components/webservice"}},s=[{value:"Step 1: Check Available Components",id:"step-1-check-available-components",children:[]},{value:"Step 2: Declare an Application",id:"step-2-declare-an-application",children:[]},{value:"Step 3: Attach Traits",id:"step-3-attach-traits",children:[]},{value:"Step 4: Deploy the Application",id:"step-4-deploy-the-application",children:[{value:"List Revisions",id:"list-revisions",children:[]},{value:"Verify",id:"verify",children:[]}]}],p={toc:s};function c(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This documentation will walk through how to use KubeVela to design a simple application without any placement rule."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: since you didn't declare placement rule, KubeVela will deploy this application directly to the control plane cluster (i.e. the cluster your ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," is talking to). This is also the same case if you are using local cluster such as KinD or MiniKube to play KubeVela.")),(0,o.kt)("h2",{id:"step-1-check-available-components"},"Step 1: Check Available Components"),(0,o.kt)("p",null,"Components are deployable or provisionable entities that compose your application. It could be a Helm chart, a simple Kubernetes workload, a CUE or Terraform module, or a cloud database etc."),(0,o.kt)("p",null,"Let's check the available components in fresh new KubeVela."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get comp -n vela-system\nNAME              WORKLOAD-KIND   DESCRIPTION                        \ntask              Job             Describes jobs that run code or a script to completion.                                                                                          \nwebservice        Deployment      Describes long-running, scalable, containerized services that have a stable network endpoint to receive external network traffic from customers. \nworker            Deployment      Describes long-running, scalable, containerized services that running at backend. They do NOT have network endpoint to receive external network traffic.\n")),(0,o.kt)("p",null,"To show the specification for given component, you could use ",(0,o.kt)("inlineCode",{parentName:"p"},"vela show"),". "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl vela show webservice\n# Properties\n+------------------+----------------------------------------------------------------------------------+-----------------------+----------+---------+\n|       NAME       |                                   DESCRIPTION                                    |         TYPE          | REQUIRED | DEFAULT |\n+------------------+----------------------------------------------------------------------------------+-----------------------+----------+---------+\n| cmd              | Commands to run in the container                                                 | []string              | false    |         |\n| env              | Define arguments by using environment variables                                  | [[]env](#env)         | false    |         |\n| addRevisionLabel |                                                                                  | bool                  | true     | false   |\n| image            | Which image would you like to use for your service                               | string                | true     |         |\n| port             | Which port do you want customer traffic sent to                                  | int                   | true     |      80 |\n| cpu              | Number of CPU units for the service, like `0.5` (0.5 CPU core), `1` (1 CPU core) | string                | false    |         |\n| volumes          | Declare volumes and volumeMounts                                                 | [[]volumes](#volumes) | false    |         |\n+------------------+----------------------------------------------------------------------------------+-----------------------+----------+---------+\n... // skip other fields\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Tips: ",(0,o.kt)("inlineCode",{parentName:"p"},"vela show xxx --web")," will open its capability reference documentation in your default browser.")),(0,o.kt)("p",null,"You could always ",(0,o.kt)("a",{parentName:"p",href:"components/more"},"add more components")," to the platform at any time."),(0,o.kt)("h2",{id:"step-2-declare-an-application"},"Step 2: Declare an Application"),(0,o.kt)("p",null,"Application is the full description of a deployment. Let's define an application that deploys a ",(0,o.kt)("em",{parentName:"p"},"Web Service")," and a ",(0,o.kt)("em",{parentName:"p"},"Worker")," components."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# sample.yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: website\nspec:\n  components:\n    - name: frontend\n      type: webservice\n      properties:\n        image: nginx\n    - name: backend\n      type: worker\n      properties:\n        image: busybox\n        cmd:\n          - sleep\n          - '1000'\n")),(0,o.kt)("h2",{id:"step-3-attach-traits"},"Step 3: Attach Traits"),(0,o.kt)("p",null,"Traits are platform provided features that could ",(0,o.kt)("em",{parentName:"p"},"overlay")," a given component with extra operational behaviors."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get trait -n vela-system\nNAME                                       APPLIES-TO            DESCRIPTION                                     \ncpuscaler                                  [webservice worker]   configure k8s HPA with CPU metrics for Deployment\ningress                                    [webservice worker]   Configures K8s ingress and service to enable web traffic for your service. Please use route trait in cap center for advanced usage.\nscaler                                     [webservice worker]   Configures replicas for your service.\nsidecar                                    [webservice worker]   inject a sidecar container into your app\n")),(0,o.kt)("p",null,"Let's check the specification of ",(0,o.kt)("inlineCode",{parentName:"p"},"sidecar")," trait."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl vela show sidecar\n# Properties\n+---------+-----------------------------------------+----------+----------+---------+\n|  NAME   |               DESCRIPTION               |   TYPE   | REQUIRED | DEFAULT |\n+---------+-----------------------------------------+----------+----------+---------+\n| name    | Specify the name of sidecar container   | string   | true     |         |\n| image   | Specify the image of sidecar container  | string   | true     |         |\n| command | Specify the commands run in the sidecar | []string | false    |         |\n+---------+-----------------------------------------+----------+----------+---------+\n")),(0,o.kt)("p",null,"Note that traits are designed to be ",(0,o.kt)("em",{parentName:"p"},"overlays"),"."),(0,o.kt)("p",null,"This means for ",(0,o.kt)("inlineCode",{parentName:"p"},"sidecar")," trait, your ",(0,o.kt)("inlineCode",{parentName:"p"},"frontend")," component doesn't need to have a sidecar template or bring a webhook to enable sidecar injection. Instead, KubeVela is able to patch a sidecar to its workload instance after it is generated by the component (no matter it's a Helm chart or CUE module) but before it is applied to runtime cluster."),(0,o.kt)("p",null,'Similarly, the system will assign a HPA instance based on the properties you set and "link" it to the target workload instance, the component itself is untouched.'),(0,o.kt)("p",null,"Now let's attach ",(0,o.kt)("inlineCode",{parentName:"p"},"sidecar")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"cpuscaler")," traits to the ",(0,o.kt)("inlineCode",{parentName:"p"},"frontend")," component. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# sample.yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: website\nspec:\n  components:\n    - name: frontend              # This is the component I want to deploy\n      type: webservice\n      properties:\n        image: nginx\n      traits:\n        - type: cpuscaler         # Assign a HPA to scale the component by CPU usage\n          properties:\n            min: 1\n            max: 10\n            cpuPercent: 60\n        - type: sidecar           # Inject a fluentd sidecar before applying the component to runtime cluster\n          properties:\n            name: "sidecar-test"\n            image: "fluentd"\n    - name: backend\n      type: worker\n      properties:\n        image: busybox\n        cmd:\n          - sleep\n          - \'1000\'\n')),(0,o.kt)("h2",{id:"step-4-deploy-the-application"},"Step 4: Deploy the Application"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/docs/examples/enduser/sample.yaml\napplication.core.oam.dev/website created\n")),(0,o.kt)("p",null,"You'll get the application becomes ",(0,o.kt)("inlineCode",{parentName:"p"},"running"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get application\nNAME        COMPONENT   TYPE         PHASE     HEALTHY   STATUS   AGE\nwebsite     frontend    webservice   running   true               4m54s\n")),(0,o.kt)("p",null,"Check the details of the application."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ kubectl get app website -o yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  generation: 1\n  name: website\n  namespace: default\nspec:\n  components:\n  - name: frontend\n    properties:\n      image: nginx\n    traits:\n    - properties:\n        cpuPercent: 60\n        max: 10\n        min: 1\n      type: cpuscaler\n    - properties:\n        image: fluentd\n        name: sidecar-test\n      type: sidecar\n    type: webservice\n  - name: backend\n    properties:\n      cmd:\n      - sleep\n      - "1000"\n      image: busybox\n    type: worker\nstatus:\n  ...\n  latestRevision:\n    name: website-v1\n    revision: 1\n    revisionHash: e9e062e2cddfe5fb\n  services:\n  - healthy: true\n    name: frontend\n    traits:\n    - healthy: true\n      type: cpuscaler\n    - healthy: true\n      type: sidecar\n  - healthy: true\n    name: backend\n  status: running\n')),(0,o.kt)("p",null,"Specifically:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"status.latestRevision")," declares current revision of this deployment."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"status.services")," declares the component created by this deployment and the healthy state."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"status.status")," declares the global state of this deployment. ")),(0,o.kt)("h3",{id:"list-revisions"},"List Revisions"),(0,o.kt)("p",null,"When updating an application entity, KubeVela will create a new revision for this change."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get apprev -l app.oam.dev/name=website\nNAME           AGE\nwebsite-v1     35m\n")),(0,o.kt)("p",null,"Furthermore, the system will decide how to/whether to rollout the application based on the attached ",(0,o.kt)("a",{parentName:"p",href:"scopes/rollout-plan"},"rollout plan"),"."),(0,o.kt)("h3",{id:"verify"},"Verify"),(0,o.kt)("details",null,(0,o.kt)("p",null,"On the runtime cluster, you could see a Kubernetes Deployment named ",(0,o.kt)("inlineCode",{parentName:"p"},"frontend")," is running, with port exposed, and with a container ",(0,o.kt)("inlineCode",{parentName:"p"},"fluentd")," injected."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deploy frontend\nNAME       READY   UP-TO-DATE   AVAILABLE   AGE\nfrontend   1/1     1            1           97s\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deploy frontend -o yaml\n...\n    spec:\n      containers:\n      - image: nginx\n        imagePullPolicy: Always\n        name: frontend\n        ports:\n        - containerPort: 80\n          protocol: TCP\n      - image: fluentd\n        imagePullPolicy: Always\n        name: sidecar-test\n...\n")),(0,o.kt)("p",null,"Another Deployment is also running named ",(0,o.kt)("inlineCode",{parentName:"p"},"backend"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deploy backend\nNAME      READY   UP-TO-DATE   AVAILABLE   AGE\nbackend   1/1     1            1           111s\n")),(0,o.kt)("p",null,"An HPA was also created by the ",(0,o.kt)("inlineCode",{parentName:"p"},"cpuscaler")," trait. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get HorizontalPodAutoscaler frontend\nNAME       REFERENCE             TARGETS         MINPODS   MAXPODS   REPLICAS   AGE\nfrontend   Deployment/frontend   <unknown>/50%   1         10        1          101m\n"))))}c.isMDXComponent=!0}}]);