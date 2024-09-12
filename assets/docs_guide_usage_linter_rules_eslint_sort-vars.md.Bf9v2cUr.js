import{_ as n,c as l,j as s,a as e,I as a,w as o,a4 as h,E as t,o as d}from"./chunks/framework.Qpa4gud8.js";const P=JSON.parse('{"title":"eslint/sort-vars","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/sort-vars.md","filePath":"docs/guide/usage/linter/rules/eslint/sort-vars.md"}'),c={name:"docs/guide/usage/linter/rules/eslint/sort-vars.md"},p={id:"eslint-sort-vars",tabindex:"-1"},k=s("a",{class:"header-anchor",href:"#eslint-sort-vars","aria-label":'Permalink to "eslint/sort-vars <Badge type="info" text="Pedantic" />"'},"​",-1),u={class:"rule-meta"},g=s("span",{class:"emoji"},"🚧",-1),_=h(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>When declaring multiple variables within the same block, sorting variable names make it easier to find necessary variable easier at a later time.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Unsorted variable declarations can make the code harder to read and maintain.</p><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b, a;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">B</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, c;</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a, b, c, d;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> B</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, a, c;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/eslint/sort_vars.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,11);function m(b,v,f,E,x,y){const i=t("Badge"),r=t("Alert");return d(),l("div",null,[s("h1",p,[e("eslint/sort-vars "),a(i,{type:"info",text:"Pedantic"}),e(),k]),s("div",u,[a(r,{class:"fix",type:"info"},{default:o(()=>[g,e(" An auto-fix is still under development. ")]),_:1})]),_])}const A=n(c,[["render",m]]);export{P as __pageData,A as default};