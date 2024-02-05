---
title: 标签
aside: false
prev: false
next: false
---

<script setup>
  import { data } from '../../data/posts.data'
  import formatPosts from '../../data/formatPosts.js'
  import { useData } from 'vitepress'
  const { page } = useData()

  const posts = data.filter(post => post.tags.includes(page.value.params.pkg))
  const date = formatPosts(posts)
  console.log(posts)
</script>

# 标签 - {{ $params.pkg }}

---

<div v-for="item in date" class="timeline-dot">
  <span class="timeline-dot-title">{{ item.year }}</span>
  <ul v-for="list in item.lists">
    <li>
      <span style="margin: 10px;">
        {{ (list.month+'').padStart(2,'0') }} - {{ (list.day+'').padStart(2,'0') }}
      </span>
      <a :href="list.url">{{ list.title }}</a>
    </li>
  </ul>
</div>
