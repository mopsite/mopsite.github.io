---
title: 关于CSS变量需要知道的一切
date: 2021-11-08 14:45:06
categories: 前端
tags: CSS
---

多数编程语言都支持变量，但是 CSS 从最初就一直缺少对原生变量的功能支持。

你写 CSS 吧？那你就没办法用变量。不过，你还可以用 Sass 这样的预编译器，它就把变量作为一个巨大的卖点。我们还真的很吃这一套。

不过互联网还在飞速前行，CSS 也支持变量了。在篇文章里，我会展示如何使用 CSS 原生变量，以及如何在日常工作里使用它们，让生活变得更美好。

<!-- more -->

### 你会学到这些

首先，我会介绍一些 CSS 变量的基础知识。我相信理解 CSS 变量应该从这里开始。

学习基础知识是一件非常酷的事情，更酷的是把这些基础知识应用到现实应用当中去。所以，我会用三个例子来展示如何方便的使用 CSS 变量。下面我们简单介绍一下这三个例子：

- 例 1：使用 CSS 变量创建可变组件

  今天你可能已经在构建自己的可变组件了，无论你是在使用 React、Angular 或者 Vue，CSS 变量都能使这个过程简介许多。

  {%asset_image 01.gif%}

  点此查看 [示例 1](https://megaminx.gitee.io/css-variables/demo1.html)。

- 例 2：带有 CSS 变量的主题样式

  你可能已经在别处看到这样的用法。我接下来要展示的是 CSS 变量如何使创建站点级别的主题样式更简便。

  {%asset_image 02.gif%}

  点此查看 [示例 2](https://megaminx.gitee.io/css-variables/demo2.html)。

- 例 3：创建 CSS 变量盒

  嗯，这是最后一个例子。请忽略这个名字，我想不到更好的了……

  {%asset_image 03.gif%}

  注意这些盒子的颜色是可以动态更新的，盒子容器也是可以 3D 旋转的。

  {%asset_image 04.gif%}

  这个例子让我们看到如何使用 JavaScript 更新 CSS 变量，并展示出一个很好的交互效果。

  点此查看 [示例 3](https://megaminx.gitee.io/css-variables/demo3.html)。

### 为何变量如此重要

如果你刚开始学习预编译器的变量，或者熟悉原生 CSS，下面是一些你要了解变量的原因：

- 提高代码可读性

  无需赘言，变量让代码可读性更强，可维护性更好。

- 使大型文档中的代码改动更容易

  如果你所有的常量都存在一个单独的文件里，你就不需要在几千行代码里一一修改变量了。这就很容易了，只要改一行就可以了。

- 更快的发现拼写错误

  在多行代码里找错，是很痛苦的一件事。更烦人的是，这个错误可能只是简单的拼写错误，很难查找。合理使用变量，就能消除一些烦心事。

### 定义 CSS 变量

让我们从你熟悉的开始吧。一个 JavaScript 中的变量可能是这样定义并赋值的：

```js
var amAwesome = "awesome string";
```

CSS 变量也称作「自定义属性」，一个 CSS 变量是任意一个以两个短横线开头的「属性」值：

```css
.block {
  /* 能找到这里定义的变量吗？ */
  color: #8cacea;
  --color: blue;
}
```

### CSS 变量作用域

还有一点你需要注意。在 JavaScript 里，变量都有一个作用域，它们或是一个全局变量，或是一个局部变量。

CSS 变量也一样。请看下面的例子：

```css
:root {
  --main-color: red;
}
```

`:root`选择器能选择 DOM 树里的最顶级元素，也就是文档树。所以，这样定义的变量，也就是相当于全局变量了。

### 使用 CSS 变量

变量定义且被赋值后，你就可以使用它了，不过要上手还是有一些麻烦的地方。如果你习惯了预编译器，那么肯定知道如何使用变量了，例如：

```scss
$font-size: 20px;
.test {
  font-size: $font-size;
}
```

CSS 变量和这稍有不同，你需要使用`var()`这个函数引用变量。上面的例子中，CSS 变量是这样引用的：

```css
:root {
  --font-size: 20px;
}

.test {
  font-size: var(--font-size);
}
```

请记住使用`var()`函数。一旦你习惯了这样的方式，你就会爱上 CSS 变量的，非常爱！

另一个重要的提示是，不像 Sass 或者其他预编译器中的变量，你可以在很多地方使用变量。CSS 的变量需要小心谨慎，如果需要，你还能做数学运算。但是，多数情况下你应该把它们当做属性值来使用。

```css
/* 下面这样是不对的 */
.margin {
  --side: margin-top;
  var(--side): 20px;
}
```

这样定义会抛出无效属性名的语法错误。

你也无法直接使用数学运算功能，运算功能需要使用`calc()`函数，后面遇到时我会加以讨论。

```css
/* 下面这样也不对 */
.margin {
  --space: 20px * 2;
  font-size: var(--space); /* 这不是 40px */
}
```

如果你一定需要用数学计算，那么请使用`calc()`函数，如下：

```css
.margin {
  --space: calc(20px * 2);
  font-size: var(--space); /* 这里是 40px */
}
```

### 值得一提的属性

有一些行为是值得提醒注意的。

- 自定义属性是普通属性值，因为它们可以定义在任意元素上。

  在段落 p 元素、section、aside 元素或者 root 根元素，甚至是伪元素上使用变量，都是可以的。

  ```css
  p {
    --color: blue;
  }

  section {
    --color: #ccc;
  }

  aside {
    --color: yellow;
  }

  :root {
    --color: teal;
  }

  p:before {
    --color: red;
  }
  ```

  它们和普通属性一样工作。

- CSS 变量和普通 CSS 继承、叠加的规则相同。

  ```css
  div {
    --color: red;
  }

  div.test {
    color: var(--color);
  }

  div.ew {
    color: var(--color);
  }
  ```

  和普通属性相同，`--color`的值也会从其他的 div 元素继承下来。

- CSS 变量也可以和`@media`或其他条件选择的规则同时使用。

  和其他属性一样，你也可以在`@media`或其他的条件规则里使用变量。例如，下面的代码改变了变量的值，在不同的设备上使用不同值。

  ```css
  :root {
    --gutter: 10px;
  }

  @media screen and (min-width: 768px) {
    --gutter: 30px;
  }
  ```

{%note danger no-icon%}
CSS 变量大小写敏感。我为了省事全部都用小写，你的情况可能不一样。

```css
/* 这是两个不同的变量 */
:root {
  --color: blue;
  --COLOR: red;
}
```
{%endnote%}

### 解决多重定义

和其他属性是一样的，重定义变量也遵循标准级联规则。下面来看个例子：

```css
/* 变量定义 */
:root {
  --color: blue;
}

div {
  --color: green;
}

#alert {
  --color: red;
}

/* 使用变量 */
* {
  color: var(--color);
}
```

有了上面的定义，不同元素的值是什么样的呢？

```html
<p>我的颜色是？</p>
<div>我的呢？</div>
<div id="alert">
  我的颜色是？
  <p>颜色？</p>
</div>
```

你能猜出来吗？

第一个 p 元素是蓝色，没有任何`--color`变量定义是在 p 元素的，因此它会继承自根元素 root。

第一个 div 是绿色，因为在 div 上有一个颜色变量定义。

使用 id 为 alert 的 div，不是绿色而是红色。而在这个 div 下的 p 也是红色。

### 解决循环依赖

循环依赖通常会在下面几种情况下发生：

- 变量需要依赖其自身值。也就是说，定义时就使用了`var()`引用其值。

  ```css
  :root {
    --m: var(--m);
  }

  body {
    margin: var(--m);
  }
  ```

- 多个变量相互引用时。

  ```css
  :root {
    --one: calc(var(--two) + 10px);
    --two: calc(var(--one) - 10px);
  }
  ```

  {%note danger%}
  请注意，不要在代码中创建这样的循环引用。
  {%endnote%}

### 使用无效变量

如果使用了无效变量会怎样？语法错误会被忽略，但是无效的使用`var()`会导致错误的初始值或者是继承到有问题的值。看下面的代码：

```css
:root {
  --color: 20px;
}

p {
  background-color: red;
}

p {
  background-color: var(--color);
}
```

`--color`会被带入`var()`，但是这条属性值，在变量代入后，即`background-color: 20px;`是无效的（错误的颜色值）。而又因为 background-color 不是继承属性，所以它的值就会是这个属性的初始值 transparent。

注意，这和不使用变量，直接写成下面这样得到的结果是不一样的：

```css
p {
  background-color: red;
}

p {
  background-color: 20px;
}
```

第二句属性声明是无效的，这一行之前的定义将正常工作。

### 创建单一标记

当你设置一个类似下面的属性变量时，20px 酒杯编译成一个单一标记：

```css
font-size: 20px
```

简单理解就是，20px 就是一个单独的整体。

使用 CSS 变量构建独立单一标记需要十分小心。例如，看下面的代码：

```css
:root {
  --size: 20;
}

div {
  /* 这样是错误的 */
  font-size: var(--size)px;
}
```

你也许会认为，font-size 的值是 20px，但你错了。浏览器会解析成`20 px`，注意 20 和 px 之间有空格。因此，如果你一定需要创建独立标记，那么就一定要用变量表示这个整体，例如`--size: 20px`，或者使用`calc()`这个函数，例如`calc(var(--size) * 1px)`，然后其中的`--size`值就是 20。

不要太着急，如果你还不太能理解这一点，后面的例子中我会解释得更具体。

### 一起来动手

下面就是我们最期待的一部分，我会带着大家做一些有用的例子，把实际应用中的概念都过一遍。我们开始吧。

#### 创建可变组件

假设你需要创建两个不同的按钮。基本样式相同，只有一点小小的区别。

{%asset_image 01.gif%}

在这个例子里，不同的属性只有 background-color 和 border-color。那怎样处理这种情况呢？下面是一种典型的解决方案：

创建一个基类，比如`.btn`，然后加上其他的不同类，例如：

```html
<button class="btn">Hello</button>
<button class="btn red">Hello</button>
```

`.btn`包含了按钮的基本样式，例如：

```css
.btn {
  padding: 2rem 4rem;
  border: 2px solid black;
  background: transparent;
  font-size: 0.6em;
  border-radius: 2px;
}

.btn:hover {
  cursor: pointer;
  background: black;
  color: white;
}
```

那按钮样式如何变化呢？像这样：

```css
.btn.red {
  border-color: red;
}

.btn.red:hover {
  background: red;
}
```

你看，这里就有重复代码了吧？这样也好，但使用 CSS 变量可以更简洁。

第一步是什么呢？把变化的颜色值用 CSS 变量定义出来不要忘记加默认值！

```css
.btn {
  padding: 2rem 4rem;
  border: 2px solid var(--color, black);
  background: transparent;
  font-size: 0.6em;
  border-radius: 2px;
}

.btn:hover {
  cursor: pointer;
  background: var(--color, black);
  color: white;
}
```

你这样设置`background: var(--color, black)`时，也就是说把背景设置为变量`--color`的值，如果该值不存在，那就用默认值黑色 black 替代。这就是设置默认值的方法，和 JavaScript 或者其他语言一样。

下面是有趣的部分了。有了变量，你就可以像下面这样设置新的变量值了：

```css
.btn.red {
  --color: red;
}
```

这就可以了。如果元素的 class 中使用了`.red`，那么浏览器就能注意到不同的`--color`值，这样就使得不同的按钮有不同的颜色了。你也就可以省下来很多时间，创建可复用的组件了。

点此查看 [示例 1](https://megaminx.gitee.io/css-variables/demo1.html)。

#### 制作网站主题

我想你肯定遇到过这样的情况：有主题的网站可以让用户有自己定制的感觉，就像是由他们来控制一样。

下面这个例子就是我们要做的：

{%asset_image 02.gif%}

那么 CSS 变量是如何让这件事变得简单一点的呢？让我们一起来看看。

在这之前，我想提醒你，这个例子非常重要。在这个例子里，我会介绍如何使用 JavaScript 更新 CSS 变量。超有趣！你肯定会喜欢的。

- 我们实际要做的

  CSS 变量的美妙是它们的互动性。一旦它们的值发生了变化，对应 CSS 的属性也会相应的进行更新。

  下图从概念上解释了在本例中这个过程是如何发生的。

  {%asset_image 05.png%}

  所以，我们需要增加一些 JavaScript 来监听点击事件。在这个例子里，背景颜色和文字颜色是基于 CSS 变量的。当你点击任何一个按钮时，它们就将对应的 CSS 变量设置成另一种颜色。于是，页面的背景色也更新了。

  这就是所有的内容了。哦，还有一件事。当我说把 CSS 变量设置成另一个值的时候，这又是怎样做到的呢？

  {%asset_image 06.png%}

  把变量设置成 inline。即便是设置成 inline style 中，CSS 变量也会生效。和 JavaScript 一起，我们就可以控制整个 root 文档，这样也就能设置 CSS 变量的值了。理解了么？

- 初始代码

  最初代码像这样：

  ```html
  <div class="theme">
    <button value="dark">dark</button>
    <button value="calm">calm</button>
    <button value="light">light</button>
  </div>

  <article>
  . . .
  </article>
  ```

  这段代码由三个 button 和一个 class 是 theme 的父元素组成。为了简洁一点，我去掉了中间的内容部分，只用 article 元素替代，该元素内就是页面内容。

- 页面样式

  这个小项目的成功点就是页面的样式，技巧其实很简单。没必要为每种风格设置 background-color 和 color，我们只需要使用变量来设置即可。就像下面这样：

  ```css
  body {
    background-color: var(--bg, white);
    color: var(--bg-text, black);
  }
  ```

  这样做的目的很明显，点击每个 button 时，这个页面的背景和文字颜色就可以随之变化。基于这个改变，整体的页面就很容易改变了。

  接下来，我们就来增加处理更新值的 JavaScript 脚本部分。

- 涉及 JavaScript 的部分

  接下来我会把项目需要的 JavaScript 逐步分析。

  ```js
  const root = document.documentElement
  const themeBtns = document.querySelectorAll('.theme > button')
  themeBtns.forEach((btn) => {
    btn.addEventListener('click', handleThemeUpdate)
  })

  function handleThemeUpdate(e) {
    switch(e.target.value) {
      case 'dark':
        root.style.setProperty('--bg', 'black')
        root.style.setProperty('--bg-text', 'white')
        break
      case 'calm':
        root.style.setProperty('--bg', '#B3E5FC')
        root.style.setProperty('--bg-text', '#37474F')
        break
      case 'light':
        root.style.setProperty('--bg', 'white')
        root.style.setProperty('--bg-text', 'black')
        break
    }
  }
  ```

  别被吓到了，代码其实比你想的简单得多。

  首先，创建一个对 root 元素的引用，`const root = document.documentElement`。这里的 root 引用就是 HTML。一会你就明白为什么这一点很重要了。如果你很好奇，就先理解这是为了设置 CSS 变量使用的。

  然后，对不同 button 也保存对应的引用，`const themeBtns = document.querySelectorAll('.theme > button')`。querySelectorAll 会返回一个可以遍历的数组解构，这样我们就可以遍历每个按钮给它们增加对应的点击事件。就像这样：

  ```js
  themeBtns.forEach((btn) => {
    btn.addEventListener('click', handleThemeUpdate)
  })
  ```

  handleThemeUpdate 在哪呢？接下来就是。点击按钮时，对应的 handleThemeUpdate 就会触发。因此要记下哪个按钮点击了，应该执行对应什么样的操作。因此，这里用了一个 switch，不同的按钮点击事件在这里有了区别。现在你再回去看一下前面的 JavaScript 代码，你应该能更好的理解它了。

  点此查看 [示例 2](https://megaminx.gitee.io/css-variables/demo2.html)。

#### 创建 CSS 变量盒

假如你忘了，那再提一下，我们要做的例子是这样的：

{%asset_image 03.gif%}

请记住，盒子的颜色是动态变化的，盒子可以根据用户的输入进行 3D 旋转：

{%asset_image 04.gif%}

这是使用 CSS 变量和 JavaScript 共同创造出的一个既有交互性又很美妙的例子。我们一起看看怎么做的。

- 代码片段

  我们需要下面一些元素：

  1. 一个范围输入

  2. 一个容器来显示说明部分

  3. 一个部分用来列出不同的盒子和每一种输入

  {%asset_image 07.png%}

  代码部分很简单，下面就是：

  ```html
  <main class="booth">
    <aside class="slide">
      <label>Move this 👇</label>
      <input
        class="booth-slider"
        type="range"
        min="-50"
        max="50"
        value="0"
        step="5"
      />
    </aside>

    <section class="color-boxes">
      <div class="color-box" id="1"><input value="red" /></div>
      <div class="color-box" id="2"><input /></div>
      <div class="color-box" id="3"><input /></div>
      <div class="color-box" id="4"><input /></div>
      <div class="color-box" id="5"><input /></div>
      <div class="color-box" id="6"><input /></div>
    </section>

    <footer class="instructions">
      👉 Move the slider<br />
      👉 Write any color in the red boxes
    </footer>
  </main>
  ```

  需要注意以下几点：

  1. 输入的范围是从 -50 到 50，步长是 5，而且最小值是 -50。

  2. 如果你不太清楚这个范围输入是什么原理，可以在 W3Schools 找到相关说明。

  3. 注意外层带有`.color-boxes`类的容器，它包含了`.color-box`的容器，再其中就是各种输入了。

  4. 或许应该提一下，第一个输入框的默认值是红色。

  理解了页面的结构，接下来我们看一下页面样式。

  {%asset_image 08.png%}

  1. 首先把`.slider`和`.instructions`的元素移出文档流，进行绝对定位。

  2. 然后给 body 元素添加日出的背景色，再用一朵花的背景图做装饰，放在页面的左下角。

  3. 然后把`.color-boxes`居中对齐。

  4. 接下来给`.color-boxes`增加样式。

  我们一起来深入一下细节。下面的代码完成的是第一个任务。

  ```css
  .slider,
  .instructions {
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
    padding: 1rem 2rem;
    border-radius: 5px;
  }

  .slider {
    right: 10px;
    top: 10px;
  }

  .slider > * {
    display: block;
  }

  .instructions {
    text-align: center;
    bottom: 0;
    background: initial;
    color: black;
  }
  ```

  这段代码非常简单，我想你肯定能读懂。因为我们需要设置元素的背景色和背景图片，那么我们最好使用简化的 background 属性来增加多种不同的背景。代码如下：

  ```css
  body {
    margin: 0;
    color: rgba(255, 255, 255, 0.9);
    background: url("http://bit.ly/2FiPrRA") 0 100%/340px no-repeat, var(--primary-color);
    font-family: "Shadows Into Light Two", cursive;
  }
  ```

  url 部分设置向日葵图片的链接。接下来`0 100%`代表图像在背景中的位置。在斜线后的另一部分是代表 background-size，这个值是 340px，如果这个值小一些，那图片也会更小一点。no-repeat 意味着背景图片不允许重复。最后，逗号之后的部分就是第二种声明背景，这次我们把 background-color 设置成`var(--primary-color)`，哦，它是一个变量，这就意味着你需要定义这个变量，就像这样：

  ```css
  :root {
    --primary-color: rgba(241, 196, 15, 1);
  }
  ```

  现在的颜色是日出的黄色，不是什么大问题，接下来我们会设置更多的变量。

  然后，把`.color-boxes`居中对齐。

  ```css
  main.booth {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ```

  主要容器是布局设置成 flex，然后直接将子元素放在页面中间，也就是接下来`color-box`的部分。下面我们把容器和子元素美化一下。首先是子元素：

  ```css
  .color-box {
    padding: 1rem 3.5rem;
    margin-bottom: 0.5rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 0.3rem;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.4);
  }
  ```

  这样就够了，还加了一个漂亮的阴影，这样就有了酷炫的效果了。

  还有`.color-boxes`容器的样式：

  ```css
  .color-boxes {
    background: var(--secondary-color);
    box-shadow: 10px 10px 30px rgba(0,0,0,0.4);
    border-radius: 0.3rem;

    transform: perspective(500px) rotateY( calc(var(--slider) * 1deg));
    transition: transform 0.3s;
  }
  ```

  棒！这样就好多了。让我们细化一下，下面是简单的部分：

  ```css
  .color-boxes {
    background: **var(--secondary-color)**;
    box-shadow: 10px 10px 30px rgba(0,0,0,0.4);
    border-radius: 0.3rem;
  }
  ```

  你知道意思，对吧？这里用了一个新的变量，因此我们需要在 root 选择器里加上定义：

  ```css
  :root {
    --primary-color: rgba(241,196,15 ,1);
    --secondary-color: red;
  }
  ```

  这里的 secondary-color 是红色，这就使得容器有一个红色的背景。但你可能对下面的部分感到疑惑：

  ```css
  .color-boxes {
    transform: perspective(500px) rotateY(calc(var(--slider) * 1deg));
    transition: transform 0.3s
  }
  ```

  transform 合并了两个不同的函数：一个是透视，一个是以 Y 轴为标准的旋转。不过，perspective 和 rotateY 又起了什么样的作用呢？

  `perspective()`函数可以使元素在 3D 的空间内变形。它会激活一个三维空间，使元素增加一个 Z 轴。激活了三维空间后，元素就有了 X，Y，Z 三个轴。`rotateY`函数就意味着把元素以 Y 轴为中心进行旋转。

  移动滑块的时候，你知道是哪个函数影响了`.container-box`的旋转效果么？就是这个`rotateY`函数被调用了。因为这个值可以通过 JavaScript 传给函数，所以这个值就用一个变量来表示。

  那为什么要用这个变量乘以 1deg 呢？按通常的经验来说，也为了自由定义变量。我们建议在创建变量时不带单位，这样你就可以在任何需要使用单位的时候通过`cacl()`函数达成目标。

  这就使得你可以在需要时任意使用了。它既可以转化成 deg，也可以转化成一个相对于用户视窗单位 vw 的比例，你可以想怎么做就怎么做。

  在这个例子中，我们把一个数字通过乘以 1deg，得到了一个有单位的数值。因为 CSS 并不理解数学计算，因此你需要把这个算术放在`cacl()`函数里才能得到 CSS 属性需要的对应数值。

  这些都完成，我们就可以开始下一步了。现在我们要用 JavaScript 来更新这个变量值。不过还剩下一点 CSS 的代码。这就是了：

  ```css
  .color-box:nth-child(1) {
    background: var(--bg-1);
  }
  .color-box:nth-child(2) {
    background: var(--bg-2);
  }
  .color-box:nth-child(3) {
    background: var(--bg-3);
  }
  .color-box:nth-child(4) {
    background: var(--bg-4);
  }
  .color-box:nth-child(5) {
    background: var(--bg-5);
  }
  .color-box:nth-child(6) {
    background: var(--bg-6);
  }
  ```

  这又是什么鬼？首先，nth-child 选择器用来选择不同的子元素。这里我们需要看深入一点，我们已经了解血药更新每个盒子的颜色，也知道每个盒子的颜色需要用一个变量以便使用 JavaScript 更新。因此，我们就这样设置：

  ```css
  .color-box:nth-child(1) {
    background: var(--bg-1);
  }
  ```

  简单吧？不过还有一个问题，如果这个变量不存在，那会怎么样呢？我们需要默认值，这样就就没问题了：

  ```css
  .color-box:nth-child(1) {
    background: var(--bg-1, red);
  }
  ```

  不过在这个例子中，我选择不提供任何默认值。如果这个变量的属性值不合法，那么这个属性值就会用起初始值。也就是说，如果`--bg-1`不合法或者无效，那么背景就是它的初始值，也就是透明色。没有明确指定时，初始值就是这个属性的默认值。例如，如果你不设置元素的 background-color，那它就是默认的透明色。初始值也是一种默认值。

- 开始写 JavaScript

  需要写的 JavaScript 部分非常少。首先让我们处理滑块，五行就够了！

  ```js
  const root = document.documentElement
  const range = document.querySelector('.booth-slider')

  //as slider range's value changes, do something
  range.addEventListener('input', handleSlider)

  function handleSlider (e) {
    let value = e.target.value
    root.style.setProperty('--slider', value)
  }
  ```

  很简单吧？不过我还是要解释一下，以防我把你搞糊涂了。

  首先，保存一个对 slider 元素的引用，`const range = document.querySelector('.booth-slider')`。

  然后给它增加一个事件，用来处理滑块值变化，`range.addEventListener('input', handleSlider)`。

  接下来就是这个回调事件 handleSlider：

  ```js
  function handleSlider (e) {
    let value = e.target.value
    root.style.setProperty('--slider', value)
  }
  ```

  `root.style.setProperty('--slider', value)`是指把 root 元素的 style 属性设置成对应值。

  处理颜色变化和处理滑块的变化一样简单，下面就是：

  ```js
  const inputs = document.querySelectorAll('.color-box > input')
  //as the value in the input changes, do something.
  inputs.forEach(input => {
    input.addEventListener('input', handleInputChange)
  })

  function handleInputChange (e) {
    let value = e.target.value
    let inputId = e.target.parentNode.id
    let inputBg = `--bg-${inputId}`
    root.style.setProperty(inputBg, value)
  }
  ```

  保存一个对所有输入框的引用，`const inputs = document.querySelectorAll('.color-box > input')`。

  为每一个输入框增加一个事件处理：

  ```js
  inputs.forEach(input => {
    input.addEventListener('input', handleInputChange)
  })
  ```

  接下来是 handleInputChange 函数：

  ```js
  function handleInputChange (e) {
    let value = e.target.value
    let inputId = e.target.parentNode.id
    let inputBg = `--bg-${inputId}`
    root.style.setProperty(inputBg, value)
  }
  ```

  点此查看 [示例 3](https://megaminx.gitee.io/css-variables/demo3.html)。

嗯…这就没了！样例做完了！

最后，CSS 变量的浏览器支持并不差，可以说相当好了，几乎所有的现代浏览器都能支持。

所以，你可以在生产环境中使用吗？我当然说是啦！



