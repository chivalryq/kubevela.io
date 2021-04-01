(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),i=n(7),o=(n(0),n(201)),r={title:"How it Works"},l={unversionedId:"concepts",id:"concepts",isDocsHomePage:!1,title:"How it Works",description:'"KubeVela is a scalable way to create PaaS-like experience on Kubernetes"',source:"@site/docs/concepts.md",slug:"/concepts",permalink:"/docs/concepts",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/concepts.md",version:"current",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1616922082,formattedLastUpdatedAt:"3/28/2021",sidebar:"docs",previous:{title:"Quick Start",permalink:"/docs/quick-start"},next:{title:"Overview",permalink:"/docs/platform-engineers/overview"}},c=[{value:"Overview",id:"overview",children:[]},{value:"<code>Application</code>",id:"application",children:[{value:"Why Choose <code>Application</code> as the Main Abstraction",id:"why-choose-application-as-the-main-abstraction",children:[]},{value:"Example",id:"example",children:[]}]},{value:"Building the Abstraction",id:"building-the-abstraction",children:[{value:"ComponentDefinition",id:"componentdefinition",children:[]},{value:"TraitDefinition",id:"traitdefinition",children:[]}]},{value:"Environment",id:"environment",children:[{value:"Summary",id:"summary",children:[]}]},{value:"Architecture",id:"architecture",children:[]}],p={toc:c};function s(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},'"KubeVela is a scalable way to create PaaS-like experience on Kubernetes"')),Object(o.b)("p",null,"In this documentation, we will explain the core idea of KubeVela and clarify some technical terms that are widely used in the project."),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"First of all, KubeVela introduces a workflow with separate of concerns as below:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Platform Team"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Defining templates for deployment environments and reusable capability modules to compose an application, and registering them into the cluster."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"End Users"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Choose a deployment environment, model and assemble the app with available modules, and deploy the app to target environment.")))),Object(o.b)("p",null,"Below is how this workflow looks like:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"alt",src:n(283).default})),Object(o.b)("p",null,"This template based workflow make it possible for platform team enforce best practices and deployment confidence with a set of Kubernetes CRDs, and give end users a ",Object(o.b)("em",{parentName:"p"},"PaaS-like")," experience (",Object(o.b)("em",{parentName:"p"},"i.e. app-centric, higher level abstractions, self-service operations etc"),") by natural."),Object(o.b)("p",null,Object(o.b)("img",{alt:"alt",src:n(284).default})),Object(o.b)("p",null,"Below are the core building blocks in KubeVela that make this happen."),Object(o.b)("h2",{id:"application"},Object(o.b)("inlineCode",{parentName:"h2"},"Application")),Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},"Application")," is the core API of KubeVela. It allows developers to work with a single artifact to capture the complete application definition with simplified primitives."),Object(o.b)("h3",{id:"why-choose-application-as-the-main-abstraction"},"Why Choose ",Object(o.b)("inlineCode",{parentName:"h3"},"Application")," as the Main Abstraction"),Object(o.b)("p",null,'Having an "application" concept is important to any developer-centric platform to simplify administrative tasks and can serve as an anchor to avoid configuration drifts during operation. Also, as an abstraction object, ',Object(o.b)("inlineCode",{parentName:"p"},"Application"),' provides a much simpler path for on-boarding Kubernetes capabilities without relying on low level details. For example, a developer will be able to model a "web service" without defining a detailed Kubernetes Deployment + Service combo each time, or claim the auto-scaling requirements without referring to the underlying KEDA ScaleObject.'),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("p",null,"An example of ",Object(o.b)("inlineCode",{parentName:"p"},"website")," application with two components (i.e. ",Object(o.b)("inlineCode",{parentName:"p"},"frontend")," and ",Object(o.b)("inlineCode",{parentName:"p"},"backend"),") could be modeled as below:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: website\nspec:\n  components:\n    - name: backend\n      type: worker\n      properties:\n        image: busybox\n        cmd:\n          - sleep\n          - \'1000\'\n    - name: frontend\n      type: webservice\n      properties:\n        image: nginx\n      traits:\n        - type: autoscaler\n          properties:\n            min: 1\n            max: 10\n        - type: sidecar\n          properties:\n            name: "sidecar-test"\n            image: "fluentd"\n')),Object(o.b)("h2",{id:"building-the-abstraction"},"Building the Abstraction"),Object(o.b)("p",null,"Unlike most of the higher level platforms, the ",Object(o.b)("inlineCode",{parentName:"p"},"Application")," abstraction in KubeVela is fully extensible and does not even have fixed schema. Instead, it is composed by building blocks (app components and traits etc.) that allow you to onboard platform capabilities to this application definition with your own abstractions."),Object(o.b)("p",null,"The building blocks to abstraction and model platform capabilities named ",Object(o.b)("inlineCode",{parentName:"p"},"ComponentDefinition")," and ",Object(o.b)("inlineCode",{parentName:"p"},"TraitDefinition"),"."),Object(o.b)("h3",{id:"componentdefinition"},"ComponentDefinition"),Object(o.b)("p",null,"You can think of ",Object(o.b)("inlineCode",{parentName:"p"},"ComponentDefinition")," as a ",Object(o.b)("em",{parentName:"p"},"template")," for workload type. It contains template, parametering and workload characteristic information as a declarative API resource. "),Object(o.b)("p",null,"Hence, the ",Object(o.b)("inlineCode",{parentName:"p"},"Application")," abstraction essentially declares how users want to ",Object(o.b)("strong",{parentName:"p"},"instantiate")," given component definitions. Specifically, the ",Object(o.b)("inlineCode",{parentName:"p"},".type")," field references the name of installed ",Object(o.b)("inlineCode",{parentName:"p"},"ComponentDefinition")," and ",Object(o.b)("inlineCode",{parentName:"p"},".properties")," are the user set values to instantiate it. "),Object(o.b)("p",null,"Some typical component definitions are ",Object(o.b)("em",{parentName:"p"},"Long Running Web Service"),", ",Object(o.b)("em",{parentName:"p"},"One-time Off Task")," or ",Object(o.b)("em",{parentName:"p"},"Redis Database"),". All component definitions expected to be pre-installed in the platform, or provided by component providers such as 3rd-party software vendors."),Object(o.b)("h3",{id:"traitdefinition"},"TraitDefinition"),Object(o.b)("p",null,"Optionally, each component has a ",Object(o.b)("inlineCode",{parentName:"p"},".traits")," section that augments the component instance with operational behaviors such as load balancing policy, network ingress routing, auto-scaling policies, or upgrade strategies, etc."),Object(o.b)("p",null,"You can think of traits as operational features provided by the platform. To attach a trait to component instance, the user will use ",Object(o.b)("inlineCode",{parentName:"p"},".type")," field to reference the specific ",Object(o.b)("inlineCode",{parentName:"p"},"TraitDefinition"),", and ",Object(o.b)("inlineCode",{parentName:"p"},".properties")," field to set property values of the given trait. Similarly, ",Object(o.b)("inlineCode",{parentName:"p"},"TraitDefiniton")," also allows you to define ",Object(o.b)("em",{parentName:"p"},"template")," for operational features."),Object(o.b)("p",null,"We also reference component definitions and trait definitions as ",Object(o.b)("em",{parentName:"p"},'"capability definitions"')," in KubeVela. "),Object(o.b)("h2",{id:"environment"},"Environment"),Object(o.b)("p",null,'Before releasing an application to production, it\'s important to test the code in testing/staging workspaces. In KubeVela, we describe these workspaces as "deployment environments" or "environments" for short. Each environment has its own configuration (e.g., domain, Kubernetes cluster and namespace, configuration data, access control policy, etc.) to allow user to create different deployment environments such as "test" and "production".'),Object(o.b)("p",null,"Currently, a KubeVela ",Object(o.b)("inlineCode",{parentName:"p"},"environment")," only maps to a Kubernetes namespace, while the cluster level environment is work in progress."),Object(o.b)("h3",{id:"summary"},"Summary"),Object(o.b)("p",null,"The main concepts of KubeVela could be shown as below:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"alt",src:n(285).default})),Object(o.b)("h2",{id:"architecture"},"Architecture"),Object(o.b)("p",null,"The overall architecture of KubeVela is shown as below:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"alt",src:n(286).default})),Object(o.b)("p",null,"Specifically, the application controller is responsible for application abstraction and encapsulation (i.e. the controller for ",Object(o.b)("inlineCode",{parentName:"p"},"Application")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Definition"),"). The rollout controller will handle progressive rollout strategy with the whole application as a unit. The multi-env deployment engine (",Object(o.b)("em",{parentName:"p"},"currently WIP"),") is responsible for deploying the application across multiple clusters and environments. "))}s.isMDXComponent=!0},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),m=a,u=b["".concat(r,".").concat(m)]||b[m]||d[m]||o;return n?i.a.createElement(u,l(l({ref:t},p),{},{components:n})):i.a.createElement(u,l({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},283:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/how-it-works-d3a4656697cc2b675b2bd9cf4b976b00.png"},284:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/what-is-kubevela-a09ccecf03f294a9c6c77097f968b28d.png"},285:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/concepts-84a610940144e6aa2a28e883696d1e93.png"},286:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/arch-1efdc8150f5a3a05a9b9c3a331210cf6.png"}}]);