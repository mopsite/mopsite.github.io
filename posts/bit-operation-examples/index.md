---
title: '位运算经典案例'
date: '2026-05-012'
category: '算法'
tags: ['javascript', '位运算']
abstract: 'JavaScript 中使用位运算的一些经典案例。包含了权限管理、加密解密、颜色处理。'
---

# 位运算经典案例

## 权限管理

这是一个基于二进制位运算，并采用权限位掩码实现的轻量级用户权限管理工具。

该工具有以下特点：

- 核心基于 CPU 原生位运算（按位与、或、非、异或），权限管理瞬时完成
- 用单个数字存储所有权限，体积极小、传输与存储极高效
- 添加、删除、切换、判断全案使用统一位运算逻辑，确保 100% 无冲突
- 自动校验权限合法性，杜绝无效权限
- 支持批量操作、链式调用、权限名解析展示
- 无依赖、体积小、逻辑健壮，可直接用于前后端权限系统

```js
/**
 * ================================================
 * User 权限管理类（位运算实现 · 高性能 · 工程化）
 * 核心原理：用一个数字存储所有权限，每一位二进制代表一种权限
 * 优点：存储小、速度快、功能强、无权限冲突
 * ================================================
 */
class User {
  // ================ 静态权限常量定义 ================
  /**
   * 权限位掩码（使用 Object.freeze 冻结，只读不可修改）
   * 1 << n：将数字 1 左移 n 位，生成唯一不重复的权限制
   * 每一种权限独占一个二进制位，永远不会冲突
   */
  static Permissions = Object.freeze({
    READ: 1 << 0, // 读权限：0001 → 1
    WRITE: 1 << 1, // 写权限：0010 → 2
    DELETE: 1 << 2, // 删除权限：0100 → 4
    ADMIN: 1 << 3 // 管理员：1000 → 8
  })

  // ================ 私有静态工具（外部不可访问） ================
  /**
   * 映射表：权限数字 → 权限名
   * 私有属性 # 开头，外部不可访问、不可修改
   * 本例中返回： { '1': 'READ', '2': 'WRITE', '4': 'DELETE', '8': 'ADMIN' }
   * @private
   */
  static #PermissionMap = Object.freeze(
    Object.fromEntries(
      Object.entries(User.Permissions).map(([name, value]) => [value, name])
    )
  )

  /**
   * 合法权限值集合（用于校验传入的权限是否有效）
   * 本例中返回：Set(4) { 1, 2, 4, 8 }
   * @private
   */
  static #ValidPermissions = new Set(Object.values(User.Permissions))

  // ================ 构造函数 ================
  constructor() {
    // 存储当前用户所有权限（初始 0，即无任何权限）
    this.permissions = 0
  }

  // ================ 私有校验方法 ================
  /**
   * 校验权限是否合法（防止乱传数字导致权限异常）
   * @param {number} perm 待校验权限值
   * @return {boolean} 是否合法
   * @private
   */
  #isValidPerm(perm) {
    return User.#ValidPermissions.has(perm)
  }

  // ================ 公共权限操作方法 ================
  /**
   * 添加权限
   * 按位或 |：有 1 则 1，不影响其他位
   * @param {number} permissions 可传入多个权限
   * @returns {User} 实例自身，支持链式调用
   */
  addPermission(...permissions) {
    permissions.forEach(perm => {
      if (!this.#isValidPerm(perm)) return this // 非法权限直接返回
      this.permissions |= perm
    })
    return this
  }

  /**
   * 移除权限
   * 按位与 & + 按位非 ~：只清空目标位
   * @param {number} permissions 可传入多个权限
   * @returns {User} 实例自身，支持链式调用
   */
  removePermission(...permissions) {
    permissions.forEach(perm => {
      if (!this.#isValidPerm(perm)) return this
      this.permissions &= ~perm
    })
    return this
  }

  /**
   * 切换权限
   * 按位异或 ^：相同为 0（有则删），不同为 1（无则加）
   * @param {number} permissions 可传入多个权限
   * @returns {User} 实例自身，支持链式调用
   */
  togglePermission(...permissions) {
    permissions.forEach(perm => {
      if (!this.#isValidPerm(perm)) return this
      this.permissions ^= perm
    })
    return this
  }

  /**
   * 清空所有权限
   * @returns {User} 实例自身，支持链式调用
   */
  clearPermissions() {
    this.permissions = 0
    return this
  }

  /**
   * 检查是否拥有某个权限
   * @param {number} permission
   * @returns {boolean}
   */
  hasPermission(permission) {
    if (!this.#isValidPerm(permission)) return false
    return (this.permissions & permission) === permission
  }

  /**
   * 检查是否拥有【全部】传入权限
   * @param {number} perms 可传入多个权限
   * @returns {boolean}
   */
  hasAllPermissions(...perms) {
    return perms.every(perm => this.hasPermission(perm))
  }

  /**
   * 检查是否拥有【任意一个】传入权限
   * @param {number} perms 可传入多个权限
   * @returns {boolean}
   */
  hasAnyPermissions(...perms) {
    return perms.some(perm => this.hasPermission(perm))
  }

  // ================ 增强功能 ================
  /**
   * 快速判断是否是管理员
   * @returns {boolean}
   */
  isAdmin() {
    return this.hasPermission(User.Permissions.ADMIN)
  }

  /**
   * 获取当前权限名称数组（用于页面展示）
   * @returns {string[]} 如 ['READ', 'ADMIN']
   */
  getPermissionNames() {
    return Object.values(User.Permissions)
      .filter(val => (this.permissions & val) === val)
      .map(val => User.#PermissionMap[val])
  }
}

// ================ 使用示例 ================
// 1. 创建用户
const user = new User()

// 2. 解构权限（方便使用）
const { READ, WRITE, DELETE, ADMIN } = User.Permissions

// 3. 添加权限
user.addPermission(READ)
user.addPermission(WRITE, ADMIN) // 批量添加

// 4. 查看权限
console.log(user.getPermissionNames()) // ['READ', 'WRITE', 'ADMIN']

// 5. 校验权限
console.log(user.isAdmin()) // true
console.log(user.hasPermission(READ)) // true
console.log(user.hasAllPermissions(READ, WRITE, DELETE, ADMIN)) // false
console.log(user.hasAnyPermissions(READ, WRITE, DELETE, ADMIN)) // true

// 6. 移除/切换权限
user.removePermission(WRITE)
user.togglePermission(DELETE)
console.log(user.getPermissionNames()) //  ['READ', 'DELETE', 'ADMIN']

// 7. 清空权限
user.clearPermissions()
console.log(user.getPermissionNames()) // []
```

