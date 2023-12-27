import {sidebar} from "vuepress-theme-hope";

export const zhSidebar = sidebar({
    "/": [
        "",
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
            link: "studyNotes/",
            children: "structure",
        },
    ]
});
