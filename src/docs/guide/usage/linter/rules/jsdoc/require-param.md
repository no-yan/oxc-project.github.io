<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# jsdoc/require-param <Badge type="info" text="Pedantic" />

<div class="rule-meta">
</div>

### What it does

Requires that all function parameters are documented with JSDoc `@param` tags.

### Why is this bad?

The rule is aimed at enforcing code quality and maintainability by requiring that all function parameters are documented.

### Examples

Examples of **incorrect** code for this rule:

```javascript
/** @param foo */
function quux(foo, bar) {}
```

Examples of **correct** code for this rule:

```javascript
/** @param foo */
function quux(foo) {}
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/jsdoc/require_param.rs)