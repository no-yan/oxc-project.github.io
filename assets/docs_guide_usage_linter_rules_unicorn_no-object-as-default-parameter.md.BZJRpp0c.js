import{_ as t,c as i,j as a,a as e,I as o,a4 as n,o as r,E as l}from"./chunks/framework.Qpa4gud8.js";const y=JSON.parse('{"title":"unicorn/no-object-as-default-parameter","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/no-object-as-default-parameter.md","filePath":"docs/guide/usage/linter/rules/unicorn/no-object-as-default-parameter.md"}'),h={name:"docs/guide/usage/linter/rules/unicorn/no-object-as-default-parameter.md"},d={id:"unicorn-no-object-as-default-parameter",tabindex:"-1"},c=a("a",{class:"header-anchor",href:"#unicorn-no-object-as-default-parameter","aria-label":'Permalink to "unicorn/no-object-as-default-parameter <Badge type="info" text="Pedantic" />"'},"​",-1),p=n('<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow the use of an object literal as a default value for a parameter.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Default parameters should not be passed to a function through an object literal. The <code>foo = {a: false}</code> parameter works fine if only used with one option. As soon as additional options are added, you risk replacing the whole <code>foo = {a: false, b: true}</code> object when passing only one option: <code>{a: true}</code>. For this reason, object destructuring should be used instead.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { a: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }) {}</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}) {}</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/unicorn/no_object_as_default_parameter.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>',12);function u(k,f,g,b,m,_){const s=l("Badge");return r(),i("div",null,[a("h1",d,[e("unicorn/no-object-as-default-parameter "),o(s,{type:"info",text:"Pedantic"}),e(),c]),p])}const x=t(h,[["render",u]]);export{y as __pageData,x as default};