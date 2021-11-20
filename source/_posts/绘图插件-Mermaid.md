---
title: 绘图插件-Mermaid
date: 2021-11-03 22:24:56
categories: 排版
tags:
  - markdown
  - 插件
---

Mermaid 是一个基于 JavaScript 的图表绘制工具，通过解析类 Markdown 的文本语法来实现图表的创建和动态修改。Mermaid 诞生的主要目的是让文档的更新能够及时更上开发进度。

通过 Mermaid，我们不用专门的流图工具（例如微软的 Visio），我们需要编辑的只是文本，因此不少现成的 Markdown 编辑器都可以用上。

<!-- more -->

Mermaid 目前支持的图形有：

- 流程图（Flowchart）
- 时序图（Sequence Diagram）
- 甘特图（Gantt Diagram）
- 类图（Class Diagram）
- 状态图（State Diagram）
- 饼图（Pie Chart）
- 行程图（User Journey）

这里只简单介绍流程图的绘制方法。如果你想绘制更多其他图形，请查看 [Mermaid 官方文档](https://mermaid-js.github.io/)。

### 开始使用

想要在你的页面中使用 Mermaid，只需要以 CDN 的方式在页面中引入下面这句话即可：

```html
<script src="https://cdn.jsdelivr.net/gh/xlovet/asset/js/mermaid.js"></script>
```

然后在 HTML 标签中使用`class=mermaid`类名来绘制图表：

```html
<div class="mermaid">
  graph LR
    A --- B
    B --> C
    B --> D
</div>
```

一个简单的完整 HTML 页面示例如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <script src="https://cdn.jsdelivr.net/gh/xlovet/asset/js/mermaid.js"></script>
</head>
<body>
  <div class="mermaid">
  flowchart LR
    A --- B
    B --> C
    B --> D
  </div>
</body>
</html>
```

### 流程图语法

所有流程图都由节点、形状及边框、箭头和线条组成。Mermaid 代码定义了这些节点和边框的生成及交互方式。

它可以容纳不同的箭头类型、多向箭头以及与子图的连接。

{%note danger%}
请不要使用 end 作为流程图的节点，任何类似于 End 或者 END 的单词都会中断流程图。
{%endnote%}

#### 节点与形状

- 默认节点

  ```
  flowchart
    id
  ```

  {%mermaid flowchart%}
  id
  {%endmermaid%}

  {%note info%}
  id 是显示在框中的内容。
  {%endnote%}

- 文本节点

  也可以在框中设置与 id 不同的文本。如果多次设置同一个 id 的文本，将显示最后一次的设置。

  ```
  flowchart
    id1[This is the text in the box]
  ```

  {%mermaid flowchart%}
  id1[This is the text in the box]
  {%endmermaid%}

- 圆角形节点

  ```
  flowchart
    id1(This is the text in the box)
  ```

  {%mermaid flowchart%}
  id1(This is the text in the box)
  {%endmermaid%}

- 操场形节点

  ```
  flowchart
    id1([This is the text in the box])
  ```

  {%mermaid flowchart%}
  id1([This is the text in the box])
  {%endmermaid%}

- 子程序形节点

  ```
  flowchart
    id1[[This is the text in the box]]
  ```

  {%mermaid flowchart%}
  id1[[This is the text in the box]]
  {%endmermaid%}

- 圆柱形节点

  ```
  flowchart
    id1[(Database)]
  ```

  {%mermaid flowchart%}
  id1[(Database)]
  {%endmermaid%}

- 圆形节点

  ```
  flowchart
    id1((This is the text in the circle))
  ```

  {%mermaid flowchart%}
  id1((This is the text in the circle))
  {%endmermaid%}

- 不对称形节点

  ```
  flowchart
    id1>This is the text in the box]
  ```

  {%mermaid flowchart%}
  id1>This is the text in the box]
  {%endmermaid%}

- 菱形节点

  ```
  flowchart
    id1{This is the text in the box}
  ```

  {%mermaid flowchart%}
  id1{This is the text in the box}
  {%endmermaid%}

- 平行四边形节点

  ```
  flowchart
    id1[/This is the text in the box/]
    id2[\This is the text in the box\]
  ```

  {%mermaid graph%}
  id1[/This is the text in the box/]
  id2[\This is the text in the box\]
  {%endmermaid%}

- 梯形节点

  ```
  flowchart
    id1[/Christmas\]
    id2[\Christmas/]
  ```

  {%mermaid graph%}
  id1[/Christmas\]
  id2[\Christmas/]
  {%endmermaid%}

#### 流程方向

流程图的方向有以下几种：

- TB：从上到下（top to bottom）
- TD：和 TB 形同（top to down）
- BT：从下到上（bottom to top）
- RL：从右到左（right to left）
- LR：从左到右（left to right）

下面声明了一个从左到右（LR）的流程图：

```
flowchart LR
  A --> B
