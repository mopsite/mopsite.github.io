<script lang="ts" setup>
import { data } from '../data/posts.data'
import icons from './icons'
import VPFeatures from 'vitepress/dist/client/theme-default/components/VPFeatures.vue'

const features = data
  .map((post, index) => ({
    icon: icons[index],
    title: post.title,
    link: post.url,
    details: post.abstract
  }))
  .slice(0, 6)
</script>

<template>
  <VPFeatures v-if="features" class="VPHomeFeatures" :features />
</template>

<style>
svg {
  fill: var(--vp-c-text-1);
}
</style>
