<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# jest/no-conditional-in-test <Badge type="info" text="Pedantic" />

<div class="rule-meta">
</div>

### What it does

This rule reports on any use of a conditional statement such as if, switch, and ternary expressions.

### Examples

Examples of **incorrect** code for this rule:

```js
it("foo", () => {
  if (true) {
    doTheThing();
  }
});

it("bar", () => {
  switch (mode) {
    case "none":
      generateNone();
    case "single":
      generateOne();
    case "multiple":
      generateMany();
  }

  expect(fixtures.length).toBeGreaterThan(-1);
});

it("baz", async () => {
  const promiseValue = () => {
    return something instanceof Promise ? something : Promise.resolve(something);
  };

  await expect(promiseValue()).resolves.toBe(1);
});
```

Examples of **correct** code for this rule:

```js
describe("my tests", () => {
  if (true) {
    it("foo", () => {
      doTheThing();
    });
  }
});

beforeEach(() => {
  switch (mode) {
    case "none":
      generateNone();
    case "single":
      generateOne();
    case "multiple":
      generateMany();
  }
});

it("bar", () => {
  expect(fixtures.length).toBeGreaterThan(-1);
});

const promiseValue = (something) => {
  return something instanceof Promise ? something : Promise.resolve(something);
};

it("baz", async () => {
  await expect(promiseValue()).resolves.toBe(1);
});
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/5190b7fb280dcd15c6de81717c073b06a161ced6/crates/oxc_linter/src/rules/jest/no_conditional_in_test.rs)
