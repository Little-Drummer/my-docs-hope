import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  lang: 'zh-CN',
  title: '小王笔记站',
  description: "小王笔记站",
  base: "/",
  head: [
    ['link', {rel: 'icon', href: '/favicon.ico'}],
  ],

  locales: {
    "/en/": {
      lang: "en-US",
      title: "Docs Demo",
      description: "A docs demo for vuepress-theme-hope",
    },
    "/": {
      lang: "zh-CN",
      title: "小王笔记站",
      description: "分享一些自学笔记",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
