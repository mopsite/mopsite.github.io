import { defineConfig } from 'vitepress'
import timeline from 'vitepress-markdown-timeline'
import { sidebar } from '../data/site.data'

const year = new Date().getFullYear()

export default defineConfig({
  title: 'Hello World',
  description: 'A blog of Paul',
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    [
      'script',
      {
        src: 'https://cdn.jsdelivr.net/gh/xlovet/asset/js/fontawesome/v6/all.js'
      }
    ]
  ],
  appearance: 'dark',
  ignoreDeadLinks: true,
  markdown: {
    config: md => {
      md.use(timeline)
    }
  },
  themeConfig: {
    logo: '/logo.svg',
    outline: {
      level: [2, 3],
      label: '本页目录'
    },
    docFooter: { prev: '上一篇', next: '下一篇' },
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                displayDetails: '显示详细列表',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },
    footer: {
      message:
        'Powered by <a href="https://vitepress.dev/zh" target="_blank">VitePress</a>',
      copyright: `© 2021 - ${year} <span style="color: red; padding: 0 2px;"><i class="fas fa-heart fa-beat"></i></span> <a href="mailto:37662788@qq.com">猛吃雪糕</a>`
    },
    nav: nav(),
    sidebar: sidebar(),
    socialLinks: [{ icon: 'github', link: 'https://github.com/mopsite' }]
  }
})

function nav() {
  return [
    { text: '归档', link: '/pages/archives' },
    {
      text: '分类',
      link: '/pages/categories/',
      activeMatch: '/pages/categories/'
    },
    { text: '标签', link: '/pages/tags/', activeMatch: '/pages/tags/' },
    { text: '关于', link: '/pages/about' }
  ]
}