```

{%mermaid flowchart LR%}
A --> B
{%endmermaid%}

{%note info%}
如果不声明方向，默认上到下。
{%endnote%}

#### 节点连接

节点可以通过连接线与边框相接。连接线有多种形状，而且可以在连接线中加入标签。

- 箭头连接

  ```
  flowchart LR
    A --> B
  ```

  {%mermaid flowchart LR%}
  A --> B
  {%endmermaid%}

- 开放连接

  ```
  flowchart LR
    A --- B
  ```

  {%mermaid flowchart LR%}
  A --- B
  {%endmermaid%}

- 标签连接

  ```
  flowchart LR
    A --This is the text--- B
    C ---|This is the text| D
  ```

  {%mermaid flowchart LR%}
  A --This is the text--- B
  C ---|This is the text| D
  {%endmermaid%}

- 箭头标签连接

  ```
  flowchart LR
    A --text--> B -->|text| C
  ```

  {%mermaid flowchart LR%}
  A --text--> B -->|text| C
  {%endmermaid%}

- 虚线（点划线）连接

  ```
  flowchart LR
    A -.-> B -.- C
    D -.text.-> E -.text.- F
  ```

  {%mermaid flowchart LR%}
  A -.-> B -.- C
  D -.text.-> E -.text.- F
  {%endmermaid%}

- 粗实线连接

  ```
  flowchart LR
    A ==> B ==text==> C
  ```

  {%mermaid flowchart LR%}
  A ==> B ==text===> C
  {%endmermaid%}

- 新类型箭头连接

  ```
  flowchart LR
    A --o B --x C
  ```

  {%mermaid flowchart LR%}
  A --o B --x C
  {%endmermaid%}

- 双向箭头连接

  ```
  flowchart LR
    A o--o B <--> C x--x D
  ```

  {%mermaid flowchart LR%}
  A o--o B <--> C x--x D
  {%endmermaid%}

- 连接链

  可以将多个连接写入同一行，形成一条链。

  ```
  flowchart LR
    A -- text --> B -- text2 --> C
  ```

  {%mermaid flowchart LR%}
  A -- text --> B -- text2 --> C
  {%endmermaid%}

  也可以在同一行中声明多个节点连接。

  ```
  flowchart LR
    A --> B & C --> D
  ```

  {%mermaid flowchart LR%}
  A --> B & C --> D
  {%endmermaid%}

  或像这样：

  ```
  flowchart TB
    A & B --> C & D
  ```

  {%mermaid flowchart TB%}
  A & B --> C & D
  {%endmermaid%}

- 连接长度

  流程图中的每个节点最终都会被渲染成一个等级。默认情况下，连接可以跨越任意数量的等级，你可以通过在连接中添加额外的短横线`-`来使某个连接比其他连接更长。

  在下面的示例中，从节点 B 到节点 E的连接中添加了两个额外的`-`，因此它比常规连接多跨越两个等级，

  ```
  flowchart TD
    A[Start] --> B{Is it?};
    B -->|Yes| C[OK];
    C --> D[Rethink];
    D --> B;
    B ---->|No| E[End];
  ```

  {%mermaid flowchart TD%}
  A[Start] --> B{Is it?};
  B -->|Yes| C[OK];
  C --> D[Rethink];
  D --> B;
  B ---->|No| E[End];
  {%endmermaid%}

  当标签写在连接线中间的时候，必须在标签右侧的连接线中添加额外的`-`，下面的示例等效于上图。

  ```
  flowchart TD
    A[Start] --> B{Is it?};
    B --Yes--> C[OK];
    C --> D[Rethink];
    D --> B;
    B --No----> E[End];
  ```

  对于虚线或粗实线连接，要使用`.`或`=`作为额外添加的符号。

  |长度|1|2|3|
  |:---:|:---:|:---:|:---:|
  |普通连接|---|----|-----|
  |箭头连接|-->|--->|---->|
  |粗实线连接|===|====|=====|
  |粗实线箭头连接|==>|===>|====>|
  |虚线连接|-.-|-..-|-...-|
  |虚线箭头连接|-.->|-..->|-...->|

#### 特殊用法

- 引号

  可以将文本放入引号内以呈现更复杂的文字。

  ```
  flowchart
    id1["This is the text in the box"]
  ```

  {%mermaid flowchart%}
  id1["This is the text in the box"]
  {%endmermaid%}

- 字符实体

  可以在文本中使用字符实体编码。

  ```
  graph LR
  A["A double quote: #quot;"]-->B["A dec char: #9829;"]
  ```

  {%mermaid flowchart LR%}
  A["A double quote: #quot;"]-->B["A dec char: #9829;"]
  {%endmermaid%}

- FontAwesome

  如果想加入来自 FontAwesome 的图标字体，需要引入 FontAwesome 样式，[点此](https://mopsite.gitee.io/fontawesome) 查看引入详情。

  图标属于复杂字符，需要放入引号内显示，通过`fa:icon-name`访问。

  ```
  graph TD
  B["fab:fa-twitter for peace"]
  B-->C["far:fa-ban forbidden"]
  B-->D["far:fa-heart"]
  B-->E["A far:fa-camera perhaps?"]
  ```

  {%mermaid flowchart LR%}
  B["fab:fa-twitter for peace"]
  B-->C["far:fa-ban forbidden"]
  B-->D["far:fa-heart"]
  B-->E["A far:fa-camera perhaps?"]
  classDef default fill:#666;
  {%endmermaid%}

#### 子图

子图的语法格式为：

```
subgraph title
    graph definition
