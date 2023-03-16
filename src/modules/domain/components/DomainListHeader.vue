<script setup lang="ts">
import { ROUTES } from '@/router/routes'
import Button from 'primevue/button'
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
      :placeholder="$t('search')"
      @input="updateSearch"
    />
  </span>
  <div>
    <RouterLink
      v-slot="{ navigate }"
      :to="{
        name: ROUTES.domainModule.domainCreate.name,
      }"
      custom
    >
      <Button :label="$t('newDomain')" @click="navigate" />
    </RouterLink>
  </div>
</template>
