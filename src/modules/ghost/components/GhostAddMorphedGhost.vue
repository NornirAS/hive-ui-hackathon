<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import { ghostMorphedAdd } from '@/api'
import { useGhostDetailsStore } from '../store'
import { parseGhostAddress } from '../helpers'

const ghostDetailsStore = useGhostDetailsStore()

const modal = ref(false)
const ghostAddress = ref()

const openModal = () => {
  modal.value = true
}

const closeModal = () => {
  modal.value = false
}

const addMorphedGhost = async () => {
  const refGhostAddress = parseGhostAddress(ghostAddress.value)
  const { error } = await ghostMorphedAdd({
    ...ghostDetailsStore.ghost,
    ...refGhostAddress,
  })
  if (error) return
  ghostDetailsStore.fetchGhostStatus()
  closeModal()
}
</script>

<template>
  <Button label="Add Morphed Ghost" class="p-button-sm" @click="openModal" />
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
        <span class="font-medium text-2xl text-900">Add Morphed Ghost</span>
      </div>
    </template>
    <p class="line-height-3 p-0 m-0">
      Insert address of a ghost you want to add.
    </p>
    <InputText v-model="ghostAddress" class="w-full mt-4" />
    <template #footer>
      <div class="border-top-1 surface-border pt-3">
        <Button
          icon="pi pi-times"
          label="Cancel"
          class="p-button-text"
          @click="closeModal"
        />
        <Button icon="pi pi-check" label="Confirm" @click="addMorphedGhost" />
      </div>
    </template>
  </Dialog>
</template>
