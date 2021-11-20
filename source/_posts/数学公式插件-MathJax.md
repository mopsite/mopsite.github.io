---
title: 数学公式插件-MathJax
date: 2021-11-04 14:54:18
categories: 排版
tags:
  - mathjax
  - 插件
mathjax: true
---

MathJax 是一个开源 JavaScript 库。可以运行于所有现代浏览器上。它的设计目的是利用最新的 Web 技术，构建一个支持 Math 的 Web 平台。

对于大部分用户而言，MathJax 不需要安装，既没有插件需要下载，也没有软件需要安装。所以你可以随意编写包含数学公式的网页，并能够容易的浏览它们。你所需要的只是在你的页面中包含 MathJax 脚本和一些数学公式，其他的事情交给 MathJax 来处理吧。

<!-- more -->

MathJax 使用网络字体（大部分浏览器都支持）来产生高质量的排版，使其能够在所有分辨率中都能显示和缩放，这远比使用包含公式的图片要有效得多（也可用于屏幕阅读器，方便视力受损者）。

MathJax 的显示是基于文本的而非图片，这意味着公式和文字一样是可以被搜索的。你可以使用TeX、LaTeX、MathML 或者 AsciiMath 书写公式，并能生成多种格式，包括带有 CSS 样式的 HTML 或可缩放的矢量图形(SVG)。

MathJax 是模块化的，所以仅在需要时才加载它的组件，同时也可以被扩展以实现更多功能。MathJax 是高度可配置的，你可以做出更适合网站的自定义，最重要的是，MathJax 的 API 可以让你在网页上动态的创建公式。

### 开始使用

要使用 MathJax，你不需要安装，只需在你的页面中引入下面这段话即可：

```html
<script src="https://cdn.jsdelivr.net/gh/xlovet/asset/js/mathjax/tex-chtml.js"></script>
```

然后，你需要添加一些配置脚本：

```html
<script>
  window.MathJax = {
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']]
    }
  };
</script>
```

该脚本需要放置在引入文件的脚本之前，所以最终所需的全部脚本为：

```html
<script>
  window.MathJax = {
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']]
    }
  };
</script>
<script src="https://cdn.jsdelivr.net/gh/xlovet/asset/js/mathjax/tex-chtml.js"></script>
```

因为在很多支持数学公式的 Markdown 编辑器中使用`$...$`作为行内公式的标识，使用`$$...$$`整行公式（块级）的标识。而 MathJax 默认在 HTML 文档中不使用`$...$`作为行内公式的标识，而是使用`\(...\)`来包裹行内公式。该配置脚本的作用是，将`$...$`和`\(...\)`同时作为行内公式的表示，二选一即可。

{%note warning no-icon%}
美元符号`$`经常会出现在非数学环境中，有时如果使用`$`作为行内公式的标识，可能会导致一些文本意外的被视为数学公式，例如`… the cost is $2.50 for the first one, and $2.00 for each additional one …`这句话会将两个美元符之间的字符转换为数学公式，这明显不符合本意。

你也可以不添加配置脚本，只使用`\(...\)`来包裹行内公式。
{%endnote%}

### 基础语法

#### 公式标记

有两种输入公式的方法：一种是行内公式，用一对`$`（或`\(...\)`）包裹；另一种是整行公式，用一对`$$`包裹。

{%tabs math1%}
<!-- tab 行内公式 -->
这是一个行内公式$E=mc^2$，写法是`$E=mc^2$`。
<!-- endtab -->
<!-- tab 整行公式 -->
这是一个整行公式：

$$\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}$$

写法是：

```mathematica
$$\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}$$
```
<!-- endtab -->
{%endtabs%}

#### 希腊字母

|名称|大写|代码|小写|代码|
|:---:|:---:|:---:|:---:|:---:|
|alpha|$A$|A|$\alpha$|\\alpha|
|beta|$B$|B|$\beta$|\\beta|
|gamma|$\Gamma$|\\Gamma|$\gamma$|\\gamma|
|delta|$\Delta$|\\Delta|$\delta$|\\delta|
|epsilon|$E$|E|$\epsilon$|\\epsilon|
|zeta|$Z$|Z|$\zeta$|\\zeta|
|eta|$H$|H|$\eta$|\\eta|
|theta|$\Theta$|\\Theta|$\theta$|\\theta|
|iota|$I$|I|$\iota$|\\iota|
|kappa|$K$|K|$\kappa$|\\kappa|
|lambda|$\Lambda$|\\Lambda|$\lambda$|\\lambda|
|mu|$M$|M|$\mu$|\\mu|
|nu|$N$|N|$\nu$|\\nu|
|xi|$\Xi$|\\Xi|$\xi$|\\xi|
|omicron|$O$|O|$\omicron$|\\omicron|
|pi|$\Pi$|\\Pi|$\pi$|\\pi|
|rho|$P$|P|$\rho$|\\rho|
|sigma|$\Sigma$|\\Sigma|$\sigma$|\\sigma|
|tau|$T$|T|$\tau$|\\tau|
|upsilon|$\Upsilon$|\\Upsilon|$\upsilon$|\\upsilon|
|phi|$\Phi$|\\Phi|$\phi$|\\phi|
|chi|$X$|X|$\chi$|\\chi|
|psi|$\Psi$|\\Psi|$\psi$|\\psi|
|omega|$\Omega$|\\Omega|$\omega$|\\omega|