## 加密解密

这是一个基于异或运算，并采用 Base64 编码实现的轻量级加密解密工具。

该工具有以下特点：

- 核心基于 CPU 原生位运算（异或），加密解密瞬时完成
- 方法调用简单，无需复杂配置
- Base64 编码后密文可安全存储，并支持中文
- 加密解密共用核心逻辑，确保原文 100% 无损耗还原
- 自动兼容浏览器与 Node 环境
- 无依赖、体积小、逻辑健壮，可直接集成到项目中

::: danger 注意
该加密工具仅适用于**非敏感数据**的加密混淆，不适用于用户密码、支付信息、隐私数据等敏感场景。因为其加密强度较低，容易被暴力破解。生产环境应使用官方加密算法，如浏览器中的 Web Crypto API，或 Node 环境下的 crypto 模块（AES、RSA 等）。
:::

```js
/**
 * ================================================
 * 异或加密 + Base64 编码
 * 核心原理：明文 ^ 密钥 = 密文；密文 ^ 密钥 = 明文
 * 支持：浏览器环境 + Node.js 环境
 * ================================================
 */
class SimpleXORCipher {
  // ================ 构造函数 ================
  /**
   * 初始化加密密钥
   * @param {number} key 必须是数字，如 85、123、0x55
   */
  constructor(key) {
    // 把传入的密钥保存到实例属性，供加密解密使用
    this.key = key
  }

  // ================ 私有方法 ================
  /**
   * 【核心方法】异或转换：加密和解密共用的逻辑（异或特性）
   * 明文 ^ 密钥 = 密文；密文 ^ 密钥 = 明文
   * 原理：密文 ^ 密钥 = 明文 ^ 密钥 ^ 密钥 = 明文 ^ (密钥 ^ 密钥) = 明文 ^ 0 = 明文
   * @param {string} str 需要转换的字符串（原文/密文）
   * @returns {string} 异或转换后的字符串
   */
  #xorTransform(str) {
    let result = ''
    // 遍历传入字符串的每个字符
    for (let i = 0; i < str.length; i++) {
      // 把字符转成 Unicode 编码（数字），然后和密钥异或，再转回字符
      const charCode = str.charCodeAt(i) ^ this.key
      result += String.fromCharCode(charCode)
    }
    // 返回异或完成的字符串
    return result
  }

  // ================ 公共方法 ================
  /**
   * 加密方法：异或处理 + Base64 编码
   * @param {string} text 原始明文（如 'Hello World'，'你好，世界'）
   * @returns {string} Base64 格式的加密字符串
   */
  encrypt(text) {
    // 1. 使用异或算法对原文进行加密
    const xorStr = this.#xorTransform(text)

    // 2. 判断环境：浏览器 / Node.js
    if (typeof btoa === 'function') {
      // 浏览器环境（使用 btoa 进行 Base64 编码）
      // 使用 Uint8Array 处理编码，避免中文报错，符合现代标准
      const uint8Array = new TextEncoder().encode(xorStr)
      const binaryStr = String.fromCharCode(...uint8Array)
      return btoa(binaryStr)
    } else {
      // Node.js 环境（使用 Buffer 进行 Base64 编码）
      return Buffer.from(xorStr).toString('base64')
    }
  }

  /**
   * 解密方法：Base64 解码 + 异或还原
   * @param {string} encryptedText Base64 格式的解密字符串
   * @returns {string} 解密后的原始明文
   */
  decrypt(encryptedText) {
    let xorStr
    if (typeof atob === 'function') {
      const binaryStr = atob(encryptedText)
      const uint8Array = new Uint8Array(binaryStr.length)
      for (let i = 0; i < binaryStr.length; i++) {
        uint8Array[i] = binaryStr.charCodeAt(i)
      }
      xorStr = new TextDecoder().decode(uint8Array)
    } else {
      xorStr = Buffer.from(encryptedText, 'base64').toString()
    }
    return this.#xorTransform(xorStr)
  }
}

// ================ 使用示例 ================
// 1. 创建加密实例（数字即可，推荐 1~255 之间）
const cipher = new SimpleXORCipher(85)

// 2. 原始文本
const original = 'Hello World 你好，世界！'

// 3. 加密：得到 Base64 格式字符串
const encrypted = cipher.encrypt(original)

// 4. 解密：还原原始文本
const decrypted = cipher.decrypt(encrypted)

// 输出结果
console.log('原文：', original) // 'Hello World 你好，世界！'
console.log('加密后：', encrypted) // 'HTA5OTp1AjonOTF15Ly15aSo772Z5LmD55SZ772U'
console.log('解密后：', decrypted) // 'Hello World 你好，世界！'
```

