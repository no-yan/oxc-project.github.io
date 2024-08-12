import{_ as o,c as s,j as t,a as e,I as n,a3 as i,o as d,E as c}from"./chunks/framework.wOwjnRe1.js";const j=JSON.parse('{"title":"nextjs/no-page-custom-font","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/nextjs/no-page-custom-font.md","filePath":"docs/guide/usage/linter/rules/nextjs/no-page-custom-font.md"}'),r={name:"docs/guide/usage/linter/rules/nextjs/no-page-custom-font.md"},l={id:"nextjs-no-page-custom-font",tabindex:"-1"},h=t("a",{class:"header-anchor",href:"#nextjs-no-page-custom-font","aria-label":'Permalink to "nextjs/no-page-custom-font <Badge type="info" text="Correctness" />"'},"​",-1),p=i('<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Prevent page-only custom fonts.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><ul><li>The custom font you&#39;re adding was added to a page - this only adds the font to the specific page and not the entire application.</li><li>The custom font you&#39;re adding was added to a separate component within pages/_document.js - this disables automatic font optimization.</li></ul><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span></code></pre></div>',7);function u(m,_,g,f,x,b){const a=c("Badge");return d(),s("div",null,[t("h1",l,[e("nextjs/no-page-custom-font "),n(a,{type:"info",text:"Correctness"}),e(),h]),p])}const y=o(r,[["render",u]]);export{j as __pageData,y as default};