#### 上标与下标

上标和下标分别使用`^`和`_`来表示。例如`x_i^2`：$x_i^2$，`\log_2 x`：$\log_2 x$。

默认情况下，上下标符号仅对下一个组起作用。一个组即单个字符或者使用`{ }`包裹起来的内容。也就是说，如果使用`10^10`会得到$10^10$，而`10^{10}`才是$10^{10}$。

同时，大括号还能消除二义性，如`x^5^6`会显示错误，必须使用大括号来界定`^`的结合性，如`{x^5}^6`：${x^5}^6$，或者`x^{5^6}`：$x^{5^6}$。

{%note danger%}
注意区分`x_i^2`：$x_i^2$和`x_{i^2}`：$x_{i^2}$。
{%endnote%}

另外，如果要在左右两边都有上下标，可以用`\sideset`来表示，如`\sideset{^1_2}{^3_4}\bigotimes`：$\sideset{^1_2}{^3_4}\bigotimes$。

#### 括号

- 小括号和方括号

  使用原始的`( )`和`[ ]`即可。如`(2+3)[4+4]`：$(2+3)[4+4]$。

- 大括号

  由于大括号`{ }`被用来分组，因此需要使用`\{`和`\}`表示大括号，也可以使用`\lbrace`和`\rbrace`来表示。如`\{a*b\}`或者`\lbrace a*b \rbarce`，都会显示为$\{a*b\}$。

- 尖括号

  使用`\langle`和`\rangle`分别表示左右尖括号。如`\langle x \rangle`：$\langle x \rangle$。

- 上取整

  使用`\lceil`和`\rceil`表示。如`\lceil x \rceil`：$\lceil x \rceil$。

- 下取整

  使用`\lfloor`和`\rfloor`表示。如`\lfloor x \rfloor`：$\lfloor x \rfloor$。

{%note warning no-icon%}
需要注意的是，原始括号不会随着公式大小而缩放。如`(\frac12)`：$(\frac12)$。可以使用`\left( ... \right)`来自适应调整括号大小。如`\left( \frac12 \right)`：$\left( \frac12 \right)$。能明显看出，后一组公式中的括号是经过缩放的。
{%endnote%}

#### 求和与积分

`\sum`用来表示求和符号，其下标表示求和下限，上标表示求和上限。如`\sum_1^n`：$\sum_1^n$。

`\int`用来表示积分符号，同样地，其上下标表示积分的上下限。如`\int_1^\infty`：$\int_1^\infty$。

与此类似的符号还有，`\prod`：$\prod$，`\bigcup`：$\bigcup$，`\bigcap`：$\bigcap$，`\iint`：$\iint$。

#### 分式与根式

分式有两种表示方法。第一种，使用`\frac ab`，其中`\frac`作用于其后的两个组 a 和 b，结果为$\frac ab$。如果分子或分母不是单个字符，需要使用`{ }`来分组。第二种，使用`\over`来分割一个组的前后两部分，如`{a+1\over b+1}`：${a+1\over b+1}$。

根式使用`\sqrt[a]b`来表示。其中，方括号内的值用来表示开几次方，省略方括号则表示开方，如`\sqrt[4]{\frac xy}`：$\sqrt[4]{\frac xy}$，`\sqrt{x^3}`：$\sqrt{x^3}$。

#### 字体

- 使用`\it`显示意大利体（公式默认字体）

  {%tabs math2%}
  <!-- tab 代码 -->
  `\it{ABCDEFGHIJKLMnopqrstuvwxyz}`
  <!-- endtab -->
  <!-- tab 效果 -->
  $\it{ABCDEFGHIJKLMnopqrstuvwxyz}$
  <!-- endtab -->
  {%endtabs%}

- 使用`\mathbb`或`\Bbb`显示黑板粗体（黑板黑体）

  {%tabs math3%}
  <!-- tab 代码 -->
  `\mathbb{ABCDEFGHIJKLMnopqrstuvwxyz}`
  <!-- endtab -->
  <!-- tab 效果 -->
  $\mathbb{ABCDEFGHIJKLMnopqrstuvwxyz}$
  <!-- endtab -->
  {%endtabs%}

- 使用`\mathbf`或`\bf`显示黑体

  {%tabs math4%}
  <!-- tab 代码 -->
  `\mathbf{ABCDEFGHIJKLMnopqrstuvwxyz}`
  <!-- endtab -->
  <!-- tab 效果 -->
  $\mathbf{ABCDEFGHIJKLMnopqrstuvwxyz}$
  <!-- endtab -->
  {%endtabs%}

- 使用`\mathtt`或`\tt`显示打印机字体

  {%tabs math5%}
  <!-- tab 代码 -->
  `\mathtt{ABCDEFGHIJKLMnopqrstuvwxyz}`
  <!-- endtab -->
  <!-- tab 效果 -->
  $\mathtt{ABCDEFGHIJKLMnopqrstuvwxyz}$
  <!-- endtab -->
  {%endtabs%}

- 使用`\mathrm`或`\rm`显示罗马体

  {%tabs math6%}
  <!-- tab 代码 -->
  `\mathrm{ABCDEFGHIJKLMnopqrstuvwxyz}`
  <!-- endtab -->
  <!-- tab 效果 -->
  $\mathrm{ABCDEFGHIJKLMnopqrstuvwxyz}$
  <!-- endtab -->
  {%endtabs%}

