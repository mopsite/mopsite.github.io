import { createContentLoader } from 'vitepress'

interface Post {
  title: string
  url: string
  category: string
  tags: string[]
  date: {
    time: number
    year: number
    month: number
    day: number
  }
}

declare const data: Post[]
export { data }

export default createContentLoader('/pages/posts/*.md', {
  transform(raw): Post[] {
    return raw
      .map(({ url, frontmatter }) => ({
        title: frontmatter.title,
        url,
        category: frontmatter.category,
        tags: frontmatter.tags,
        date: formatDate(frontmatter.date)
      }))
      .sort((a, b) => b.date.time - a.date.time)
  }
})

function formatDate(raw: string): Post['date'] {
  const date = new Date(raw)
  return {
    time: +date,
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate()
  }
}
