import{_ as t,c as n,j as a,a as e,G as r,a2 as l,B as h,o}from"./chunks/framework.8qdJL5ht.js";const f=JSON.parse('{"title":"jsdoc/check-tag-names","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/jsdoc/check-tag-names.md","filePath":"docs/guide/usage/linter/rules/jsdoc/check-tag-names.md"}'),c={name:"docs/guide/usage/linter/rules/jsdoc/check-tag-names.md"},d={id:"jsdoc-check-tag-names",tabindex:"-1"};function p(k,s,g,u,m,y){const i=h("Badge");return o(),n("div",null,[a("h1",d,[s[0]||(s[0]=e("jsdoc/check-tag-names ")),r(i,{type:"info",text:"Correctness"}),s[1]||(s[1]=e()),s[2]||(s[2]=a("a",{class:"header-anchor",href:"#jsdoc-check-tag-names","aria-label":'Permalink to "jsdoc/check-tag-names <Badge type="info" text="Correctness" />"'},"​",-1))]),s[3]||(s[3]=l(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Reports invalid block tag names. Additionally checks for tag names that are redundant when using a type checker such as TypeScript.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Using invalid tags can lead to confusion and make the documentation harder to read.</p><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@Param</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@foo</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * This is redundant when typed.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {string}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/jsdoc/check_tag_names.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,12))])}const A=t(c,[["render",p]]);export{f as __pageData,A as default};