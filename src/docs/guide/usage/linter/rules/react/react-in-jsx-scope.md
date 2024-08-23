<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# react/react-in-jsx-scope <Badge type="info" text="Suspicious" />

<div class="rule-meta">
</div>

### What it does

Disallow missing React when using JSX

### Why is this bad?

When using JSX, `<a />` expands to `React.createElement("a")`. Therefore
the `React` variable must be in scope.

### Example

```jsx
// Bad
var a = <a />;

// Good
import React from "react";
var a = <a />;
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/react/react_in_jsx_scope.rs)