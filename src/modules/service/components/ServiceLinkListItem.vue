<script setup lang="ts">
import ServiceLinkDelete from './ServiceLinkDelete.vue'
import type { Link } from '../types'

defineProps<{
  item: Link
  isEditMode: boolean
}>()
</script>

<template>
  <div class="flex">
    <div class="mr-0 md:mr-8">
      <span class="block text-900 font-medium mb-1">
        {{ item }}
      </span>
    </div>
  </div>
  <div v-if="isEditMode" class="mt-2 md:mt-0 flex flex-nowrap">
    <ServiceLinkDelete :link="item" />
  </div>
</template>
