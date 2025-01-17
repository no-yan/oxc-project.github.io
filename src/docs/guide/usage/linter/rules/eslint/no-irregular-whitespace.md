<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# eslint/no-irregular-whitespace <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="default-on" type="success">
<span class="emoji">✅</span> This rule is turned on by default.
</Alert>
</div>

### What it does

Disallows the use of irregular whitespaces in the code.

### Why is this bad

The use of irregular whitespaces can hinder code readability and
create inconsistencies, making maintenance and collaboration more challenging.

### Example

```javascript
function invalidExample() {
  return 42;
}
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/5190b7fb280dcd15c6de81717c073b06a161ced6/crates/oxc_linter/src/rules/eslint/no_irregular_whitespace.rs)
