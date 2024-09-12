import{_ as t,c as n,j as e,a,I as o,w as d,a4 as l,E as i,o as c}from"./chunks/framework.Qpa4gud8.js";const C=JSON.parse('{"title":"unicorn/prefer-modern-dom-apis","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/prefer-modern-dom-apis.md","filePath":"docs/guide/usage/linter/rules/unicorn/prefer-modern-dom-apis.md"}'),p={name:"docs/guide/usage/linter/rules/unicorn/prefer-modern-dom-apis.md"},h={id:"unicorn-prefer-modern-dom-apis",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#unicorn-prefer-modern-dom-apis","aria-label":'Permalink to "unicorn/prefer-modern-dom-apis <Badge type="info" text="Style" />"'},"​",-1),m={class:"rule-meta"},f=e("span",{class:"emoji"},"🚧",-1),_=l('<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Enforces the use of:</p><ul><li><code>childNode.replaceWith(newNode)</code> over <code>parentNode.replaceChild(newNode, oldNode)</code></li><li><code>referenceNode.before(newNode)</code> over <code>parentNode.insertBefore(newNode, referenceNode)</code></li><li><code>referenceNode.before(&#39;text&#39;)</code> over <code>referenceNode.insertAdjacentText(&#39;beforebegin&#39;, &#39;text&#39;)</code></li><li><code>referenceNode.before(newNode)</code> over <code>referenceNode.insertAdjacentElement(&#39;beforebegin&#39;, newNode)</code></li></ul><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>There are some advantages of using the newer DOM APIs, like:</p><ul><li>Traversing to the parent node is not necessary.</li><li>Appending multiple nodes at once.</li><li>Both <code>DOMString</code> and DOM node objects can be manipulated.</li></ul><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">oldChildNode.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replaceWith</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(newChildNode);</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">parentNode.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replaceChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(newChildNode, oldChildNode);</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/unicorn/prefer_modern_dom_apis.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>',13);function g(b,k,x,N,v,E){const r=i("Badge"),s=i("Alert");return c(),n("div",null,[e("h1",h,[a("unicorn/prefer-modern-dom-apis "),o(r,{type:"info",text:"Style"}),a(),u]),e("div",m,[o(s,{class:"fix",type:"info"},{default:d(()=>[f,a(" An auto-fix is still under development. ")]),_:1})]),_])}const w=t(p,[["render",g]]);export{C as __pageData,w as default};