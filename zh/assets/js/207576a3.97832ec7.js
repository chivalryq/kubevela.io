(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{117:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return s})),r.d(n,"default",(function(){return d}));var t=r(3),o=r(7),a=(r(0),r(340)),i={title:"Terraform"},c={unversionedId:"platform-engineers/terraform",id:"version-v1.0/platform-engineers/terraform",isDocsHomePage:!1,title:"Terraform",description:"In addition to provisioning and consuming cloud resources by Crossplane, we can also use Terraform,",source:"@site/versioned_docs/version-v1.0/platform-engineers/terraform.md",slug:"/platform-engineers/terraform",permalink:"/zh/docs/platform-engineers/terraform",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/platform-engineers/terraform.md",version:"v1.0",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1619783776,formattedLastUpdatedAt:"4/30/2021",sidebar:"version-v1.0/docs",previous:{title:"Crossplane",permalink:"/zh/docs/platform-engineers/cloud-services"},next:{title:"How-to",permalink:"/zh/docs/cue/trait"}},s=[{value:"Install Terraform Controller",id:"install-terraform-controller",children:[]},{value:"Apply Provider credentials",id:"apply-provider-credentials",children:[]},{value:"Register ComponentDefinition and TraitDefinition",id:"register-componentdefinition-and-traitdefinition",children:[{value:"Register ComponentDefinition <code>alibaba-rds</code> as RDS cloud resource producer",id:"register-componentdefinition-alibaba-rds-as-rds-cloud-resource-producer",children:[]},{value:"Register ComponentDefinition <code>alibaba-oss</code> as OSS cloud resource producer",id:"register-componentdefinition-alibaba-oss-as-oss-cloud-resource-producer",children:[]},{value:"Prepare TraitDefinition <code>service-binding</code> to do env-secret mapping",id:"prepare-traitdefinition-service-binding-to-do-env-secret-mapping",children:[]}]},{value:"Next",id:"next",children:[]}],l={toc:s};function d(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In addition to provisioning and consuming cloud resources by ",Object(a.b)("a",{parentName:"p",href:"./cloud-services"},"Crossplane"),", we can also use Terraform,\nwhich is one of four ComponentDefinition schematic types ",Object(a.b)("inlineCode",{parentName:"p"},"cue"),", ",Object(a.b)("inlineCode",{parentName:"p"},"kube"),", ",Object(a.b)("inlineCode",{parentName:"p"},"helm")," and ",Object(a.b)("inlineCode",{parentName:"p"},"terraform"),"."),Object(a.b)("p",null,"To enable end users to be able to create application by Terraform, please follow these steps."),Object(a.b)("h2",{id:"install-terraform-controller"},"Install Terraform Controller"),Object(a.b)("p",null,"Download the latest chart, like ",Object(a.b)("inlineCode",{parentName:"p"},"terraform-controller-chart-0.1.4.tgz"),", from the latest ",Object(a.b)("a",{parentName:"p",href:"https://github.com/oam-dev/terraform-controller/releases"},"releases list")," and install it."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"$ helm install terraform-controller terraform-controller-0.1.2.tgz\nNAME: terraform-controller\nLAST DEPLOYED: Mon Apr 26 15:55:35 2021\nNAMESPACE: default\nSTATUS: deployed\nREVISION: 1\nTEST SUITE: None\n")),Object(a.b)("h2",{id:"apply-provider-credentials"},"Apply Provider credentials"),Object(a.b)("p",null,"By applying Terraform Provider credentials, Terraform controller can be authenticated to deploy and manage cloud resources."),Object(a.b)("p",null,"Please refer to ",Object(a.b)("a",{parentName:"p",href:"https://github.com/oam-dev/terraform-controller/blob/master/getting-started.md"},"Terraform controller getting started")," on how to apply Provider for Alibaba Cloud or AWS."),Object(a.b)("h2",{id:"register-componentdefinition-and-traitdefinition"},"Register ComponentDefinition and TraitDefinition"),Object(a.b)("h3",{id:"register-componentdefinition-alibaba-rds-as-rds-cloud-resource-producer"},"Register ComponentDefinition ",Object(a.b)("inlineCode",{parentName:"h3"},"alibaba-rds")," as RDS cloud resource producer"),Object(a.b)("p",null,"Register ",Object(a.b)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/tree/master/docs/examples/terraform/cloud-resource-provision-and-consume/ComponentDefinition-alibaba-rds.yaml"},"alibaba-rds")," Component type to KubeVela."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: ComponentDefinition\nmetadata:\n  name: alibaba-rds\n  annotations:\n    definition.oam.dev/description: Terraform configuration for Alibaba Cloud RDS object\n    type: terraform\nspec:\n  workload:\n    definition:\n      apiVersion: terraform.core.oam.dev/v1beta1\n      kind: Configuration\n  schematic:\n    terraform:\n      configuration: |\n        module "rds" {\n          source = "terraform-alicloud-modules/rds/alicloud"\n          engine = "MySQL"\n          engine_version = "8.0"\n          instance_type = "rds.mysql.c1.large"\n          instance_storage = "20"\n          instance_name = var.instance_name\n          account_name = var.account_name\n          password = var.password\n        }\n\n        output "DB_NAME" {\n          value = module.rds.this_db_instance_name\n        }\n        output "DB_USER" {\n          value = module.rds.this_db_database_account\n        }\n        output "DB_PORT" {\n          value = module.rds.this_db_instance_port\n        }\n        output "DB_HOST" {\n          value = module.rds.this_db_instance_connection_string\n        }\n        output "DB_PASSWORD" {\n          value = module.rds.this_db_instance_port\n        }\n\n        variable "instance_name" {\n          description = "RDS instance name"\n          type = string\n          default = "poc"\n        }\n\n        variable "account_name" {\n          description = "RDS instance user account name"\n          type = "string"\n          default = "oam"\n        }\n\n        variable "password" {\n          description = "RDS instance account password"\n          type = "string"\n          default = "Xyfff83jfewGGfaked"\n        }\n\n')),Object(a.b)("h3",{id:"register-componentdefinition-alibaba-oss-as-oss-cloud-resource-producer"},"Register ComponentDefinition ",Object(a.b)("inlineCode",{parentName:"h3"},"alibaba-oss")," as OSS cloud resource producer"),Object(a.b)("p",null,"Register ",Object(a.b)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/tree/master/docs/examples/terraform/cloud-resource-provision-and-consume/ComponentDefinition-alibaba-oss.yaml"},"alibaba-oss")," Component type to KubeVela."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: ComponentDefinition\nmetadata:\n  name: alibaba-oss\n  annotations:\n    definition.oam.dev/description: Terraform configuration for Alibaba Cloud OSS object\n    type: terraform\nspec:\n  workload:\n    definition:\n      apiVersion: terraform.core.oam.dev/v1beta1\n      kind: Configuration\n  schematic:\n    terraform:\n      configuration: |\n        resource "alicloud_oss_bucket" "bucket-acl" {\n          bucket = var.bucket\n          acl = var.acl\n        }\n\n        output "BUCKET_NAME" {\n          value = "${alicloud_oss_bucket.bucket-acl.bucket}.${alicloud_oss_bucket.bucket-acl.extranet_endpoint}"\n        }\n\n        variable "bucket" {\n          description = "OSS bucket name"\n          default = "vela-website"\n          type = string\n        }\n\n        variable "acl" {\n          description = "OSS bucket ACL, supported \'private\', \'public-read\', \'public-read-write\'"\n          default = "private"\n          type = string\n        }\n\n\n')),Object(a.b)("h3",{id:"prepare-traitdefinition-service-binding-to-do-env-secret-mapping"},"Prepare TraitDefinition ",Object(a.b)("inlineCode",{parentName:"h3"},"service-binding")," to do env-secret mapping"),Object(a.b)("p",null,"Apply ",Object(a.b)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/tree/master/docs/examples/terraform/cloud-resource-provision-and-consume/TraitDefinition-service-binding.yaml"},"service-binding")," to apply service binding trait."),Object(a.b)("p",null,"For more detailed introduction, please refer to ",Object(a.b)("a",{parentName:"p",href:"https://kubevela.io/docs/platform-engineers/cloud-services#prepare-traitdefinition-service-binding-to-do-env-secret-mapping"},"Crossplane"),"."),Object(a.b)("h2",{id:"next"},"Next"),Object(a.b)("p",null,"Now You can refer to ",Object(a.b)("a",{parentName:"p",href:"../end-user/terraform"},"Terraform for end users")," to provision and consume cloud resource by Terraform."))}d.isMDXComponent=!0},340:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return m}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),d=function(e){var n=o.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},p=function(e){var n=d(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(r),b=t,m=p["".concat(i,".").concat(b)]||p[b]||u[b]||a;return r?o.a.createElement(m,c(c({ref:n},l),{},{components:r})):o.a.createElement(m,c({ref:n},l))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);