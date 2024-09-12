import{_ as l,c as p,j as s,a,I as e,w as t,a4 as h,E as n,o}from"./chunks/framework.Qpa4gud8.js";const j=JSON.parse('{"title":"react/jsx-props-no-spread-multi","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/react/jsx-props-no-spread-multi.md","filePath":"docs/guide/usage/linter/rules/react/jsx-props-no-spread-multi.md"}'),d={name:"docs/guide/usage/linter/rules/react/jsx-props-no-spread-multi.md"},c={id:"react-jsx-props-no-spread-multi",tabindex:"-1"},k=s("a",{class:"header-anchor",href:"#react-jsx-props-no-spread-multi","aria-label":'Permalink to "react/jsx-props-no-spread-multi <Badge type="info" text="Correctness" />"'},"​",-1),u={class:"rule-meta"},g=s("span",{class:"emoji"},"✅",-1),E=s("span",{class:"emoji"},"🛠️",-1),y=h(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Enforces that any unique expression is only spread once.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Generally spreading the same expression twice is an indicator of a mistake since any attribute between the spreads may be overridden when the intent was not to. Even when that is not the case this will lead to unnecessary computations being performed.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">props} </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">myAttr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">props} /&gt;</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> myAttr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">props} /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">props} </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">myAttr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/react/jsx_props_no_spread_multi.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,11);function m(_,x,f,b,F,C){const r=n("Badge"),i=n("Alert");return o(),p("div",null,[s("h1",c,[a("react/jsx-props-no-spread-multi "),e(r,{type:"info",text:"Correctness"}),a(),k]),s("div",u,[e(i,{class:"default-on",type:"success"},{default:t(()=>[g,a(" This rule is turned on by default. ")]),_:1}),e(i,{class:"fix",type:"info"},{default:t(()=>[E,a(" An auto-fix is available for this rule. ")]),_:1})]),y])}const v=l(d,[["render",m]]);export{j as __pageData,v as default};