## 颜色处理

这是一个基于 32 位为预算，并采用标准 AARRGGBB 颜色格式实现的轻量级颜色处理工具。

该工具有以下特点：

- 核心基于 CPU 原生委员算，颜色打包、解析、调节瞬时完成
- 方法调用简单，无需复杂配置，开箱即用
- 支持 32 位整数与 RGBA 颜色互换，并可安全存储与传输
- 打包（编码）解析（解码）共用位运算核心逻辑，确保颜色值 100% 无损还原
- 自动兼容浏览器与 Node 环境
- 无依赖、体积小、逻辑健壮，自带数值合法性校验，可直接集成到项目中
- 支持颜色亮度调节、多色混合、CSS 格式/16 进制格式一键转换

```js
/**
 * ================================================
 * 32 位位运算颜色处理（AARRGGBB 格式）
 * 核心原理：移位、与、或运算打包/解析颜色，保证色值在 0~255
 * 功能：颜色封装、打包/解析、亮度调节、颜色混合、色值转换等
 * ================================================
 */
class Color {
  // ================ 私有属性 ================
  #r // 红色通道 0~255
  #g // 绿色通道 0~255
  #b // 蓝色通道 0~255
  #a // 透明度通道 0~255
  #int32Cache = null // 缓存 32 位整数颜色值，避免重复计算

  // ================ 构造函数 ================
  /**
   * 初始化颜色实例
   * @param {number} r 红色通道 0~255
   * @param {number} g 绿色通道 0~255
   * @param {number} b 蓝色通道 0~255
   * @param {number} a 透明度通道 0~255，默认 255（不透明）
   */
  constructor(r, g, b, a = 255) {
    // 对每个通道执行合法性校验，确保在 0~255
    this.#r = Color.#clamp(r)
    this.#g = Color.#clamp(g)
    this.#b = Color.#clamp(b)
    this.#a = Color.#clamp(a)
  }

  // ================ 私有方法 ================
  /**
   * 把任意值转换成合法的 0~255 颜色整数
   * @param {*} value 任意原始值
   * @returns {number} 合法颜色值
   */
  static #clamp(value) {
    // 强制转数字 → 非法值兜底 0 → 四舍五入取整 → 超过 255 封顶 → 负数保底 0
    return Math.max(0, Math.min(255, Math.round(Number(value) || 0)))
  }

  /**
   * 计算颜色视觉亮度（供灰度、深浅色判断复用）
   * 标准公式：亮度 = R * 0.299 + G * 0.587 + B * 0.114
   * @returns {number} 亮度值 0~255
   */
  #getBrightness() {
    // 采用了国际标准 REC.601 人眼加权亮度公式，用来计算一个颜色看起来有多亮
    // 人眼对绿色最敏感（看起来最亮）、红色次之（中等）、蓝色最不敏感（最暗）
    // 权重比例：红 29.9%，绿 58.7%，蓝 11.4%
    return (this.#r * 299 + this.#g * 587 + this.#b * 114) / 1000
  }

  // ================ 实例方法（颜色操作） ================
  /**
   * 克隆当前颜色，返回一个数据完全相同的新实例
   * @returns {Color} 新的颜色实例
   */
  clone() {
    return new Color(this.#r, this.#g, this.#b, this.#a)
  }

  /**
   * 调整颜色的整体亮度
   * @param {number} factor 亮度系数，小于 1 变暗，大于 1 变亮，自动限制为非负数
   * @returns {Color} 调整后的新颜色实例
   */
  adjustBrightness(factor = 0.5) {
    // 确保系数不为负数
    const f = Math.max(0, Number(factor) || 0)
    // 每个颜色通道乘以系数，透明度不变
    return new Color(this.#r * f, this.#g * f, this.#b * f, this.#a)
  }

  /**
   * 快速将颜色调暗（亮度降低 50%）
   * @returns {Color} 调暗后的新颜色实例
   */
  darken() {
    // 直接复用亮度调节方法，乘以 0.5
    return this.adjustBrightness(0.5)
  }

  /**
   * 快速将颜色调亮（亮度提升 30%，安全不溢出）
   * @returns {Color} 调亮后的新颜色实例
   */
  lighten() {
    // 安全提亮 1.3 倍，避免超过 255
    return this.adjustBrightness(1.3)
  }

  /**
   * 判断当前颜色是否为深色（用于自动适配文字颜色）
   * @returns {boolean}
   */
  isDark() {
    // 亮度小于 128 判定为深色
    return this.#getBrightness() < 128
  }

  /**
   * 判断当前颜色是否为浅色
   * @returns {boolean}
   */
  isLight() {
    // 浅色就是非深色
    return !this.isDark()
  }

  /**
   * 获取当前颜色的反色（互补色）
   * @returns {Color} 反色后的新颜色实例
   */
  invert() {
    // 反色 = 255 - 当前值，透明度不变
    return new Color(255 - this.#r, 255 - this.#g, 255 - this.#b, this.#a)
  }

  /**
   * 设置颜色的透明度
   * @param {number} alpha 透明度值（会自动裁剪为 0~255）
   * @returns {Color} 新颜色实例
   */
  setAlpha(alpha) {
    alpha = Color.#clamp(alpha)
    // RGB 不变，只替换透明度
    return new Color(this.#r, this.#g, this.#b, alpha)
  }

  /**
   * 将当前颜色转为灰度色（黑白）
   * @returns {Color} 新的灰度颜色实例
   */
  grayscale() {
    // 用亮度值作为 RGB 三个通道，实现黑白效果
    const gray = this.#getBrightness()
    return new Color(gray, gray, gray, this.#a)
  }

  /**
   * 判断与另一个颜色是否完全相等
   * @param {Color} other 另一个颜色实例
   * @returns {boolean}
   */
  equals(other) {
    // 边界判断
    if (!other || !(other instanceof Color)) return false
    // 四个通道必须全部相等
    return (
      this.#r === other.#r &&
      this.#g === other.#g &&
      this.#b === other.#b &&
      this.#a === other.#a
    )
  }

  // ================ 实例方法（格式转换） ================

  /**
   * 打包为 32 位无符号整数，标准格式 AARRGGBB
   * @returns {number} 32 位整型颜色值
   */
  toInt32() {
    // 已有缓存直接返回，避免重复执行位运算
    if (this.#int32Cache) return this.#int32Cache
    // 按位偏移 + 按位或，拼接成 AARRGGBB 32 位颜色值
    const val =
      ((this.#a << 24) | (this.#r << 16) | (this.#g << 8) | this.#b) >>> 0
    // 缓存计算结果，提升后续重复调用性能
    this.#int32Cache = val
    return val
  }

  /**
   * 转换为标准 CSS rgba 格式字符串
   * @returns {string} 如 rgba(255, 0, 0, 1.000)
   */
  toCss() {
    // 透明度从 0~255 转为 0~1，并保留 3 位小数
    const alpha = (this.#a / 255).toFixed(3)
    // 拼接成 CSS 标准格式
    return `rgba(${this.#r}, ${this.#g}, ${this.#b}, ${alpha})`
  }

  /**
   * 转换为十六进制颜色字符串
   * @param {boolean} includeAlpha 是否包含透明度通道（默认不包含）
   * @returns {string} 如 #FF0000 或 #FFFF0000
   */
  toHex(includeAlpha = false) {
    // 先拿到 32 位整数，再转 8 位十六进制字符串
    const hex = this.toInt32().toString(16).padStart(8, '0')
    // 根据是否需要透明通道返回对应格式
    return includeAlpha
      ? `#${hex.slice(2) + hex.slice(0, 2)}`
      : `#${hex.slice(2)}`
  }

  /**
   * 转为易读的字符串格式（用于日志打印）
   * @returns {string}
   */
  toString() {
    return `Color(r: ${this.#r}, g: ${this.#g}, b: ${this.#b}, a: ${this.#a})`
  }

  /**
   * 转为 JSON 序列化对象
   * @returns {object}
   */
  toJSON() {
    return { r: this.#r, g: this.#g, b: this.#b, a: this.#a }
  }

  // ================ 只读访问器 ================
  get r() {
    return this.#r
  }
  get g() {
    return this.#g
  }
  get b() {
    return this.#b
  }
  get a() {
    return this.#a
  }

  // ================ 静态方法（颜色操作） ================
  /**
   * 混合两种颜色，返回中间过渡色
   * @param {Color} c1 第一种颜色
   * @param {Color} c2 第二种颜色
   * @param {number} factor 混合比例 0~1
   * @returns {Color} 混合后的新颜色实例
   */
  static blend(c1, c2, factor = 0.5) {
    // 类型校验
    if (!(c1 instanceof Color) || !(c2 instanceof Color)) {
      throw new Error('必须传入 Color 实例')
    }
    // 限制混合比例在 0~1
    // 颜色1 权重 = 1 - f，颜色 2 权重 = f
    // 即 f + (1 - f) = 1，两种颜色的权重加起来 = 100%
    const f = Math.max(0, Math.min(1, Number(factor) || 0.5))
    // 线性混合（lerp）公式：颜色1 * 权重1 + 颜色2 * 权重2
    let r = c1.r * (1 - f) + c2.r * f // 红色通道混合
    let g = c1.g * (1 - f) + c2.g * f // 绿色通道混合
    let b = c1.b * (1 - f) + c2.b * f // 蓝色通道混合
    let a = c1.a * (1 - f) + c2.a * f // 透明度通道混合
    // 视觉提亮（专业伽马矫正，解决混合偏暗）
    // 只对中间混合色生效，0 和 1 时不处理
    if (f > 0.01 && f < 0.99) {
      r = Math.sqrt(r / 255) * 255
      g = Math.sqrt(g / 255) * 255
      b = Math.sqrt(b / 255) * 255
    }
    // 返回新颜色实例
    return new Color(r, g, b, a)
  }

  // ================ 静态方法（格式转换） ================
  /**
   * 将 32 位整数（AARRGGBB）解析为颜色实例
   * @param {number} color 32 位整型颜色值
   * @returns {Color} 新的颜色实例
   */
  static fromInt32(color) {
    const num = Number(color) || 0
    const mask = 0xff
    return new Color(
      (num >> 16) & mask, // 红色
      (num >> 8) & mask, // 绿色
      num & mask, // 蓝色
      (num >> 24) & mask // 透明度
    )
  }

  static fromHex(hexStr) {
    // 非字符串直接返回黑色
    if (typeof hexStr !== 'string') return new Color(0, 0, 0)
    // 去掉空格与 # 号
    let hex = hexStr.trim().replace('#', '')
    // 非法长度直接返回黑色
    if (![3, 6, 8].includes(hex.length)) return new Color(0, 0, 0)
    // 3 位简写转 6 位
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
    }
    // 转成数字
    const num = parseInt(hex, 16)
    // 转失败返回黑色
    if (isNaN(num)) return new Color(0, 0, 0)
    // 8 位带透明度，6 位默认不透明
    // 使用按位或 | 将 #RRGGBB 转为 #FFRRGGBB（即最高 8 位为 FF，不透明）
    return hex.length === 8
      ? Color.fromInt32(num)
      : Color.fromInt32(num | 0xff000000)
  }
}

