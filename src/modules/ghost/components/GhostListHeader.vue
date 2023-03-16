<script setup lang="ts">
import InputText from 'primevue/inputtext'

defineProps<{
  search: string
}>()

const emit = defineEmits(['update:search'])

const isInputElement = (
  target: EventTarget | null,
): target is HTMLInputElement => {
  return (target as HTMLInputElement).value !== undefined
}

const updateSearch = (event: Event): void => {
  if (!isInputElement(event.target)) return
  emit('update:search', event.target.value)
}
</script>

<template>
  <span class="p-input-icon-left">
    <i class="pi pi-search text-gray-400"></i>
    <InputText
      :value="search"
      type="text"
      placeholder="Search"
      @input="updateSearch"
    />
  </span>
</template>
