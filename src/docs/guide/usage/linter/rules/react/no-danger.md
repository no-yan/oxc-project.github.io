<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# react/no-danger <Badge type="info" text="Restriction" />

<div class="rule-meta">
</div>

### What it does

This rule prevents the use of `dangerouslySetInnerHTML` prop.

### Why is this bad?

`dangerouslySetInnerHTML` is a way to inject HTML into your React
component. This is dangerous because it can easily lead to XSS
vulnerabilities.

### Example

Examples of **incorrect** code for this rule:

```jsx
import React from "react";

const Hello = <div dangerouslySetInnerHTML={{ __html: "Hello World" }}></div>;
```

Examples of **correct** code for this rule:

```jsx
import React from "react";

const Hello = <div>Hello World</div>;
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/5190b7fb280dcd15c6de81717c073b06a161ced6/crates/oxc_linter/src/rules/react/no_danger.rs)