- 使用`\mathsf`或`\sf`显示等线体（sans-serif 体）

  {%tabs math7%}
  <!-- tab 代码 -->
  `\mathsf{ABCDEFGHIJKLMnopqrstuvwxyz}`
  <!-- endtab -->
  <!-- tab 效果 -->
  $\mathsf{ABCDEFGHIJKLMnopqrstuvwxyz}$
  <!-- endtab -->
  {%endtabs%}

- 使用`\mathcal`或`\cal`显示艺术字体

  {%tabs math8%}
  <!-- tab 代码 -->
  `\mathcal{ABCDEFGHIJKLMnopqrstuvwxyz}`
  <!-- endtab -->
  <!-- tab 效果 -->
  $\mathcal{ABCDEFGHIJKLMnopqrstuvwxyz}$
  <!-- endtab -->
  {%endtabs%}

- 使用`\mathscr`或`\scr`显示手写字体（花体）

  {%tabs math9%}
  <!-- tab 代码 -->
  `\mathscr{ABCDEFGHIJKLMnopqrstuvwxyz}`
  <!-- endtab -->
  <!-- tab 效果 -->
  $\mathscr{ABCDEFGHIJKLMnopqrstuvwxyz}$
  <!-- endtab -->
  {%endtabs%}

- 使用`\mathfrak`或`\frak`显示 Fraktur 字体（老式德国字体）

  {%tabs math10%}
  <!-- tab 代码 -->
  `\mathfrak{ABCDEFGHIJKLMnopqrstuvwxyz}`
  <!-- endtab -->
  <!-- tab 效果 -->
  $\mathfrak{ABCDEFGHIJKLMnopqrstuvwxyz}$
  <!-- endtab -->
  {%endtabs%}

- 使用`\mit`显示数字斜体

  {%tabs math11%}
  <!-- tab 代码 -->
  `\mit{1234567890}`
  <!-- endtab -->
  <!-- tab 效果 -->
  $\mit{1234567890}$
  <!-- endtab -->
  {%endtabs%}

#### 特殊函数与符号

- 关系运算符

  |输入|显示|输入|显示|输入|显示|输入|显示|
  |:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
  |\\pm|$\pm$|\\mp|$\mp$|\\times|$\times$|\\div|$\div$|
  |\\mid|$\mid$|\\nmid|$\nmid$|\\circ|$\circ$|\\bullet|$\bullet$|
  |\\cdot|$\cdot$|\\ast|$\ast$|\\odot|$\odot$|\\bigodot|$\bigodot$|
  |\\otimes|$\otimes$|\\bigotimes|$\bigotimes$|\\oplus|$\oplus$|\\bigoplus|$\bigoplus$|
  |\\lt|$\lt$|\\gt|$\gt$|\\leq|$\leq$|\\geq|$\geq$|
  |\\neq|$\neq$|\\approx|$\approx$|\\equiv|$\equiv$|\\sim|$\sim$|
  |\\simeq|$\simeq$|\\cong|$\cong$|\\prec|$\prec$|\\lhd|$\lhd$|
  |\\sum|$\sum$|\\prod|$\prod$|\\coprod|$\coprod$|||

- 集合运算符

  |输入|显示|输入|显示|输入|显示|输入|显示|
  |:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
  |\\emptyset|$\emptyset$|\\varnothing|$\varnothing$|\\in|$\in$|\\notin|$\notin$|
  |\\subset|$\subset$|\\supset|$\supset$|\\cup|$\cup$|\\cap|$\cap$|
  |\\subseteq|$\subseteq$|\\supseteq|$\supseteq$|\\subsetneq|$\subsetneq$|\\supsetneq|$\supsetneq$|
  |\\bigcup|$\bigcup$|\\bigcap|$\bigcap$|\\bigvee|$\bigvee$|\\bigwedge|$\bigwedge$|
  |\\uplus|$\uplus$|\\biguplus|$\biguplus$|\\sqcup|$\sqcup$|\\bigsqcup|$\bigsqcup$|

- 对数运算符

  |输入|显示|输入|显示|输入|显示|
  |:---:|:---:|:---:|:---:|:---:|:---:|
  |\\log|$\log$|\\lg|$\lg$|\\ln|$\ln$|

- 三角运算符

  |输入|显示|输入|显示|输入|显示|
  |:---:|:---:|:---:|:---:|:---:|:---:|
  |\\bot|$\bot$|\\angle|$\angle$|30^\\circ|$30^\circ$|
  |\\sin|$\sin$|\\cos|$\cos$|\\tan|$\tan$|
  |\\cot|$\cot$|\\sec|$\sec$|\\csc|$\csc$|

- 微积分运算符

  |输入|显示|输入|显示|输入|显示|
  |:---:|:---:|:---:|:---:|:---:|:---:|
  |\\prime|$\prime$|\\int|$\int$|\\iint|$\iint$|
  |\\iiint|$\iiint$|\\iiiint|$\iiiint$|\\oint|$\oint$|
  |\\lim|$\lim$|\\infty|$\infty$|\\nabla|$\nabla$|

- 逻辑运算符

  |输入|显示|输入|显示|输入|显示|输入|显示|
  |:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
  |\\because|$\because$|\\therefore|$\therefore$|\\forall|$\forall$|\\exists|$\exists$|
  |\\not=|$\not=$|\\lnot|$\lnot$|\\vdash|$\vdash$|\\vDash|$\vDash$|
  |\\land|$\land$|\\lor|$\lor$|\\top|$\top$|\\bot|$\bot$|

