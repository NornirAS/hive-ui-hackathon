<script setup lang="ts">
import DefaultTitle from './DefaultTitle.vue'
defineProps<{
  listItems?: unknown
}>()
</script>

<template>
  <DefaultTitle>
    <slot name="header"></slot>
  </DefaultTitle>
  <slot :list-items="listItems"></slot>
</template>
