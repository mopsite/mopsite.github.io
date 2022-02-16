---
title: JavaScript颜色处理库-Chroma.js
date: 2022-02-16 17:24:52
categories: 前端
tags: JS库
---

许多开发人员用 CS 设计颜色代码和比例，从一些在线调色板中选择颜色。然而，它并不是每个人都喜欢的工具。好消息是我们有 Chroma.js，这是一个很小的库，对于在 JavaScript 代码中生成色阶有很大帮助。这意味着你可以直接将其插入到 JavaScript 代码框架中！

<!-- more -->

chroma.js 是一个很小的、零依赖的 JavaScript 库，可以用于各种颜色的转换。

## 安装

对于 Node.js，使用`npm install chroma-js`命令安装 chroma-js npm 模块，然后使用`import chroma from "chroma-js"`命令将其导入到你的 JavaScript 中。

对于浏览器，请下载 chroma.min.js 文件，或使用 [cdnjs](https://cdnjs.com/libraries/chroma-js) 上的托管版本，即可启动并操作颜色。

```js
chroma('#D4F880').darken().hex(); // #9BC04B
```

## 快速开始

以下是 chroma.js 能为你做的几件事：

- 从各种格式中读取颜色
- 分析和处理颜色
- 将颜色转换为多种格式
- 不同颜色中的线性和贝塞尔插值

这里有一个简单的读取/操作/输出链的示例：

```js
chroma('pink').darken().saturate(2).hex()
```

除此之外，chroma.js 还可以使用各种方法帮你生成漂亮的颜色，例如用于映射或数据可视化的调色板。

```js
chroma.scale(['#fafa6e', '#2a4858']).mode('1ch').colors(6)
```

chroma.js 提供了更多功能，这就是它的要点。

## API

### Chroma

#### chroma

第一步，是将你的颜色放入 chroma.js。这就是通用构造函数`chroma()`的作用。该函数尝试为你猜测输入颜色的格式。例如，它将识别 W3CX11 规范中的任何命名颜色：

```js
chroma('pink')
```

如果没有匹配的命名颜色，chroma.js 则会检查十六进制字符串。它忽略大小写，`#`符号是可选的，它也可以识别较短的三个字母格式。因此，诸如`#ff3399`、`FF3399`、`#f39`等都是有效的十六进制表示。

```js
chroma('#ff3399')
chroma('F39')
```

除了十六进制字符串之外，十六进制数（事实上，任何介于 0 到 16777215 之间的数）都将被识别。

```js
chroma(0xff3399)
```

你还可以单独传递 RGB 值。每个参数必须在 0 到 255 之间。你可以将数字作为单独的参数或作为数组传递。

```js
chroma(0xff, 0x33, 0x99)
chroma(255, 51, 153)
chroma([255, 51, 153])
```

你可以通过将颜色空间的名称作为最后一个参数来构造来自不同颜色空间的颜色。在这里，我们通过传递色调度数（0 ~ 360）以及饱和度和亮度的百分比来在定义 HSL 中的相同颜色：

```js
chroma(330, 1, 0.6, 'hsl')
```

你还可以通过传递一个普通的 JS 对象来构造颜色，该对象的属性对应于 chroma.js 支持的颜色空间：

```js
chroma({ h: 120, s: 1, l: 0.75 })
chroma({ l: 80, c: 25, h: 200 })
chroma({ c: 1, m: 0.5, y: 0, k: 0.2 })
```

#### chroma.valid

你可以使用 chroma.valid 来判断是否可以通过 chroma.js 正确解析某个颜色参数。返回 boolean。

```js
chroma.valid('red'); // true
chroma.valid('bread'); // false
chroma.valid('#F0000D'); // true
chroma.valid('#FOOOOD'); // false
```

#### chroma.hsl

每个颜色空间在 chroma 命名空间下都有自己的构造函数。

```js
chroma.hsl(330, 1, 0.6) // #ff3399
```

#### chroma.hsv

#### chroma.lab

CIELAB 颜色空间。

```js
chroma.lab(40, -20, 50); // #536600
chroma.lab(50, -20, 50); // #6e7f15
chroma.lab(80, -20, 50); // #c0cf66
```

#### chroma.oklab

[Oklab 颜色空间](https://bottosson.github.io/posts/oklab/)。

```js
chroma.oklab(0.4,-0.2,0.5); // #624400
chroma.oklab(0.5,-0.2,0.5); // #806100
chroma.oklab(0.8,-0.2,0.5); // #d9c500
```

#### chroma.lch

l 和 c 的范围取决于色调，大致范围在 0 到 100 - 150 之间，h 的范围在 0 到 360。

```js
chroma.lch(80, 40, 130); // #aad28c
chroma(80, 40, 130, 'lch'); // #aad28c
```

#### chroma.hcl

你可以使用 hcl 代替 lch。亮度和色相通道被切换为与 HSL 更一致。

```js
chroma.hcl(130, 40, 80); // #aad28c
chroma(130, 40, 80, 'hcl'); // #aad28c
```

#### chroma.oklch

```js
chroma.oklch(0.5, 0.2, 240); // #0069c7
chroma(0.8, 0.12, 60, 'oklch'); // #f6ab6b
```

#### chroma.cmyk

每个值介于 0 到 1 之间。

```js
chroma.cmyk(0.2, 0.8, 0, 0); // #cc33ff
chroma(0.2, 0.8, 0, 0, 'cmyk'); // cc33ff
```

#### chroma.gl

GL 是 RGB(A) 的变体，唯一的区别是每个值的范围在 0 到 1 之间。

```js
chroma.gl(0.6, 0, 0.8); // #9900cc
chroma.gl(0.6, 0, 0.8, 0.5); // #9900cc80
chroma(0.6, 0, 0.8, 'gl'); // #9900cc
```

#### chroma.temperature

从色温标度返回颜色。

```js
chroma.temperature(2000); // candle light #ff8b14
chroma.temperature(3500); // sunset #ffc38a
chroma.temperature(6500); // daylight #fffafe
```

有效温度范围从 0 到大约 30000 开尔文。

```js
f = function(i) {
  return chroma.temperature(i * 30000)
}
```

#### chroma.mix

混合两种颜色。混合比是一个介于 0 到 1 之间的值。

```js
chroma.mix('red', 'blue') // #b400b4
chroma.mix('red', 'blue', 0.25) // #dd0080
chroma.mix('red', 'blue', 0.75) // #8000dd
```

颜色混合根据用于插值的颜色空间产生不同的结果。

```js
chroma.mix('red', 'blue', 0.5, 'rgb') // #800080
chroma.mix('red', 'blue', 0.5, 'hsl') // #ff00ff
chroma.mix('red', 'blue', 0.5, 'lab') // #ca0088
chroma.mix('red', 'blue', 0.5, 'lch') // #fa0080
chroma.mix('red', 'blue', 0.5, 'lrgb') // #b400b4
```

#### chroma.average

类似于 chroma.mix，但接受两种以上的颜色。R、G、B 分量和 alpha 通道的简单平均。默认颜色空间为 lrgb。

```js
colors = ['#ddd', 'yellow', 'red', 'teal'];
chroma.average(colors); // #d3b480
chroma.average(colors, 'rgb'); // #b79757
chroma.average(colors, 'lab'); // #d3a96a
chroma.average(colors, 'lch'); // #ef9e4e
```

也适用于 alpha 通道。

```js
chroma.average(['red', 'rgba(0, 0, 0, 0.5)']).css(); // rgba(180, 0, 0, 0.75)
```

从 2.1 版开始，你还可以提供一个 weights 数组来计算颜色的加权平均值。

```js
colors = ['#ddd', 'yellow', 'red', 'teal'];
chroma.average(colors, 'lch', [1, 1, 2, 1]); // #f98841
chroma.average(colors, 'lch', [1.5, 0.5, 1, 2.3]); // #ae9e52
```

#### chroma.blend

使用 RGB 通道混合函数来混合两种颜色。有效的混合模式有 multiply、darken、lighten、screen、overlay、burn 和 dodge。

```js
chroma.blend('4CBBFC', 'EEEE22', 'multiply'); // #47af22
chroma.blend('4CBBFC', 'EEEE22', 'darken'); // #4cbb22
chroma.blend('4CBBFC', 'EEEE22', 'lighten'); // #eeeefc
```

#### chroma.random

通过生成随机十六进制字符串来创建随机颜色。

```js
chroma.random()
```

#### chroma.contrast

计算两种颜色之间的 WCAG 对比度。建议最低对比度为 4.5:1，以确保文本在背景色下仍可度。

```js
chroma.contrast('pink', 'hotpink'); // 1.721
chroma.contrast('pink', 'purple'); // 6.124
```

#### chroma.distance

计算给定颜色空间中两种颜色之间的欧几里得距离（默认为 Lab）。

```js
chroma.distance('#fff', '#ff0', 'rgb'); // 255
chroma.distance('#fff', '#f0f', 'rgb'); // 255
chroma.distance('#fff', '#ff0'); // 96.948
chroma.distance('#fff', '#f0f'); // 122.163
```

#### chroma.deltaE

计算国际照明委员会（CIE）在 2000 年开发的色差。实现基于 Bruce Lindbloom 的公式。结果值的范围从 0（无差异）到 100（最大差异），是衡量人眼感知色差的指标。可选参数 Kl、Kc 和 Kh 可用于调整亮度、色度和色相的权重。

```js
chroma.deltaE('#ededee', '#ededee'); // 0
chroma.deltaE('#ededee', '#edeeed'); // 1.321
chroma.deltaE('#ececee', '#eceeec'); // 2.602
chroma.deltaE('#e9e9ee', '#e9eee9'); // 6.221
chroma.deltaE('#e4e4ee', '#e4eee4'); // 11.598
chroma.deltaE('#e0e0ee', '#e0eee0'); // 15.391
chroma.deltaE('#000000', '#ffffff'); // 100
```

#### chroma.brewer

chroma.brewer 是 ColorBrewer 规范的映射，为方便起见，它包含在 chroma.js 中。chroma.scale 使用颜色进行构建。

```js
chroma.brewer.OrRd
// ['#fff7ec', '#fee8c8', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#b30000', '#7f0000']
```

### Color

#### color.alpha

使用 clor.alpha 来获取或设置颜色的不透明度。

```js
chroma('red').alpha(0.5); // #ff000080
chroma('rgba(255,0,0,0.35)').alpha(); // 0.35
```

#### color.darken

加载后，chroma.js 可以改变颜色。我们在上面已经看到的一种方式是，你可以更改亮度。默认值为 1。

```js
chroma('hotpink').darken(); // #c93384
chroma('hotpink').darken(2); // #930058
chroma('hotpink').darken(2.6); // #74003f
```

#### color.brighten

与 darken 类似，但反向相反。默认值为 1。

```js
chroma('hotpink').brighten(); // #ff9ce6
chroma('hotpink').brighten(2); // #ffd1ff
chroma('hotpink').brighten(3); // #ffffff
```

#### color.saturate

通过操纵 Lch 色度来更改颜色的饱和度。默认值为 1。

```js
chroma('slategray').saturate(); // #4b83ae
chroma('slategray').saturate(2); // #0087cd
chroma('slategray').saturate(3); // #008bec
```

#### color.desaturate

与 saturate 类似，但反向相反。默认值为 1。

```js
chroma('hotpink').desaturate(); // #e77dae
chroma('hotpink').desaturate(2); // #cd8ca8
chroma('hotpink').desaturate(3); // #b199a3
```

#### color.set

更改单个通道并将结果返回一个新 chroma 对象。

```js
chroma('skyblue').set('hsl.h', 0); // #eb8787
chroma('hotpink').set('lch.c', 30); // #ce8ca9
```

相对设置也有效：

```js
chroma('orangered').set('lab.l', '*0.5'); // #a10000
chroma('darkseagreen').set('lch.c', '*2'); // #63c56c
```

#### color.get

返回单个通道的值。

```js
chroma('orangered').get('lab.l'); // 57.582
chroma('orangered').get('hsl.l'); // 0.5
chroma('orangered').get('rgb.g'); // 69
```

#### color.luminance

如果不带参数调用 color.luminance，将根据 WCAG 定义返回相对亮度。标准化 0 为最深的黑色，1 为最浅的白色。

```js
chroma('white').luminance(); // 1
chroma('aquamarine').luminance(); // 0.808
chroma('hotpink').luminance(); // 0.347
chroma('darkslateblue').luminance(); // 0.066
chroma('black').luminance(); // 0
```

chroma.js 还允许你调整颜色的亮度。源颜色将用黑色或白色进行插值，直到找到正确的亮度。

```js
chroma('white').luminance(0.5); // #bcbcbc
chroma('aquamarine').luminance(0.5); // #67ceab
chroma('hotpink').luminance(0.5); // #ff9dce
chroma('darkslateblue').luminance(0.5); // #bcb8d5
```

默认情况下，此插值在 RGB 中完成，但你可以通过将不同的颜色空间作为第二个参数来传递。

```js
chroma('aquamarine').luminance(0.5, 'lab'); // #67ceab
chroma('aquamarine').luminance(0.5, 'hsl'); // #67ceab
```

#### color.hex

chroma.js 允许你以各种颜色空间和格式输出颜色。大多数情况下，你需要将颜色输出为十六进制字符串。

```js
chroma('orange').hex() // #ffa500
```

从 1.4.0 版本开始，默认模式为 auto，这意味着如果十六进制字符串小于 1，则将包含 alpha 通道。如果你不希望包含 alpha 通道，则必须将模式显示设置为 rgb：

```js
chroma('orange').alpha(0.5).hex(); // #ffa50080
chroma('orange').alpha(0.5).hex('rgb'); // #ffa500
```

#### color.name

返回颜色名称。如果该颜色没有名称，则返回十六进制 RGB 字符串。

```js
chroma('#ffa500').name(); // orange
chroma('#ffa505').name(); // #ffa505
```

#### color.css

返回可用作 CSS 颜色定义的 RGB() 或 HSL() 字符串表示形式。

```js
chroma('teal').css(); // rgb(0, 128, 128)
chroma('teal').alpha(0.5).css(); // rgba(0, 128, 128, 0.5)
chroma('teal').css('hsl'); // hsl(180, 100%, 25.1%)
```

#### color.rgb

返回一个包含 red、green 和 blue 分量的数组，每个都是 0 到 255 范围内的数字。Chroma 在内部将 RGB 通道存储为浮点数，但在返回之前对数字进行四舍五入。你可以通过 false 来防止四舍五入。

```js
chroma('orange').rgb(); // [255, 165, 0]
chroma('orange').darken().rgb(); // [198, 118, 0]
chroma('orange').darken().rgb(false); // [198.05, 118.11, 0]
```

#### color.rgba

与 rgb 类似，但是将 alpha 通道添加到返回的数组中。

```js
chroma('orange').rgba(); // [255, 165, 0, 1]
chroma('hsla(20, 100%, 40%, 0.5)').rgba(); // [204, 68, 0, 0.5]
```

#### color.hsl

返回一个包含 hue、saturation 和 lightness 的数组。对于无色相的颜色（黑、白和灰），色相分量将为 NaN。

```js
chroma('orange').hsl(); // [38.82, 1, 0.5, 1]
chroma('white').hsl(); // [NaN, 0, 1, 1]
```

#### color.hsv

与 hsl 类似，返回一个包含 hue、saturation 和 value 的数组。

```js
chroma('orange').hsv(); // [38.82, 1, 1]
chroma('white').hsv(); // [NaN, 0, 1]
```

#### color.hsi

返回一个包含 hue、saturation 和 intensity（强度）的数组。

```js
chroma('orange').hsi(); // [39.64, 1, 0.55]
chroma('white').hsi(); // [NaN, 0, 1]
```

#### color.lab

返回一个包含 L、a 和 b 的数组。

```js
chroma('orange').lab() // [74.94, 23.93, 78.95]
```

#### color.oklab

返回一个包含 L、a 和 b 的数组。

```js
chroma('orange').oklab() // [0.79, 0.06, 0.16]
```

#### color.lch

返回一个包含 lightness、chroma 和 hub 的数组。

```js
chroma('sykblue').lch() // [79.21, 25.94, 235.11]
```

#### color.hcl

lch 的别名，但分量的顺序相反。

```js
chroma('skyblue').hcl() // [235.11, 25.94, 79.21]
```

#### color.oklch

返回一个包含 lightness、chroma 和 hub 的数组。

```js
chroma('sykblue').oklch() // [0.81, 0.08, 225.75]
```

#### color.num

返回十六进制 RGB 颜色的数字表示形式。

```js
chroma('#000000').num(); // 0
chroma('#0000ff').num(); // 255
chroma('#00ff00').num(); // 65280
chroma('#ff0000').num(); // 16711680
```

#### color.temperature

返回给定颜色的色温值。

```js
chroma('#ff3300').temperature(); // 1000
chroma('#ff8a13').temperature(); // 2000
chroma('#ffe3cd').temperature(); // 4999
chroma('#cbdbff').temperature(); // 10115
chroma('#b3ccff').temperature(); // 15169
```

#### color.gl

类似 rgb，但返回的通道范围是 0 到 1，而不是 0 到 255。

```js
chroma('33cc00').gl(); // [0.2, 0.8, 0.1]
```

#### color.clipped

将颜色从 CIELab 颜色空间转为 RGB 时，颜色通道会被裁剪为 0 到 255 的范围。该范围之外的颜色可能在自然界中存在，但无法在 RGB 显示器上显示（例如紫外线）。你可以使用 color.clipped 来测试颜色是否被裁剪。

```js
[c = chroma.hcl(50, 40, 20), c.clipped()]; // [#581d00, true]
[c = chroma.hcl(50, 40, 40), c.clipped()]; // [#904c2d, false]
[c = chroma.hcl(50, 40, 60), c.clipped()]; // [#c97e5c, false]
[c = chroma.hcl(50, 40, 80), c.clipped()]; // [#ffb38f, true]
[c = chroma.hcl(50, 40, 100), c.clipped()]; // [#ffebc5, true]
```

作为额外功能，你可以使用 color._rgb._unclipped 访问未裁剪的 RGB 分量。

```js
chroma.hcl(50, 40, 100).rgb(); // [255, 235, 197]
chroma.hcl(50, 40, 100)._rgb._unclipped; // [322.65, 235.24, 196.7, 1]
```

### Color Scales
