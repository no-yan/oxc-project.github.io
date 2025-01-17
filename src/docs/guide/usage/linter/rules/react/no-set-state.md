<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# react/no-set-state <Badge type="info" text="Style" />

<div class="rule-meta">
</div>

### What it does

Disallow the usage of `this.setState` in React components.

### Why is this bad?

When using an architecture that separates your application state from your UI components
(e.g. Flux), it may be desirable to forbid the use of local component state. This rule is
especially helpful in read-only applications (that don't use forms), since local component
state should rarely be necessary in such cases.

### Example

```jsx
var Hello = createReactClass({
  getInitialState: function () {
    return {
      name: this.props.name,
    };
  },
  handleClick: function () {
    this.setState({
      name: this.props.name.toUpperCase(),
    });
  },
  render: function () {
    return <div onClick={this.handleClick.bind(this)}>Hello {this.state.name}</div>;
  },
});
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/5190b7fb280dcd15c6de81717c073b06a161ced6/crates/oxc_linter/src/rules/react/no_set_state.rs)
