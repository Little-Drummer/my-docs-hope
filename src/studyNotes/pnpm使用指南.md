---
title: pnpm使用指南
icon: /assets/icon/note.svg
---

## 介绍
**pnpm**是一个快速、零配置的包管理工具，它的主要功能是用于管理项目中的依赖包，它的优点是：
1. **快速** -> 相较于npm和yarn，pnpm的安装速度更快，因为它会将依赖包安装到一个公共的存储库中，而不是每个项目都安装一份。
2. **省空间** -> 由于pnpm的依赖包是安装到一个公共的存储库中，所以它不会像npm和yarn那样占用大量的空间。
3. **省流量** -> 由于pnpm的依赖包是安装到一个公共的存储库中，所以它不会像npm和yarn那样占用大量的流量。

## 安装
### 使用npm安装
```bash
npm install -g pnpm
```

## 更改镜像源
由于pnpm的默认镜像源是在国外，所以在国内使用pnpm会很慢，所以我们需要更改镜像源，这里以淘宝镜像为例：
### 查看当前镜像源
```bash
pnpm config get registry
```
### 临时修改
```bash
pnpm --registry https://registry.npmmirror.com install axios
```
### 持久修改
```bash
pnpm config set registry https://registry.npmmirror.com
```
### 恢复默认镜像源
```bash
pnpm config set registry https://registry.npmjs.org
```
