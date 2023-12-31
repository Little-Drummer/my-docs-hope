> 本文作者：[程序员小王](https://github.com/Little-Drummer)
>
> 本站地址：[https://little-drummer.github.io/my-docs-hope/](https://little-drummer.github.io/my-docs-hope/)
>
> 项目GitHub地址：[https://github.com/Little-Drummer/my-docs-hope](https://github.com/Little-Drummer/my-docs-hope)

# my-docs-hope

这是一个基于vuepress-theme-hope主题的学习笔记网站，主要用于记录学习笔记，以及一些常用工具的使用方法。

## 贡献学习笔记

如果你想要贡献自己的学习笔记，可以按照以下步骤进行：

1. fork本项目到自己的仓库
2. 将你的仓库克隆到本地  
   ```bash
   git clone `你自己的项目地址`
    ```
3. 安装环境和依赖
   1. 安装node.js
   2. 安装pnpm
      ```bash
      npm install -g pnpm
      ```
      
      > [详情可见](src/studyNotes/pnpm使用指南.md)
   3. 使用pnpm在项目根目录下安装依赖
      ```bash
      pnpm install
      ```

4. 在src\studyNotes文件夹下新建一个md文件，文件名为你的学习笔记的标题，比如：`SpringBoot笔记.md`
5. 在新建的md文件中按照以下格式编写你的学习笔记：
   ```markdown
   ---
   title: 你文件的主标题
   index: false
   icon: laptop-code
   ---
   
   ## 二级标题 
   > 请从二级标题开始编写
   ### 三级标题
   其他内容
   :::tabs 
   
   :::
   > 选项卡功能
   ```
6. 在src\studyNotes\README.md文件中添加你的学习笔记的链接，比如：
   ```markdown
   [你文件的主标题](文件名.md)
   ```
7. 在src\README.md文件中的学习笔记部分添加你的学习笔记的链接，比如：
   ```markdown
   [你文件的主标题](studyNotes/文件名.md)
   ```
8. 在你的本地仓库中提交你的修改
   ```bash
   git add .
   git commit -m "你的提交信息"
   ```
9. 提交PR
   1. 然后将你的本地仓库内容推送到你的远程仓库
   2. 最后在你的远程仓库中提交PR(Pull Request)

