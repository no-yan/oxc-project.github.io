import{_ as r,c as o,j as s,a as e,I as a,w as l,a3 as h,E as i,o as p}from"./chunks/framework.wOwjnRe1.js";const A=JSON.parse('{"title":"eslint/no-constant-binary-expression","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/no-constant-binary-expression.md","filePath":"docs/guide/usage/linter/rules/eslint/no-constant-binary-expression.md"}'),c={name:"docs/guide/usage/linter/rules/eslint/no-constant-binary-expression.md"},d={id:"eslint-no-constant-binary-expression",tabindex:"-1"},k=s("a",{class:"header-anchor",href:"#eslint-no-constant-binary-expression","aria-label":'Permalink to "eslint/no-constant-binary-expression <Badge type="info" text="Correctness" />"'},"​",-1),u={class:"rule-meta"},y=s("span",{class:"emoji"},"✅",-1),g=h('<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow expressions where the operation doesn&#39;t affect the value</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Comparisons which will always evaluate to true or false and logical expressions (||, &amp;&amp;, ??) which either always short-circuit or never short-circuit are both likely indications of programmer error.</p><p>These errors are especially common in complex expressions where operator precedence is easy to misjudge.</p><p>Additionally, this rule detects comparisons to newly constructed objects/arrays/functions/etc. In JavaScript, where objects are compared by reference, a newly constructed object can never === any other value. This can be surprising for programmers coming from languages where objects are compared by value.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// One might think this would evaluate as `a + (b ?? c)`:</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">??</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> c;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// But it actually evaluates as `(a + b) ?? c`. Since `a + b` can never be null,</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// the `?? c` has no effect.</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Programmers coming from a language where objects are compared by value might expect this to work:</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> isEmpty</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [];</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// However, this will always result in `isEmpty` being `false`.</span></span></code></pre></div>',8);function m(b,_,x,f,E,w){const n=i("Badge"),t=i("Alert");return p(),o("div",null,[s("h1",d,[e("eslint/no-constant-binary-expression "),a(n,{type:"info",text:"Correctness"}),e(),k]),s("div",u,[a(t,{class:"default-on",type:"success"},{default:l(()=>[y,e(" This rule is turned on by default. ")]),_:1})]),g])}const D=r(c,[["render",m]]);export{A as __pageData,D as default};
