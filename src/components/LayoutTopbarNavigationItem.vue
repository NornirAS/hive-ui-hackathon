<script setup lang="ts">
import { RouteLocationRaw } from 'vue-router'

defineProps<{
  item: {
    label: string
    to: RouteLocationRaw
    icon?: string
  }
}>()
</script>

<template>
  <router-link
    v-slot="{ href, navigate, isActive, isExactActive }"
    :to="item.to"
    custom
  >
    <div
      :class="[
        isActive && 'border-bottom-1',
        isExactActive && 'border-bottom-1',
      ]"
    >
      <a
        v-ripple
        class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple no-underline"
        :href="href"
        @click="navigate"
      >
        <i v-if="item.icon" :class="item.icon" class="mr-2"></i>
        <span>{{ item.label }}</span>
      </a>
    </div>
  </router-link>
</template>
