<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# typescript/no-empty-object-type <Badge type="info" text="Restriction" />

<div class="rule-meta">
</div>

### What it does

To avoid confusion around the `{}` type allowing any non-nullish value, this rule bans usage of the `{}` type. That includes interfaces and object type aliases with no fields.

### Why is this bad?

The `{}`, or "empty object" type in TypeScript is a common source of confusion for developers unfamiliar with TypeScript's structural typing. `{}` represents any non-nullish value, including literals like 0 and "".
Often, developers writing `{}` actually mean either:

- object: representing any object value
- unknown: representing any value at all, including null and undefined
  In other words, the "empty object" type {}` really means "any value that is defined". That includes arrays, class instances, functions, and primitives such as string and symbol.

Note that this rule does not report on:

- `{}` as a type constituent in an intersection type (e.g. types like TypeScript's built-in `type NonNullable<T> = T & {}`), as this can be useful in type system operations.
- Interfaces that extend from multiple other interfaces.

### Examples

Examples of **incorrect** code for this rule:

```ts
let anyObject: {};
let anyValue: {};
interface AnyObjectA {}
interface AnyValueA {}
type AnyObjectB = {};
type AnyValueB = {};
```

Examples of **correct** code for this rule:

```ts
let anyObject: object;
let anyValue: unknown;
type AnyObjectA = object;
type AnyValueA = unknown;
type AnyObjectB = object;
type AnyValueB = unknown;
let objectWith: { property: boolean };
interface InterfaceWith {
  property: boolean;
}
type TypeWith = { property: boolean };
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/5190b7fb280dcd15c6de81717c073b06a161ced6/crates/oxc_linter/src/rules/typescript/no_empty_object_type.rs)