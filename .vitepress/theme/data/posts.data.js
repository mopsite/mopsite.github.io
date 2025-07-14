import { createContentLoader } from 'vitepress'

export default createContentLoader('posts/**/*.md', {
  transform(raw) {
    return raw
      .map(({ url, frontmatter }) => ({
        url,
        title: frontmatter.title || '无标题',
        category: frontmatter.category || '无分类',
        tags: frontmatter.tags || '无标签',
        date: frontmatter.date || +new Date(),
        abstract: frontmatter.abstract || ''
      }))
      .sort((a, b) => +new Date(b.date) - +new Date(a.date))
  }
})
