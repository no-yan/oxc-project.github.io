import{_ as o,c,j as e,a as s,I as a,w as t,a4 as r,E as n,o as h}from"./chunks/framework.Qpa4gud8.js";const B=JSON.parse('{"title":"eslint/no-nonoctal-decimal-escape","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/no-nonoctal-decimal-escape.md","filePath":"docs/guide/usage/linter/rules/eslint/no-nonoctal-decimal-escape.md"}'),d={name:"docs/guide/usage/linter/rules/eslint/no-nonoctal-decimal-escape.md"},p={id:"eslint-no-nonoctal-decimal-escape",tabindex:"-1"},k=e("a",{class:"header-anchor",href:"#eslint-no-nonoctal-decimal-escape","aria-label":'Permalink to "eslint/no-nonoctal-decimal-escape <Badge type="info" text="Correctness" />"'},"​",-1),u={class:"rule-meta"},_=e("span",{class:"emoji"},"✅",-1),E=e("span",{class:"emoji"},"🚧",-1),m=r(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>This rule disallows \\8 and \\9 escape sequences in string literals</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>ECMAScript specification treats \\8 and \\9 in string literals as a legacy feature</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">incorrect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;9&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">correct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">9&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/eslint/no_nonoctal_decimal_escape.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,8);function g(f,y,b,x,F,C){const l=n("Badge"),i=n("Alert");return h(),c("div",null,[e("h1",p,[s("eslint/no-nonoctal-decimal-escape "),a(l,{type:"info",text:"Correctness"}),s(),k]),e("div",u,[a(i,{class:"default-on",type:"success"},{default:t(()=>[_,s(" This rule is turned on by default. ")]),_:1}),a(i,{class:"fix",type:"info"},{default:t(()=>[E,s(" An auto-fix is still under development. ")]),_:1})]),m])}const v=o(d,[["render",g]]);export{B as __pageData,v as default};