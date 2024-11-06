<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# import/max-dependencies <Badge type="info" text="Pedantic" />

<div class="rule-meta">
</div>

### What it does

Forbid modules to have too many dependencies (import or require statements).

### Why is this bad?

This is a useful rule because a module with too many dependencies is a code smell,
and usually indicates the module is doing too much and/or should be broken up into
smaller modules.

### Examples

Given `{"max": 2}`

Examples of **incorrect** code for this rule:

```javascript
import a from "./a";
import b from "./b";
import c from "./c"; // Too many dependencies: 3 (max: 2)
```

Examples of **correct** code for this rule:

```javascript
import a from "./a";
import b from "./b"; // Allowed: 2 dependencies (max: 2)
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/import/max_dependencies.rs)