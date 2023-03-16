<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import ActionPanel from '@/components/ActionPanel.vue'
import { ghostDelete } from '@/api'
import { useGhostDetailsStore } from '../store'
import router from '@/router'
import { ROUTES } from '@/router/routes'

const ghostDetailsStore = useGhostDetailsStore()

const modal = ref(false)
const title = 'Delete Ghost'
const panelText = 'This action cannot be undone.'
const dialogText = 'Are you sure you want to delete this ghost?'

const openModal = () => {
  modal.value = true
}

const closeModal = () => {
  modal.value = false
}

const deleteGhost = async () => {
  const { error } = await ghostDelete({
    ...ghostDetailsStore.ghost,
  })
  if (error) return
  closeModal()
  router.push({ name: ROUTES.ghostModule.ghostList.name })
}
</script>

<template>
  <ActionPanel>
    <template #title>{{ title }}</template>
    <template #default>{{ panelText }}</template>
    <template #action>
      <Button class="p-button-sm" label="Delete" @click="openModal" />
    </template>
  </ActionPanel>
  <Dialog
    v-model:visible="modal"
    append-to="body"
    :modal="true"
    :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
    :style="{ width: '40vw' }"
  >
    <template #header>
      <div class="flex align-items-center">
        <span
          class="flex align-items-center justify-content-center bg-cyan-100 text-cyan-800 mr-3 border-circle"
          style="width: 32px; height: 32px"
        >
          <i class="pi pi-info text-lg"></i>
        </span>
        <span class="font-medium text-2xl text-900">
          {{ title }}
        </span>
      </div>
    </template>
    <p class="line-height-3 p-0 m-0">
      {{ dialogText }}
    </p>
    <template #footer>
      <div class="border-top-1 surface-border pt-3">
        <Button
          icon="pi pi-times"
          label="Cancel"
          class="p-button-text"
          @click="closeModal"
        />
        <Button icon="pi pi-check" label="Confirm" @click="deleteGhost" />
      </div>
    </template>
  </Dialog>
</template>
