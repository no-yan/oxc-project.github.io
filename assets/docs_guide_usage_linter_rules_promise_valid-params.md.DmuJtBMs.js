import{_ as i,c as t,j as e,a,I as r,a3 as o,o as n,E as d}from"./chunks/framework.wOwjnRe1.js";const f=JSON.parse('{"title":"promise/valid-params","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/promise/valid-params.md","filePath":"docs/guide/usage/linter/rules/promise/valid-params.md"}'),l={name:"docs/guide/usage/linter/rules/promise/valid-params.md"},h={id:"promise-valid-params",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#promise-valid-params","aria-label":'Permalink to "promise/valid-params <Badge type="info" text="Correctness" />"'},"​",-1),c=o('<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Enforces the proper number of arguments are passed to Promise functions.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Calling a Promise function with the incorrect number of arguments can lead to unexpected behavior or hard to spot bugs.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>',7);function m(u,k,_,g,v,E){const s=d("Badge");return n(),t("div",null,[e("h1",h,[a("promise/valid-params "),r(s,{type:"info",text:"Correctness"}),a(),p]),c])}const x=i(l,[["render",m]]);export{f as __pageData,x as default};
