<script setup lang="ts">
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import useUserStore from '@/store'

defineProps<{
  search: string
  isEditMode: boolean
}>()

const emit = defineEmits(['update:search', 'update:isEditMode'])

const userStore = useUserStore()

const isInputElement = (
  target: EventTarget | null,
): target is HTMLInputElement => {
  return (target as HTMLInputElement).value !== undefined
}

const updateSearch = (event: Event): void => {
  if (!isInputElement(event.target)) return
  emit('update:search', event.target.value)
}

const updateIsEditMode = (value: boolean): void => {
  emit('update:isEditMode', value)
}

const updateLinks = async () => {
  // API should be called
  userStore.updateLinks()
  updateIsEditMode(false)
  await userStore.getUserData()
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
  <Button
    v-if="!isEditMode"
    label="Edit Links"
    @click="updateIsEditMode(true)"
  />
  <div v-else>
    <Button label="Cancel" class="mr-2" @click="updateIsEditMode(false)" />
    <Button label="Confirm" @click="updateLinks" />
  </div>
</template>
