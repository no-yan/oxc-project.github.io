import{_ as o,c as p,j as a,a as i,G as e,w as n,a2 as h,B as l,o as d}from"./chunks/framework.DlAqvapY.js";const v=JSON.parse('{"title":"eslint/valid-typeof","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/valid-typeof.md","filePath":"docs/guide/usage/linter/rules/eslint/valid-typeof.md"}'),k={name:"docs/guide/usage/linter/rules/eslint/valid-typeof.md"},c={id:"eslint-valid-typeof",tabindex:"-1"},f={class:"rule-meta"};function u(y,s,g,E,m,b){const r=l("Badge"),t=l("Alert");return d(),p("div",null,[a("h1",c,[s[0]||(s[0]=i("eslint/valid-typeof ")),e(r,{type:"info",text:"Correctness"}),s[1]||(s[1]=i()),s[2]||(s[2]=a("a",{class:"header-anchor",href:"#eslint-valid-typeof","aria-label":'Permalink to "eslint/valid-typeof <Badge type="info" text="Correctness" />"'},"​",-1))]),a("div",f,[e(t,{class:"default-on",type:"success"},{default:n(()=>s[3]||(s[3]=[a("span",{class:"emoji"},"✅",-1),i(" This rule is turned on by default. ")])),_:1}),e(t,{class:"fix",type:"info"},{default:n(()=>s[4]||(s[4]=[a("span",{class:"emoji"},"🛠️",-1),i(" An auto-fix is available for this rule for some violations. ")])),_:1})]),s[5]||(s[5]=h(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Enforce comparing <code>typeof</code> expressions against valid strings</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>It is usually a typing mistake to compare the result of a <code>typeof</code> operator to other string literals.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// requireStringLiterals: false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// incorrect:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;strnig&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// correct:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;string&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> baz;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// requireStringLiterals: true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// incorrect:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> baz;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/eslint/valid_typeof.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,8))])}const A=o(k,[["render",u]]);export{v as __pageData,A as default};