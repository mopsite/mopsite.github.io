---
title: 'VitePress 时间线插件'
date: '2025-06-23'
category: '插件'
tags: ['vitepress']
detail: '在 VitePress 中使用 markdown 语法，可以渲染为时间线（时间轴）样式。'
---

# VitePress 时间线插件

[vitepress-markdown-timeline](https://github.com/HanochMa/vitepress-markdown-timeline) 插件让你可以在 VitePress 中使用 markdown 语法，并将其渲染为时间线（时间轴）样式。

## 安装

::: code-group

```sh [npm]
npm install vitepress-markdown-timeline
```

```sh [pnpm]
pnpm add vitepress-markdown-timeline
```

```sh [yarn]
yarn add vitepress-markdown-timeline
```

:::

## 引入

先在 `.vitepress/config.ts` 中注册 markdown 解析插件：

```ts{1,6} [.vitepress/config.ts]
import timeline from 'vitepress-markdown-timeline'

export default {
  markdown: {
    config: (md) => {
      md.use(timeline)
    }
  }
}
```

然后在 `.vitepress/theme/index.ts` 中引入时间线样式：

```ts{2} [.vitepress/theme/index.ts]
import Theme from 'vitepress/theme'
import 'vitepress-markdown-timeline/dist/theme/index.css'

export default Theme
```

## 使用

在 markdown 文件中以 `::: timeline 时间` 开头，并以 `:::` 结尾，中间插入内容即可（内容中可使用任何 markdown 语法）。

- 输入

  ```md
  ::: timeline 2023-05-24
  - **do some thing1**
  - do some thing2
  :::

  ::: timeline 2023-05-23
  do some thing3
  do some thing4
  :::
  ```

- 输出

  ::: timeline 2023-05-24
  - **do some thing1**
  - do some thing2
  :::

  ::: timeline 2023-05-23
  do some thing3
  do some thing4
  :::
