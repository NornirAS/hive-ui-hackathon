<script setup lang="ts">
import Tag from 'primevue/tag'

defineProps<{
  active: boolean
}>()
</script>

<template>
  <Tag
    :severity="active ? 'success' : 'danger'"
    :value="active ? 'Active' : 'Inactive'"
  />
</template>