end
```

下面是一个例子：

```
flowchart TB
  c1-->a2
  subgraph one
  a1-->a2
  end
  subgraph two
  b1-->b2
  end
  subgraph three
  c1-->c2
  end
```

{%mermaid flowchart TB%}
c1-->a2
subgraph one
a1-->a2
end
subgraph two
b1-->b2
end
subgraph three
c1-->c2
end
{%endmermaid%}

可以设置子图之间的连接。

```
flowchart TB
  c1-->a2
  subgraph one
  a1-->a2
  end
  subgraph two
  b1-->b2
  end
  subgraph three
  c1-->c2
  end
  one --> two
  three --> two
  two --> c2
```

{%mermaid flowchart TB%}
c1-->a2
subgraph one
a1-->a2
end
subgraph two
b1-->b2
end
subgraph three
c1-->c2
end
one --> two
three --> two
two --> c2
{%endmermaid%}

还可以通过方向语句设置子图的呈现方向。

```
flowchart LR
  subgraph TOP
    direction TB
    subgraph B1
        direction RL
        i1 -->f1
    end
    subgraph B2
        direction BT
        i2 -->f2
    end
  end
  A --> TOP --> B
  B1 --> B2
```

{%mermaid flowchart LR%}
subgraph TOP
  direction TB
  subgraph B1
      direction RL
      i1 -->f1
  end
  subgraph B2
      direction BT
      i2 -->f2
  end
end
A --> TOP --> B
B1 --> B2
{%endmermaid%}

#### 样式和类

- 连接样式

  可以给连接修改样式。由于连接没有 id，所以需要使用连接的索引号（从 0 开始）。下面的例子中，使用的连接索引号为 1 ，因此为第二个连接添加了样式。

  ```
  flowchart LR
    A-->B--text-->C-->D
    linkStyle 1 stroke:#ff3,stroke-width:4px,color:red;
  ```

  {%mermaid flowchart LR%}
  A-->B--text-->C-->D
  linkStyle 1 stroke:#ff3,stroke-width:4px,color:red;
  {%endmermaid%}

- 节点样式

  可以为节点应用特定样式，例如较粗的边框或不同的背景色。

  ```
  flowchart LR
    id1(Start)-->id2(Stop)
    style id1 fill:#f9f,stroke:#333,stroke-width:4px
    style id2 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5
  ```

  {%mermaid flowchart LR%}
  id1(Start)-->id2(Stop)
  style id1 fill:#f9f,stroke:#333,stroke-width:4px
  style id2 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5
  {%endmermaid%}

- 类样式

  比每次都定义样式更方便的是定义一个类样式，并将这个类添加到需要修改的节点上。

  类定义类似如下：

  ```
  classDef className fill:#f9f,stroke:#333,stroke-width:4px;
  ```

  将类添加到节点的操作如下：

  ```
  class nodeId1 className;
  ```

  也可以在一个语句中将类添加到多个节点：

  ```
  class nodeId1,nodeId2 className;
  ```

  添加类的一种更简短的形式是使用`:::`运算符将类名附加到节点后面：

  ```
  flowchart LR
    A:::someclass --> B
    classDef someclass fill:#f96;
  ```

  {%mermaid flowchart LR%}
  A:::someclass --> B
  classDef someclass fill:#f96;
  {%endmermaid%}

  如果一个类被命名为 default，它将被应用到所有没有特定类样式的节点。

  ```
  classDef default fill:#f9f,stroke:#333,stroke-width:4px;
  ```

### 其他图形展示

除了流程图，Mermaid 还可以绘制多种其他类型的图形。详情查看 [Mermaid 官方文档](https://mermaid-js.github.io/)。

#### 时序图

```
sequenceDiagram
  participant Alice
  participant Bob
  Alice->>John: Hello John, how are you?
  loop Healthcheck
      John->>John: Fight against hypochondria
  end
  Note right of John: Rational thoughts <br/>prevail!
  John-->>Alice: Great!
  John->>Bob: How about you?
  Bob-->>John: Jolly good!
