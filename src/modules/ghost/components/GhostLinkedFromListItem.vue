<script setup lang="ts">
import { computed } from 'vue'
import Tag from 'primevue/tag'
import type { Link } from '../types'

const props = defineProps<{
  link: Link
}>()

const isActiveLink = computed(() => props.link.active)
</script>

<template>
  <div class="flex">
    <div class="mr-0 md:mr-8">
      <span class="block text-900 font-medium mb-1">
        {{ link.serviceAddress }}
        <Tag
          class="ml-2"
          :severity="isActiveLink ? 'success' : 'warning'"
          :value="isActiveLink ? 'Active' : 'Inactive'"
        />
      </span>
    </div>
  </div>
</template>
