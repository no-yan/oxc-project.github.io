import{_ as o,c as l,j as s,a,G as t,w as p,a2 as d,B as i,o as h}from"./chunks/framework.8qdJL5ht.js";const _=JSON.parse('{"title":"jsx_a11y/aria-unsupported-elements","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/jsx_a11y/aria-unsupported-elements.md","filePath":"docs/guide/usage/linter/rules/jsx_a11y/aria-unsupported-elements.md"}'),c={name:"docs/guide/usage/linter/rules/jsx_a11y/aria-unsupported-elements.md"},u={id:"jsx-a11y-aria-unsupported-elements",tabindex:"-1"},k={class:"rule-meta"};function m(g,e,x,f,y,E){const r=i("Badge"),n=i("Alert");return h(),l("div",null,[s("h1",u,[e[0]||(e[0]=a("jsx_a11y/aria-unsupported-elements ")),t(r,{type:"info",text:"Correctness"}),e[1]||(e[1]=a()),e[2]||(e[2]=s("a",{class:"header-anchor",href:"#jsx-a11y-aria-unsupported-elements","aria-label":'Permalink to "jsx_a11y/aria-unsupported-elements <Badge type="info" text="Correctness" />"'},"​",-1))]),s("div",k,[t(n,{class:"fix",type:"info"},{default:p(()=>e[3]||(e[3]=[s("span",{class:"emoji"},"🛠️",-1),a(" An auto-fix is available for this rule. ")])),_:1})]),e[4]||(e[4]=d('<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Certain reserved DOM elements do not support ARIA roles, states and properties. This is often because they are not visible, for example <code>meta</code>, <code>html</code>, <code>script</code>, <code>style</code>. This rule enforces that these DOM elements do not contain the <code>role</code> and/or <code>aria-*</code> props.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> charset</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;UTF-8&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> aria-hidden</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;false&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> charset</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;UTF-8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/jsx_a11y/aria_unsupported_elements.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>',9))])}const F=o(c,[["render",m]]);export{_ as __pageData,F as default};