- 箭头符号

  |输入|显示|输入|显示|输入|显示|输入|显示|
  |:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
  |\\uparrow|$\uparrow$|\\downarrow|$\downarrow$|\\rightarrow(\\to)|$\to$|\\leftarrow|$\leftarrow$|
  |\\Uparrow|$\Uparrow$|\\Downarrow|$\Downarrow$|\\Rightarrow|$\Rightarrow$|\\Leftarrow|$\Leftarrow$|
  |\\longrightarrow|$\longrightarrow$|\\longleftarrow|$\longleftarrow$|\\Longrightarrow|$\Longrightarrow$|\\Longleftarrow|$\Longleftarrow$|
  |\\mapsto|$\mapsto$|

- 标识排列使用`{n+1 \choose 2k}`或`\binom{n+1}{2k}`：$\binom{n+1}{2k}$。

- 使用`\pmod`表示模运算，如`a\equiv b\pmod n`：$a\equiv b\pmod n$。

- 使用`\ldots`与`\cdots`表示省略号，二者的区别是 dots 的位置不同，ldots 位置稍低$a_1,a_2,\ldots,a_n$，cdots 位置居中$a_1+a_2+\cdots+a_n$。

- 使用`\overline`与`\underline`表示连线符号，如`\overline{a+b+c+d}`：$\overline{a+b+c+d}$，`\underline{x+y+z}`：$\underline{x+y+z}$。

- 其他特殊字符：`\star` $\star$、`\aleph_0` $\aleph_0$、`\partial` $\partial$、`\Im` $\Im$、`\Re` $\Re$。

- 一些希腊字母具有变体形式，如`\epsilon \varepsilon`：$\epsilon \varepsilon$、`\phi \varphi`：$\phi \varphi$。

