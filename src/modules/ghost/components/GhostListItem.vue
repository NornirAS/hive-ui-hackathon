<script setup lang="ts">
import type { GhostObject } from '../types'

defineProps<{
  ghost: GhostObject
}>()
</script>

<template>
  <div class="flex">
    <div class="mr-0 md:mr-8">
      <span class="block text-900 font-medium mb-1">
        <b>{{ ghost.domain }}/{{ ghost.service }}/{{ ghost.ghostID }}</b>
      </span>
    </div>
  </div>
</template>
