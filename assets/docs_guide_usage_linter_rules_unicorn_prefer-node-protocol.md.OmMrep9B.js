import{_ as r,c as n,j as e,a as s,I as t,w as l,a4 as c,E as a,o as p}from"./chunks/framework.Qpa4gud8.js";const A=JSON.parse('{"title":"unicorn/prefer-node-protocol","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/prefer-node-protocol.md","filePath":"docs/guide/usage/linter/rules/unicorn/prefer-node-protocol.md"}'),d={name:"docs/guide/usage/linter/rules/unicorn/prefer-node-protocol.md"},h={id:"unicorn-prefer-node-protocol",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#unicorn-prefer-node-protocol","aria-label":'Permalink to "unicorn/prefer-node-protocol <Badge type="info" text="Restriction" />"'},"​",-1),f={class:"rule-meta"},k=e("span",{class:"emoji"},"🛠️",-1),_=c('<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Prefer using the <code>node:protocol</code> when importing Node.js builtin modules</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;fs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;node:fs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/unicorn/prefer_node_protocol.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>',9);function g(m,E,b,x,v,y){const o=a("Badge"),i=a("Alert");return p(),n("div",null,[e("h1",h,[s("unicorn/prefer-node-protocol "),t(o,{type:"info",text:"Restriction"}),s(),u]),e("div",f,[t(i,{class:"fix",type:"info"},{default:l(()=>[k,s(" An auto-fix is available for this rule. ")]),_:1})]),_])}const C=r(d,[["render",g]]);export{A as __pageData,C as default};