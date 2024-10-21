<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# eslint/no-useless-rename <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="default-on" type="success">
<span class="emoji">✅</span> This rule is turned on by default.
</Alert>
</div>

### What it does

Disallow renaming import, export, and destructured assignments to the same name.

### Why is this bad?

It is unnecessary to rename a variable to the same name.

### Example

Examples of **incorrect** code for this rule:

```javascript
import { foo as foo } from "foo";
const { bar: bar } = obj;
export { baz as baz };
```

Examples of **correct** code for this rule:

```javascript
import { foo } from "foo";
const { bar: renamed } = obj;
export { baz };
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/eslint/no_useless_rename.rs)