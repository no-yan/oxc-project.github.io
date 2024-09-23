<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# import/no-named-as-default-member <Badge type="info" text="Suspicious" />

<div class="rule-meta">
</div>

### What it does

Reports use of an exported name as a property on the default export.

### Example

```javascript
// ./bar.js
export function bar() {
  return null;
}
export default () => {
  return 1;
};

// ./foo.js
import bar from "./bar";
const bar = foo.bar; // trying to access named export via default
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/import/no_named_as_default_member.rs)