import{_ as s,c as r,j as a,a as e,I as i,a4 as o,o as n,E as h}from"./chunks/framework.Qpa4gud8.js";const y=JSON.parse('{"title":"promise/prefer-await-to-then","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/promise/prefer-await-to-then.md","filePath":"docs/guide/usage/linter/rules/promise/prefer-await-to-then.md"}'),c={name:"docs/guide/usage/linter/rules/promise/prefer-await-to-then.md"},d={id:"promise-prefer-await-to-then",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#promise-prefer-await-to-then","aria-label":'Permalink to "promise/prefer-await-to-then <Badge type="info" text="Style" />"'},"​",-1),p=o('<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Prefer <code>await</code> to <code>then()</code>/<code>catch()</code>/<code>finally()</code> for reading Promise values</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Async/await syntax can be seen as more readable.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">myPromise.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(doSomething);</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/promise/prefer_await_to_then.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>',9);function m(_,u,f,b,g,k){const t=h("Badge");return n(),r("div",null,[a("h1",d,[e("promise/prefer-await-to-then "),i(t,{type:"info",text:"Style"}),e(),l]),p])}const w=s(c,[["render",m]]);export{y as __pageData,w as default};