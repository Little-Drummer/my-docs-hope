---
title: VuePress-theme-hope使用心得
icon: /assets/icon/note.svg
---
> 本文作者：[程序员小王](https://github.com/Little-Drummer)
>
> 本站地址：[https://little-drummer.github.io/my-docs-hope/](https://little-drummer.github.io/my-docs-hope/)
>
> 项目GitHub地址：[https://github.com/Little-Drummer/my-docs-hope](https://github.com/Little-Drummer/my-docs-hope)
>

## 介绍
**vuepress-theme-hope**是一个**vuepress**主题，它是基于vuepress官方主题进行开发的，它的主要功能是为vuepress提供全方位的增强功能。

VuePress 默认主题只是一个提供基础文档布局的主题。 例如：它不会注入元标记或生成用于 SEO 优化的站点地图。此外，虽然 VuePress 在一定程度上扩展了 Markdown 语法，但仍然缺少一些常用的功能，例如文本对齐、标记、流程图、公式、演示等，同时默认主题提供的一些功能较弱或缺失，如图片预览、代码块复制、目录页等。

在这种情况下，**vuepress-theme-hope** 和一些系列插件就应运诞生。

与默认主题相比，我们不仅大大改进了美观度，而且通过主题插件为 VuePress 提供了全方位的增强功能。

## 安装
在 `[dir]` 文件夹内新建 vuepress-theme-hope 项目:

::: tabs

@tab pnpm
```bash
pnpm create vuepress-theme-hope [dir]
```
@tab npm
```bash
npm init vuepress-theme-hope [dir]
```
:::
添加到现有的项目中

> [!tip]
> 推荐使用pnpm
> 
> 因为 VuePress 和 VuePress Theme Hope 都是通过 pnpm 来管理依赖的。
> pnpm 的一些功能可以保证你拥有正确的依赖，并且它能加速安装。 

## 使用与配置

当安装完毕后，你可以在你的项目中看到如下的目录结构：

```text
.
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
```
默认情况下，VuePress 会假设你的文档位于 `.vuepress/src` 目录下，
如果你想要使用其他的目录，你可以在 `.vuepress/config.js` 中进行配置。

### 修改默认路径为中文
默认情况下,会使用英文作为默认语言，如果你想要使用其他语言，你可以在 `.vuepress/config.js` 中进行配置。

```js
export default defineUserConfig({
    lang: 'zh-CN', // 默认为英文 修改为中文
    // 其他配置
}
)
```

同时, 项目启动后的默认路径也是英文的, 如果要修改为中文
需要将`.vuepress/config.js`中的locales修改为
```ts {3,8}
export default defineUserConfig({
  locales: {
    "/en/": {
      lang: "en-US",
      title: "Docs Demo",
      description: "A docs demo for vuepress-theme-hope",
    },
    "/": {
      lang: "zh-CN",
      title: "标题",
      description: "描述",
    },
  },
  // 其他配置
});
```
还需要将`.vuepress/theme.js`中的locales修改为
```ts {3,17}
export default defineThemeConfig({
    locales: {
        "/en/": {
            // navbar
            navbar: enNavbar,
            // sidebar
            sidebar: enSidebar,
            footer: "Default footer",
            displayFooter: true,
            metaLocales: {
                editLink: "Edit this page on GitHub",
            },
        },
        /**
         * Chinese locale config
         */
        "/": {
            // navbar
            navbar: zhNavbar,
            // sidebar
            sidebar: zhSidebar,
            footer: "默认页脚",
            displayFooter: true,
            // page meta
            metaLocales: {
                editLink: "在 GitHub 上编辑此页",
            },
        },
    }
    // 其他配置
})
```
做完上述修改后,你就可以在`src`目录下创建你的文档了,文档会以`src`目录作为根路径
### 开启GFM 警告
默认情况下,会关闭GFM警告,如果你想要开启GFM警告，你可以在 `.vuepress/theme.js` 中进行配置。

```js
export default hopeTheme({
  plugins: {
    mdEnhance: {
      alert: true, // 开启GFM 警告
    }
  }
})
```
### 开启代码复制
```js
export default hopeTheme({
  plugins: {
    // 其他配置
    copyCode: {}, // 开启代码复制
  }
})
```
### 开启颜色选择器
设置默认主题色
你应该在 .vuepress/styles/palette.scss 中通过 $theme-color 设置站点的默认主题颜色：
```scss
$theme-color: #3eaf7c,
```
想要使用颜色选择器，在 .vuepress/styles/config.scss 中通过 $theme-colors 设置一系列你想要启用的其他主题色：
```scss
$theme-colors: #2196f3, #f26d6d, #fb9b5f;
```
## 侧边栏的配置
你可以在`.vuepress/sidebar/zh.ts`中配置文件的侧边栏
### 字符串格式
你可以填入一个包含多个文件链接的数组，作为侧边栏基本的配置:
```ts
// .vuepress/config.ts
export default defineUserConfig({
  theme: hopeTheme({
    sidebar: ["/zh/README.md", "/zh/guide/README.md", "/zh/config/README.md"],
  }),
});
```
数组的每一项会自动提取对应文件的图标与标题，渲染为一个侧边栏项目。
### 对象格式
如果你想为不同的页面组来显示不同的侧边栏，你需要通过 路径前缀: 侧边栏配置 的格式为侧边栏配置一个对象。
sidebar函数接收一个对象作为参数,对象的key是文件夹的路径,对象的value是一个数组,
数组的每一项是一个对象或者字符串

如果是字符串,则表示字符串所指向的文件夹路径下的README.md文件

如果是对象,则属性如下
```json5
{
    text: "学习笔记", // 侧边栏的标题
    icon: "laptop-code", // 侧边栏的图标
    prefix: "studyNotes/", // 侧边栏的前缀
    link: "/studyNotes/", // 侧边栏的链接
    children: "structure", // 侧边栏的子文件夹
}
```
> [!tip]
> 如果key不是根路径,则必须在link的首位加上`/` 否则会出现bug
>
> children: "structure" 表示自动解析文件夹下的所有文件

### 例子
::: details 这是一个示例
```ts
export const zhSidebar = sidebar({
    "/": [ // 指src目录
        "", // 指向README.md文件
        {
            text: "学习笔记",
            icon: "laptop-code",
            prefix: "studyNotes/",
            link: "studyNotes/",
            children: "structure",
        },
        {
            text: "案例",
            icon: "laptop-code",
            prefix: "demo/",
            link: "demo/",
            children: "structure",
        },
    ],
    "/studyNotes/": [
        "/",
        {
            text: "学习笔记",
            icon: "laptop-code",
            // prefix: "studyNotes/",
            link: "/studyNotes/",
            children: "structure",
        },
    ]
});
```
:::


## 导航栏的配置
你可以在`.vuepress/navbar/zh.ts`中配置导航栏

数组的每一项会自动提取对应文件的图标与标题，渲染为一个导航栏项目。
### 字符串格式
你可以填入一个包含多个文件链接的数组，作为导航栏基本的配置:
```ts
// .vuepress/config.ts
export default defineUserConfig({
  theme: hopeTheme({
    navbar: [
        "/",
        "/studyNotes/",
        // "/demo/",
        {
            text: "测试广阔的世界",
            icon: "/assets/icon/PhLadder.svg",
            link: "https://little-drummer.github.io/IPTest",
        }
    ],
  }),
});
```
> [!tip]
> 如果直接写字符串,则表示字符串所指向的文件夹路径下的README.md文件
> 
> 将其title解析到导航栏中
> 


### 对象格式
同侧边栏一样，如果你想为不同的页面组来显示不同的导航栏，你需要通过 路径前缀: 导航栏配置 的格式为导航栏配置一个对象。
navbar函数接收一个对象作为参数,对象的key是文件夹的路径,对象的value是一个数组,
数组的每一项是一个对象或者字符串





