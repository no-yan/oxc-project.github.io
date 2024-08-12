import{_ as i,c as d,j as e,a,I as s,w as r,a3 as p,E as n,o as l}from"./chunks/framework.wOwjnRe1.js";const A=JSON.parse('{"title":"unicorn/prefer-dom-node-append","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/prefer-dom-node-append.md","filePath":"docs/guide/usage/linter/rules/unicorn/prefer-dom-node-append.md"}'),c={name:"docs/guide/usage/linter/rules/unicorn/prefer-dom-node-append.md"},h={id:"unicorn-prefer-dom-node-append",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#unicorn-prefer-dom-node-append","aria-label":'Permalink to "unicorn/prefer-dom-node-append <Badge type="info" text="Pedantic" />"'},"​",-1),m={class:"rule-meta"},_=e("span",{class:"emoji"},"🛠️",-1),f=p(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Enforces the use of, for example, <code>document.body.append(div);</code> over <code>document.body.appendChild(div);</code> for DOM nodes.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>There are <a href="https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append" target="_blank" rel="noreferrer">some advantages of using <code>Node#append()</code></a>, like the ability to append multiple nodes and to append both <a href="https://developer.mozilla.org/en-US/docs/Web/API/DOMString" target="_blank" rel="noreferrer"><code>DOMString</code></a> and DOM node objects.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// bad</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">appendChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(bar);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">append</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(bar);</span></span></code></pre></div>`,6);function k(g,b,E,x,y,v){const t=n("Badge"),o=n("Alert");return l(),d("div",null,[e("h1",h,[a("unicorn/prefer-dom-node-append "),s(t,{type:"info",text:"Pedantic"}),a(),u]),e("div",m,[s(o,{class:"fix",type:"info"},{default:r(()=>[_,a(" An auto-fix is available for this rule. ")]),_:1})]),f])}const C=i(c,[["render",k]]);export{A as __pageData,C as default};
