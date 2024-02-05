---
title: 分类
aside: false
prev: false
next: false
---

<script setup>
  import { data } from '../../data/posts.data'
  import { useData } from 'vitepress'
  import formatPosts from '../../data/formatPosts.js'

  const { page } = useData()
  const posts = data.filter(post => post.category === page.value.params.pkg)
  const date = formatPosts(posts)

</script>

# 分类 - {{ $params.pkg }}

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
