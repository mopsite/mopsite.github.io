export const categories = ['前端', '工程化', '排版']

export const tags = ['yaml', 'git', 'markdown', 'javascript', 'npm', 'module']

export function sidebar() {
  return [
    {
      text: '最近更新',
      items: [
        {
          text: 'JS 数据类型的转换',
          link: '/pages/posts/js-coversion'
        },
        {
          text: '发布一个标准开源库',
          link: '/pages/posts/npm-publish'
        },
        {
          text: '在 ESM 中导入 JSON 文件',
          link: '/pages/posts/import-json-to-esm'
        },
        {
          text: 'JS 模块导入的不同方式和区别',
          link: '/pages/posts/import-require'
        },
        {
          text: '使用 Rollup 打包 JS 模块',
          link: '/pages/posts/rollup-tutorial'
        },
        {
          text: 'packages.json 配置字段详解',
          link: '/pages/posts/packages-json'
        },
        {
          text: 'JS 中的小数计算问题',
          link: '/pages/posts/js-decimal'
        },
        {
          text: 'git subtree 推送到指定分支',
          link: '/pages/posts/git-subtree'
        },
        {
          text: 'Markdown 书写建议',
          link: '/pages/posts/markdown-suggests'
        },
        {
          text: '你不知道的 Markdown 知识',
          link: '/pages/posts/about-markdown'
        },
        {
          text: 'YAML 语言',
          link: '/pages/posts/yaml.md'
        }
      ]
    }
  ]
}