// ================ 使用示例 ================
console.log('1. 创建基础颜色')
const red = new Color(255, 0, 0)
const green = new Color(0, 255, 0)
const blue = new Color(0, 0, 255)
const white = new Color(255, 255, 255)
const black = new Color(0, 0, 0)

console.log('红色实例：', red.toString()) // Color(r: 255, g: 0, b: 0, a: 255)
console.log('绿色实例：', green.toString()) // Color(r: 0, g: 255, b: 0, a: 255)
console.log('蓝色实例：', blue.toString()) // Color(r: 0, g: 0, b: 255, a: 255)

console.log('\n2. 颜色格式转换')
console.log('红色 → CSS：', red.toCss()) // rgba(255, 0, 0, 1.000)
console.log('红色 → Hex：', red.toHex()) // #ff0000
console.log('红色 → 带透明度 Hex：', red.toHex(true)) // #ff0000ff
console.log('红色 → 32位整数：', red.toInt32()) // 4294901760

console.log('\n3. 亮度调节')
console.log('红色调亮：', red.lighten().toHex()) // #ff0000
console.log('红色调暗：', red.darken().toHex()) // #800000

console.log('\n4. 反色与灰度')
console.log('红色反色：', red.invert().toHex()) // #00ffff
console.log('红色灰度：', red.grayscale().toHex()) // #4c4c4c

console.log('\n5. 设置透明度')
console.log('红色半透明：', red.setAlpha(128).toHex(true)) // #ff000080

console.log('\n6. 判断深浅色')
console.log('红色是否深色：', red.isDark())
console.log('白色是否浅色：', white.isLight())

console.log('\n7. 从十六进制解析颜色')
const hexColor = Color.fromHex('#42b983')
console.log('#42b983 → 实例：', hexColor.toString())
console.log('#42b983 是否深色：', hexColor.isDark())

console.log('\n8. 颜色混合')
const purple = Color.blend(red, blue)
const yellow = Color.blend(red, green)
console.log('红 + 蓝 = 紫', purple.toHex()) // #b400b4
console.log('红 + 绿 = 黄', yellow.toHex()) // #b4b400

console.log('\n9. 从 32 位整数恢复颜色')
const intColor = Color.fromInt32(0xffff0000)
console.log('0xFFFF0000 →', intColor.toHex()) // #ff0000

console.log('\n10. 克隆与相等判断')
const redClone = red.clone()
console.log('克隆红色与原红色是否相等：', red.equals(redClone)) // true
console.log('红色与蓝色是否相等：', red.equals(blue)) // false
```
