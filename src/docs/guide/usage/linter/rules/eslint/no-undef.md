<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# eslint/no-undef <Badge type="info" text="Nursery" />

<div class="rule-meta">
</div>

### What it does

Disallow the use of undeclared variables.

### Why is this bad?

It is most likely a potential ReferenceError caused by a misspelling of a variable or parameter name.

### Example

```javascript
var foo = someFunction();
var bar = a + 1;
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/5190b7fb280dcd15c6de81717c073b06a161ced6/crates/oxc_linter/src/rules/eslint/no_undef.rs)
