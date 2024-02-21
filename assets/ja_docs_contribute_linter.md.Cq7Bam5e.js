import{_ as s,c as e,o as a,a5 as i}from"./chunks/framework.BWLfa7pZ.js";const F=JSON.parse('{"title":"Linter","description":"","frontmatter":{"title":"Linter","outline":"deep"},"headers":[],"relativePath":"ja/docs/contribute/linter.md","filePath":"ja/docs/contribute/linter.md"}'),t={name:"ja/docs/contribute/linter.md"},n=i(`<h1 id="linter" tabindex="-1">Linter <a class="header-anchor" href="#linter" aria-label="Permalink to &quot;Linter&quot;">​</a></h1><h2 id="development" tabindex="-1">Development <a class="header-anchor" href="#development" aria-label="Permalink to &quot;Development&quot;">​</a></h2><p>Create a <code>./test.ts</code> and then</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">just</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> watch &quot;run -p oxc_cli --bin oxlint -- test.ts&quot;</span></span></code></pre></div><h2 id="rule-generation" tabindex="-1">Rule generation <a class="header-anchor" href="#rule-generation" aria-label="Permalink to &quot;Rule generation&quot;">​</a></h2><p>Create a new lint rule by providing the ESLint name</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">just</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new-rule name</span></span></code></pre></div><p>Then add the rule to <code>crates/oxc_linter/src/rules.rs</code>:</p><ol><li>Add to <code>mod</code></li><li>Add to <code>oxc_macros::declare_all_lint_rules</code> at the bottom of the file</li></ol><p>For other plugins, there are also:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">just</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new-jest-rule name</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">just</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new-ts-rule name</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">just</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new-unicorn-rule name</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">just</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new-react-rule name</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">just</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new-jsx-a11y-rule name</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">just</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new-oxc-rule name</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">just</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new-deepscan-rule name</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">just</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new-nextjs-rule name</span></span></code></pre></div>`,11),l=[n];function h(p,r,o,d,c,k){return a(),e("div",null,l)}const g=s(t,[["render",h]]);export{F as __pageData,g as default};