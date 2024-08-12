import{_ as r,c as l,j as a,a as s,I as e,w as t,a3 as c,E as n,o as d}from"./chunks/framework.wOwjnRe1.js";const C=JSON.parse('{"title":"unicorn/no-unnecessary-await","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/no-unnecessary-await.md","filePath":"docs/guide/usage/linter/rules/unicorn/no-unnecessary-await.md"}'),h={name:"docs/guide/usage/linter/rules/unicorn/no-unnecessary-await.md"},p={id:"unicorn-no-unnecessary-await",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#unicorn-no-unnecessary-await","aria-label":'Permalink to "unicorn/no-unnecessary-await <Badge type="info" text="Correctness" />"'},"​",-1),_={class:"rule-meta"},k=a("span",{class:"emoji"},"✅",-1),y=a("span",{class:"emoji"},"🛠️",-1),m=c(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow awaiting on non-promise values.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>The <code>await</code> operator should only be used on <code>Promise</code> values.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bad</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  await</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> promise;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,6);function g(f,b,w,x,E,v){const o=n("Badge"),i=n("Alert");return d(),l("div",null,[a("h1",p,[s("unicorn/no-unnecessary-await "),e(o,{type:"info",text:"Correctness"}),s(),u]),a("div",_,[e(i,{class:"default-on",type:"success"},{default:t(()=>[k,s(" This rule is turned on by default. ")]),_:1}),e(i,{class:"fix",type:"info"},{default:t(()=>[y,s(" An auto-fix is available for this rule for some violations. ")]),_:1})]),m])}const P=r(h,[["render",g]]);export{C as __pageData,P as default};
