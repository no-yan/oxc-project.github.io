<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# eslint/no-extra-boolean-cast <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="default-on" type="success">
<span class="emoji">✅</span> This rule is turned on by default.
</Alert>
<Alert class="fix" type="info">
<span class="emoji">🚧</span> An auto-fix is still under development.
</Alert>
</div>

### What it does

This rule disallows unnecessary boolean casts.

### Why is this bad?

In contexts such as an if statement’s test where the result of the expression will already be coerced to a Boolean,
casting to a Boolean via double negation (!!) or a Boolean call is unnecessary.

### Example

```javascript
var foo = !!!bar;
var foo = Boolean(!!bar);

if (!!foo) {
}
if (Boolean(foo)) {
}

// with "enforceForLogicalOperands" option enabled
if (!!foo || bar) {
}
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/5190b7fb280dcd15c6de81717c073b06a161ced6/crates/oxc_linter/src/rules/eslint/no_extra_boolean_cast.rs)
