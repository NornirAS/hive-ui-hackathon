<script setup lang="ts">
import useUserStore from '@/store'
import type { ServiceObject } from '../types'

defineProps<{
  item: ServiceObject
}>()

const userStore = useUserStore()
</script>

<template>
  <div class="flex" @click="userStore.selectService(item)">
    <div class="mr-0 md:mr-8">
      <span class="block text-900 font-medium mb-1">
        <b>{{ item.domain }}/{{ item.service }}</b>
      </span>
    </div>
  </div>
  <div class="mt-2 md:mt-0 flex flex-nowrap"></div>
</template>
