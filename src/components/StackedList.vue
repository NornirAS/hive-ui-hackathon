<script setup lang="ts">
import { useSlots } from 'vue'
import DefaultTitle from './DefaultTitle.vue'

defineProps<{
  listItems?: unknown
}>()

const slots = useSlots()
</script>

<template>
  <DefaultTitle v-if="slots.title">
    <slot name="title"></slot>
  </DefaultTitle>
  <div class="flex justify-content-between align-items-center mb-3">
    <slot name="header"></slot>
  </div>
  <ul v-for="(item, index) in listItems" :key="index" class="list-none p-0 m-0">
    <slot :item="item"></slot>
  </ul>
</template>
