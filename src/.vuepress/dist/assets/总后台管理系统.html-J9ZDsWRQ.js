import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o as p,c as o,a as n,b as s,e as c,d as l}from"./app-k5MDDvFc.js";const i={},u=n("h2",{id:"项目详情",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#项目详情","aria-hidden":"true"},"#"),s(" 项目详情")],-1),r={href:"https://admin.shangboyx.com/",target:"_blank",rel:"noopener noreferrer"},k=l(`<p>账号：尚博严选</p><p>密码：654321</p><h2 id="系统切换" tabindex="-1"><a class="header-anchor" href="#系统切换" aria-hidden="true">#</a> 系统切换</h2><p>预期架构：菜单栏显示 “抖音”/“快手” 切换，点击切换系统（两套路由菜单）。根据 auth_type 字段确定权限。</p><p>权限类型：抖音 1，快手 2，全部 3</p><p>综合因素：新开发的快手系统与原始抖音系统的接口与字段完全不一样，如果按照两套系统切换的模式去开发，相当于是重构出一个新项目，成本会很高，耗时也会很长；而且项目庞大，性能也会比较差；一些不需要双系统的页面也会产生大量重复代码，造成性能上的浪费。考虑到项目需要尽快投入使用，我们改变了架构模式，但是也在用户体验方面尽量做到最好。</p><p>最终架构：我们最终采用的架构模式是在需要双系统的页面，添加一个 tab 栏，并且在原来只有一个 “抖音” 路由的基础上添加一个 “快手” 路由，并显示在菜单栏中，然后通过路由跳转的方式来切换两个页面，从而达到切换系统的效果。如果只有抖音的权限，那么切换到快手，会显示一个 NotPermission 的页面，反之是一样的。</p><p>难点1：需要用到两个变量来存储 auth_type 字段，一个用于绑定 tab 栏的切换与记录状态，由于它是经常要变的值，而权限值是不能改变的，所以还需要一个只读（只在接口返回时赋值一次）的变量来作为真正的权限常量。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/* store/user.ts */</span>

<span class="token comment">// 1 抖音 2 快手 3 全部</span>

<span class="token comment">// 用于切换</span>
<span class="token keyword">const</span> globalIndex <span class="token operator">=</span> <span class="token generic-function"><span class="token function">ref</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token number">1</span> <span class="token operator">|</span> <span class="token number">2</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&quot;globalIndex&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment">// 组件内只读</span>
<span class="token keyword">const</span> auth_type <span class="token operator">=</span> <span class="token generic-function"><span class="token function">ref</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token number">1</span> <span class="token operator">|</span> <span class="token number">2</span> <span class="token operator">|</span> <span class="token number">3</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment">// ...</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>userInfo<span class="token punctuation">.</span>value<span class="token punctuation">.</span>company<span class="token punctuation">.</span>auth_type <span class="token operator">===</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 由于 tab 栏绑定的数据只有 1 和 2，假如将 3 赋值给 globalIndex，那么 tab 栏将失效</span>
  <span class="token comment">// globalIndex.value = userInfo.value.company.auth_type</span>
  auth_type<span class="token punctuation">.</span>value <span class="token operator">=</span> userInfo<span class="token punctuation">.</span>value<span class="token punctuation">.</span>company<span class="token punctuation">.</span>auth_type
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">// 正常情况下将 auth_type 都保存给这两个变量</span>
  globalIndex<span class="token punctuation">.</span>value <span class="token operator">=</span> userInfo<span class="token punctuation">.</span>value<span class="token punctuation">.</span>company<span class="token punctuation">.</span>auth_type <span class="token keyword">as</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token number">2</span>
  auth_type<span class="token punctuation">.</span>value <span class="token operator">=</span> userInfo<span class="token punctuation">.</span>value<span class="token punctuation">.</span>company<span class="token punctuation">.</span>auth_type
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>难点2：由于 tab 栏是公共组件，放在 layout 页面中的，所以在不同的路由页面中点击切换是不知道要跳转到哪个路由页面的，通过传参的方式也不太方便。我想到一个办法，如果我在抖音授权管理页面，那么我就定义一个变量，保存快手授权管理页面的路径；反之，在快手授权管理页面就保存抖音授权管理页面的路径。每两个相关权限的页面都有这样的变量，表示可能（切换时）要跳转的路由页面。这样，不管我在任何双权限的页面，点击 tab 栏的另一个，只会跳转到对应的 “抖音”/“快手” 页面。这样的一个变量，需要能在 layout 页面，以及各个路由页面都能使用，所以它是一个全局的响应式变量，所以我将它存储在 hooks 中，更方便使用。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/* hooks/useToPath.ts */</span>

<span class="token comment">// 要去的路径，在抖音去快手，在快手去抖音</span>
<span class="token keyword">const</span> toPath <span class="token operator">=</span> <span class="token generic-function"><span class="token function">ref</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">useToPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> toPath <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/* layouts/Layout.vue */</span>

<span class="token comment">// tab 栏点击 “抖音”/“快手” 切换</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span>tab<span class="token operator">:</span> TabsPaneContext<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 如果当前就在抖音，就不能再切换到抖音</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>userStore<span class="token punctuation">.</span>globalIndex <span class="token operator">===</span> tab<span class="token punctuation">.</span>props<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token keyword">return</span>
  <span class="token keyword">else</span> <span class="token punctuation">{</span>
    router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> path<span class="token operator">:</span> toPath<span class="token punctuation">.</span>value <span class="token punctuation">}</span><span class="token punctuation">)</span>
    
    userStore<span class="token punctuation">.</span>globalIndex <span class="token operator">=</span> tab<span class="token punctuation">.</span>props<span class="token punctuation">.</span>name <span class="token keyword">as</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token number">2</span>
    <span class="token comment">// 本地存储，防止刷新时丢失状态</span>
    localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&quot;globalIndex&quot;</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span> userStore<span class="token punctuation">.</span>globalIndex <span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/* views/ConfigurationManagement/AuthorizationManagement/TikTokAuthorizationManagement/index.vue */</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> toPath <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useToPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 进入抖音页面，记录状态为 1</span>
  userStore<span class="token punctuation">.</span>globalIndex <span class="token operator">=</span> <span class="token number">1</span>
  
  <span class="token comment">// 记录可能会通过 tab 栏切换的路径为对应快手页面的路径</span>
  toPath<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&quot;ks-authorization-management&quot;</span>
  
  <span class="token comment">// 默认是跳到抖音，如果权限是2，跳到快手</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>userStore<span class="token punctuation">.</span>auth_type <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&quot;ks-authorization-management&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/* views/ConfigurationManagement/AuthorizationManagement/KSAuthorizationManagement/index.vue */</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> toPath <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useToPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 进入快手页面，记录状态为 2</span>
  userStore<span class="token punctuation">.</span>globalIndex <span class="token operator">=</span> <span class="token number">2</span>
  
  <span class="token comment">// 记录可能会通过 tab 栏切换的路径为对应抖音页面的路径</span>
  toPath<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&quot;tik-tok-authorization-management&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function d(m,v){const a=e("ExternalLinkIcon");return p(),o("div",null,[u,n("p",null,[s("在线地址："),n("a",r,[s("https://admin.shangboyx.com/"),c(a)])]),k])}const h=t(i,[["render",d],["__file","总后台管理系统.html.vue"]]);export{h as default};
