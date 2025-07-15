---
title: '在 JS 中导入 JSON 文件'
date: '2022-02-19'
category: '前端'
tags: ['javascript', 'json']
abstract: '在 JavaScript 中，可以通过多种方式导入 JSON 文件，具体取决于运行环境和使用的模块系统。'
---

# 在 JS 中导入 JSON 文件

在 JavaScript 中，可以通过多种方式导入 JSON 文件，具体取决于运行环境（浏览器或 Node.js）和使用的模块系统。

## ES6 模块

在支持 ES6 模块的环境中，可以直接使用 `import` 语法导入 JSON 文件。

```js
// 导入 JSON 文件
import data from './data.json' assert { type: 'json' }

console.log(data) // 输出 JSON 数据内容
```

该方法需要确保以下条件：

- 浏览器中 `<script>` 标签需添加 `type="module"`
- JSON 文件路径正确，且服务器支持 CORS

## 浏览器环境

`fetch()` 是浏览器中常用的网络请求方式，适用于动态加载 JSON 文件。

```js
fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data) // 输出 JSON 数据内容
  })
  .catch(error => {
    console.log('加载失败：', error)
  })
```

该方法的优点是，适合从远程服务器或本地服务器加载文件。

## Node.js 环境

在 Node.js 中，可以使用 `require()` 方法直接导入 JSON 文件。

```js
const data = require('./data.json')

console.log(data) // 输出 JSON 数据内容
```

**该方法仅适用于 Node.js 环境，不适用于浏览器**。

---

:::danger 注意
1. **跨域问题**：在浏览器中加载本地文件时，可能会遇到 CORS 错误。建议使用本地服务器（如 Live Server）。
2. **模块化支持**：使用 `import` 时，需要确保运行环境支持 ES6 模块。
3. **文件路径**：确保路径正确，且文件格式符合标准 JSON 格式。
:::
