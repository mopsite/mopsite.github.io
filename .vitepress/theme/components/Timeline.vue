<script lang="ts" setup>
const props = defineProps({
  groups: {
    type: Object,
    default: () => []
  }
})
</script>

<template>
  <div class="timeline" v-for="group in props.groups">
    <div class="timeline-dot">
      <span class="timeline-dot-title">
        {{ group.year }}（{{ group.posts.length }}）
      </span>
      <ul>
        <li v-for="post in group.posts">
          <span>
            {{ (post.month + '').padStart(2, '0') }}-{{
              (post.day + '').padStart(2, '0')
            }}
          </span>
          <a :href="post.url">{{ post.title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.timeline {
  ul {
    li {
      list-style: none;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;

      span {
        display: inline-block;
        width: 70px;
      }
    }
  }
}
</style>
