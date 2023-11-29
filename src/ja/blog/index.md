---
outline: deep
---

[Rome](https://github.com/rome/tools) uses a different set of techniques for parsing JavaScript and TypeScript.
This tutorial summarizes them in learning order for better understanding.

## History

- The Rome codebase was rewritten from TypeScript to Rust, see [Rome will be rewritten in Rust](https://rome.tools/blog/2021/09/21/rome-will-be-rewritten-in-rust)
- The decision was made after talking to the author of [rslint](https://github.com/rslint/rslint) and [rust-analyzer](https://github.com/rust-lang/rust-analyzer)
- rust-analyzer proved that IDE-centric tools built around concrete syntax tree are possible
- rslint proved that it is possible to write a JavaScript parser in Rust, with the same base libraries as rust-analyzer
- Rome ported the rslint codebase to their own repo with permission from rslint's author

## Concrete Syntax Tree

- The base library is called [rowan](https://github.com/rust-analyzer/rowan), see [overview of rowan](https://github.com/rust-lang/rust-analyzer/blob/master/docs/dev/syntax.md)
- Rowan, also known as red-green trees, is named after the real green [rowan tree](https://en.wikipedia.org/wiki/Rowan) that makes red berries
- The origin of red-green trees is described in this [blog post](https://ericlippert.com/2012/06/08/red-green-trees/), by the authors of the C# programming language
- The whole point of rowan is to define a lossless concrete syntax tree (CST) that describes all the details of the source code and provides a set of traversal APIs (parent, children, siblings, etc)
- Read the advantage of having a CST over an AST: [Pure AST based linting sucks](https://rdambrosio016.github.io/rust/2020/09/18/pure-ast-based-linting-sucks.html)
- CST provides the ability to build a fully recoverable parser

## Grammar

- Just like an AST, we need to define the grammar. The grammar is auto-generated by using [xtask/codegen](https://github.com/rome/tools/tree/main/xtask/codegen)
- The grammar is generated from the [ungrammar](https://github.com/rust-analyzer/ungrammar) DSL
- The input `ungrammar` source file is in [xtask/codegen/js.ungram](https://github.com/rome/tools/blob/main/xtask/codegen/js.ungram)
- The output of the codegen is in [rome_js_syntax/src/generated](https://github.com/rome/tools/tree/main/crates/rome_js_syntax/src/generated)

## Entry Point

The Rome codebase is getting large and slightly difficult to find the parser entry point.

For first-time contributors, the `rome_cli` crate is the binary entry point for running the code:

```bash
cargo run -p rome_cli

touch test.js
cargo run -p rome_cli -- check ./test.js
```

`rome_cli` will eventually call `rome_js_parser::parse`

```rust reference
https://github.com/rome/tools/blob/9815467c66688773bc1bb6ef9a5b2d86ca7b3682/crates/rome_js_parser/src/parse.rs#L178-L187
```

and finally the actual parsing code

```rust reference
https://github.com/rome/tools/blob/9815467c66688773bc1bb6ef9a5b2d86ca7b3682/crates/rome_js_parser/src/syntax/program.rs#L14-L17
```

## Contributing

- [CONTRIBUTING.md](https://github.com/rome/tools/blob/main/CONTRIBUTING.md) has instructions on how to contribute
- [rome_js_parser crate doc](https://rome.github.io/tools/rome_js_parser/index.html) has some more details on the parser
- See [`cargo codegen test`](https://github.com/rome/tools/tree/main/xtask/codegen#cargo-codegen-test) for working with parser tests
- See [`cargo coverage`](https://github.com/rome/tools/tree/main/xtask/coverage) for working with conformance tests
- Join the [Discord Server](https://discord.com/invite/rome) for inquiries

:::info
The JavaScript / TypeScript parser is 99% complete, the best way to help is to test Rome in your own codebases
or take a look at the [issues on Github](https://github.com/rome/tools/issues).
:::