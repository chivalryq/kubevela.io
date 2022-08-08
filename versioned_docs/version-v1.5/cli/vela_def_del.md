---
title: vela def del
---

Delete X-Definition.

### Synopsis

Delete X-Definition in kubernetes cluster.

```
vela def del DEFINITION_NAME [flags]
```

### Examples

```
# Command below will delete TraitDefinition of annotations in default namespace
> vela def del annotations -t trait -n default
```

### Options

```
  -h, --help               help for del
  -n, --namespace string   Specify which namespace the definition locates. (default "vela-system")
  -t, --type string        Specify the definition type of target. Valid types: component, trait, policy, workload, scope, workflow-step
```

### Options inherited from parent commands

```
  -y, --yes   Assume yes for all user prompts
```

### SEE ALSO

* [vela def](vela_def)	 - Manage Definitions

#### Go Back to [CLI Commands](vela) Homepage.


###### Auto generated by [spf13/cobra script in KubeVela](https://github.com/kubevela/kubevela/tree/master/hack/docgen).