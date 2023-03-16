<script setup lang="ts">
import LayoutTopbar from '@/components/LayoutTopbar.vue'
</script>

<template>
  <div class="min-h-screen flex flex-column surface-ground">
    <LayoutTopbar />
    <div class="p-5 flex flex-column flex-auto">
      <div class="flex-auto">
        <RouterView />
      </div>
    </div>
  </div>
</template>
