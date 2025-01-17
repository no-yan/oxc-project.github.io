<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# eslint/max-params <Badge type="info" text="Style" />

<div class="rule-meta">
</div>

### What it does

Enforce a maximum number of parameters in function definitions

### Why is this bad?

Functions that take numerous parameters can be difficult to read and write because it requires the memorization of what each parameter is, its type, and the order they should appear in. As a result, many coders adhere to a convention that caps the number of parameters a function can take.

### Example

```javascript
function foo(bar, baz, qux, qxx) {
  doSomething();
}
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/5190b7fb280dcd15c6de81717c073b06a161ced6/crates/oxc_linter/src/rules/eslint/max_params.rs)
