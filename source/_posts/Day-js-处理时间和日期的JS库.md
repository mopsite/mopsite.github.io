---
title: Day.js-处理时间和日期的JS库
date: 2022-01-13 20:15:52
categories: 前端
tags: JS库
---

Day.js 是一个轻量的处理时间和日期的 JavaScript 库。其大小仅 2KB，运行时能执行更少的 JavaScript，无论下载还是解析，都可以为你留出更多的时间。

所有的 API 操作都将返回一个新的 Dayjs 对象。这种设计能避免 bug 产生，节约调试时间。

另外，Day.js 对国际化支持良好。但除非手动加载，多国语言默认是不会被打包到工程里的。

<!-- more -->

### 安装

Day.js 可以运行在浏览器和 Node.js 中。本文中所有的代码都可以在这两种环境中正常运行。

#### Node.js

要在你的 Node.js 项目中使用 Day.js，只需使用 NPM 安装。

```
npm install days
```

然后在项目代码中引入即可：

```js
var dayjs = require('dayjs');
dayjs().format();
```

#### 浏览器

```html
<script src="path/to/dayjs/dayjs.min.js"></script>
<script>
  dayjs().format();
</script>
```

{%note info%}
Day.js 同步更新在这些 CDN 上 [cdnjs.com](https://cdnjs.com/libraries/dayjs)、[unpkg](https://unpkg.com/dayjs) 和 [jsDelivr](https://www.jsdelivr.com/package/npm/dayjs)。
{%endnote%}

```html
<script src="https://unpkg.com/dayjs/dayjs.min.js"></script>
<script>
  dayjs().format();
</script>
```

#### 下载

访问 https://www.jsdelivr.com/package/npm/dayjs 下载最新版本的 Day.js。

访问 https://github.com/iamkun/dayjs/releases 查看 Day.js 的已发布版本和源代码。

### 解析

Day.js 并没有对原生 `Date.prototype` 做任何修改，而是给 `Date` 对象做了一层封装。使用支持的数据格式调用 `dayjs()` 即可取到这个封装的对象。

Day.js 对象是不可变的，所有的 API 操作都将返回一个全新的实例。

#### 当前时间

直接调用 `dayjs()` 将返回一个包含当前日期和时间的 Day.js 对象。

```js
var now = dayjs();
```

等同于 `daynjs(new Date())` 的调用。

当没有传入参数时，参数默认值是 undefined，所以调用 `dayjs(undefined)` 就相当于调用 `dayjs()`。

Day.js 将 `dayjs(null)` 视为无效的输入。

#### 字符串

解析传入的 ISO 8601 格式的字符串并返回一个 Day.js 对象实例。

```js
dayjs('2022-01-14T16:00:00.000Z');
```

{%note warning%}
为了保证结果一致，当解析除了 ISO 8601 格式以外的字符串时，你应该使用 String + Format。
{%endnote%}

#### 字符串 + 格式

如果知道输入字符串的格式，你可以用它来解析日期。

{%note warning%}
使用本功能需先配置 CustomParseFormat 插件，才能正常运行。
{%endnote%}

```js
dayjs.extend(customParseFormat);
dayjs("12-25-1995", "MM-DD-YYYY");
```

如果想解析包含本地化语言的日期字符串，可以传入第三个参数。

```js
require("dayjs/locale/zh-cn");
dayjs("2018 三月 15", "YYYY MMMM DD", "zh-cn");
```

最后一个参数可传入布尔值来启用严格解析模式。严格解析要求格式和输入内容完全匹配，包括分隔符。

```js
dayjs("1970-00-00", "YYYY-MM-DD").isValid(); // true
dayjs("1970-00-00", "YYYY-MM-DD", true).isValid(); // false
dayjs("1970-00-00", "YYYY-MM-DD", "es", true).isValid(); // false
```

如果你不知道输入字符串的确切格式，但知道它可能是几种中的一种，可以使用数组传入多个格式。

```js
dayjs("12-25-2001", ["YYYY", "YYYY-MM-DD"], "es", true);
```

**支持的解析占位符列表**

|输入|例子|详情|输入|例子|详情|
|---|---|---|---|---|---|
|YY|18|两位数的年份|YYYY|2018|四位数的年份|
|M|1-12|月份，从 1 开始|MM|01-12|月份，两位数|
|MMM|Jan-Dec|缩写的月份名称|MMMM|January-December|完整的月份名称|
|D|1-31|月份里的一天|DD|01-31|月份里的一天，两位数|
|H|0-23|小时|HH|00-23|小时，两位数|
|h|1-12|小时，12 小时制|hh|01-12|小时，12 小时制，两位数|
|m|0-59|分钟|mm|00-50|分钟，两位数|
|s|0-59|秒|ss|00-59|秒，两位数|
|S|0-9|毫秒，一位数|SS|00-99|毫秒，两位数|
|SSS|000-999|毫秒，三位数|Do|1st ... 31st|带序数词的月份里的一天|
|Z|-05:00|UTC 的偏移量|ZZ|-0500|UTC 的偏移量，两位数|
|A|AM PM|上午下午，大写|a|am pm|上午下午，小写|

#### Unix 时间戳（毫秒）

解析传入的一个 Unix 时间戳（13 位数字，从 1970 年 1 月 1 日 UTC 午夜开始所经过的毫秒数）创建一个 Day.js 对象。

```js
dayjs(1318781876406)
```

{%note warning%}
传入的参数必须是 **number**。
{%endnote%}

#### Unix 时间戳（秒）

解析传入的一个 Unix 时间戳（10 位数字，从 1970 年 1 月 1 日 UTC 午夜开始所经过的秒数）创建一个 Day.js 对象。

```js
dayjs.unix(1318781876)
```

这个方法是用`dayjs(timestamp * 1000)`实现的，所以传入时间戳里的小数点后面的秒也会被解析。

```js
dayjs.unix(1318781876.721)
```

#### Date 对象

使用原生 JavaScript `Date` 对象创建一个 Day.js 对象。

```js
var d = new Date(2018, 8, 18)
var day = dayjs(d)
```

这将克隆 Date 对象。对传入的 Date 对象做进一步更改不会影响 Day.js 对象，反之亦然。

#### 对象

你可以传入包含单位和数值的一个对象来创建 Day.js 对象。

{%note warning%}
使用本功能需先配置 ObjectSupport 插件，才能正常运行。
{%endnote%}

```js
dayjs.extend(objectSupport)
dayjs({ hour: 15, minute: 10 });
dayjs.utc({ y: 2010, M: 3, d: 5, h: 15, m: 10, s: 3, ms: 123 });
dayjs({ year: 2010, month: 3, day: 5, hour: 15, minute: 10, second: 3, millisecond: 123 });
dayjs({ years: 2010, months: 3, date: 5, hours: 15, minutes: 10, seconds: 3, milliseconds: 123 });
```

`day` 和 `date` 都表示月份里的日期。

`dayjs({})` 返回当前时间。

注意类似 `new Date(year, month, date)`，月份从 0 开始计算。

#### 数组

你可以传入一个数组来创建一个 Dayjs 对象，数组的结构和 `new Date()` 十分类似。

{%note warning%}
使用本功能需先配置 ArraySupport 插件，才能正常运行。
{%endnote%}

```js
dayjs.extend(arraySupport)
dayjs([2010, 1, 14, 15, 25, 50, 125]); // February 14th, 3:25:50.125 PM
dayjs.utc([2010, 1, 14, 15, 25, 50, 125]);
dayjs([2010]); // January 1st
dayjs([2010, 6]); // July 1st
dayjs([2010, 6, 10]); // July 10th
```

`dayjs({})` 返回当前时间。

注意类似 `new Date(year, month, date)`，月份从 0 开始计算。

#### UTC

默认情况下，Day.js 会把时间解析成本地时间。

如果想使用 UTC 时间，你可以调用`dayjs.utc()`而不是`dayjs()`。

在 UTC 模式下，所有显示方法将会显示 UTC 时间而非本地时间。

{%note warning%}
使用本功能需先配置 UTC 插件，才能正常运行。
{%endnote%}

```js
dayjs.extend(utc)

// 默认是当地时间
dayjs().format() // 2019-03-06T08:00:00+08:00
// UTC 时间
dayjs.utc().format() // 2019-03-06T00:00:00Z
```

此外，在 UTC 模式下，所有 getters 和 setters 将使用`Date#getUTC*`和`Date#setUTC*`方法而不是`Date#get*`和`Date#set*`方法。

```js
dayjs.utc().seconds(30).valueOf() // => new Date().setUTCSeconds(30)
dayjs.utc().seconds() // => new Date().getUTCSeconds()
```

要在本地时间和 UTC 时间之间切换，你可以使用`dayjs#utc`或`dayjs#local`。

#### Dayjs 复制

所有的 Day.js 对象都是**不可变的**。但如果有必要，使用`dayjs#clone`可以复制出一个当前对象。

```js
var a = dayjs()
var b = a.clone()
// a 和 b 是两个独立的 Day.js 对象
```

在`dayjs()`里传入一个 Day.js 对象也会返回一个复制的对象。

```js
var a = dayjs()
var b = dayjs(a)
```

#### 验证

检测当前 Day.js 对象是否是一个有效的时间，返回 boolean。

```js
dayjs().isValid()
```

### 取值/赋值

在设计上 Day.js 的 getter 和 setter 使用了相同的 API，也就是说，不传参数调用方法即为 getter，调用并传入参数为 setter。

这些 API 调用了对应原生 Date 对象的方法。

```js
dayjs().second(30).valueOf() // => new Date().setSeconds(30)
dayjs().second() // => new Date().getSeconds()
```

如果你处于 UTC 模式，将会调用对应的 UTC 方法。

```js
dayjs.utc().second(30).valueOf() // => new Date().setUTCSeconds(30)
dayjs.utc().second() // => new Date().getUTCSeconds()
```

#### Millisecond

获取或设置毫秒。

传入 0 到 999 的数字。如果超出这个范围，它会进位到秒。

```js
dayjs().millisecond()
dayjs().millisecond(1)
```

#### Second

获取或设置秒。

传入 0 到 59 的数字。如果超出这个范围，它会进位到分钟。

```js
dayjs().second()
dayjs().second(1)
```

#### Minute

获取或设置分钟。

传入 0 到 59 的数字。如果超出这个范围，它会进位到小时。

```js
dayjs().minute()
dayjs().minute(59)
```

#### Hour

获取或设置小时。

传入 0 到 23 的数字。如果超出这个范围，它会进位到天数。

```js
dayjs().hour()
dayjs().hour(12)
```

#### Day of Month

获取或设置月份里的日期。

接受 1 到 31 的数字。如果超出这个范围，它会进位到月份。

```js
dayjs().date()
dayjs().date(1)
```

{%note warning%}
`dayjs#date`是该月的日期。`dayjs#day`是星期几。
{%endnote%}

#### Day of Week

获取或设置星期几。

传入 number 从 0（星期天）到 6（星期六）。如果超出这个范围，它会进位到其他周。

```js
dayjs().day()
dayjs().day(0)
```

#### Day of Week (Locale Aware)

根据本地化配置获取或设置星期几。

{%note warning%}
使用本功能需先配置 Weekday 插件，才能正常运行。
{%endnote%}

如果本地化配置了星期天为一周的第一天，`dayjs().weekday(0)`将返回星期天。如果星期一是一周的第一天，`dayjs().weekday(0)`将返回星期一。

```js
dayjs.extend(weekday)

// 当星期天是一周的第一天
dayjs().weekday(-7); // 上个星期天
dayjs().weekday(7); // 下个星期天

// 当星期一是一周的第一天
dayjs().weekday(-7); // 上个星期一
dayjs().weekday(7); // 下个星期一
```

#### ISO Day of Week

获取或设置 ISO 星期几，其中 1 是星期一，7 是星期日。

{%note warning%}
使用本功能需先配置 IsoWeek 插件，才能正常运行。
{%endnote%}

```js
dayjs.extend(isoWeek)

dayjs().isoWeekday()
dayjs().isoWeekday(1) // Monday
```

#### Day of Year

获取或设置年份里第几天。

传入 1 到 366 的数字。如果超出这个范围，它会进位到下一年。

{%note warning%}
使用本功能需先配置 DayOfYear 插件，才能正常运行。
{%endnote%}

```js
dayjs.extend(dayOfYear)

dayjs('2010-01-01').dayOfYear() // 1
dayjs('2010-01-01').dayOfYear(365) // 2010-12-31
```

#### Week of Year

获取或设置年份里第几周。

{%note warning%}
使用本功能需先配置 WeekOfYear 插件，才能正常运行。
{%endnote%}

```js
dayjs.extend(weekOfYear)

dayjs('2018-06-27').week() // 26
dayjs('2018-06-27').week(5) // 设置周
```

#### Week of Year （ISO）

获取或设置年份的 ISO 星期。

{%note warning%}
使用本功能需先配置 IsoWeek 插件，才能正常运行。
{%endnote%}

```js
dayjs.extend(isoWeek)

dayjs().isoWeek()
dayjs().isoWeek(2)
```

#### Month

获取或设置月份。

传入 0 到 11 的 number。如果超出这个范围，它会进位到年份。

```js
dayjs().month()
dayjs().month(0)
```

{%note warning%}
月份是从 0 开始计算的，即 1 月是 0。
{%endnote%}

#### Quarter

获取或设置季度。

{%note warning%}
使用本功能需先配置 QuarterOfYear 插件，才能正常运行。
{%endnote%}

```js
dayjs.extend(quarterOfYear)

dayjs('2010-04-01').quarter() // 2
dayjs('2010-04-01').quarter(2)
```

#### Year

获取或设置年份。

```js
dayjs().year()
dayjs().year(2000)
```

#### Week Year

获取基于当前语言配置的按周计算的年份。

{%note warning%}
使用本功能需先配置 WeekYear 插件，才能正常运行。
{%endnote%}

```js
dayjs.extend(weekYear)
dayjs.extend(weekOfYear)

dayjs().weekYear()
```

#### Week Year (ISO)

获取 ISO 周年。

{%note warning%}
使用本功能需先配置 IsoWeek 插件，才能正常运行。
{%endnote%}

```js
dayjs.extend(isoWeek)

dayjs().isoWeekYear()
```

#### Weeks In Year (ISO)

获取当前年份的周数，根据 ISO weeks 的定义。

{%note warning%}
使用本功能需先配置 IsoWeekInYear 插件，才能正常运行。
{%endnote%}

```js
dayjs.extend(isoWeeksInYear)
dayjs.extend(isLeapYear)

dayjs('2004-01-01').isoWeekInYear() //53
dayjs('2005-01-01').isoWeekInYear() //52
```

#### Get

从 Day.js 对象中获取相应信息的 getter。可以理解为：

```js
dayjs().get(unit) === dayjs()[unit]()
```

各个传入的单位对大小写不敏感，支持缩写和复数。请注意，缩写是区分大小写的。

```js
dayjs().get('year')
dayjs().get('month') // start 0
dayjs().get('date')
dayjs().get('hour')
dayjs().get('minute')
dayjs().get('second')
dayjs().get('millisecond')
```

**支持的单位列表**

|单位|缩写|详情|
|:--:|:--:|---|
|date|D|月份里的日期|
|day|d|星期几（星期天 0，星期六 6）|
|month|M|月份（一月 0，十二月 11）|
|year|y|年份|
|hour|h|小时|
|minute|m|分钟|
|second|s|秒|
|millisecond|ms|毫秒|

#### Set

通用的 setter，两个参数分别是要更新的单位和数值，调用后会返回一个修改后的新实例。可以理解为：

```js
dayjs().set(unit, value) === dayjs()[unit](value)
```

```js
dayjs().set('date', 1)
dayjs().set('month', 3) // 四月
dayjs().set('second', 30)
```

#### Maximum/Minimum

返回传入的 Day.js 实例中的最大/小的（即最靠近未来/过去的）。它接受传入多个 Day.js 实例或一个数组。

{%note warning%}
使用本功能需先配置 MinMax 插件，才能正常运行。
{%endnote%}

```js
dayjs.extend(minMax)

dayjs.max(dayjs(), dayjs('2018-01-01'), dayjs('2019-01-01'))
dayjs.max([dayjs(), dayjs('2018-01-01'), dayjs('2019-01-01')])

dayjs.min(dayjs(), dayjs('2018-01-01'), dayjs('2019-01-01'))
dayjs.min([dayjs(), dayjs('2018-01-01'), dayjs('2019-01-01')])
```

### 操作

你可能需要一些方法来操作 Day.js 对象。

Day.js 支持像这样的链式调用：

```js
dayjs('2019-01-25').add(1, 'day').subtract(1, 'year').year(2009).toString()
```

#### Add/Subtract

返回增加/减去一定时间的复制的 Day.js 对象。

```js
dayjs().add(7, 'day')
dayjs().subtract(7, 'year')
```

各个传入的单位对大小写不敏感，支持缩写和复数。请注意，缩写是区分大小写的。

**支持的单位列表**

|单位|缩写|详情|
|:--:|:--:|---|
|day|d|星期几（星期天 0，星期六 6）|
|week|w|一年中的第几周|
|month|M|月份（一月 0，十二月 11）|
|quarter|0|季度（依赖 QuarterOfYear 插件）|
|year|y|年份|
|hour|h|小时|
|minute|m|分钟|
|second|s|秒|
|millisecond|ms|毫秒|

或者，也可以给 Day.js 对象增加一个持续时间。

```js
dayjs().add(dayjs.duration({'days' : 1}))
```

#### Start/End of Time

返回复制的 Day.js 对象，并设置到一个时间的开始/末尾。

```js
dayjs().startOf('year')
dayjs().endOf('month')
```

各个传入的单位对大小写不敏感，支持缩写和复数。

**支持的单位列表**

|单位|缩写|详情|
|:--:|:--:|---|
|year|y|今年 1 月 1 日上午 00:00|
|quarter|Q|本季度第一个月 1 日上午 00:00（依赖 QuarterOfYear 插件）|
|month|M|本月 1 日上午 00:00|
|week|w|本周的第一天上午 00:00|
|isoWeek||本周的第一天上午 00:00（根据 ISO 8601，依赖 IsoWeek 插件）|
|date|D|当天 00:00|
|day|d|当天 00:00|
|hour|h|当前时间，0 分、0 秒、0 毫秒|
|minute|m|当前时间，0 秒、0 毫秒|
|second|s|当前时间，0 毫秒|

#### Local

返回一个在当前时区模式下的 Day.js 对象。

{%note warning%}
使用本功能需先配置 UTC 插件，才能正常运行。
{%endnote%}

```js
dayjs.extend(utc)

var a = dayjs.utc()
a.format() // 2019-03-06T00:00:00Z
a.local().format() // 2019-03-06T08:00:00+08:00
```

#### UTC

返回一个在 UTC 模式下的 Day.js 对象。

{%note warning%}
使用本功能需先配置 UTC 插件，才能正常运行。
{%endnote%}

```js
dayjs.extend(utc)

var a = dayjs.utc()
a.format() // 2019-03-06T08:00:00+08:00
a.utc().format() // 2019-03-06T00:00:00Z
```

传入 true 将只改变 UTC 模式而不改变本地时间。

```js
dayjs('2016-05-03 22:15:01').utc(true).format()
// 2016-05-03T22:15:01Z
```

#### UTC offset

获取 UTC 偏移量（分钟）。

```js
dayjs().utcOffset()
```

也可以传入分钟来得到一个更改 UTC 偏移量的新实例。请注意，一旦你设置了 UTC 偏移量，它将保持固定，不会自动改变（即没有 DST 夏令时变更）。

{%note warning%}
使用本功能需先配置 UTC 插件，才能正常运行。
{%endnote%}

```js
dayjs.extent(utc)

dayjs().utcOffset(120)
```

如果输入在 -16 到 16 之间，会将你的输入理解为小时数而非分钟。

```js
// 以下两种写法是等效的
dayjs().utcOffset(8) // 设置小时偏移量
dayjs().utcOffset(480) // 设置分钟偏移量（8 * 60）
```

第二个参数传入 true 可以值改变偏移量而保持本地时间不变。

```js
dayjs.utc('2000-01-01T06:01:02Z').utcOffset(1, true).format()
// 2000-01-01T06:01:02+01:00
```

### 显示

当解析和操作完成后，你需要一些方式来展示 Day.js 对象。

#### Fortmat

根据传入的占位符返回格式化后的日期。

将字符放在方括号中，即可原样返回而不被格式化替换（例如`[MM]`）。

```js
dayjs().format()
// 默认返回的是 ISO8601 格式字符串 2020-04-02T08:02:17-05:00

dayjs('2019-01-25').format('[YYYYescape] YYYY-MMTHH:mm:ssZ[Z]')
// YYYYescape 2019-01-25T00:00:00-02:00Z

dayjs('2019-01-25').format('DD/MM/YYYY')
// 25/01/2019
```

**支持的格式化占位符列表**

|占位符|输出|详情|
|:--:|:--:|----|
|YY|18|两位数的年份|
|YYYY|2018|四位数的年份|
|M|1-12|月份，从 1 开始|
|MM|01-12|月份，两位数|
|MMM|Jan-Dec|缩写的月份名称|
|MMMM|January-December|完整的月份名称|
|D|1-31|月份里的一天|
|DD|01-31|月份里的一天，两位数|
|d|0-6|一周中的一天，星期天是 0|
|dd|Su-Sa|最简写的星期几|
|ddd|Sun-Sat|简写的星期几|
|dddd|Sunday-Saturday|星期几|
|H|0-23|小时|
|HH|00-23|小时，两位数|
|h|1-12|小时，12 小时制|
|hh|01-12|小时，12 小时制，两位数|
|m|0-59|分钟|
|mm|00-59|分钟，两位数|
|s|0-59|秒|
|ss|00-59|秒，两位数|
|SSS|000-999|毫秒，三位数|
|Z|+05:00|UTC 的偏移量，±HH:mm|
|ZZ|+0500|UTC 的偏移量，±HHmm|
|A|AM PM||
|a|am pm||

更多可用格式`Q Do k X x ...`请使用 AdvancedFormat 插件。

在不同的本地化配置下，有一些不同的本地化格式可以使用。

{%note warning%}
使用本功能需先配置 LocalizedFormat 插件，才能正常运行。
{%endnote%}

```js
dayjs.extend(LocalizedFormat)
dayjs().format('L LT')
```

**支持的本地化格式列表**

|占位符|英语语言|示例输出|
|:--:|---|---|
|LT|h:mm A|8:02 PM|
|LTS|h:mm:ss A|8:02:18 PM|
|L|MM/DD/YYY|08/16/2018|
|LL|MMMM D, YYYY|August 16, 2018|
|LLL|MMMM D, YYYY h:mm A|August 16, 2018 8:02 PM|
|LLLL|dddd, MMMM D, YYYY h:mm A|Thursday, August 16, 2018 8:02 PM|
|l|M/D/YYYY|8/16/2018|
|ll|MMM D, YYYY|Aug 16, 2018|
|lll|MMM D, YYYY h:mm A|Aug 16, 2018 8:02 PM|
|llll|ddd, MMM D, YYYY h:mm A|Thu, Aug 16, 2018 8:02 PM|

#### Time from/to now

返回现在到当前实例或当前实例到现在的相对时间。

{%note warning%}
使用本功能需先配置 RelativeTime 插件，才能正常运行。
{%endnote%}

```js
dayjs.extend(relativeTime)

dayjs('1999-01-01').fromNow() // 22 年前
dayjs('1999-01-01').toNow() // 22 年后
```

如果传入 true，则可以获得不带后缀的值。

```js
dayjs.extend(relativeTime)

dayjs('1999-01-01').fromNow(true) // 22 年
dayjs('1999-01-01').toNow(true) // 22 年
```

**时间范围划分标准**

表格里的值是由语言配置决定的，并且可以自定义输出内容。时间会舍入到最接近的秒数。

|范围|键值|示例输出|
|---|:--:|---|
|0 到 44 秒|s|几秒前|
|45 到 89 秒|m|1分钟前|
|90 秒 到 44 分|mm|2 分钟前...44 分钟前|
|45 到 89 分|h|1 小时前|
|90 分 到 21 小时|hh|2 小时前...21 小时前|
|22 到 35 小时|d|1 天前|
|36 小时到 25 天|dd|2 天前...25 天前|
|26 到 45 天|M|1 个月前|
|46 天到 10 月|MM|2 个月前...10 个月前|
|11 月到 17 月|y|1 年前|
|18 月以上|yy|2 年前...20 年前|

#### Time from/to X

返回 X 到当前实例或当前实例到 X 的相对时间。

{%note warning%}
使用本功能需先配置 RelativeTime 插件，才能正常运行。
{%endnote%}

```js
dayjs.extend(relativeTime)

var a = dayjs('2000-01-01')

dayjs('1999-01-01').from(a) // 1 年前
dayjs('1999-01-01').to(a) // 1 年后
```

如果传入 true，则可以获得不带后缀的值。

```js
dayjs('1999-01-01').from(a, true) // 1 年
dayjs('1999-01-01').to(a, true) // 1 年
```

#### Calendar Time

日历时间显示了距离给定时间（默认为现在）的相对时间，但与`dayjs#fromnow`略有不同。

{%note warning%}
使用本功能需先配置 Calendar 插件，才能正常运行。
{%endnote%}

```js
dayjs.extend(calendar)

dayjs().calendar()
dayjs().calendar(dayjs('2008-01-01'))
```

|键值|值|
|---|---|
|上个星期（lastWeek）|上星期一 2:30|
|前一天（lastDay）|昨天 2:30|
|同一天（sameDay）|今天 2:30|
|下一天（nextDay）|明天 2:30|
|下个星期（nextWeek）|星期日 2:30|
|其他（sameElse）|7/10/2011|

表格里的值是由语言配置决定的，并且可以自定义输出内容。

你也可以通过第二个参数传入指定日历输出格式。将字符放在方括号中，即可原样返回而不被格式化替换（例如，`[Today]`）。

```js
dayjs().calendar(null, {
  sameDay: '[Today at] h:mm A', // The same day (Today at 2:30 AM)
  nextDay: '[Tomorrow]', // The next day (Tomorrow at 2:30 AM)
  nextWeek: 'dddd', // The next week (Sunday at 2:30 AM)
  lastDay: '[Yesterday]', // The day before (Yesterday at 2:30 AM)
  lastWeek: '[Last] dddd', // Last week (Last Monday at 2:30 AM)
  sameElse: 'DD/MM/YYYY' // Everything else (7/10/2011)
})
```
