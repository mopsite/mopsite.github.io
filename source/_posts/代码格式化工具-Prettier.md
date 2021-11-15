---
title: 代码格式化工具-Prettier
date: 2021-11-15 19:49:15
categories: 开发
tags: 插件
---

Prettier 的中文意思是“漂亮的、机灵的”，它也是一个流行的代码格式化工具的名称，它能够解析代码，使用你自己设定的规则来重新打印出格式规范的代码。

Prettier 具有可配置化、支持多种语言、继承多数的编辑器、简洁的配置项等优点。

使用 Prettier 时不需要再讨论代码样式，节省了时间与精力。

<!-- more -->

### Print Width

**单行代码的最大宽度**

|默认值|命令行参数|配置格式|
|:---:|---|---|
|80|--print-width \<int\>|printWidt: \<int\>|

指定代码行的行长度。单行代码宽度超过指定的最大宽度，将会换行。

如果在格式化 Markdown 时不想要换行，可以设置 Prose Wrap（是否换行）选项来禁用它。

### Tab Width

**设置代码每一个水平缩进的空格数**

|默认值|命令行参数|配置格式|
|:---:|---|---|
|2|--tab-width \<int\>|tabWidth: \<int\>|

### Tabs

**使用 tab（制表符）缩进而非空格**

|默认值|命令行参数|配置格式|
|:---:|---|---|
|false|--use-tabs|useTabs: \<bool\>|

### Semicolons

**在语句末尾添加分号**

|默认值|命令行参数|配置格式|
|:---:|---|---|
|true|--no-semi|semi: \<bool\>|

- true：在每一条语句后面添加分号

- false：只在有可能导致 ASI 错误的行首添加分号

### Quoter

**使用单引号而非双引号**

|默认值|命令行参数|配置格式|
|:---:|---|---|
|false|--no-semi|semi: \<bool\>|

### Quote Props

**改变对象属性的引号**

|默认值|命令行参数|配置格式|
|:---:|---|---|
|"as-needed"|--quote-props \<as-needed \| consistent \| preserve\>|quoteProps: "\<as-needed \| consistent \| preserve\>"|

- as-need：尽在需要时在对象属性周围添加引号

- consistent：如果对象中的至少一个属性需要加引号，就对所有属性加引号

- preserve：按照对象属性中引号的输入用法

### JSX Quoter

**在 JSX 中使用单引号**

|默认值|命令行参数|配置格式|
|:---:|---|---|
|false|--jsx-single-quote|jsxSingleQuote: \<bool\>|

### Trailing Commas

**在任何可能的多行中输入尾逗号**

|默认值|命令行参数|配置格式|
|:---:|---|---|
|"es5"|--trailing-comma \<es5 \| none \| all\>|trailingComma: "\<es5 \| none \| all\>"|

- none：无尾逗号

- es5：添加 es5 中被支持的尾逗号

- all：所有可能的地方都被添加尾逗号

### Bracket Spacing

**括号空格**

|默认值|命令行参数|配置格式|
|:---:|---|---|
|true|--no-bracket-spacing|bracketSpacing: \<bool\>|

- true：格式化结果为`{ foo: bar }`

- false：格式化结果为`{foo: bar}`

### Bracket Line

**在多行 HTML 元素最后一行的末尾添加`>`，使`>`单独一行（不适用于自闭合元素）**

|默认值|命令行参数|配置格式|
|:---:|---|---|
|false|--bracket-same-line|bracketSameLine: \<bool\>|

- true：格式化结果为

  ```html
  <button
    className="prettier-class"
    id="prettier-id"
    onClick={this.handleClick}>
    Click Here
  </button>
  ```

- false：格式化结果为

  ```html
  <button
    className="prettier-class"
    id="prettier-id"
    onClick={this.handleClick}
  >
    Click Here
  </button>
  ```

### Arrow Function Parentheses

**为单行箭头行数的参数添加圆括号**

|默认值|命令行参数|配置格式|
|:---:|---|---|
|"always"|--arrow-parens \<always \| avoid\>|arrowParens: "\<always \| avoid\>"|

- true：格式化结果为`x => x`

- false：格式化结果为`(x) => x`

### Range

**只格式化某个文件的一部分**

|默认值|命令行参数|配置格式|
|:---:|---|---|
|0|--range-start \<int\>|rangeStart: \<int\>|
|Infinity|--range-end \<int\>|rangeEnd: \<int\>|

这两个参数可以用于从指定起止偏移字符（单独指定开始或结束、两者同时指定、分别指定）格式化代码。

