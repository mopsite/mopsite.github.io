export function groupsByYear(data) {
  const yearsSet = new Set()
  data.forEach(item => yearsSet.add(new Date(item.date).getFullYear()))

  const yearGroups = Array.from(yearsSet).map(year => ({ year, posts: [] }))

  data.forEach(item => {
    const year = new Date(item.date).getFullYear()
    const month = new Date(item.date).getMonth() + 1
    const day = new Date(item.date).getDate()

    yearGroups.forEach(group => {
      if (year === group.year) {
        group.posts.push({ url: item.url, title: item.title, month, day })
      }
    })
  })

  return yearGroups
}

export function groupsByLabel(type, data) {
  const labelsSet = new Set()

  switch (type) {
    case 'category':
      data.forEach(item => labelsSet.add(item.category))
      break
    case 'tags':
      data.forEach(item => item.tags.forEach(tag => labelsSet.add(tag)))
      break
  }

  const labelGroups = Array.from(labelsSet).map(label => ({
    [type]: label,
    posts: []
  }))

  data.forEach(item => {
    labelGroups.forEach(group => {
      switch (type) {
        case 'category':
          if (item[type] === group[type]) {
            group.posts.push(item)
          }
          break
        case 'tags':
          if (item[type].includes(group[type])) {
            group.posts.push(item)
          }
          break
      }
    })
  })

  return labelGroups
}
