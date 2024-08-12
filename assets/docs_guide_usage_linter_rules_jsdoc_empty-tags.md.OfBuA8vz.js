import{_ as i,c as t,j as e,a as s,I as l,a3 as n,o,E as d}from"./chunks/framework.wOwjnRe1.js";const b=JSON.parse('{"title":"jsdoc/empty-tags","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/jsdoc/empty-tags.md","filePath":"docs/guide/usage/linter/rules/jsdoc/empty-tags.md"}'),c={name:"docs/guide/usage/linter/rules/jsdoc/empty-tags.md"},p={id:"jsdoc-empty-tags",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#jsdoc-empty-tags","aria-label":'Permalink to "jsdoc/empty-tags <Badge type="info" text="Restriction" />"'},"​",-1),r=n(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Expects the following tags to be empty of any content:</p><ul><li><code>@abstract</code></li><li><code>@async</code></li><li><code>@generator</code></li><li><code>@global</code></li><li><code>@hideconstructor</code></li><li><code>@ignore</code></li><li><code>@inner</code></li><li><code>@instance</code></li><li><code>@override</code></li><li><code>@readonly</code></li><li><code>@inheritDoc</code></li><li><code>@internal</code></li><li><code>@overload</code></li><li><code>@package</code></li><li><code>@private</code></li><li><code>@protected</code></li><li><code>@public</code></li><li><code>@static</code></li></ul><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>The void tags should be empty.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Passing</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@async</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@private</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Failing</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@async</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> foo */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@private</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> bar */</span></span></code></pre></div>`,8);function k(g,y,m,u,_,A){const a=d("Badge");return o(),t("div",null,[e("h1",p,[s("jsdoc/empty-tags "),l(a,{type:"info",text:"Restriction"}),s(),h]),r])}const v=i(c,[["render",k]]);export{b as __pageData,v as default};
