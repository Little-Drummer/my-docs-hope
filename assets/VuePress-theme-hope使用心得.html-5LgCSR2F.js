import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as c,o as u,c as d,a as n,b as s,d as a,w as e,e as i}from"./app-RYUK5H5z.js";const k={},v={href:"https://github.com/Little-Drummer",target:"_blank",rel:"noopener noreferrer"},m={href:"https://little-drummer.github.io/my-docs-hope/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/Little-Drummer/my-docs-hope",target:"_blank",rel:"noopener noreferrer"},h=i('<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p><strong>vuepress-theme-hope</strong>是一个<strong>vuepress</strong>主题，它是基于vuepress官方主题进行开发的，它的主要功能是为vuepress提供全方位的增强功能。</p><p>VuePress 默认主题只是一个提供基础文档布局的主题。 例如：它不会注入元标记或生成用于 SEO 优化的站点地图。此外，虽然 VuePress 在一定程度上扩展了 Markdown 语法，但仍然缺少一些常用的功能，例如文本对齐、标记、流程图、公式、演示等，同时默认主题提供的一些功能较弱或缺失，如图片预览、代码块复制、目录页等。</p><p>在这种情况下，<strong>vuepress-theme-hope</strong> 和一些系列插件就应运诞生。</p><p>与默认主题相比，我们不仅大大改进了美观度，而且通过主题插件为 VuePress 提供了全方位的增强功能。</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>在 <code>[dir]</code> 文件夹内新建 vuepress-theme-hope 项目:</p>',7),g=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(" create vuepress-theme-hope "),n("span",{class:"token punctuation"},"["),s("dir"),n("span",{class:"token punctuation"},"]"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(" init vuepress-theme-hope "),n("span",{class:"token punctuation"},"["),s("dir"),n("span",{class:"token punctuation"},"]"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),y=i(`<p>添加到现有的项目中</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>推荐使用pnpm</p><p>因为 VuePress 和 VuePress Theme Hope 都是通过 pnpm 来管理依赖的。 pnpm 的一些功能可以保证你拥有正确的依赖，并且它能加速安装。</p></div><h2 id="使用与配置" tabindex="-1"><a class="header-anchor" href="#使用与配置" aria-hidden="true">#</a> 使用与配置</h2><p>当安装完毕后，你可以在你的项目中看到如下的目录结构：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
├── .github (可选的) → GitHub 配置文件存放路径
│    └── workflow → GitHub 工作流配置
│         └── docs-deploy.yml → 自动部署文档的工作流
│
├── src → 文档文件夹
│    │
│    ├── .vuepress (可选的) → VuePress 配置文件夹
│    │    │
│    │    ├── dist (默认的) → 构建输出目录
│    │    │
│    │    ├── public (可选的) → 静态资源目录
│    │    │
│    │    ├── styles (可选的) → 用于存放样式相关的文件
│    │    │
│    │    ├── config.{js,ts} (可选的) → 配置文件的入口文件
│    │    │
│    │    └── client.{js,ts} (可选的) → 客户端文件
│    │
│    ├── ... → 其他项目文档
│    │
│    └── README.md → 项目主页
│
└── package.json → Nodejs 配置文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下，VuePress 会假设你的文档位于 <code>.vuepress/src</code> 目录下， 如果你想要使用其他的目录，你可以在 <code>.vuepress/config.js</code> 中进行配置。</p><h3 id="修改默认路径为中文" tabindex="-1"><a class="header-anchor" href="#修改默认路径为中文" aria-hidden="true">#</a> 修改默认路径为中文</h3><p>默认情况下,会使用英文作为默认语言，如果你想要使用其他语言，你可以在 <code>.vuepress/config.js</code> 中进行配置。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 默认为英文 修改为中文</span>
    <span class="token comment">// 其他配置</span>
<span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同时, 项目启动后的默认路径也是英文的, 如果要修改为中文 需要将<code>.vuepress/config.js</code>中的locales修改为</p>`,10),q=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  locales`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token string-property property"},'"/en/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      lang`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"en-US"'),n("span",{class:"token punctuation"},","),s(`
      title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Docs Demo"'),n("span",{class:"token punctuation"},","),s(`
      description`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"A docs demo for vuepress-theme-hope"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string-property property"},'"/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      lang`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"zh-CN"'),n("span",{class:"token punctuation"},","),s(`
      title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"标题"'),n("span",{class:"token punctuation"},","),s(`
      description`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"描述"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token comment"},"// 其他配置"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("p",null,[s("还需要将"),n("code",null,".vuepress/theme.js"),s("中的locales修改为")],-1),_=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineThemeConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    locales`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token string-property property"},'"/en/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// navbar"),s(`
            navbar`),n("span",{class:"token operator"},":"),s(" enNavbar"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token comment"},"// sidebar"),s(`
            sidebar`),n("span",{class:"token operator"},":"),s(" enSidebar"),n("span",{class:"token punctuation"},","),s(`
            footer`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Default footer"'),n("span",{class:"token punctuation"},","),s(`
            displayFooter`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
            metaLocales`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                editLink`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Edit this page on GitHub"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token doc-comment comment"},`/**
         * Chinese locale config
         */`),s(`
        `),n("span",{class:"token string-property property"},'"/"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// navbar"),s(`
            navbar`),n("span",{class:"token operator"},":"),s(" zhNavbar"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token comment"},"// sidebar"),s(`
            sidebar`),n("span",{class:"token operator"},":"),s(" zhSidebar"),n("span",{class:"token punctuation"},","),s(`
            footer`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"默认页脚"'),n("span",{class:"token punctuation"},","),s(`
            displayFooter`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token comment"},"// page meta"),s(`
            metaLocales`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                editLink`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"在 GitHub 上编辑此页"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token comment"},"// 其他配置"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=i(`<p>做完上述修改后,你就可以在<code>src</code>目录下创建你的文档了,文档会以<code>src</code>目录作为根路径</p><h3 id="开启gfm-警告" tabindex="-1"><a class="header-anchor" href="#开启gfm-警告" aria-hidden="true">#</a> 开启GFM 警告</h3><p>默认情况下,会关闭GFM警告,如果你想要开启GFM警告，你可以在 <code>.vuepress/theme.js</code> 中进行配置。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">mdEnhance</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">alert</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 开启GFM 警告</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="开启代码复制" tabindex="-1"><a class="header-anchor" href="#开启代码复制" aria-hidden="true">#</a> 开启代码复制</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 其他配置</span>
    <span class="token literal-property property">copyCode</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 开启代码复制</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="开启颜色选择器" tabindex="-1"><a class="header-anchor" href="#开启颜色选择器" aria-hidden="true">#</a> 开启颜色选择器</h3><p>设置默认主题色 你应该在 .vuepress/styles/palette.scss 中通过 $theme-color 设置站点的默认主题颜色：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$theme-color</span></span><span class="token punctuation">:</span> #3eaf7c<span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>想要使用颜色选择器，在 .vuepress/styles/config.scss 中通过 $theme-colors 设置一系列你想要启用的其他主题色：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$theme-colors</span></span><span class="token punctuation">:</span> #2196f3<span class="token punctuation">,</span> #f26d6d<span class="token punctuation">,</span> #fb9b5f<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="侧边栏的配置" tabindex="-1"><a class="header-anchor" href="#侧边栏的配置" aria-hidden="true">#</a> 侧边栏的配置</h2><p>你可以在<code>.vuepress/sidebar/zh.ts</code>中配置文件的侧边栏</p><h3 id="字符串格式" tabindex="-1"><a class="header-anchor" href="#字符串格式" aria-hidden="true">#</a> 字符串格式</h3><p>你可以填入一个包含多个文件链接的数组，作为侧边栏基本的配置:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/config.ts</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  theme<span class="token operator">:</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    sidebar<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/zh/README.md&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/zh/guide/README.md&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/zh/config/README.md&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数组的每一项会自动提取对应文件的图标与标题，渲染为一个侧边栏项目。</p><h3 id="对象格式" tabindex="-1"><a class="header-anchor" href="#对象格式" aria-hidden="true">#</a> 对象格式</h3><p>如果你想为不同的页面组来显示不同的侧边栏，你需要通过 路径前缀: 侧边栏配置 的格式为侧边栏配置一个对象。 sidebar函数接收一个对象作为参数,对象的key是文件夹的路径,对象的value是一个数组, 数组的每一项是一个对象或者字符串</p><p>如果是字符串,则表示字符串所指向的文件夹路径下的README.md文件</p><p>如果是对象,则属性如下</p><div class="language-json5 line-numbers-mode" data-ext="json5"><pre class="language-json5"><code><span class="token punctuation">{</span>
    <span class="token property unquoted">text</span><span class="token operator">:</span> <span class="token string">&quot;学习笔记&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 侧边栏的标题</span>
    <span class="token property unquoted">icon</span><span class="token operator">:</span> <span class="token string">&quot;laptop-code&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 侧边栏的图标</span>
    <span class="token property unquoted">prefix</span><span class="token operator">:</span> <span class="token string">&quot;studyNotes/&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 侧边栏的前缀</span>
    <span class="token property unquoted">link</span><span class="token operator">:</span> <span class="token string">&quot;/studyNotes/&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 侧边栏的链接</span>
    <span class="token property unquoted">children</span><span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 侧边栏的子文件夹</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果key不是根路径,则必须在link的首位加上<code>/</code> 否则会出现bug</p><p>children: &quot;structure&quot; 表示自动解析文件夹下的所有文件</p></div><h3 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h3><details class="hint-container details"><summary>这是一个示例</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> zhSidebar <span class="token operator">=</span> <span class="token function">sidebar</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">// 指src目录</span>
        <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 指向README.md文件</span>
        <span class="token punctuation">{</span>
            text<span class="token operator">:</span> <span class="token string">&quot;学习笔记&quot;</span><span class="token punctuation">,</span>
            icon<span class="token operator">:</span> <span class="token string">&quot;laptop-code&quot;</span><span class="token punctuation">,</span>
            prefix<span class="token operator">:</span> <span class="token string">&quot;studyNotes/&quot;</span><span class="token punctuation">,</span>
            link<span class="token operator">:</span> <span class="token string">&quot;studyNotes/&quot;</span><span class="token punctuation">,</span>
            children<span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            text<span class="token operator">:</span> <span class="token string">&quot;案例&quot;</span><span class="token punctuation">,</span>
            icon<span class="token operator">:</span> <span class="token string">&quot;laptop-code&quot;</span><span class="token punctuation">,</span>
            prefix<span class="token operator">:</span> <span class="token string">&quot;demo/&quot;</span><span class="token punctuation">,</span>
            link<span class="token operator">:</span> <span class="token string">&quot;demo/&quot;</span><span class="token punctuation">,</span>
            children<span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;/studyNotes/&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            text<span class="token operator">:</span> <span class="token string">&quot;学习笔记&quot;</span><span class="token punctuation">,</span>
            icon<span class="token operator">:</span> <span class="token string">&quot;laptop-code&quot;</span><span class="token punctuation">,</span>
            <span class="token comment">// prefix: &quot;studyNotes/&quot;,</span>
            link<span class="token operator">:</span> <span class="token string">&quot;/studyNotes/&quot;</span><span class="token punctuation">,</span>
            children<span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="导航栏的配置" tabindex="-1"><a class="header-anchor" href="#导航栏的配置" aria-hidden="true">#</a> 导航栏的配置</h2><p>你可以在<code>.vuepress/navbar/zh.ts</code>中配置导航栏</p><p>数组的每一项会自动提取对应文件的图标与标题，渲染为一个导航栏项目。</p><h3 id="字符串格式-1" tabindex="-1"><a class="header-anchor" href="#字符串格式-1" aria-hidden="true">#</a> 字符串格式</h3><p>你可以填入一个包含多个文件链接的数组，作为导航栏基本的配置:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/config.ts</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  theme<span class="token operator">:</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    navbar<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;/studyNotes/&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// &quot;/demo/&quot;,</span>
        <span class="token punctuation">{</span>
            text<span class="token operator">:</span> <span class="token string">&quot;测试广阔的世界&quot;</span><span class="token punctuation">,</span>
            icon<span class="token operator">:</span> <span class="token string">&quot;/assets/icon/PhLadder.svg&quot;</span><span class="token punctuation">,</span>
            link<span class="token operator">:</span> <span class="token string">&quot;https://little-drummer.github.io/IPTest&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果直接写字符串,则表示字符串所指向的文件夹路径下的README.md文件</p><p>将其title解析到导航栏中</p></div><h3 id="对象格式-1" tabindex="-1"><a class="header-anchor" href="#对象格式-1" aria-hidden="true">#</a> 对象格式</h3><p>同侧边栏一样，如果你想为不同的页面组来显示不同的导航栏，你需要通过 路径前缀: 导航栏配置 的格式为导航栏配置一个对象。 navbar函数接收一个对象作为参数,对象的key是文件夹的路径,对象的value是一个数组, 数组的每一项是一个对象或者字符串</p>`,34);function w(E,N){const t=c("ExternalLinkIcon"),l=c("Tabs");return u(),d("div",null,[n("blockquote",null,[n("p",null,[s("本文作者："),n("a",v,[s("程序员小王"),a(t)])]),n("p",null,[s("本站地址："),n("a",m,[s("https://little-drummer.github.io/my-docs-hope/"),a(t)])]),n("p",null,[s("项目GitHub地址："),n("a",b,[s("https://github.com/Little-Drummer/my-docs-hope"),a(t)])])]),h,a(l,{id:"32",data:[{id:"pnpm"},{id:"npm"}]},{title0:e(({value:p,isActive:o})=>[s("pnpm")]),title1:e(({value:p,isActive:o})=>[s("npm")]),tab0:e(({value:p,isActive:o})=>[g]),tab1:e(({value:p,isActive:o})=>[f]),_:1}),y,q,x,_,j])}const A=r(k,[["render",w],["__file","VuePress-theme-hope使用心得.html.vue"]]);export{A as default};
