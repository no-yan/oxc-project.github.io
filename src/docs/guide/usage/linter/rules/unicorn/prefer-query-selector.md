<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# unicorn/prefer-query-selector <Badge type="info" text="Pedantic" />

<div class="rule-meta">
<Alert class="fix" type="info">
<span class="emoji">🛠️</span> An auto-fix is available for this rule for some violations.
</Alert>
</div>

### What it does

Prefer `.querySelector()` over `.getElementById()`, `.querySelectorAll()` over `.getElementsByClassName()` and `.getElementsByTagName()`.

### Example

Examples of **incorrect** code for this rule:

```javascript
document.getElementById("foo");
document.getElementsByClassName("foo bar");
document.getElementsByTagName("main");
document.getElementsByClassName(fn());
```

Examples of **correct** code for this rule:

```javascript
document.querySelector("#foo");
document.querySelector(".bar");
document.querySelector("main #foo .bar");
document.querySelectorAll(".foo .bar");
document.querySelectorAll("li a");
document.querySelector("li").querySelectorAll("a");
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/5190b7fb280dcd15c6de81717c073b06a161ced6/crates/oxc_linter/src/rules/unicorn/prefer_query_selector.rs)
