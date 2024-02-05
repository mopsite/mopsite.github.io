---
title: 标签
aside: false
prev: false
next: false
---

<script lang="ts" setup>
import { data as posts } from '../../data/posts.data'

const tagsSet: Set<string> = new Set()
posts.forEach(post => {
  if (post.tags) {
    post.tags.forEach(tag  => tagsSet.add(tag))
  }
})

const tagsArr = Array.from(tagsSet)

interface Post {
  title: string
  url: string
}

interface Tag {
  key: string
  posts: Post[]
}

const tags: Tag[] = []
tagsArr.forEach(item =>
  tags.push({
    key: item,
    posts: []
  })
)

posts.forEach(post => {
  tags.forEach(tag => {
    if (post.tags.includes(tag.key)) {
      tag.posts.push({ title: post.title, url: post.url.split('.')[0] })
    }
  })
})
</script>

<h1>共有 {{ tags.length }} 个标签</h1>
<div class="tags">
  <a v-for="tag in tags" :href="'/pages/tags/' + tag.key">
    {{ tag.key }} ({{ tag.posts.length }})
  </a>
</div>

<style scope>
.tags {
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;

  a {
    display: block;
    margin: 0 20px 20px 0;
    padding: 5px 10px;
    font-size: 14px;
    text-align: center;
    text-decoration: none;
    border: 1px solid var(--vp-c-brand-1);
    border-radius: 20px;
  }
}
</style>
