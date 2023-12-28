import {sidebar} from "vuepress-theme-hope";

export const zhSidebar = sidebar({
    "/": [
        "",
        {
            text: "学习笔记",
            icon: "/assets/icon/note.svg",
            prefix: "studyNotes/",
            link: "studyNotes/",
            children: "structure",
        },
        {
            text: "ChatGPT使用指南",
            icon: "robot",
            prefix: "chatgpt/",
            link: "chatgpt/",
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
            icon: "/assets/icon/note.svg",
            // prefix: "studyNotes/",
            link: "studyNotes/",
            children: "structure",
        },
    ],
    "/chatgpt/":[
        "/",
        {
            text: "ChatGPT使用指南",
            icon: "robot",
            // prefix: "studyNotes/",
            link: "chatgpt/",
            children: "structure",
        }
    ]
});
