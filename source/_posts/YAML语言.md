---
title: YAML 语言
date: 2021-11-02 15:38:58
categories: 开发
tags: yaml
---

编程免不了要写配置文件，怎么写配置文件也是一门学问。YAML 是专门用来写配置文件的语言，非常简洁和强大，远比 JSON 格式方便。

YAML 是 「YAML Ain't a Markup Language」（YAML 不是一种标记语言）的递归缩写。在开发这种语言时，YAMLA 的意思其实是「Yet Another Markup Language」（仍是一种标记语言）。

<!-- more -->

YAML 的语法和其他高级语言类似，并且可以简单表达清单、散列表、数量等数据形态。它使用空白符号缩进和大量依赖外观的特色，特别适合用来表达或编辑数据结构、各种配置文件、文件大纲等。

YAML 的配置文件后缀名为`.yml`，如：runoob.yml。

### 基本语法

YAML 语言（发音 /ˈjæməl/）的设计目的，就是方便人类读写。它实质上是一种通用的数据串行化格式。

它的基本语法规则如下：

- 大小写敏感
- 使用缩进表示层级关系
- 缩进不允许使用 Tab 键，只允许使用空格
- 缩进的空格数不重要，只要相同层级的元素左对齐即可

`#`表示注释，从这个字符一直到行尾，都会被解析器忽略。

### 数据类型

YAML 支持的数据类型有三种：

- 对象：键值对的集合，又称为映射（mapping）/ 哈希（hashes）/ 字典（dictionary）
- 数组：一组按次序排列的值，又称为序列（sequence）/ 列表（list）
- 纯量（scalars）：单个的、不可再分的值

以下分别介绍这三种数据类型。

