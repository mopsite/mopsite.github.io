---
title: 归档
aside: false
prev: false
next: false
---

<script setup>
  import { data as posts } from '../data/posts.data'
  import formatPosts from '../data/formatPosts.js'

  const date = formatPosts(posts)
</script>

# 目前共计 {{ posts.length }} 篇文章

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
