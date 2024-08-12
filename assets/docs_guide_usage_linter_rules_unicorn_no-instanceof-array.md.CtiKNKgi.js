import{_ as r,c as o,j as a,a as s,I as e,w as h,a3 as l,E as i,o as c}from"./chunks/framework.wOwjnRe1.js";const v=JSON.parse('{"title":"unicorn/no-instanceof-array","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/no-instanceof-array.md","filePath":"docs/guide/usage/linter/rules/unicorn/no-instanceof-array.md"}'),d={name:"docs/guide/usage/linter/rules/unicorn/no-instanceof-array.md"},p={id:"unicorn-no-instanceof-array",tabindex:"-1"},k=a("a",{class:"header-anchor",href:"#unicorn-no-instanceof-array","aria-label":'Permalink to "unicorn/no-instanceof-array <Badge type="info" text="Pedantic" />"'},"​",-1),u={class:"rule-meta"},y=a("span",{class:"emoji"},"🛠️",-1),_=l(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Require <code>Array.isArray()</code> instead of <code>instanceof Array</code>.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>The instanceof Array check doesn&#39;t work across realms/contexts, for example, frames/windows in browsers or the vm module in Node.js.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">array </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">instanceof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">instanceof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div>`,6);function f(E,g,m,x,b,A){const t=i("Badge"),n=i("Alert");return c(),o("div",null,[a("h1",p,[s("unicorn/no-instanceof-array "),e(t,{type:"info",text:"Pedantic"}),s(),k]),a("div",u,[e(n,{class:"fix",type:"info"},{default:h(()=>[y,s(" An auto-fix is available for this rule. ")]),_:1})]),_])}const F=r(d,[["render",f]]);export{v as __pageData,F as default};