```

{%mermaid sequenceDiagram%}
participant Alice
participant Bob
Alice->>John: Hello John, how are you?
loop Healthcheck
    John->>John: Fight against hypochondria
end
Note right of John: Rational thoughts <br/>prevail!
John-->>Alice: Great!
John->>Bob: How about you?
Bob-->>John: Jolly good!
{%endmermaid%}

#### 甘特图

```
gantt
dateFormat  YYYY-MM-DD
title Adding GANTT diagram to mermaid
excludes weekdays 2014-01-10

section A section
Completed task            :done,    des1, 2014-01-06,2014-01-08
Active task               :active,  des2, 2014-01-09, 3d
Future task               :         des3, after des2, 5d
Future task2               :         des4, after des3, 5d
```

{%mermaid gantt%}
dateFormat  YYYY-MM-DD
title Adding GANTT diagram to mermaid
excludes weekdays 2014-01-10

section A section
Completed task            :done,    des1, 2014-01-06,2014-01-08
Active task               :active,  des2, 2014-01-09, 3d
Future task               :         des3, after des2, 5d
Future task2               :         des4, after des3, 5d
{%endmermaid%}

#### 类图

```
classDiagram
Class01 <|-- AveryLongClass : Cool
Class03 *-- Class04
Class05 o-- Class06
Class07 .. Class08
Class09 --> C2 : Where am i?
Class09 --* C3
Class09 --|> Class07
Class07 : equals()
Class07 : Object[] elementData
Class01 : size()
Class01 : int chimp
Class01 : int gorilla
Class08 <--> C2: Cool label
```

{%mermaid classDiagram%}
Class01 <|-- AveryLongClass : Cool
Class03 *-- Class04
Class05 o-- Class06
Class07 .. Class08
Class09 --> C2 : Where am i?
Class09 --* C3
Class09 --|> Class07
Class07 : equals()
Class07 : Object[] elementData
Class01 : size()
Class01 : int chimp
Class01 : int gorilla
Class08 <--> C2: Cool label
{%endmermaid%}

#### 行程图

```
journey
  title My working day
  section Go to work
    Make tea: 5: Me
    Go upstairs: 3: Me
    Do work: 1: Me, Cat
  section Go home
    Go downstairs: 5: Me
    Sit down: 5: Me
```

{%mermaid journey%}
title My working day
section Go to work
  Make tea: 5: Me
  Go upstairs: 3: Me
  Do work: 1: Me, Cat
section Go home
  Go downstairs: 5: Me
  Sit down: 5: Me
{%endmermaid%}

#### 饼图

```
pie
  title Key elements in Product X
  "Calcium" : 42.96
  "Potassium" : 50.05
  "Magnesium" : 10.01
  "Iron" :  5
```

{%mermaid pie%}
title Key elements in Product X
"Calcium" : 42.96
"Potassium" : 50.05
"Magnesium" : 10.01
"Iron" :  5
{%endmermaid%}
