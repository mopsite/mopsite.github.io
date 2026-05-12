import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'
import timeline from 'vitepress-markdown-timeline'
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
  localIconLoader
} from 'vitepress-plugin-group-icons'

// https://vitepress.dev/zh/reference/site-config
export default defineConfig({
  title: 'Hello World',
  description: 'A blog of Paul',
  head: [['link', { rel: 'icon', href: '/logo.svg' }]],
  cleanUrls: true,
  ignoreDeadLinks: true,
  markdown: {
    config: md => {
      md.use(timeline)
      md.use(groupIconMdPlugin)
    },
    math: true
  },

  themeConfig: {
    // https://vitepress.dev/zh/reference/default-theme-config
    logo: '/logo.svg',
    outline: { label: '本页目录', level: [2, 3] },
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    docFooter: { prev: '上一篇', next: '下一篇' },

    nav: nav(),
    sidebar: [{}],
    search: localSearch(),
    socialLinks: [{ icon: 'github', link: 'https://github.com/mop233' }],

    footer: {
      message:
        'Powered by <a href="https://vitepress.dev/zh" target="_blank">VitePress</a>',
      copyright: `© 2021 - ${new Date().getFullYear()} 🚀 <a href="mailto:37662788@qq.com">猛吃雪糕</a>`
    }
  },

  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPHomeFeatures\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/HomeFeatures.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPSidebar\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/Sidebar.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPDocFooter\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/DocFooter.vue', import.meta.url)
          )
        }
      ]
    },
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          '.mdx': 'vscode-icons:file-type-light-mdx',
          babel: 'vscode-icons:file-type-babel',
          vitepress: localIconLoader(
            import.meta.url,
            './theme/components/vitepress.svg'
          ),
          unplugin: 'https://unplugin.unjs.io/logo_light.svg'
        }
      })
    ]
  }
})

function nav() {
  return [
    { text: '归档', link: '/views/archives' },
    { text: '分类', link: '/views/categories' },
    { text: '标签', link: '/views/tags' },
    { text: '关于', link: '/views/about' }
  ]
}

function localSearch() {
  return {
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
  }
}
