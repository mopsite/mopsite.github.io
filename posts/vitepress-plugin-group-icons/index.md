---
title: 'VitePress 代码块图标插件'
date: '2025-07-22'
category: '插件'
tags: ['vitepress']
abstract: '该插件用于增强 VitePress 的代码块功能。可以自动填充代码块缺少的产品图标。'
---

# VitePress 代码块图标插件

[vitepress-plugin-group-icons](https://github.com/yuyinws/vitepress-plugin-group-icons) 插件用于增强 VitePress 的代码块功能。可以自动填充代码块缺少的产品图标。

## 入门

### 安装

::: code-group

```sh [npm]
$ npm install vitepress-plugin-group-icons
```

```sh [yarn]
$ yarn add vitepress-plugin-group-icons
```

```sh [pnpm]
$ pnpm add vitepress-plugin-group-icons
```

```sh [bun]
$ bun add vitepress-plugin-group-icons
```

:::

### 配置

```js{2-5,10,14} [.vitepress/config.js]
import { defineConfig } from 'vitepress'
import {
  groupIconMdPlugin,
  groupIconVitePlugin
} from 'vitepress-plugin-group-icons'

export default defineConfig({
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin)
    }
  },
  vite: {
    plugins: [groupIconVitePlugin()]
  }
})
```

```js{2} [.vitepress/theme/index.js]
import Theme from 'vitepress/theme'
import 'virtual:group-icons.css'

export default Theme
```

## 用法

### 填充图标

自动填充代码块缺少的产品图标。

- 输入

  ````md
  ::: code-group

  ```sh [npm]
  npm install vitepress-plugin-group-icons
  ```

  ```sh [yarn]
  yarn add vitepress-plugin-group-icons
  ```

  ```sh [pnpm]
  pnpm add vitepress-plugin-group-icons
  ```

  ```sh [bun]
  bun add vitepress-plugin-group-icons
  ```

  :::
  ````

- 输出

  ::: code-group

  ```sh [npm]
  npm install vitepress-plugin-group-icons
  ```

  ```sh [yarn]
  yarn add vitepress-plugin-group-icons
  ```

  ```sh [pnpm]
  pnpm add vitepress-plugin-group-icons
  ```

  ```sh [bun]
  bun add vitepress-plugin-group-icons
  ```

  :::

### 标题栏

为代码块添加带有图标和名称的标题栏。

- 输入

  ````md
  ```js [vite.config.js]
  import legacy from '@vitejs/plugin-legacy'
  import { defineConfig } from 'vite'

  export default defineConfig({
    plugins: [
      legacy({
        targets: ['defaults', 'not IE 11']
      })
    ]
  })
  ```
  ````

- 输出

  ```js [vite.config.js]
  import legacy from '@vitejs/plugin-legacy'
  import { defineConfig } from 'vite'

  export default defineConfig({
    plugins: [
      legacy({
        targets: ['defaults', 'not IE 11']
      })
    ]
  })
  ```

### 内置图标

#### 包管理器

::: code-group

```sh [npm]

```

```sh [yarn]

```

```sh [pnpm]

```

```sh [bun]

```

```sh [deno]

```

:::

#### 框架

::: code-group

```[Vue]

```

```[React]

```

```[Angular]

```

```[Nuxt]

```

```[Next]

```

```[Svelte]

```

```[Solid]

```

```[Astro]

```

:::

#### 打包器

::: code-group

```[Rollup]

```

```[Webpack]

```

```[Vite]

```

```[esbuild]

```

:::

#### 配置文件

::: code-group

```[package.json]

```

```[tsconfig.json]

```

```[eslint.config.json]

```

```[.gitignore]

```

```[.env]

```

```[.vscode/settings.json]

```

```[tailwind.config.json]

```

```[unocss.config.json]

```

```[.oxlintrc.json]

```

:::

#### 文件扩展名

::: code-group

```[foo.js]

```

```[foo.ts]

```

```[foo.md]

```

```[foo.py]

```

```[foo.yml]

```

```[foo.html]

```

```[foo.css]

```

```[foo.scss]

```

```[foo.ico]

```

:::

::: details 图标映射

```ts
export const builtinIcons = {
  // package managers
  pnpm: 'vscode-icons:file-type-light-pnpm',
  npm: 'vscode-icons:file-type-npm',
  yarn: 'vscode-icons:file-type-yarn',
  bun: 'vscode-icons:file-type-bun',
  deno: 'vscode-icons:file-type-deno',
  // frameworks
  vue: 'vscode-icons:file-type-vue',
  svelte: 'vscode-icons:file-type-svelte',
  angular: 'vscode-icons:file-type-angular',
  react: 'vscode-icons:file-type-reactjs',
  next: 'vscode-icons:file-type-light-next',
  nuxt: 'vscode-icons:file-type-nuxt',
  solid: 'logos:solidjs-icon',
  astro: 'vscode-icons:file-type-light-astro',
  // bundlers
  rollup: 'vscode-icons:file-type-rollup',
  webpack: 'vscode-icons:file-type-webpack',
  vite: 'vscode-icons:file-type-vite',
  esbuild: 'vscode-icons:file-type-esbuild',
  // configuration files
  'package.json': 'vscode-icons:file-type-node',
  'tsconfig.json': 'vscode-icons:file-type-tsconfig',
  '.npmrc': 'vscode-icons:file-type-npm',
  '.editorconfig': 'vscode-icons:file-type-editorconfig',
  '.eslintrc': 'vscode-icons:file-type-eslint',
  '.eslintignore': 'vscode-icons:file-type-eslint',
  'eslint.config': 'vscode-icons:file-type-eslint',
  '.gitignore': 'vscode-icons:file-type-git',
  '.gitattributes': 'vscode-icons:file-type-git',
  '.env': 'vscode-icons:file-type-dotenv',
  '.env.example': 'vscode-icons:file-type-dotenv',
  '.vscode': 'vscode-icons:file-type-vscode',
  'tailwind.config': 'vscode-icons:file-type-tailwind',
  'uno.config': 'vscode-icons:file-type-unocss',
  'unocss.config': 'vscode-icons:file-type-unocss',
  '.oxlintrc': 'vscode-icons:file-type-oxlint',
  'vue.config': 'vscode-icons:file-type-vueconfig',
  // filename extensions
  '.mts': 'vscode-icons:file-type-typescript',
  '.cts': 'vscode-icons:file-type-typescript',
  '.ts': 'vscode-icons:file-type-typescript',
  '.tsx': 'vscode-icons:file-type-typescript',
  '.mjs': 'vscode-icons:file-type-js',
  '.cjs': 'vscode-icons:file-type-js',
  '.json': 'vscode-icons:file-type-json',
  '.js': 'vscode-icons:file-type-js',
  '.jsx': 'vscode-icons:file-type-js',
  '.md': 'vscode-icons:file-type-markdown',
  '.py': 'vscode-icons:file-type-python',
  '.ico': 'vscode-icons:file-type-favicon',
  '.html': 'vscode-icons:file-type-html',
  '.css': 'vscode-icons:file-type-css',
  '.scss': 'vscode-icons:file-type-scss',
  '.yml': 'vscode-icons:file-type-light-yaml',
  '.yaml': 'vscode-icons:file-type-light-yaml',
  '.php': 'vscode-icons:file-type-php'
}
```

:::

### 自定义图标

你可以从 [iconify](https://icon-sets.iconify.design/)、本地 svg 文件或 url 添加任何图标。

```js{2-6,11,16-26} [.vitepress/config.ts]
import { defineConfig } from 'vitepress'
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
  localIconLoader
} from 'vitepress-plugin-group-icons'

export default defineConfig({
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin)
    }
  },
  vite: {
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          '.mdx': 'vscode-icons:file-type-light-mdx',
          babel: 'vscode-icons:file-type-babel',
          vitepress: localIconLoader(
            import.meta.url,
            '../assets/vitepress.svg'
          ),
          unplugin: 'https://unplugin.unjs.io/logo_light.svg'
        }
      })
    ]
  }
})
```

::: code-group

```[foo.mdx]

```

```[Babel]

```

```[VitePress]

```

```[Unplugin]

```

:::

### 命名图标

你还可以通过使用 `~icon~` 语法来使用命名图标。

- 输入

  ````md{1}
  ```[Docker ~vscode-icons:file-type-docker2~]
  Docker
  ```
  ````

- 输出

  ```[Docker ~vscode-icons:file-type-docker2~]
  Docker
  ```

### 默认标签

`defaultLabels` 选项允许你预加载特定标签的图标，确保它们在你的 CSS 中可用，即使它们没有出现在你当前的文档页面中。

```js{2-5,10,15-17}
import { defineConfig } from 'vitepress'
import {
  groupIconMdPlugin,
  groupIconVitePlugin
} from 'vitepress-plugin-group-icons'

export default defineConfig({
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin)
    }
  },
  vite: {
    plugins: [
      groupIconVitePlugin({
        defaultLabels: ['npm', 'yarn', 'pnpm', 'bun', 'deno']
      })
    ]
  }
})
```
