import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'
import timeline from 'vitepress-markdown-timeline'
import {
  groupIconMdPlugin,
  groupIconVitePlugin
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
    }
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
    search: algoliaSearch(),
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
    plugins: [groupIconVitePlugin()]
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

function algoliaSearch() {
  return {
    provider: 'algolia',
    options: {
      appId: '01NJGN9HQA',
      apiKey: '370fb45b11cc31654ac4ecf2a2fe8e5f',
      indexName: 'blog',
      placeholder: '搜索文档',
      translations: {
        button: {
          buttonText: '搜索文档',
          buttonAriaLabel: '搜索文档'
        },
        modal: {
          searchBox: {
            resetButtonTitle: '清除查询条件',
            resetButtonAriaLabel: '清除查询条件',
            cancelButtonText: '取消',
            cancelButtonAriaLabel: '取消'
          },
          startScreen: {
            recentSearchesTitle: '搜索历史',
            noRecentSearchesText: '没有搜索历史',
            saveRecentSearchButtonTitle: '保存至搜索历史',
            removeRecentSearchButtonTitle: '从搜索历史中移除',
            favoriteSearchesTitle: '收藏',
            removeFavoriteSearchButtonTitle: '从收藏中移除'
          },
          errorScreen: {
            titleText: '无法获取结果',
            helpText: '你可能需要检查你的网络连接'
          },
          footer: {
            selectText: '选择',
            navigateText: '切换',
            closeText: '关闭',
            searchByText: '搜索提供者'
          },
          noResultsScreen: {
            noResultsText: '无法找到相关结果',
            suggestedQueryText: '你可以尝试查询',
            reportMissingResultsText: '你认为该查询应该有结果？',
            reportMissingResultsLinkText: '点击反馈'
          }
        }
      }
    }
  }
}
