import{_ as t,c as i,j as a,a as e,I as n,a3 as l,o as p,E as h}from"./chunks/framework.wOwjnRe1.js";const b=JSON.parse('{"title":"typescript/no-duplicate-enum-values","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/typescript/no-duplicate-enum-values.md","filePath":"docs/guide/usage/linter/rules/typescript/no-duplicate-enum-values.md"}'),d={name:"docs/guide/usage/linter/rules/typescript/no-duplicate-enum-values.md"},o={id:"typescript-no-duplicate-enum-values",tabindex:"-1"},r=a("a",{class:"header-anchor",href:"#typescript-no-duplicate-enum-values","aria-label":'Permalink to "typescript/no-duplicate-enum-values <Badge type="info" text="Pedantic" />"'},"​",-1),c=l(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow duplicate enum member values.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Although TypeScript supports duplicate enum member values, people usually expect members to have unique values within the same enum. Duplicate values can lead to bugs that are hard to track down.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">enum</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> E</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  A</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  B</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,7);function u(k,m,_,g,y,v){const s=h("Badge");return p(),i("div",null,[a("h1",o,[e("typescript/no-duplicate-enum-values "),n(s,{type:"info",text:"Pedantic"}),e(),r]),c])}const x=t(d,[["render",u]]);export{b as __pageData,x as default};