- 需要注意的是，一些特殊字符可以使用`\`转义为原来的含义，如`\$`表示$\$$，`\_`表示$\_$。

#### 空间

在书写公式的时候，a 和 b 之间无论输入多少空格，最后都会显示为 ab。可以通过在 ab 间加入`\,`增加些许间隙，如`a\,b`：$a\,b$；`\;`增加较宽的间隙，如`a\;b`：$a\;b$；`\quad`与`\qquad`会增加更大的间隙，如`a \quad b`：$a \quad b$，`a \qquad b`：$a \qquad b$。

#### 顶部符号

对于单字符，可以使用`\hat x`：$\hat x$。多字符可以使用`\widehat {xy}`：$\widehat {xy}$。

类似的还有，`\check x`：$\check x$、`\breve x`：$\breve x$、`\bar x`：$\bar x$、`\overline {xyz}`：$\overline {xyz}$、`\vec x`：$\vec x$、`\overrightarrow x`：$\overrightarrow x$、`\overleftrightarrow {xyz}`：$\overleftrightarrow {xyz}$、`\dot x`：$\dot x$、`\ddot x`：$\ddot x$。

### 高级语法

#### 表格

使用`$$\begin{array}{列样式}...\end{array}$$`这样的形式来创建表格。

其中，列样式可以使用 c、l、r 分别表示居中和左右对齐，还可以使用`|`表示一条竖线。

表格中各行使用`\\`分隔，各列使用`&`分隔。

使用`\hline`可以在本行前加入一条直线。

{%tabs math12%}
<!-- tab 代码 -->
```
$$
\begin{arry}{c|lcr}
n & \text{Letf} & \text{Center} & \text{Right} \\
\hline
1 & 0.24 & 1 & 125 \\
2 & -1 & 189 & -8 \\
3 & -20 & 2000 & 1+10i \\
\end{arry}
$$
```
<!-- endtab -->
<!-- tab 效果 -->
$$
\begin{array}{c|lcr}
n & \text{Letf} & \text{Center} & \text{Right} \\
\hline
1 & 0.24 & 1 & 125 \\
2 & -1 & 189 & -8 \\
3 & -20 & 2000 & 1+10i \\
\end{array}
$$
<!-- endtab -->
{%endtabs%}

#### 矩阵

- 基本用法

  使用`$$\begin{matrix}...\end{matrix}$$`这样的形式来表示矩阵，在`\begin`与`\end`之间加入矩阵中的元素即可。矩阵的行之间使用`\\`分隔，列之间使用`&`分隔。

  {%tabs math13%}
  <!-- tab 代码 -->
  ```
  $$
  \begin{matrix}
  1 & x & x^2 \\
  1 & y & y^2 \\
  1 & z & z^2 \\
  \end{matrix}
  $$
  ```
  <!-- endtab -->
  <!-- tab 效果 -->
  $$
  \begin{matrix}
  1 & x & x^2 \\
  1 & y & y^2 \\
  1 & z & z^2 \\
  \end{matrix}
  $$
  <!-- endtab -->
  {%endtabs%}

- 加括号

  如果要对矩阵加括号，可以像上文中提到的，使用`\left`与`\right`配合表示括号符号。

  也可以使用特殊的 matrix，即将`matrix`替换为`pmatrix`、`bmatrix`、`Bmatrix`、`vmatrix`、`Vmatrix`。

  {%tabs math14%}
  <!-- tab pmatrix -->
  ```
  $$
  \begin{pmatrix}
  1 & 2 \\
  3 & 4 \\
  \end{pmatrix}
  $$
  ```

  $$
  \begin{pmatrix}
  1 & 2 \\
  3 & 4 \\
  \end{pmatrix}
  $$
  <!-- endtab -->
  <!-- tab bmatrix -->
  ```
  $$
  \begin{bmatrix}
  1 & 2 \\
  3 & 4 \\
  \end{bmatrix}
  $$
  ```

  $$
  \begin{bmatrix}
  1 & 2 \\
  3 & 4 \\
  \end{bmatrix}
  $$
  <!-- endtab -->
  <!-- tab Bmatrix -->
  ```
  $$
  \begin{Bmatrix}
  1 & 2 \\
  3 & 4 \\
  \end{Bmatrix}
  $$
  ```

  $$
  \begin{Bmatrix}
  1 & 2 \\
  3 & 4 \\
  \end{Bmatrix}
  $$
  <!-- endtab -->
  <!-- tab vmatrix -->
  ```
  $$
  \begin{vmatrix}
  1 & 2 \\
  3 & 4 \\
  \end{vmatrix}
  $$
  ```

  $$
  \begin{vmatrix}
  1 & 2 \\
  3 & 4 \\
  \end{vmatrix}
  $$
  <!-- endtab -->
  <!-- tab Vmatrix -->
  ```
  $$
  \begin{Vmatrix}
  1 & 2 \\
  3 & 4 \\
  \end{Vmatrix}
  $$
  ```

  $$
  \begin{Vmatrix}
  1 & 2 \\
  3 & 4 \\
  \end{Vmatrix}
  $$
  <!-- endtab -->
  {%endtabs%}

- 省略元素

  可以使用`\cdots`、`\ddots`、`\vdots`来省略矩阵中的元素。

  {%tabs math15%}
  <!-- tab 代码 -->
  ```
  $$
  \begin{pmatrix}
  1 & a_1 & a_1^2 & \cdots & a_1^n \\
  1 & a_2 & a_2^2 & \cdots & a_2^n \\
  \vdots & \vdots & \vdots & \ddots & \vdots \\
  1 & a_m & a_m^2 & \cdots & a_m^n \\
  \end{pmatrix}
  $$
  ```
  <!-- endtab -->
  <!-- tab 效果 -->
  $$
  \begin{pmatrix}
  1 & a_1 & a_1^2 & \cdots & a_1^n \\
  1 & a_2 & a_2^2 & \cdots & a_2^n \\
  \vdots & \vdots & \vdots & \ddots & \vdots \\
  1 & a_m & a_m^2 & \cdots & a_m^n \\
  \end{pmatrix}
  $$
  <!-- endtab -->
  {%endtabs%}

- 增广矩阵

  增广矩阵需要使用前面的 array 来实现。

  {%tabs math16%}
  <!-- tab 代码 -->
  ```
  $$
  \left[
    \begin{array}{cc|c}
    1 & 2 & 3 \\
    4 & 5 & 6 \\
    \end{array}
  \right]
  $$
  ```
  <!-- endtab -->
  <!-- tab 效果 -->
  $$
  \left[
    \begin{array}{cc|c}
    1 & 2 & 3 \\
    4 & 5 & 6 \\
    \end{array}
  \right]
  $$
  <!-- endtab -->
  {%endtabs%}

#### 对齐的公式

有时候可能需要一系列的公式中等号对齐，这需要使用形如`\begin{align}...\end{align}`的格式，其中使用`&`来指定需要对齐的位置。

  {%tabs math17%}
  <!-- tab 代码 -->
  ```
  $$
  \begin{align}
  \sqrt{37}&=\sqrt{\frac{73^2-1}{12^2}} \\
  &=\sqrt{\frac{73^2}{12^2}\cdot\frac{73^2-1}{73^2}} \\
  &=\sqrt{\frac{73^2}{12^2}}\sqrt{\frac{73^2-1}{73^2}} \\
  &=\frac{73}{12}\sqrt{1-\frac{1}{73^2}} \\
  &\approx\frac{73}{12}\left(1-\frac{1}{2\cdot73^2}\right)
  \end{align}
  $$
  ```
  <!-- endtab -->
  <!-- tab 效果 -->
  $$
  \begin{align}
  \sqrt{37}&=\sqrt{\frac{73^2-1}{12^2}} \\
  &=\sqrt{\frac{73^2}{12^2}\cdot\frac{73^2-1}{73^2}} \\
  &=\sqrt{\frac{73^2}{12^2}}\sqrt{\frac{73^2-1}{73^2}} \\
  &=\frac{73}{12}\sqrt{1-\frac{1}{73^2}} \\
  &\approx\frac{73}{12}\left(1-\frac{1}{2\cdot73^2}\right)
  \end{align}
  $$
  <!-- endtab -->
  {%endtabs%}

#### 分类表达式

定义函数的时候经常需要分情况给出表达式，可使用`\begin{cases}...\end{cases}`。其中，使用`\\`来分类，使用`&`指定需要对齐的位置。

{%tabs math18%}
<!-- tab 代码 -->
```
$$
f(n)=
\begin{cases}
n/2,&\text{if $n$ is even} \\
3n+1,&\text{if $n$ is odd}
\end{cases}
$$
```
<!-- endtab -->
<!-- tab 效果 -->
$$
f(n)=
\begin{cases}
n/2,&\text{if $n$ is even} \\
3n+1,&\text{if $n$ is odd}
\end{cases}
$$
<!-- endtab -->
{%endtabs%}

如果想分类之间的垂直间距变大，可以在行末使用`\\[2ex]`来分隔（3ex，4ex 也可以用，1ex 相当于默认距离）。

{%tabs math19%}
<!-- tab 代码 -->
```
$$
f(n)=
\begin{cases}
\frac{n}{2},&\text{if $n$ is even} \\[2ex]
3n+1,&\text{if $n$ is odd}
\end{cases}
$$
```
<!-- endtab -->
<!-- tab 效果 -->
$$
f(n)=
\begin{cases}
\frac{n}{2},&\text{if $n$ is even} \\[2ex]
3n+1,&\text{if $n$ is odd}
\end{cases}
$$
<!-- endtab -->
{%endtabs%}

#### 空间问题

在使用$\LaTeX$公式时，有一些不会影响公式正确性，但却会使其看上去很糟糕的问题。

- 不要在指数或者积分中使用`\frac`

  在指数或者积分表达式中使用`\frac`会是表达式看起来不清晰，因此，在专业的数学排版中很少被使用。应该使用`/`来代替。

  {%tabs math20%}
  <!-- tab 代码 -->
  ```
  $$
  \begin{array}{c|c}
  \mathrm{Bad} & \mathrm{Better} \\
  \hline \\
  e^{i\frac{\pi}2} & e^{i\pi/2} \\
  \int^\frac\pi2_{-\frac\pi2}\sin x \,dx & \int^{\pi/2}_{\pi/2}\sin x \,dx
  \end{array}
  $$
  ```
  <!-- endtab -->
  <!-- tab 效果 -->
  $$
  \begin{array}{c|c}
  \mathrm{Bad} & \mathrm{Better} \\
  \hline \\
  e^{i\frac{\pi}2} & e^{i\pi/2} \\
  \int^\frac\pi2_{-\frac\pi2}\sin x \,dx & \int^{\pi/2}_{\pi/2}\sin x \,dx
  \end{array}
  $$
  <!-- endtab -->
  {%endtabs%}

- 使用`\mid`代替`|`作为分隔符

  符号`|`作为分隔符时，有排版空间大小的问题，应该使用`\mid`代替。

  {%tabs math21%}
  <!-- tab 代码 -->
  ```
  $$
  \begin{array}{c|c}
  \mathrm{Bad}&\mathrm{Better}\\
  \hline\\
  \{x|x^2\in\Bbb Z\}&\{x\mid x^2\in\Bbb Z\}
  \end{array}
  $$
  ```
  <!-- endtab -->
  <!-- tab 效果 -->
  $$
  \begin{array}{c|c}
  \mathrm{Bad}&\mathrm{Better}\\
  \hline\\
  \{x|x^2\in\Bbb Z\}&\{x\mid x^2\in\Bbb Z\}
  \end{array}
  $$
  <!-- endtab -->
  {%endtabs%}

- 多重积分

  对于多重积分，不要使用`\int\int`此类表达，应该使用`\iint`、`\iiint\`等特殊形式。

  {%tabs math22%}
  <!-- tab 代码 -->
  ```
  $$
  \begin{array}{c|c}
  \mathrm{Bad}&\mathrm{Better}\\
  \hline\\
  \int\int_S f(x)\,dy\,dx&\iint_S f(x)\,dy\,dx\\
  \int\int\int_V f(x)\,dz\,dy\,dx&\iiint_V f(x)\,dz\,dy\,dx
  \end{array}
  $$
  ```
  <!-- endtab -->
  <!-- tab 效果 -->
  $$
  \begin{array}{c|c}
  \mathrm{Bad}&\mathrm{Better}\\
  \hline\\
  \int\int_S f(x)\,dy\,dx&\iint_S f(x)\,dy\,dx\\
  \int\int\int_V f(x)\,dz\,dy\,dx&\iiint_V f(x)\,dz\,dy\,dx
  \end{array}
  $$
  <!-- endtab -->
  {%endtabs%}

  此外，在微分前应该使用`\,`来增加些许空间，否则$\TeX$会将微分紧凑地排列在一起。

  {%tabs math23%}
  <!-- tab 代码 -->
  ```
  $$
  \begin{array}{c|c}
  \mathrm{Bad}&\mathrm{Better}\\
  \hline\\
  \iiint_V f(x)dz dy dx&\iiint_V f(x)\,dz\,dy\,dz
  \end{array}
  $$
  ```
  <!-- endtab -->
  <!-- tab 效果 -->
  $$
  \begin{array}{c|c}
  \mathrm{Bad}&\mathrm{Better}\\
  \hline\\
  \iiint_V f(x)dz dy dx&\iiint_V f(x)\,dz\,dy\,dz
  \end{array}
  $$
  <!-- endtab -->
  {%endtabs%}

#### 连分数

书写连分数表达式时，请使用`\cfrac`代替`\frac`或`\over`。

{%tabs math24%}
<!-- tab cfrac -->
```
$$
x=a_0+\cfrac{1^2}{a_1
+\cfrac{2^2}{a_2
+\cfrac{3^2}{a^3
+\cfrac{4^2}{a_4+\cdots}}}}
\tag{\cfrac}
$$
```
$$
x=a_0+\cfrac{1^2}{a_1
+\cfrac{2^2}{a_2
+\cfrac{3^2}{a^3
+\cfrac{4^2}{a_4+\cdots}}}}
\tag{\cfrac}
$$
<!-- endtab -->
<!-- tab frac -->
```
$$
x=a_0+\frac{1^2}{a_1
+\frac{2^2}{a_2
+\frac{3^2}{a^3
+\frac{4^2}{a_4+\cdots}}}}
\tag{\cfrac}
$$
```
$$
x=a_0+\frac{1^2}{a_1
+\frac{2^2}{a_2
+\frac{3^2}{a^3
+\frac{4^2}{a_4+\cdots}}}}
\tag{\cfrac}
$$
<!-- endtab -->
{%endtabs%}

#### 方程组

使用`\begin{array}...\end{array}`与`\left\{...\right.`配合，可以表示方程组。

{%tabs math25%}
<!-- tab 代码 -->
```
$$
\left\{
\begin{array}{c}
a_1x+b_1y+c_1z=d_1 \\
a_2x+b_2y+c_2z=d_2 \\
a_3x+b_3y+c_3z=d_3
\end{array}
\right.
$$
```
<!-- endtab -->
<!-- tab 效果 -->
$$
\left\{
\begin{array}{c}
a_1x+b_1y+c_1z=d_1 \\
a_2x+b_2y+c_2z=d_2 \\
a_3x+b_3y+c_3z=d_3
\end{array}
\right.
$$
<!-- endtab -->
{%endtabs%}

还可以使用`\begin{cases}...\end{cases}`表达上面同样的方程组。

{%tabs math26%}
<!-- tab 代码 -->
```
$$
\begin{cases}
a_1x+b_1y+c_1z=d_1 \\
a_2x+b_2y+c_2z=d_2 \\
a_3x+b_3y+c_3z=d_3
\end{cases}
$$
```
<!-- endtab -->
<!-- tab 效果 -->
$$
\begin{cases}
a_1x+b_1y+c_1z=d_1 \\
a_2x+b_2y+c_2z=d_2 \\
a_3x+b_3y+c_3z=d_3
\end{cases}
$$
<!-- endtab -->
{%endtabs%}

要对齐方程式中的等号，可以使用`\begin{aligned}...\end{aligned}`。

{%tabs math27%}
<!-- tab 代码 -->
```
$$
\left\{
\begin{aligned}
a_1x+b_1y+c_1z&=d_1\\
a_2x+b_2y&=d_2\\
a_3x+b_3y+c_3z&=d_3
\end{aligned}
\right.
$$
```
<!-- endtab -->
<!-- tab 效果 -->
$$
\left\{
\begin{aligned}
a_1x+b_1y+c_1z&=d_1\\
a_2x+b_2y&=d_2\\
a_3x+b_3y+c_3z&=d_3
\end{aligned}
\right.
$$
<!-- endtab -->
{%endtabs%}

如果要对齐等号和项，可以使用`\begin{array}{列样式}...\end{array}`。

{%tabs math28%}
<!-- tab 代码 -->
```
$$
\left\{
\begin{array}{ll}
a_1x+b_1y+c_1z&=d_1\\
a_2x+b_2y&=d_2\\
a_3x+b_3y+c_3z&=d_3
\end{array}
\right.
$$
```
<!-- endtab -->
<!-- tab 效果 -->
$$
\left\{
\begin{array}{ll}
a_1x+b_1y+c_1z&=d_1\\
a_2x+b_2y&=d_2\\
a_3x+b_3y+c_3z&=d_3
\end{array}
\right.
$$
<!-- endtab -->
{%endtabs%}

#### 附加装饰

- `\overline{A}\;\overline{AA}\;\overline{AAA}`：$\overline{A}\;\overline{AA}\;\overline{AAA}$

- `\underline{B}\;\underline{BB}\;\underline{BBB}`：$\underline{B}\;\underline{BB}\;\underline{BBB}$

- `\widetilde{C}\;\widetilde{CC}\;\widetilde{CCC}`：$\widetilde{C}\;\widetilde{CC}\;\widetilde{CCC}$

- `\widehat{D}\;\widehat{DD}\;\widehat{DDD}`：$\widehat{D}\;\widehat{DD}\;\widehat{DDD}$

- `\fbox{E}\;\fbox{EE}\;\fbox{EEE}`：$\fbox{E}\;\fbox{EE}\;\fbox{EEE}$

- `\underleftarrow{F}\;\underleftarrow{FF}\;\underleftarrow{FFF}`：$\underleftarrow{F}\;\underleftarrow{FF}\;\underleftarrow{FFF}$

- `\underrightarrow{G}\;\underrightarrow{GG}\;\underrightarrow{GGG}`：$\underrightarrow{G}\;\underrightarrow{GG}\;\underrightarrow{GGG}$

- `\underleftrightarrow{H}\;\underleftrightarrow{HH}\;\underleftrightarrow{HHH}`：$\underleftrightarrow{H}\;\underleftrightarrow{HH}\;\underleftrightarrow{HHH}$

- `\overbrace{(n-2)+\overbrace{(n_1)+n+(n+1)}+(n+2)}`：$\overbrace{(n-2)+\overbrace{(n_1)+n+(n+1)}+(n+2)}$

- `\underbrace{(n-2)+\underbrace{(n_1)+n+(n+1)}+(n+2)}`：$\underbrace{(n-2)+\underbrace{(n_1)+n+(n+1)}+(n+2)}$

- `\overbrace`和`\underbrace`可以使用上下标进行注释，如`\underbrace{a\cdot a\cdots a}_{b_\text{times}}`：$\underbrace{a\cdot a\cdots a}_{b_\text{times}}$

- 注释音标。如`\check{I}`：$\check{I}$、`\acute{J}`：$\acute{J}$、`\grave{K}`：$\grave{K}$。

#### 交换图表

使用`\begin{CD}...\end{CD}`表示交换图表。

{%tabs math29%}
<!-- tab 代码 -->
```
$$
\begin{CD}
A@>a>>B \\
@VbVV=@VVcV \\
C@>>d>D
\end{CD}
$$
```
<!-- endtab -->
<!-- tab 效果 -->
$$
\begin{CD}
A@>a>>B \\
@VbVV=@VVcV \\
C@>>d>D
\end{CD}
$$
<!-- endtab -->
{%endtabs%}

其中，`@>>>`表示右箭头，`@<<<`表示左箭头，`@AAA`表示上箭头，`@VVV`表示下箭头，`@=`表示水平双线，`@|`表示垂直双线，`@.`表示没有箭头。

{%tabs math30%}
<!-- tab 代码 -->
```
$$
\begin{CD}
A@>>>B@>{\text{very long label}}>>C \\
@.@AAA@|\\
D@=E@<<<F
\end{CD}
$$
```
<!-- endtab -->
<!-- tab 效果 -->
$$
\begin{CD}
A@>>>B@>{\text{very long label}}>>C \\
@.@AAA@|\\
D@=E@<<<F
\end{CD}
$$
<!-- endtab -->
{%endtabs%}

#### 颜色

有两种方式可以用来为字体着色。

- `\textcolor{color-name}{text}`

  其中color-name 为系统自定义的颜色名称，text 为需要着色的文字内容。

  如`\textcolor{hotpink}{E=mc^2}`：$\textcolor{hotpink}{E=mc^2}$。

- `\textcolor[rgb]{r,g,b}{text}`或`\textcolor[RGB]{R,G,B}{text}`

  其中`{r,g,b}`的取值范围为 0-1，`{R,G,B}`的取值范围为 0-255。

  如`\textcolor[rgb]{0.5,0.8,0.7}{E=mc^2}`：$\textcolor[rgb]{0.5,0.8,0.7}{E=mc^2}$，或`\textcolor[RGB]{202,12,22}{E=mc^2}`：$\textcolor[RGB]{202,12,22}{E=mc^2}$。

另外，还可以使用`definecolor{ColorName}{rgb}{r,g,b}`的方法（RGB相同）自定义颜色名。自定义颜色名之后，可以直接调用这个颜色方案`\text{ColorName}{text}`。

{%tabs math31%}
<!-- tab 代码 -->
```
$$
\definecolor{mycolor}{rgb}{0.1,0.5,0.8}
\textcolor{mycolor}{E=mc^2}
$$
```
<!-- endtab -->
<!-- tab 效果 -->
$$
\definecolor{mycolor}{rgb}{0.1,0.5,0.8}
\textcolor{mycolor}{E=mc^2}
$$
<!-- endtab -->
{%endtabs%}


#### 等式高亮

使用`\bbox`可以高亮一个等式。

{%tabs math32%}
<!-- tab 代码 -->
```
$$
\bbox[blue]{\textcolor{white}{e^x=\lim_{n\to\infty}\left(1+\frac{x}{n}\right)^n\qquad(1)}}
$$
```
<!-- endtab -->
<!-- tab 效果 -->
$$
\bbox[blue]{\textcolor{white}{e^x=\lim_{n\to\infty}\left(1+\frac{x}{n}\right)^n\qquad(1)}}
$$
<!-- endtab -->
{%endtabs%}

也可以在参数中加上数值，以增加公式与背景色四周的间距（类似 padding）。

{%tabs math33%}
<!-- tab 代码 -->
```
$$
\bbox[blue,10px]{\textcolor{white}{e^x=\lim_{n\to\infty}\left(1+\frac{x}{n}\right)^n\qquad(1)}}
$$
```
<!-- endtab -->
<!-- tab 效果 -->
$$
\bbox[blue,10px]{\textcolor{white}{e^x=\lim_{n\to\infty}\left(1+\frac{x}{n}\right)^n\qquad(1)}}
$$
<!-- endtab -->
{%endtabs%}

还可以设置边框。

{%tabs math34%}
<!-- tab 代码 -->
```
$$
\bbox[10px,border:2px solid red]{e^x=\lim_{n\to\infty}\left(1+\frac{x}{n}\right)^n\qquad(1)}
$$
```
<!-- endtab -->
<!-- tab 效果 -->
$$
\bbox[10px,border:2px solid red]{e^x=\lim_{n\to\infty}\left(1+\frac{x}{n}\right)^n\qquad(1)}
$$
<!-- endtab -->
{%endtabs%}

当然，你还可以同时设置背景色和边框。

{%tabs math35%}
<!-- tab 代码 -->
```
$$
\bbox[10px,hotpink,border:2px dashed blue]{e^x=\lim_{n\to\infty}\left(1+\frac{x}{n}\right)^n\qquad(1)}
$$
```
<!-- endtab -->
<!-- tab 效果 -->
$$
\bbox[10px,hotpink,border:2px dashed blue]{e^x=\lim_{n\to\infty}\left(1+\frac{x}{n}\right)^n\qquad(1)}
$$
<!-- endtab -->
{%endtabs%}
