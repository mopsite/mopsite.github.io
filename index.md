---
layout: home

hero:
  name: 'Hello World'
  text: 'A blog of Paul'
  tagline: '帅到无边心是岸，拽临绝顶我为峰'
  image:
    src: /logo.svg
  actions:
    - theme: brand
      text: 在 Github 上查看
      link: https://github.com/mopsite/mopsite.github.io
features:
  - title: JS 中的 this 关键字
    icon: '<i class="fa-duotone fa-eclipse"></i>'
    link: '/pages/posts/js-this'
    details: 'this 关键字是 JavaScript 中一个非常重要的语法点，不理解它的含义，大部分开发任务都无法完成。'
  - title: JS 的错误处理机制
    icon: '<i class="fa-duotone fa-globe-snow"></i>'
    link: '/pages/posts/js-error'
    details: 'JS 解析或运行时，一旦发生错误，引擎就会抛出一个错误对象。JS 原生提供 Error 构造函数，所有抛出的错误都是这个构造函数的实例。'
  - title: valueOf 和 toString 方法
    icon: '<i class="fa-alarm-clock fa-duotone"></i>'
    link: '/pages/posts/valueof-tostring'
    details: 'valueOf 和 toString 是定义在 Object.prototype 对象上的，称为实例方法，所有 Object 的实例对象都继承了它们。'
  - title: JS 数据类型的转换
    icon: '<i class="fa-alicorn fa-duotone"></i>'
    link: '/pages/posts/js-coversion'
    details: 'JS 中变量的数据类型是不确定的，但是各种运算符对数据类型是有要求的。如果运算符发现，运算子的类型与预期不符，就会自动转换类型。'
  - title: 发布一个标准开源库
    icon: '<i class="fa-duotone fa-grill-fire"></i>'
    link: '/pages/posts/npm-publish'
    details: '当代码层面的工作完成之后，你可能需要将库发布给使用者。但是要想使我们的库称为一个标准开源库，还需要完成一些额外的工作。'
  - title: 在 ESM 中导入 JSON 文件
    icon: '<i class="fa-duotone fa-moped"></i>'
    link: '/pages/posts/import-json-to-esm'
    details: '有时候，我们需要在 Node.js 的 ES 模块中处理 JSON 文件。目前有两种常规方案，和一种实验性方案。'
---
