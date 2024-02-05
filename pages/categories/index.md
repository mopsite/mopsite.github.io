---
title: 分类
aside: false
prev: false
next: false
---

<script lang="ts" setup>
import { data as posts } from '../../data/posts.data'

const categoriesSet: Set<string> = new Set()
posts.forEach(post => {
  if (post.category) categoriesSet.add(post.category)
})

const categoriesArr = Array.from(categoriesSet)

interface Post {
  title: string
  url: string
}

interface Category {
  key: string
  posts: Post[]
}

const categories: Category[] = []
categoriesArr.forEach(item =>
  categories.push({
    key: item,
    posts: []
  })
)

posts.forEach(post => {
  categories.forEach(item => {
    if (post.category === item.key) {
      item.posts.push({ title: post.title, url: post.url.split('.')[0] })
    }
  })
})
</script>

<h1>共有 {{ categories.length }} 个分类</h1>
<div class="categories">
  <a v-for="category in categories" :href="'/pages/categories/' + category.key">
    {{ category.key }} ({{ category.posts.length }})
  </a>
</div>

<style scope>
.categories {
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
