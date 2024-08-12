import{_ as l,c as h,j as s,a,I as i,w as r,a3 as p,E as e,o}from"./chunks/framework.wOwjnRe1.js";const w=JSON.parse('{"title":"eslint/no-unsafe-finally","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/no-unsafe-finally.md","filePath":"docs/guide/usage/linter/rules/eslint/no-unsafe-finally.md"}'),d={name:"docs/guide/usage/linter/rules/eslint/no-unsafe-finally.md"},c={id:"eslint-no-unsafe-finally",tabindex:"-1"},k=s("a",{class:"header-anchor",href:"#eslint-no-unsafe-finally","aria-label":'Permalink to "eslint/no-unsafe-finally <Badge type="info" text="Correctness" />"'},"​",-1),u={class:"rule-meta"},y=s("span",{class:"emoji"},"✅",-1),E=p(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow control flow statements in finally blocks</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>JavaScript suspends the control flow statements of try and catch blocks until the execution of finally block finishes. So, when return, throw, break, or continue is used in finally, control flow statements inside try and catch are overwritten, which is considered as unexpected behavior.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// We expect this function to return 1;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1 is returned but suspended until finally block ends</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">finally</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 3 is returned before 1, which we did not expect</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &gt; 3</span></span></code></pre></div>`,6);function f(g,_,m,b,x,A){const n=e("Badge"),t=e("Alert");return o(),h("div",null,[s("h1",c,[a("eslint/no-unsafe-finally "),i(n,{type:"info",text:"Correctness"}),a(),k]),s("div",u,[i(t,{class:"default-on",type:"success"},{default:r(()=>[y,a(" This rule is turned on by default. ")]),_:1})]),E])}const v=l(d,[["render",f]]);export{w as __pageData,v as default};
