import{_ as t,c as r,j as s,a,G as n,a2 as p,B as l,o}from"./chunks/framework.8qdJL5ht.js";const f=JSON.parse('{"title":"jsdoc/require-property-name","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/jsdoc/require-property-name.md","filePath":"docs/guide/usage/linter/rules/jsdoc/require-property-name.md"}'),h={name:"docs/guide/usage/linter/rules/jsdoc/require-property-name.md"},d={id:"jsdoc-require-property-name",tabindex:"-1"};function c(k,e,u,y,g,m){const i=l("Badge");return o(),r("div",null,[s("h1",d,[e[0]||(e[0]=a("jsdoc/require-property-name ")),n(i,{type:"info",text:"Correctness"}),e[1]||(e[1]=a()),e[2]||(e[2]=s("a",{class:"header-anchor",href:"#jsdoc-require-property-name","aria-label":'Permalink to "jsdoc/require-property-name <Badge type="info" text="Correctness" />"'},"​",-1))]),e[3]||(e[3]=p(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Requires that all <code>@property</code> tags have names.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>The name of a property type should be documented.</p><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@typedef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {SomeType}</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SomeTypedef</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@property</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {number}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@typedef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {SomeType}</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SomeTypedef</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@property</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {number}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/jsdoc/require_property_name.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,12))])}const x=t(h,[["render",c]]);export{f as __pageData,x as default};