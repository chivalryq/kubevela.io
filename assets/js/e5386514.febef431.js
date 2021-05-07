(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{304:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return m}));var a=t(3),o=t(7),r=(t(0),t(341)),i={title:"How-to"},c={unversionedId:"platform-engineers/cue/component",id:"platform-engineers/cue/component",isDocsHomePage:!1,title:"How-to",description:"In this section, it will introduce how to use CUE to declare app components via ComponentDefinition.",source:"@site/docs/platform-engineers/cue/component.md",slug:"/platform-engineers/cue/component",permalink:"/docs/next/platform-engineers/cue/component",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/platform-engineers/cue/component.md",version:"current",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1620380042,formattedLastUpdatedAt:"5/7/2021",sidebar:"docs",previous:{title:"Generating UI Forms",permalink:"/docs/next/platform-engineers/openapi-v3-json-schema"},next:{title:"Learning CUE",permalink:"/docs/next/platform-engineers/cue/basic"}},p=[{value:"Declare <code>ComponentDefinition</code>",id:"declare-componentdefinition",children:[]},{value:"Declare an <code>Application</code>",id:"declare-an-application",children:[{value:"Under The Hood",id:"under-the-hood",children:[]}]},{value:"CUE <code>Context</code>",id:"cue-context",children:[{value:"Full available information in CUE <code>context</code>",id:"full-available-information-in-cue-context",children:[]}]},{value:"Composition",id:"composition",children:[]},{value:"How-to",id:"how-to",children:[]},{value:"What&#39;s Next",id:"whats-next",children:[]}],l={toc:p};function m(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In this section, it will introduce how to use ",Object(r.b)("a",{parentName:"p",href:"https://cuelang.org/"},"CUE")," to declare app components via ",Object(r.b)("inlineCode",{parentName:"p"},"ComponentDefinition"),"."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Before reading this part, please make sure you've learned the ",Object(r.b)("a",{parentName:"p",href:"../definition-and-templates"},"Definition CRD")," in KubeVela.")),Object(r.b)("h2",{id:"declare-componentdefinition"},"Declare ",Object(r.b)("inlineCode",{parentName:"h2"},"ComponentDefinition")),Object(r.b)("p",null,"Here is a CUE based ",Object(r.b)("inlineCode",{parentName:"p"},"ComponentDefinition")," example which provides a abstraction for stateless workload type:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nmetadata:\n  name: stateless\nspec:\n  workload:\n    definition:\n      apiVersion: apps/v1\n      kind: Deployment\n  schematic:\n    cue:\n      template: |\n        parameter: {\n            name:  string\n            image: string\n        }\n        output: {\n            apiVersion: "apps/v1"\n            kind:       "Deployment"\n            spec: {\n                selector: matchLabels: {\n                    "app.oam.dev/component": parameter.name\n                }\n                template: {\n                    metadata: labels: {\n                        "app.oam.dev/component": parameter.name\n                    }\n                    spec: {\n                        containers: [{\n                            name:  parameter.name\n                            image: parameter.image\n                        }]\n                    }\n                }\n            }\n        }\n')),Object(r.b)("p",null,"In detail:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},".spec.workload")," is required to indicate the workload type of this component."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},".spec.schematic.cue.template")," is a CUE template, specifically:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"output")," filed defines the template for the abstraction."),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"parameter")," filed defines the template parameters, i.e. the configurable properties exposed in the ",Object(r.b)("inlineCode",{parentName:"li"},"Application"),"abstraction (and JSON schema will be automatically generated based on them).")))),Object(r.b)("p",null,"Let's declare another component named ",Object(r.b)("inlineCode",{parentName:"p"},"task"),", i.e. an abstraction for run-to-completion workload."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nmetadata:\n  name: task\n  annotations:\n    definition.oam.dev/description: "Describes jobs that run code or a script to completion."\nspec:\n  workload:\n    definition:\n      apiVersion: batch/v1\n      kind: Job\n  schematic:\n    cue:\n      template: |\n        output: {\n          apiVersion: "batch/v1"\n          kind:       "Job"\n          spec: {\n            parallelism: parameter.count\n            completions: parameter.count\n            template: spec: {\n              restartPolicy: parameter.restart\n              containers: [{\n                image: parameter.image\n                if parameter["cmd"] != _|_ {\n                  command: parameter.cmd\n                }\n              }]\n            }\n          }\n        }\n        parameter: {\n          count:   *1 | int\n          image:   string\n          restart: *"Never" | string\n          cmd?: [...string]\n        }\n')),Object(r.b)("p",null,"Save above ",Object(r.b)("inlineCode",{parentName:"p"},"ComponentDefintion")," objects to files and install them to your Kubernetes cluster by ",Object(r.b)("inlineCode",{parentName:"p"},"$ kubectl apply -f stateless-def.yaml task-def.yaml")),Object(r.b)("h2",{id:"declare-an-application"},"Declare an ",Object(r.b)("inlineCode",{parentName:"h2"},"Application")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"ComponentDefinition")," can be instantiated in ",Object(r.b)("inlineCode",{parentName:"p"},"Application")," abstraction as below:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: Application\nmetadata:\n  name: website\nspec:\n  components:\n    - name: hello\n      type: stateless\n      properties:\n        image: crccheck/hello-world\n        name: mysvc\n    - name: countdown\n      type: task\n      properties:\n        image: centos:7\n        cmd:\n          - "bin/bash"\n          - "-c"\n          - "for i in 9 8 7 6 5 4 3 2 1 ; do echo $i ; done"\n')),Object(r.b)("h3",{id:"under-the-hood"},"Under The Hood"),Object(r.b)("details",null,Object(r.b)("p",null,"Above application resource will generate and manage following Kubernetes resources in your target cluster based on the ",Object(r.b)("inlineCode",{parentName:"p"},"output")," in CUE template and user input in ",Object(r.b)("inlineCode",{parentName:"p"},"Application")," properties."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: backend\n  ... # skip tons of metadata info\nspec:\n  template:\n    spec:\n      containers:\n        - name: mysvc\n          image: crccheck/hello-world\n    metadata:\n      labels:\n        app.oam.dev/component: mysvc\n  selector:\n    matchLabels:\n      app.oam.dev/component: mysvc\n---\napiVersion: batch/v1\nkind: Job\nmetadata:\n  name: countdown\n  ... # skip tons of metadata info\nspec:\n  parallelism: 1\n  completions: 1\n  template:\n    metadata:\n      name: countdown\n    spec:\n      containers:\n        - name: countdown\n          image: 'centos:7'\n          command:\n            - bin/bash\n            - '-c'\n            - for i in 9 8 7 6 5 4 3 2 1 ; do echo $i ; done\n      restartPolicy: Never\n"))),Object(r.b)("h2",{id:"cue-context"},"CUE ",Object(r.b)("inlineCode",{parentName:"h2"},"Context")),Object(r.b)("p",null,"KubeVela allows you to reference the runtime information of your application via ",Object(r.b)("inlineCode",{parentName:"p"},"conext")," keyword."),Object(r.b)("p",null,"The most widely used context is application name(",Object(r.b)("inlineCode",{parentName:"p"},"context.appName"),") component name(",Object(r.b)("inlineCode",{parentName:"p"},"context.name"),")."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cue"},"context: {\n  appName: string\n  name: string\n}\n")),Object(r.b)("p",null,"For example, let's say you want to use the component name filled in by users as the container name in the workload instance:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cue"},"parameter: {\n    image: string\n}\noutput: {\n  ...\n    spec: {\n        containers: [{\n            name:  context.name\n            image: parameter.image\n        }]\n    }\n  ...\n}\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note that ",Object(r.b)("inlineCode",{parentName:"p"},"context")," information are auto-injected before resources are applied to target cluster.")),Object(r.b)("h3",{id:"full-available-information-in-cue-context"},"Full available information in CUE ",Object(r.b)("inlineCode",{parentName:"h3"},"context")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"Context Variable"),Object(r.b)("th",{parentName:"tr",align:"center"},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"context.appRevision")),Object(r.b)("td",{parentName:"tr",align:"center"},"The revision of the application")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"context.appRevisionNum")),Object(r.b)("td",{parentName:"tr",align:"center"},"The revision number(",Object(r.b)("inlineCode",{parentName:"td"},"int")," type) of the application, e.g., ",Object(r.b)("inlineCode",{parentName:"td"},"context.appRevisionNum")," will be ",Object(r.b)("inlineCode",{parentName:"td"},"1")," if ",Object(r.b)("inlineCode",{parentName:"td"},"context.appRevision")," is ",Object(r.b)("inlineCode",{parentName:"td"},"app-v1"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"context.appName")),Object(r.b)("td",{parentName:"tr",align:"center"},"The name of the application")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"context.name")),Object(r.b)("td",{parentName:"tr",align:"center"},"The name of the component of the application")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"context.namespace")),Object(r.b)("td",{parentName:"tr",align:"center"},"The namespace of the application")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"context.output")),Object(r.b)("td",{parentName:"tr",align:"center"},"The rendered workload API resource of the component, this usually used in trait")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"context.outputs.<resourceName>")),Object(r.b)("td",{parentName:"tr",align:"center"},"The rendered trait API resource of the component, this usually used in trait")))),Object(r.b)("h2",{id:"composition"},"Composition"),Object(r.b)("p",null,"It's common that a component definition is composed by multiple API resources, for example, a ",Object(r.b)("inlineCode",{parentName:"p"},"webserver")," component that is composed by a Deployment and a Service. CUE is a great solution to achieve this in simplified primitives."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Another approach to do composition in KubeVela of course is ",Object(r.b)("a",{parentName:"p",href:"../helm/component"},"using Helm"),".")),Object(r.b)("h2",{id:"how-to"},"How-to"),Object(r.b)("p",null,"KubeVela requires you to define the template of workload type in ",Object(r.b)("inlineCode",{parentName:"p"},"output")," section, and leave all the other resource templates in ",Object(r.b)("inlineCode",{parentName:"p"},"outputs")," section with format as below:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cue"},"outputs: <unique-name>: \n  <full template data>\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},'The reason for this requirement is KubeVela needs to know it is currently rendering a workload so it could do some "magic" like patching annotations/labels or other data during it.')),Object(r.b)("p",null,"Below is the example for ",Object(r.b)("inlineCode",{parentName:"p"},"webserver")," definition: "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nmetadata:\n  name: webserver\n  annotations:\n    definition.oam.dev/description: "webserver is a combo of Deployment + Service"\nspec:\n  workload:\n    definition:\n      apiVersion: apps/v1\n      kind: Deployment\n  schematic:\n    cue:\n      template: |\n        output: {\n            apiVersion: "apps/v1"\n            kind:       "Deployment"\n            spec: {\n                selector: matchLabels: {\n                    "app.oam.dev/component": context.name\n                }\n                template: {\n                    metadata: labels: {\n                        "app.oam.dev/component": context.name\n                    }\n                    spec: {\n                        containers: [{\n                            name:  context.name\n                            image: parameter.image\n\n                            if parameter["cmd"] != _|_ {\n                                command: parameter.cmd\n                            }\n\n                            if parameter["env"] != _|_ {\n                                env: parameter.env\n                            }\n\n                            if context["config"] != _|_ {\n                                env: context.config\n                            }\n\n                            ports: [{\n                                containerPort: parameter.port\n                            }]\n\n                            if parameter["cpu"] != _|_ {\n                                resources: {\n                                    limits:\n                                        cpu: parameter.cpu\n                                    requests:\n                                        cpu: parameter.cpu\n                                }\n                            }\n                        }]\n                }\n                }\n            }\n        }\n        // an extra template\n        outputs: service: {\n            apiVersion: "v1"\n            kind:       "Service"\n            spec: {\n                selector: {\n                    "app.oam.dev/component": context.name\n                }\n                ports: [\n                    {\n                        port:       parameter.port\n                        targetPort: parameter.port\n                    },\n                ]\n            }\n        }\n        parameter: {\n            image: string\n            cmd?: [...string]\n            port: *80 | int\n            env?: [...{\n                name:   string\n                value?: string\n                valueFrom?: {\n                    secretKeyRef: {\n                        name: string\n                        key:  string\n                    }\n                }\n            }]\n            cpu?: string\n        }\n')),Object(r.b)("p",null,"The user could now declare an ",Object(r.b)("inlineCode",{parentName:"p"},"Application")," with it:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: webserver-demo\n  namespace: default\nspec:\n  components:\n    - name: hello-world\n      type: webserver\n      properties:\n        image: crccheck/hello-world\n        port: 8000\n        env:\n        - name: "foo"\n          value: "bar"\n        cpu: "100m"\n')),Object(r.b)("p",null,"It will generate and manage below API resources in target cluster:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deployment\nNAME             READY   UP-TO-DATE   AVAILABLE   AGE\nhello-world-v1   1/1     1            1           15s\n\n$ kubectl get svc\nNAME                           TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)    AGE\nhello-world-trait-7bdcff98f7   ClusterIP   <your ip>       <none>        8000/TCP   32s\n")),Object(r.b)("h2",{id:"whats-next"},"What's Next"),Object(r.b)("p",null,"Please check the ",Object(r.b)("a",{parentName:"p",href:"./basic"},"Learning CUE")," documentation about why we support CUE as first-class templating solution and more details about using CUE efficiently."))}m.isMDXComponent=!0},341:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return u}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),m=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=m(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=m(t),d=a,u=b["".concat(i,".").concat(d)]||b[d]||s[d]||r;return t?o.a.createElement(u,c(c({ref:n},l),{},{components:t})):o.a.createElement(u,c({ref:n},l))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);