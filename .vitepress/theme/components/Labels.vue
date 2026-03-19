<script lang="ts" setup>
import { ref, computed } from 'vue'
import { data } from '../data/posts.data'
import { groupsByYear, groupsByLabel } from '../data/formatData'

const props = defineProps({
  type: {
    type: String,
    default: ''
  }
})

let typeName = ''
switch (props.type) {
  case 'category':
    typeName = '分类'
    break
  case 'tags':
    typeName = '标签'
    break
}

const labelGroups = groupsByLabel(props.type, data)
const currentIndex = ref(0)
const posts = computed(() => labelGroups[currentIndex.value]?.posts || [])
const groups = computed(() => groupsByYear(posts.value))
</script>

<template>
  <div class="labels">
    <h1>共有 {{ labelGroups.length }} 个{{ typeName }}</h1>
    <div class="btns">
      <a
        v-for="(group, index) in labelGroups"
        class="btn"
        :class="{ active: currentIndex === index }"
        @click="currentIndex = index"
      >
        {{ group[props.type] }} ( {{ group.posts.length }} )
      </a>
    </div>
    <hr />
    <Timeline :groups />
  </div>
</template>

<style scoped>
.btns {
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;

  .btn {
    display: inline-block;
    margin: 0 20px 20px 0;
    padding: 5px 15px;
    color: var(--vp-button-alt-text);
    font-size: 14px;
    text-decoration: none;
    white-space: nowrap;
    background: var(--vp-button-alt-bg);
    border-radius: 20px;
    border: 1px solid var(--vp-button-alt-border);
    transition: color 0.25s, border-color 0.25s, background-color 0.25s;
    cursor: pointer;

    &:hover {
      color: var(--vp-button-alt-hover-text);
      background-color: var(--vp-button-alt-hover-bg);
      border-color: var(--vp-button-alt-hover-border);
    }

    &.active {
      border-color: var(--vp-button-brand-border);
      color: var(--vp-button-brand-text);
      background-color: var(--vp-button-brand-bg);
    }
  }
}
</style>
