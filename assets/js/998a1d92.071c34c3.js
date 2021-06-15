(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[471],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,v=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(v,l(l({ref:t},c),{},{components:n})):a.createElement(v,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},74527:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p},default:function(){return c}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),l={title:"Advanced Rollout Plan"},i={unversionedId:"end-user/scopes/advanced-rollout",id:"version-v1.1/end-user/scopes/advanced-rollout",isDocsHomePage:!1,title:"Advanced Rollout Plan",description:"The rollout plan feature in KubeVela is essentially provided by AppRollout API.",source:"@site/versioned_docs/version-v1.1/end-user/scopes/advanced-rollout.md",sourceDirName:"end-user/scopes",slug:"/end-user/scopes/advanced-rollout",permalink:"/docs/v1.1/end-user/scopes/advanced-rollout",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/end-user/scopes/advanced-rollout.md",version:"v1.1",lastUpdatedBy:"yangsoon",lastUpdatedAt:1623737988,formattedLastUpdatedAt:"6/15/2021",frontMatter:{title:"Advanced Rollout Plan"}},p=[{value:"AppRollout",id:"approllout",children:[]},{value:"Basic Usage",id:"basic-usage",children:[]},{value:"Advanced Usage",id:"advanced-usage",children:[{value:"Revert",id:"revert",children:[]},{value:"Skip Revision Rollout",id:"skip-revision-rollout",children:[]}]},{value:"More Details About <code>AppRollout</code>",id:"more-details-about-approllout",children:[{value:"Design Principles and Goals",id:"design-principles-and-goals",children:[]},{value:"State Transition",id:"state-transition",children:[]},{value:"Roadmap",id:"roadmap",children:[]}]}],s={toc:p};function c(e){var t=e.components,l=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The rollout plan feature in KubeVela is essentially provided by ",(0,o.kt)("inlineCode",{parentName:"p"},"AppRollout")," API."),(0,o.kt)("h2",{id:"approllout"},"AppRollout"),(0,o.kt)("p",null,"Below is an example for rolling update an application from v1 to v2 in three batches. The\nfirst batch contains only 1 pod while the rest of the batches split the rest."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: AppRollout\nmetadata:\n  name: rolling-example\nspec:\n  sourceAppRevisionName: test-rolling-v1\n  targetAppRevisionName: test-rolling-v2\n  componentList:\n    - metrics-provider\n  rolloutPlan:\n    rolloutStrategy: "IncreaseFirst"\n    rolloutBatches:\n      - replicas: 1\n      - replicas: 50%\n      - replicas: 50%\n    batchPartition: 1\n')),(0,o.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Deploy application"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: test-rolling\n  annotations:\n    "app.oam.dev/rolling-components": "metrics-provider"\n    "app.oam.dev/rollout-template": "true"\nspec:\n  components:\n    - name: metrics-provider\n      type: worker\n      properties:\n        cmd:\n          - ./podinfo\n          - stress-cpu=1\n        image: stefanprodan/podinfo:4.0.6\n        port: 8080\n        replicas: 5\n')),(0,o.kt)("p",{parentName:"li"},"Verify AppRevision ",(0,o.kt)("inlineCode",{parentName:"p"},"test-rolling-v1")," have generated"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get apprev test-rolling-v1\nNAME              AGE\ntest-rolling-v1   9s\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Attach the following rollout plan to upgrade the application to v1"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: AppRollout\nmetadata:\n  name: rolling-example\nspec:\n  # application (revision) reference\n  targetAppRevisionName: test-rolling-v1\n  componentList:\n    - metrics-provider\n  rolloutPlan:\n    rolloutStrategy: "IncreaseFirst"\n    rolloutBatches:\n      - replicas: 10%\n      - replicas: 40%\n      - replicas: 50%\n    targetSize: 5\n')),(0,o.kt)("p",{parentName:"li"},"Use can check the status of the ApplicationRollout and wait for the rollout to complete.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"User can continue to modify the application image tag and apply.This will generate new AppRevision ",(0,o.kt)("inlineCode",{parentName:"p"},"test-rolling-v2")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: test-rolling\n  annotations:\n    "app.oam.dev/rolling-components": "metrics-provider"\n    "app.oam.dev/rollout-template": "true"\nspec:\n  components:\n    - name: metrics-provider\n      type: worker\n      properties:\n        cmd:\n          - ./podinfo\n          - stress-cpu=1\n        image: stefanprodan/podinfo:5.0.2\n        port: 8080\n        replicas: 5\n')),(0,o.kt)("p",{parentName:"li"},"Verify AppRevision ",(0,o.kt)("inlineCode",{parentName:"p"},"test-rolling-v2")," have generated"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get apprev test-rolling-v2\nNAME              AGE\ntest-rolling-v2   7s\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Apply the application rollout that upgrade the application from v1 to v2"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: AppRollout\nmetadata:\n  name: rolling-example\nspec:\n  # application (revision) reference\n  sourceAppRevisionName: test-rolling-v1\n  targetAppRevisionName: test-rolling-v2\n  componentList:\n    - metrics-provider\n  rolloutPlan:\n    rolloutStrategy: "IncreaseFirst"\n    rolloutBatches:\n      - replicas: 1\n      - replicas: 2\n      - replicas: 2\n')),(0,o.kt)("p",{parentName:"li"},'User can check the status of the ApplicationRollout and see the rollout completes, and the\nApplicationRollout\'s "Rolling State" becomes ',(0,o.kt)("inlineCode",{parentName:"p"},"rolloutSucceed")))),(0,o.kt)("h2",{id:"advanced-usage"},"Advanced Usage"),(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"AppRollout")," separately can enable some advanced use case."),(0,o.kt)("h3",{id:"revert"},"Revert"),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Apply the application rollout that revert the application from v2 to v1"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\n  kind: AppRollout\n  metadata:\n    name: rolling-example\n  spec:\n    # application (revision) reference\n    sourceAppRevisionName: test-rolling-v2\n    targetAppRevisionName: test-rolling-v1\n    componentList:\n      - metrics-provider\n    rolloutPlan:\n      rolloutStrategy: "IncreaseFirst"\n      rolloutBatches:\n        - replicas: 1\n        - replicas: 2\n        - replicas: 2\n')))),(0,o.kt)("h3",{id:"skip-revision-rollout"},"Skip Revision Rollout"),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"User can apply this yaml continue to modify the application image tag.This will generate new AppRevision ",(0,o.kt)("inlineCode",{parentName:"p"},"test-rolling-v3")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'  apiVersion: core.oam.dev/v1beta1\n  kind: Application\n  metadata:\n    name: test-rolling\n    annotations:\n      "app.oam.dev/rolling-components": "metrics-provider"\n      "app.oam.dev/rollout-template": "true"\n  spec:\n    components:\n      - name: metrics-provider\n        type: worker\n        properties:\n          cmd:\n            - ./podinfo\n            - stress-cpu=1\n          image: stefanprodan/podinfo:5.2.0\n          port: 8080\n          replicas: 5\n')),(0,o.kt)("p",{parentName:"li"},"Verify AppRevision ",(0,o.kt)("inlineCode",{parentName:"p"},"test-rolling-v3")," have generated"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get apprev test-rolling-v3\nNAME              AGE\ntest-rolling-v3   7s\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Apply the application rollout that rollout the application from v1 to v3"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\n  kind: AppRollout\n  metadata:\n    name: rolling-example\n  spec:\n    # application (revision) reference\n    sourceAppRevisionName: test-rolling-v1\n    targetAppRevisionName: test-rolling-v3\n    componentList:\n      - metrics-provider\n    rolloutPlan:\n      rolloutStrategy: "IncreaseFirst"\n      rolloutBatches:\n        - replicas: 1\n        - replicas: 2\n        - replicas: 2\n')))),(0,o.kt)("h2",{id:"more-details-about-approllout"},"More Details About ",(0,o.kt)("inlineCode",{parentName:"h2"},"AppRollout")),(0,o.kt)("h3",{id:"design-principles-and-goals"},"Design Principles and Goals"),(0,o.kt)("p",null,"There are several attempts at solving rollout problem in the cloud native community. However, none\nof them provide a true rolling style upgrade. For example, flagger supports Blue/Green, Canary\nand A/B testing. Therefore, we decide to add support for batch based rolling upgrade as\nour first style to support in KubeVela."),(0,o.kt)("p",null,"We design KubeVela rollout solutions with the following principles in mind"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"First, we want all flavors of rollout controllers share the same core rollout\nrelated logic. The trait and application related logic can be easily encapsulated into its own\npackage."),(0,o.kt)("li",{parentName:"ul"},"Second, the core rollout related logic is easily extensible to support different type of\nworkloads, i.e. Deployment, CloneSet, Statefulset, DaemonSet or even customized workloads."),(0,o.kt)("li",{parentName:"ul"},"Thirdly, the core rollout related logic has a well documented state machine that\ndoes state transition explicitly."),(0,o.kt)("li",{parentName:"ul"},"Finally, the controllers can support all the rollout/upgrade needs of an application running\nin a production environment including Blue/Green, Canary and A/B testing.")),(0,o.kt)("h3",{id:"state-transition"},"State Transition"),(0,o.kt)("p",null,"Here is the high level state transition graph"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8366).Z})),(0,o.kt)("h3",{id:"roadmap"},"Roadmap"),(0,o.kt)("p",null,"Our recent roadmap for rollout plan is ",(0,o.kt)("a",{parentName:"p",href:"./roadmap"},"here"),"."))}c.isMDXComponent=!0},8366:function(e,t,n){"use strict";t.Z=n.p+"assets/images/approllout-status-transition-78db00cbc539d19e6c5d3feeead31b16.jpg"}}]);