以下情况，范围将会扩展：

- 回退至包含选中语句的第一行的开始

- 向前知道选中语句的末尾

注意：这些参数不可以与 cursorOffset 共用。

### Parser

**指定使用哪一种解析器**

|默认值|命令行参数|配置格式|
|:---:|---|---|
|None|--parser \<string\><br>--parser ./my-parser|parser: "\<string\>"<br>parser: require("./my-parser")|

Prettier 会自动从输入文件路径推断出解析器，因此不必更改此设置。

Babel 和 Flow 解析器都支持相同的 JavaScript 功能集（包括 Flow 类型注释）。

在某些情况下它们可能会有所不同，因此，如果遇到其中一种情况，可以尝试使用 Flow 代替 Babel。

TypeScript 和 Babel-TS 几乎相同。Babel-TS 可能支持 TypeScript 尚不支持的 JavaScript 功能，但与无效的代码相比，它的宽松性较低，并且比 TypeScript 分析器少了经过测试的考验。

参数：

- "babel"

- "babel-flow"

- "babel-ts"

- "flow"

- "typescript"

- "espree"

- "meriyah"

- "css"

- "scss"

- "less"

- "json"

- "json5"

- "json-stringify"

- "graphql"

- "markdown"

- "mdx"

- "html"

- "vue"

- "angular"

- "lwc"

- "yaml"

### File Path

**指定文件的输入路径，者将被用于解析器参照**

|默认值|命令行参数|配置格式|
|:---:|---|---|
|None|--stdin-filepath \<string\>|filepath: "\<string\>"|

示例：使用 postcss 解析器

```
cat foo | prettier --stdin-filepath foo.css
```

### Require Pragma

**严格按照文件顶部的一些特殊的注释格式化代码**

|默认值|命令行参数|配置格式|
|:---:|---|---|
|false|--require-pragma|requirePragma: \<bool\>|

例如，当提供了 --require-pragma 时，具有以下内容作为其第一注释的文件将被格式化：

```
/**
 * @prettier
 */
```

```
/**
 * @format
 */
```

### Insert Pragma

**在文件的顶部插入一个`@format`的特殊注释，已表明该文件已经被 Prettier 格式化过了**

|默认值|命令行参数|配置格式|
|:---:|---|---|
|false|--insert-pragma|insertPragma: \<bool\>|

在使用 --require-pragma 参数处理一连串的文件时，这个功能将十分有用。

如果文件顶部已经有一个 doclock，这个选项将新建一行注释，并打上`@format`标记。

### Prose Wrap

**文本样式进行折行**

|默认值|命令行参数|配置格式|
|:---:|---|---|
|"preserve"|--prose-wrap \<always \| never \| preserve\>|proseWrap: "\<always \| never \| preserve\>"|

默认情况下，Prettier 会因为使用了一些折行敏感性的渲染器（如 GitHub comment 和 BitBucket）而按照 Markdown 文本样式进行折行。但在某些情况下，你可能只是希望这个文本在编辑器或查看器中，当屏幕放不下时发生软这行，所以这以参数允许设为 never。

有效参数：

- always：当超出 [Print Width](#print-width) 时就折行

- never：不折行

- perserve：按照文件原样折行

### HTML Whitespace Sensitivity

**为 HTML、Vue、Angular 和 Handlebars 指定全局空白敏感度**

|默认值|命令行参数|配置格式|
|:---:|---|---|
|"css"|--html-whitespace-sensitivity \<css \| strict \| ignore\>|htmlWhitespaceSensitivity: "\<css \| strict \| ignore\>"|

有效参数：

- css：遵守 CSS 显示属性的默认值

- strict：空格被认为是敏感的

- ignore：空格被认为是不敏感的

### Vue files script and style tags indentation

**是否缩进 Vue 文件代码中的`<script>`和`<style>`标签**

|默认值|命令行参数|配置格式|
|:---:|---|---|
|false|--vue-indent-script-and-style|vueIndentScriptAndStyle: \<bool\>|

### End of Line

**设置统一的行结尾样式**

|默认值|命令行参数|配置格式|
|:---:|---|---|
|"lf"|--end-of-line \<lf \| crlf \| cr \| auto\>|endOfLine: "\<lf \| crlf \| cr \| auto\>"|

有效参数：

- lf：仅换行（\\n），在 Linux 和 macOS 以及 git repos 内部通用

- crlf：回车符 + 换行（\\r \\n），在 Windows 上很常见

- cr：仅回车符（\\r），很少使用

- auto：保持现有的行尾
