<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# unicorn/no-await-expression-member <Badge type="info" text="Style" />

<div class="rule-meta">
</div>

### What it does

This rule disallows member access from await expression

### Why is this bad?

When accessing a member from an await expression,
the await expression has to be parenthesized, which is not readable.

### Example

```javascript
async function bad() {
  const secondElement = (await getArray())[1];
}

async function good() {
  const [, secondElement] = await getArray();
}
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/unicorn/no_await_expression_member.rs)