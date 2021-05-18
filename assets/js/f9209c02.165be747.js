(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[2781],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},66367:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var r=t(22122),a=t(19756),o=(t(67294),t(3905)),i={title:"Attach Sidecar"},l={unversionedId:"end-user/sidecar",id:"version-v1.0/end-user/sidecar",isDocsHomePage:!1,title:"Attach Sidecar",description:"In this section, we will show you how to use sidecar trait to collect logs.",source:"@site/versioned_docs/version-v1.0/end-user/sidecar.md",sourceDirName:"end-user",slug:"/end-user/sidecar",permalink:"/docs/end-user/sidecar",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/end-user/sidecar.md",version:"v1.0",lastUpdatedBy:"yangsoon",lastUpdatedAt:1621315429,formattedLastUpdatedAt:"5/18/2021",frontMatter:{title:"Attach Sidecar"},sidebar:"version-v1.0/docs",previous:{title:"Labels and Annotations",permalink:"/docs/end-user/labels"},next:{title:"Provision and Consume Cloud Resources by Crossplane",permalink:"/docs/end-user/cloud-resources"}},s=[{value:"Show the Usage of Sidecar",id:"show-the-usage-of-sidecar",children:[]},{value:"Apply the Application",id:"apply-the-application",children:[]}],c={toc:s};function p(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this section, we will show you how to use ",(0,o.kt)("inlineCode",{parentName:"p"},"sidecar")," trait to collect logs."),(0,o.kt)("h2",{id:"show-the-usage-of-sidecar"},"Show the Usage of Sidecar"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl vela show sidecar\n# Properties\n+---------+-----------------------------------------+-----------------------+----------+---------+\n|  NAME   |               DESCRIPTION               |         TYPE          | REQUIRED | DEFAULT |\n+---------+-----------------------------------------+-----------------------+----------+---------+\n| name    | Specify the name of sidecar container   | string                | true     |         |\n| cmd     | Specify the commands run in the sidecar | []string              | false    |         |\n| image   | Specify the image of sidecar container  | string                | true     |         |\n| volumes | Specify the shared volume path          | [[]volumes](#volumes) | false    |         |\n+---------+-----------------------------------------+-----------------------+----------+---------+\n\n\n## volumes\n+-----------+-------------+--------+----------+---------+\n|   NAME    | DESCRIPTION |  TYPE  | REQUIRED | DEFAULT |\n+-----------+-------------+--------+----------+---------+\n| name      |             | string | true     |         |\n| path      |             | string | true     |         |\n+-----------+-------------+--------+----------+---------+\n")),(0,o.kt)("h2",{id:"apply-the-application"},"Apply the Application"),(0,o.kt)("p",null,"In this Application, component ",(0,o.kt)("inlineCode",{parentName:"p"},"log-gen-worker")," and sidecar share the data volume that saves the logs.\nThe sidebar will re-output the log to stdout."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# app.yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: vela-app-with-sidecar\nspec:\n  components:\n    - name: log-gen-worker\n      type: worker\n      properties:\n        image: busybox\n        cmd:\n          - /bin/sh\n          - -c\n          - >\n            i=0;\n            while true;\n            do\n              echo \"$i: $(date)\" >> /var/log/date.log;\n              i=$((i+1));\n              sleep 1;\n            done\n        volumes:\n          - name: varlog\n            mountPath: /var/log\n            type: emptyDir\n      traits:\n        - type: sidecar\n          properties:\n            name: count-log\n            image: busybox\n            cmd: [ /bin/sh, -c, 'tail -n+1 -f /var/log/date.log']\n            volumes:\n              - name: varlog\n                path: /var/log\n")),(0,o.kt)("p",null,"Apply this Application."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f app.yaml\n")),(0,o.kt)("p",null,"Check the workload generate by Application."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get pod\nNAME                              READY   STATUS    RESTARTS   AGE\nlog-gen-worker-76945f458b-k7n9k   2/2     Running   0          90s\n")),(0,o.kt)("p",null,"Check the output of sidecar. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl logs -f log-gen-worker-76945f458b-k7n9k count-log\n0: Fri Apr 16 11:08:45 UTC 2021\n1: Fri Apr 16 11:08:46 UTC 2021\n2: Fri Apr 16 11:08:47 UTC 2021\n3: Fri Apr 16 11:08:48 UTC 2021\n4: Fri Apr 16 11:08:49 UTC 2021\n5: Fri Apr 16 11:08:50 UTC 2021\n6: Fri Apr 16 11:08:51 UTC 2021\n7: Fri Apr 16 11:08:52 UTC 2021\n8: Fri Apr 16 11:08:53 UTC 2021\n9: Fri Apr 16 11:08:54 UTC 2021 \n")))}p.isMDXComponent=!0}}]);