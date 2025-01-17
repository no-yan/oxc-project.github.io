<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# jest/no-duplicate-hooks <Badge type="info" text="Style" />

<div class="rule-meta">
</div>

### What it does

A `describe` block should not contain duplicate hooks.

### Example

```javascript
// invalid
describe("foo", () => {
  beforeEach(() => {
    // some setup
  });
  beforeEach(() => {
    // some setup
  });
  test("foo_test", () => {
    // some test
  });
});

// Nested describe scenario
describe("foo", () => {
  beforeEach(() => {
    // some setup
  });
  test("foo_test", () => {
    // some test
  });
  describe("bar", () => {
    test("bar_test", () => {
      afterAll(() => {
        // some teardown
      });
      afterAll(() => {
        // some teardown
      });
    });
  });
});
```

```javascript
// valid
describe("foo", () => {
  beforeEach(() => {
    // some setup
  });
  test("foo_test", () => {
    // some test
  });
});

// Nested describe scenario
describe("foo", () => {
  beforeEach(() => {
    // some setup
  });
  test("foo_test", () => {
    // some test
  });
  describe("bar", () => {
    test("bar_test", () => {
      beforeEach(() => {
        // some setup
      });
    });
  });
});
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/5190b7fb280dcd15c6de81717c073b06a161ced6/crates/oxc_linter/src/rules/jest/no_duplicate_hooks.rs)
