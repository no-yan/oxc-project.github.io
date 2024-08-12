import{_ as e,c as t,j as i,a as s,I as l,a3 as n,o,E as p}from"./chunks/framework.wOwjnRe1.js";const x=JSON.parse('{"title":"nextjs/no-unwanted-polyfillio","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/nextjs/no-unwanted-polyfillio.md","filePath":"docs/guide/usage/linter/rules/nextjs/no-unwanted-polyfillio.md"}'),h={name:"docs/guide/usage/linter/rules/nextjs/no-unwanted-polyfillio.md"},r={id:"nextjs-no-unwanted-polyfillio",tabindex:"-1"},d=i("a",{class:"header-anchor",href:"#nextjs-no-unwanted-polyfillio","aria-label":'Permalink to "nextjs/no-unwanted-polyfillio <Badge type="info" text="Correctness" />"'},"​",-1),c=n(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Prevent duplicate polyfills from Polyfill.io.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>You are using polyfills from Polyfill.io and including polyfills already shipped with Next.js. This unnecessarily increases page weight which can affect loading performance.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://polyfill.io/v3/polyfill.min.js?features=Array.prototype.copyWithin&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://polyfill.io/v3/polyfill.min.js?features=WeakSet%2CPromise%2CPromise.prototype.finally%2Ces2015%2Ces5%2Ces6&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,7);function k(y,g,u,f,E,_){const a=p("Badge");return o(),t("div",null,[i("h1",r,[s("nextjs/no-unwanted-polyfillio "),l(a,{type:"info",text:"Correctness"}),s(),d]),c])}const b=e(h,[["render",k]]);export{x as __pageData,b as default};
