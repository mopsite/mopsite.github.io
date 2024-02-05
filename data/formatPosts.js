export default function(posts) {
  let date = new Set()

  posts.forEach(post => date.add(post.date.year))
  date = Array.from(date)
  date = date.map(item => (
    { year: item, lists: [] }
  ))
  
  posts.forEach(post => {
    date.forEach(item => {
      if (post.date.year === item.year) {
        item.lists.push({
          month: post.date.month,
          day: post.date.day,
          title: post.title,
          url: post.url
        })
      }
    })
  })

  return date
}
