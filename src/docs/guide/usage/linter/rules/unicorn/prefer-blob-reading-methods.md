<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# unicorn/prefer-blob-reading-methods <Badge type="info" text="Pedantic" />

<div class="rule-meta">
</div>

### What it does

Recommends using `Blob#text()` and `Blob#arrayBuffer()` over `FileReader#readAsText()` and `FileReader#readAsArrayBuffer()`.

### Why is this bad?

`FileReader` predates promises, and the newer [`Blob#arrayBuffer()`](https://developer.mozilla.org/en-US/docs/Web/API/Blob/arrayBuffer) and [`Blob#text()`](https://developer.mozilla.org/en-US/docs/Web/API/Blob/text) methods are much cleaner and easier to use.

### Example

```javascript
async function bad() {
  const arrayBuffer = await new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.addEventListener("load", () => {
      resolve(fileReader.result);
    });
    fileReader.addEventListener("error", () => {
      reject(fileReader.error);
    });
    fileReader.readAsArrayBuffer(blob);
  });
}

async function good() {
  const arrayBuffer = await blob.arrayBuffer();
}
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/unicorn/prefer_blob_reading_methods.rs)