{%note info%}
本文介绍的 YAML 语法以 [JS-YAML](https://github.com/nodeca/js-yaml) 的实现为例，也可以去 [在线 Demo](https://nodeca.github.io/js-yaml/) 验证下面的例子。
{%endnote%}

#### 对象

对象键值对使用冒号结构表示`key: value`，冒号后面要加一个空格。

{%tabs yaml1%}
<!-- tab YAML -->
```yml
animal: pets
```
<!-- endtab -->
<!-- tab JavaScritp -->
```js
{ animal: 'pets' }
```
<!-- endtab -->
{%endtabs%}

还可以使用缩进表示层级关系：

{%tabs yaml2%}
<!-- tab YAML -->
```yml
hash:
  name: Steve
  foo: bar
```
<!-- endtab -->
<!-- tab JavaScritp -->
```js
{
  hash: {
    name: 'Steve',
    foo: 'bar'
  }
}
```
<!-- endtab -->
{%endtabs%}

YAML 也允许另一种写法，将所有键值对写成一个行内对象。

{%tabs yaml3%}
<!-- tab YAML -->
```yml
hash: { name: Steve, foo: bar }
```
<!-- endtab -->
<!-- tab JavaScritp -->
```js
{ hash: { name: 'Steve', foo: 'bar' } }
```
<!-- endtab -->
{%endtabs%}

#### 数组

以连词线（`-`）开头的行表示构成一个数组。

{%tabs yaml4%}
<!-- tab YAML -->
```yml
- Cat
- Dog
- Goldfish
```
<!-- endtab -->
<!-- tab JavaScritp -->
```js
[ 'Cat', 'Dog', 'Goldfish' ]
```
<!-- endtab -->
{%endtabs%}

如果数据结构的子成员是一个数组，则可以在该项下面缩进一个空格。

{%tabs yaml5%}
<!-- tab YAML -->
```yml
-
  - Cat
  - Dog
  - Goldfish
```
<!-- endtab -->
<!-- tab JavaScritp -->
```js
[ [ 'Cat', 'Dog', 'Goldfish' ] ]
```
<!-- endtab -->
{%endtabs%}

数组也可以采用行内表示法。

{%tabs yaml6%}
<!-- tab YAML -->
```yml
animal: [Cat, Dog]
```
<!-- endtab -->
<!-- tab JavaScritp -->
```js
{ animal: [ 'Cat', 'Dog' ] }
```
<!-- endtab -->
{%endtabs%}

#### 复杂结构

对象和数组可以结合使用，形成复合结构。

{%tabs yaml7%}
<!-- tab YAML -->
```yml
languages:
 - Ruby
 - Perl
 - Python
websites:
 YAML: yaml.org
 Ruby: ruby-lang.org
 Python: python.org
 Perl: use.perl.org
```
<!-- endtab -->
<!-- tab JavaScritp -->
```js
{ languages: [ 'Ruby', 'Perl', 'Python' ],
  websites:
   { YAML: 'yaml.org',
     Ruby: 'ruby-lang.org',
     Python: 'python.org',
     Perl: 'use.perl.org' } }
```
<!-- endtab -->
{%endtabs%}

#### 纯量

纯量是最基本的、不可再分的值，包括：字符串、布尔值、整数、浮点数、Null、时间、日期。

数字直接以字面量的形式表示：

{%tabs yaml8%}
<!-- tab YAML -->
```yml
int:
  - 123
  - 0b1010_0111_0100_1010_1110 #二进制表示
float:
  - 3.14
  - 6.8523015e+5  #可以使用科学计数法
```
<!-- endtab -->
<!-- tab JavaScritp -->
```js
{
  int: [ 123, 0b1010_0111_0100_1010_1110 ],
  float: [ 3.14, 6.8523015e+5 ]
}
```
<!-- endtab -->
{%endtabs%}

布尔值用 true 和 false 表示：

{%tabs yaml9%}
<!-- tab YAML -->
```yml
boolean:
  - true  #TRUE，True 都可以
  - false #FALSE，False 都可以
```
<!-- endtab -->
<!-- tab JavaScritp -->
```js
{ boolean: [ true, false ] }
```
<!-- endtab -->
{%endtabs%}

Null 用`~`表示：

{%tabs yaml10%}
<!-- tab YAML -->
```yml
parent: ~
```
<!-- endtab -->
<!-- tab JavaScritp -->
```js
{ parent: null }
```
<!-- endtab -->
{%endtabs%}

日期必须使用 ISO 8601 格式，即 yyyy-MM-dd：

{%tabs yaml11%}
<!-- tab YAML -->
```yml
date: 1976-07-31
```
<!-- endtab -->
<!-- tab JavaScritp -->
```js
{ data: new Date('1976-07-31') }
```
<!-- endtab -->
{%endtabs%}

时间使用 ISO 8601 格式，时间和日期之间使用 T 连接，最后使用 + 代表时区：

{%tabs yaml12%}
<!-- tab YAML -->
```yml
datetime: 2018-02-17T15:02:31+08:00
```
<!-- endtab -->
<!-- tab JavaScritp -->
```js
{ data: new Date('2018-02-17T15:02:31+08:00') }
```
<!-- endtab -->
{%endtabs%}

YAML 允许使用两个感叹号，强制转换数据类型：

{%tabs yaml13%}
<!-- tab YAML -->
```yml
e: !!str 123
f: !!str true
```
<!-- endtab -->
<!-- tab JavaScritp -->
```js
{ e: '123', f: 'true' }
```
<!-- endtab -->
{%endtabs%}

#### 字符串

字符串是最常见，也是最复杂的一种数据类型。

字符串默认不使用引号表示：

{%tabs yaml14%}
<!-- tab YAML -->
```yml
str: 这是一行字符串
```
<!-- endtab -->
<!-- tab JavaScritp -->
```js
{ str: '这是一行字符串' }
```
<!-- endtab -->
{%endtabs%}

如果字符串中包含空格或特殊字符，需要放在引号中：

{%tabs yaml15%}
<!-- tab YAML -->
```yml
str: '内容: 字符串'
```
<!-- endtab -->
<!-- tab JavaScritp -->
```js
{ str: '内容: 字符串' }
```
<!-- endtab -->
{%endtabs%}

单引号或双引号都可以，双引号不会对特殊字符转义：

{%tabs yaml16%}
<!-- tab YAML -->
```yml
s1: '内容\n字符串'
s2: "内容\n字符串"
```
<!-- endtab -->
<!-- tab JavaScritp -->
```js
{ { s1: '内容\\n字符串', s2: '内容\n字符串' } }
```
<!-- endtab -->
{%endtabs%}

单引号之中如果还有单引号，必须连续使用两个单引号转义：

{%tabs yaml17%}
<!-- tab YAML -->
```yml
str: 'labor''s day'
```
<!-- endtab -->
<!-- tab JavaScritp -->
```js
{ str: 'labor\'s day' }
```
<!-- endtab -->
{%endtabs%}

字符串还可以写成多行，从第二行开始，必须有一个单空格缩进，换行符会被转为空格：

{%tabs yaml18%}
<!-- tab YAML -->
```yml
str: 这是一段
  多行
  字符串
```
<!-- endtab -->
<!-- tab JavaScritp -->
```js
{ str: '这是一段 多行 字符串' }
```
<!-- endtab -->
{%endtabs%}

多行字符串可以使用`|`保留换行符，也可以使用`>`折叠换行：

{%tabs yaml19%}
<!-- tab YAML -->
```yml
this: |
  Foo
  Bar
that: >
  Foo
  Bar
```
<!-- endtab -->
<!-- tab JavaScritp -->
```js
{ this: 'Foo\nBar\n', that: 'Foo Bar\n' }
```
<!-- endtab -->
{%endtabs%}

`+`表示保留文字块末尾的换行，`-`表示删除字符串末尾的换行：

{%tabs yaml20%}
<!-- tab YAML -->
```yml
s1: |
  Foo

s2: |+
  Foo


s3: |-
  Foo
```
<!-- endtab -->
<!-- tab JavaScritp -->
```js
{ s1: 'Foo\n', s2: 'Foo\n\n\n', s3: 'Foo' }
```
<!-- endtab -->
{%endtabs%}

字符串之中可以插入 HTML 标记：

{%tabs yaml21%}
<!-- tab YAML -->
```yml
message: |

  <p style="color: red">
    段落
  </p>
```
<!-- endtab -->
<!-- tab JavaScritp -->
```js
{ message: '\n<p style="color: red">\n  段落\n</p>\n' }
```
<!-- endtab -->
{%endtabs%}

### 引用

锚点`&`和别名`*`，可以用来引用。

```yml
defaults: &defaults
  adapter: postgres
  host: localhost

development:
  database: myapp_development
  <<: *defaults

test:
  database: myapp_test
  <<: *defaults
```

上面代码等同于下面：

```yml
defaults:
  adapter:  postgres
  host:     localhost

development:
  database: myapp_development
  adapter:  postgres
  host:     localhost

test:
  database: myapp_test
  adapter:  postgres
  host:     localhost
```

`&`用来建立锚点（defaults），`<<`表示合并到当前数据，`*`用来引用锚点。

下面是另一个例子：

{%tabs yaml22%}
<!-- tab YAML -->
```yml
- &showell Steve
- Clark
- Brian
- Oren
- *showell
```
<!-- endtab -->
<!-- tab JavaScritp -->
```js
[ 'Steve', 'Clark', 'Brian', 'Oren', 'Steve' ]
```
<!-- endtab -->
{%endtabs%}
