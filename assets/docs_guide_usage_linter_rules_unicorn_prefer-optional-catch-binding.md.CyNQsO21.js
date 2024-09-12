import{_ as r,c as o,j as a,a as e,I as i,w as l,a4 as c,E as s,o as h}from"./chunks/framework.Qpa4gud8.js";const D=JSON.parse('{"title":"unicorn/prefer-optional-catch-binding","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/prefer-optional-catch-binding.md","filePath":"docs/guide/usage/linter/rules/unicorn/prefer-optional-catch-binding.md"}'),p={name:"docs/guide/usage/linter/rules/unicorn/prefer-optional-catch-binding.md"},d={id:"unicorn-prefer-optional-catch-binding",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#unicorn-prefer-optional-catch-binding","aria-label":'Permalink to "unicorn/prefer-optional-catch-binding <Badge type="info" text="Style" />"'},"​",-1),g={class:"rule-meta"},k=a("span",{class:"emoji"},"🛠️",-1),f=c(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Prefers omitting the catch binding parameter if it is unused</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>It is unnecessary to bind the error to a variable if it is not used.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (e) {}</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/unicorn/prefer_optional_catch_binding.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,11);function _(b,m,E,y,x,v){const t=s("Badge"),n=s("Alert");return h(),o("div",null,[a("h1",d,[e("unicorn/prefer-optional-catch-binding "),i(t,{type:"info",text:"Style"}),e(),u]),a("div",g,[i(n,{class:"fix",type:"info"},{default:l(()=>[k,e(" An auto-fix is available for this rule. ")]),_:1})]),f])}const P=r(p,[["render",_]]);export{D as __pageData,P as default};