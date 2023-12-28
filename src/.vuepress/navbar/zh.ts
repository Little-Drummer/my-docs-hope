import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  "/studyNotes/",
  // "/demo/",
  {
    text: "测试广阔的世界",
    icon: "/assets/icon/PhLadder.svg",
    link: "https://little-drummer.github.io/IPTest",
  }
  // {
  //   text: "指南",
  //   icon: "lightbulb",
  //   prefix: "/guide/",
  //   children: [
  //     {
  //       text: "Bar",
  //       icon: "lightbulb",
  //       prefix: "bar/",
  //       children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
  //     },
  //     {
  //       text: "Foo",
  //       icon: "lightbulb",
  //       prefix: "foo/",
  //       children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
  //     },
  //   ],
  // },
]);
