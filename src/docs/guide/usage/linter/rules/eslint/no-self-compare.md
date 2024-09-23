<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# eslint/no-self-compare <Badge type="info" text="Pedantic" />

<div class="rule-meta">
</div>

### What it does

Disallow comparisons where both sides are exactly the same

### Why is this bad?

Comparing a variable against itself is usually an error, either a typo or refactoring error.
It is confusing to the reader and may potentially introduce a runtime error.

### Example

Examples of **incorrect** code for this rule:

```javascript
var x = 10;
if (x === x) {
  x = 20;
}
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/eslint/no_self_compare.rs)