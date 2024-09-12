import{_ as r,c as l,j as e,a as i,I as s,w as p,a4 as o,E as a,o as h}from"./chunks/framework.Qpa4gud8.js";const z=JSON.parse('{"title":"typescript/prefer-enum-initializers","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/typescript/prefer-enum-initializers.md","filePath":"docs/guide/usage/linter/rules/typescript/prefer-enum-initializers.md"}'),c={name:"docs/guide/usage/linter/rules/typescript/prefer-enum-initializers.md"},d={id:"typescript-prefer-enum-initializers",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#typescript-prefer-enum-initializers","aria-label":'Permalink to "typescript/prefer-enum-initializers <Badge type="info" text="Pedantic" />"'},"​",-1),m={class:"rule-meta"},k=e("span",{class:"emoji"},"🚧",-1),_=o(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Require each enum member value to be explicitly initialized.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>In projects where the value of <code>enum</code> members are important, allowing implicit values for enums can cause bugs if enums are modified over time.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// wrong, the value of \`Close\` is not constant</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">enum</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Status</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  Open</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  Close</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/typescript/prefer_enum_initializers.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,8);function f(g,y,b,x,E,v){const t=a("Badge"),n=a("Alert");return h(),l("div",null,[e("h1",d,[i("typescript/prefer-enum-initializers "),s(t,{type:"info",text:"Pedantic"}),i(),u]),e("div",m,[s(n,{class:"fix",type:"info"},{default:p(()=>[k,i(" An auto-fix is still under development. ")]),_:1})]),_])}const P=r(c,[["render",f]]);export{z as __pageData,P as default};