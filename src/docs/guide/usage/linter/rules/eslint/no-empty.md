<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# eslint/no-empty <Badge type="info" text="Restriction" />

<div class="rule-meta">
<Alert class="fix" type="info">
<span class="emoji">💡</span> A suggestion is available for this rule.
</Alert>
</div>

### What it does

Disallows empty block statements

### Why is this bad?

Empty block statements, while not technically errors, usually occur due to refactoring that wasn’t completed.
They can cause confusion when reading code.

### Example

```javascript
if (condition) {
}
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/5190b7fb280dcd15c6de81717c073b06a161ced6/crates/oxc_linter/src/rules/eslint/no_empty.rs)
