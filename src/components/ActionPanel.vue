<script setup lang="ts">
import { useSlots } from 'vue'
import Divider from 'primevue/divider'
import DefaultCard from './DefaultCard.vue'
import DefaultTitle from './DefaultTitle.vue'

const slots = useSlots()
</script>

<template>
  <DefaultCard>
    <DefaultTitle v-if="slots.title">
      <slot name="title"></slot>
    </DefaultTitle>
    <Divider v-if="slots.title && slots.default" />
    <p v-if="slots.default" class="mt-0 mb-4 p-0 line-height-3">
      <slot></slot>
    </p>
    <slot name="action"></slot>
  </DefaultCard>
</template>
