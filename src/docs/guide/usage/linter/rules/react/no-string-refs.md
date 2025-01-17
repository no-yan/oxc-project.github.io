<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# react/no-string-refs <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="default-on" type="success">
<span class="emoji">✅</span> This rule is turned on by default.
</Alert>
</div>

### What it does

This rule prevents using string literals in ref attributes.

### Example

Examples of **incorrect** code for this rule:

```jsx
var Hello = createReactClass({
  render: function () {
    return <div ref="hello">Hello, world.</div>;
  },
});

var Hello = createReactClass({
  componentDidMount: function () {
    var component = this.refs.hello;
    // ...do something with component
  },
  render: function () {
    return <div ref="hello">Hello, world.</div>;
  },
});
```

Examples of **correct** code for this rule:

```jsx
var Hello = createReactClass({
  componentDidMount: function () {
    var component = this.hello;
    // ...do something with component
  },
  render() {
    return (
      <div
        ref={(c) => {
          this.hello = c;
        }}
      >
        Hello, world.
      </div>
    );
  },
});
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/5190b7fb280dcd15c6de81717c073b06a161ced6/crates/oxc_linter/src/rules/react/no_string_refs.rs)
