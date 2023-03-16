<script setup lang="ts">
import Tag from 'primevue/tag'
import type { DomainObject } from '../types'

defineProps<{
  item: DomainObject
}>()
</script>

<template>
  <div class="flex">
    <div class="mr-0 md:mr-8">
      <span class="block text-900 font-medium mb-1">
        <b> {{ item.domain }} </b>
      </span>
    </div>
  </div>
  <div class="mt-2 md:mt-0 flex flex-nowrap">
    <Tag
      :severity="item.active ? 'success' : 'danger'"
      :value="item.active ? 'Active' : 'Inactive'"
    />
  </div>
</template>
