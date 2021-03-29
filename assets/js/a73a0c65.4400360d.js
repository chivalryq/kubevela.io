(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{157:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return s}));var a=t(3),r=t(7),o=(t(0),t(201)),c={title:"Debug, Test and Dry-run"},i={unversionedId:"platform-engineers/debug-test-cue",id:"platform-engineers/debug-test-cue",isDocsHomePage:!1,title:"Debug, Test and Dry-run",description:"With flexibility in defining abstractions, it's important to be able to debug, test and dry-run the CUE based definitions. This tutorial will show this step by step.",source:"@site/docs/platform-engineers/debug-test-cue.md",slug:"/platform-engineers/debug-test-cue",permalink:"/docs/platform-engineers/debug-test-cue",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/platform-engineers/debug-test-cue.md",version:"current",lastUpdatedBy:"yangsoon",lastUpdatedAt:1616906659,formattedLastUpdatedAt:"3/28/2021",sidebar:"docs",previous:{title:"Define and Consume Cloud Resource",permalink:"/docs/platform-engineers/cloud-services"},next:{title:"Defining KEDA as Autoscaling Trait",permalink:"/docs/platform-engineers/keda"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Define Definition and Template",id:"define-definition-and-template",children:[]},{value:"Debug CUE template",id:"debug-cue-template",children:[{value:"Use <code>cue vet</code> to Validate",id:"use-cue-vet-to-validate",children:[]}]},{value:"Dry-Run the <code>Application</code>",id:"dry-run-the-application",children:[{value:"Import <code>kube</code> Package",id:"import-kube-package",children:[]}]}],l={toc:p};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"With flexibility in defining abstractions, it's important to be able to debug, test and dry-run the CUE based definitions. This tutorial will show this step by step."),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("p",null,"Please make sure below CLIs are present in your environment:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://cuelang.org/docs/install/"},Object(o.b)("inlineCode",{parentName:"a"},"cue")," >=v0.2.2")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://kubevela.io/#/en/install?id=_3-optional-get-kubevela-cli"},Object(o.b)("inlineCode",{parentName:"a"},"vela")," (>v1.0.0)"))),Object(o.b)("h2",{id:"define-definition-and-template"},"Define Definition and Template"),Object(o.b)("p",null,"We recommend to define the ",Object(o.b)("inlineCode",{parentName:"p"},"Definition Object")," in two separate parts: the CRD part and the CUE template. This enable us to debug, test and dry-run the CUE template."),Object(o.b)("p",null,"Let's name the CRD part as ",Object(o.b)("inlineCode",{parentName:"p"},"def.yaml"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nmetadata:\n  name: microservice\n  annotations:\n    definition.oam.dev/description: "Describes a microservice combo Deployment with Service."\nspec:\n  workload:\n    definition:\n      apiVersion: apps/v1\n      kind: Deployment\n  schematic:\n    cue:\n      template: |\n')),Object(o.b)("p",null,"And the CUE template part as ",Object(o.b)("inlineCode",{parentName:"p"},"def.cue"),", then we can use CUE commands such as ",Object(o.b)("inlineCode",{parentName:"p"},"cue fmt")," / ",Object(o.b)("inlineCode",{parentName:"p"},"cue vet"),"  to format and validate the CUE file."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'output: {\n    // Deployment\n    apiVersion: "apps/v1"\n    kind:       "Deployment"\n    metadata: {\n        name:      context.name\n        namespace: "default"\n    }\n    spec: {\n        selector: matchLabels: {\n            "app": context.name\n        }\n        template: {\n            metadata: {\n                labels: {\n                    "app":     context.name\n                    "version": parameter.version\n                }\n            }\n            spec: {\n                serviceAccountName:            "default"\n                terminationGracePeriodSeconds: parameter.podShutdownGraceSeconds\n                containers: [{\n                    name:  context.name\n                    image: parameter.image\n                    ports: [{\n                        if parameter.containerPort != _|_ {\n                            containerPort: parameter.containerPort\n                        }\n                        if parameter.containerPort == _|_ {\n                            containerPort: parameter.servicePort\n                        }\n                    }]\n                    if parameter.env != _|_ {\n                        env: [\n                            for k, v in parameter.env {\n                                name:  k\n                                value: v\n                            },\n                        ]\n                    }\n                    resources: {\n                        requests: {\n                            if parameter.cpu != _|_ {\n                                cpu: parameter.cpu\n                            }\n                            if parameter.memory != _|_ {\n                                memory: parameter.memory\n                            }\n                        }\n                    }\n                }]\n            }\n        }\n    }\n}\n// Service\noutputs: service: {\n    apiVersion: "v1"\n    kind:       "Service"\n    metadata: {\n        name: context.name\n        labels: {\n            "app": context.name\n        }\n    }\n    spec: {\n        type: "ClusterIP"\n        selector: {\n            "app": context.name\n        }\n        ports: [{\n            port: parameter.servicePort\n            if parameter.containerPort != _|_ {\n                targetPort: parameter.containerPort\n            }\n            if parameter.containerPort == _|_ {\n                targetPort: parameter.servicePort\n            }\n        }]\n    }\n}\nparameter: {\n    version:        *"v1" | string\n    image:          string\n    servicePort:    int\n    containerPort?: int\n    // +usage=Optional duration in seconds the pod needs to terminate gracefully\n    podShutdownGraceSeconds: *30 | int\n    env: [string]: string\n    cpu?:    string\n    memory?: string\n}\n')),Object(o.b)("p",null,"After everything is done, there's a script ",Object(o.b)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/blob/master/hack/vela-templates/mergedef.sh"},Object(o.b)("inlineCode",{parentName:"a"},"hack/vela-templates/mergedef.sh"))," to merge the ",Object(o.b)("inlineCode",{parentName:"p"},"def.yaml")," and ",Object(o.b)("inlineCode",{parentName:"p"},"def.cue")," into a completed Definition Object."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ ./hack/vela-templates/mergedef.sh def.yaml def.cue > microservice-def.yaml\n")),Object(o.b)("h2",{id:"debug-cue-template"},"Debug CUE template"),Object(o.b)("h3",{id:"use-cue-vet-to-validate"},"Use ",Object(o.b)("inlineCode",{parentName:"h3"},"cue vet")," to Validate"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},'$ cue vet def.cue\noutput.metadata.name: reference "context" not found:\n    ./def.cue:6:14\noutput.spec.selector.matchLabels.app: reference "context" not found:\n    ./def.cue:11:11\noutput.spec.template.metadata.labels.app: reference "context" not found:\n    ./def.cue:16:17\noutput.spec.template.spec.containers.name: reference "context" not found:\n    ./def.cue:24:13\noutputs.service.metadata.name: reference "context" not found:\n    ./def.cue:62:9\noutputs.service.metadata.labels.app: reference "context" not found:\n    ./def.cue:64:11\noutputs.service.spec.selector.app: reference "context" not found:\n    ./def.cue:70:11\n')),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},'reference "context" not found')," is a common error in this step as ",Object(o.b)("a",{parentName:"p",href:"/docs/cue/component?id=cue-context"},Object(o.b)("inlineCode",{parentName:"a"},"context"))," is a runtime information that only exist in KubeVela controllers. In order to validate the CUE template end-to-end, we can add a mock ",Object(o.b)("inlineCode",{parentName:"p"},"context")," in ",Object(o.b)("inlineCode",{parentName:"p"},"def.cue"),"."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note that you need to remove all mock data when you finished the validation.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-CUE"},"... // existing template data\ncontext: {\n    name: string\n}\n")),Object(o.b)("p",null,"Then execute the command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ cue vet def.cue\nsome instances are incomplete; use the -c flag to show errors or suppress this message\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},'reference "context" not found')," error is gone, but  ",Object(o.b)("inlineCode",{parentName:"p"},"cue vet")," only validates the data type which is not enough to ensure the login in template is correct. Hence we need to use ",Object(o.b)("inlineCode",{parentName:"p"},"cue vet -c")," for complete validation:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ cue vet def.cue -c\ncontext.name: incomplete value string\noutput.metadata.name: incomplete value string\noutput.spec.selector.matchLabels.app: incomplete value string\noutput.spec.template.metadata.labels.app: incomplete value string\noutput.spec.template.spec.containers.0.image: incomplete value string\noutput.spec.template.spec.containers.0.name: incomplete value string\noutput.spec.template.spec.containers.0.ports.0.containerPort: incomplete value int\noutputs.service.metadata.labels.app: incomplete value string\noutputs.service.metadata.name: incomplete value string\noutputs.service.spec.ports.0.port: incomplete value int\noutputs.service.spec.ports.0.targetPort: incomplete value int\noutputs.service.spec.selector.app: incomplete value string\nparameter.image: incomplete value string\nparameter.servicePort: incomplete value int\n")),Object(o.b)("p",null,"It now complains some runtime data is incomplete (because ",Object(o.b)("inlineCode",{parentName:"p"},"context")," and ",Object(o.b)("inlineCode",{parentName:"p"},"parameter")," do not have value), let's now fill in more mock data in the ",Object(o.b)("inlineCode",{parentName:"p"},"def.cue")," file:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-CUE"},'context: {\n    name: "test-app"\n}\nparameter: {\n    version:       "v2"\n    image:         "image-address"\n    servicePort:   80\n    containerPort: 8000\n    env: {"PORT": "8000"}\n    cpu:    "500m"\n    memory: "128Mi"\n}\n')),Object(o.b)("p",null,"It won't complain now which means validation is passed:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"cue vet def.cue -c\n")),Object(o.b)("h4",{id:"use-cue-export-to-check-the-rendered-resources"},"Use ",Object(o.b)("inlineCode",{parentName:"h4"},"cue export")," to Check the Rendered Resources"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"cue export")," can export rendered result in YAMl foramt:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ cue export -e output def.cue --out yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: test-app\n  namespace: default\nspec:\n  selector:\n    matchLabels:\n      app: test-app\n  template:\n    metadata:\n      labels:\n        app: test-app\n        version: v2\n    spec:\n      serviceAccountName: default\n      terminationGracePeriodSeconds: 30\n      containers:\n        - name: test-app\n          image: image-address\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ cue export -e outputs.service def.cue --out yaml\napiVersion: v1\nkind: Service\nmetadata:\n  name: test-app\n  labels:\n    app: test-app\nspec:\n  selector:\n    app: test-app\n  type: ClusterIP\n")),Object(o.b)("h2",{id:"dry-run-the-application"},"Dry-Run the ",Object(o.b)("inlineCode",{parentName:"h2"},"Application")),Object(o.b)("p",null,"When CUE template is good, we can use ",Object(o.b)("inlineCode",{parentName:"p"},"vela system dry-run")," to dry run and check the rendered resources in real Kubernetes cluster. This command will exactly execute the same render logic in KubeVela's ",Object(o.b)("inlineCode",{parentName:"p"},"Application")," Controller adn output the result for you."),Object(o.b)("p",null,"First, we need use ",Object(o.b)("inlineCode",{parentName:"p"},"mergedef.sh")," to merge the definition and cue files."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ mergedef.sh def.yaml def.cue > componentdef.yaml\n")),Object(o.b)("p",null,"Then, let's create an Application named ",Object(o.b)("inlineCode",{parentName:"p"},"test-app.yaml"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: boutique\n  namespace: default\nspec:\n  components:\n    - name: frontend\n      type: microservice\n      properties:\n        image: registry.cn-hangzhou.aliyuncs.com/vela-samples/frontend:v0.2.2\n        servicePort: 80\n        containerPort: 8080\n        env:\n          PORT: "8080"\n        cpu: "100m"\n        memory: "64Mi"\n')),Object(o.b)("p",null,"Dry run the application by using ",Object(o.b)("inlineCode",{parentName:"p"},"vela system dry-run"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},'$ vela system dry-run -f test-app.yaml -d componentdef.yaml\n---\n# Application(boutique) -- Comopnent(frontend)\n---\n\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app.oam.dev/component: frontend\n    app.oam.dev/name: boutique\n    workload.oam.dev/type: microservice\n  name: frontend\n  namespace: default\nspec:\n  selector:\n    matchLabels:\n      app: frontend\n  template:\n    metadata:\n      labels:\n        app: frontend\n        version: v1\n    spec:\n      containers:\n      - env:\n        - name: PORT\n          value: "8080"\n        image: registry.cn-hangzhou.aliyuncs.com/vela-samples/frontend:v0.2.2\n        name: frontend\n        ports:\n        - containerPort: 8080\n        resources:\n          requests:\n            cpu: 100m\n            memory: 64Mi\n      serviceAccountName: default\n      terminationGracePeriodSeconds: 30\n\n---\napiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    app: frontend\n    app.oam.dev/component: frontend\n    app.oam.dev/name: boutique\n    trait.oam.dev/resource: service\n    trait.oam.dev/type: AuxiliaryWorkload\n  name: frontend\nspec:\n  ports:\n  - port: 80\n    targetPort: 8080\n  selector:\n    app: frontend\n  type: ClusterIP\n\n---\n')),Object(o.b)("h3",{id:"import-kube-package"},"Import ",Object(o.b)("inlineCode",{parentName:"h3"},"kube")," Package"),Object(o.b)("p",null,"KubeVela automatically generates internal CUE packages for all built-in Kubernetes API resources, so you can import them in CUE template. This could simplify how you write the template because some default values are already there, and the imported package will help you validate the template."),Object(o.b)("p",null,"Let's try to define a template with help of ",Object(o.b)("inlineCode",{parentName:"p"},"kube")," package:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cue"},'import (\n   apps "kube/apps/v1"\n   corev1 "kube/v1"\n)\n\n// output is validated by Deployment.\noutput: apps.#Deployment\noutput: {\n    metadata: {\n        name:      context.name\n        namespace: "default"\n    }\n    spec: {\n        selector: matchLabels: {\n            "app": context.name\n        }\n        template: {\n            metadata: {\n                labels: {\n                    "app":     context.name\n                    "version": parameter.version\n                }\n            }\n            spec: {\n                terminationGracePeriodSeconds: parameter.podShutdownGraceSeconds\n                containers: [{\n                    name:  context.name\n                    image: parameter.image\n                    ports: [{\n                        if parameter.containerPort != _|_ {\n                            containerPort: parameter.containerPort\n                        }\n                        if parameter.containerPort == _|_ {\n                            containerPort: parameter.servicePort\n                        }\n                    }]\n                    if parameter.env != _|_ {\n                        env: [\n                            for k, v in parameter.env {\n                                name:  k\n                                value: v\n                            },\n                        ]\n                    }\n                    resources: {\n                        requests: {\n                            if parameter.cpu != _|_ {\n                                cpu: parameter.cpu\n                            }\n                            if parameter.memory != _|_ {\n                                memory: parameter.memory\n                            }\n                        }\n                    }\n                }]\n            }\n        }\n    }\n}\n\noutputs:{\n  service: corev1.#Service\n}\n\n\n// Service\noutputs: service: {\n    metadata: {\n        name: context.name\n        labels: {\n            "app": context.name\n        }\n    }\n    spec: {\n        //type: "ClusterIP"\n        selector: {\n            "app": context.name\n        }\n        ports: [{\n            port: parameter.servicePort\n            if parameter.containerPort != _|_ {\n                targetPort: parameter.containerPort\n            }\n            if parameter.containerPort == _|_ {\n                targetPort: parameter.servicePort\n            }\n        }]\n    }\n}\nparameter: {\n    version:        *"v1" | string\n    image:          string\n    servicePort:    int\n    containerPort?: int\n    // +usage=Optional duration in seconds the pod needs to terminate gracefully\n    podShutdownGraceSeconds: *30 | int\n    env: [string]: string\n    cpu?:    string\n    memory?: string\n}\n')),Object(o.b)("p",null,"Then merge them."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"mergedef.sh def.yaml def.cue > componentdef.yaml\n")),Object(o.b)("p",null,"And dry run to see the rendered resources:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"vela system dry-run -f test-app.yaml -d componentdef.yaml\n")))}s.isMDXComponent=!0},201:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),s=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,b=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return t?r.a.createElement(b,i(i({ref:n},l),{},{components:t})):r.a.createElement(b,i({ref:n},l))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);