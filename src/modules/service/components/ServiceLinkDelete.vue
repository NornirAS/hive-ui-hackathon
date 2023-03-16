<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import useUserStore from '@/store'
import type { Link } from '../types'

const props = defineProps<{
  link: Link
}>()

const userStore = useUserStore()

const modal = ref(false)

const deleteLink = () => {
  userStore.deleteLink(props.link)
  modal.value = false
}
</script>

<template>
  <Button
    label="Delete"
    class="p-button-sm p-button-text p-button-danger"
    @click="modal = true"
  />
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
        <span class="font-medium text-2xl text-900">Delete</span>
      </div>
    </template>
    <p class="line-height-3 p-0 m-0">
      Are you sure you want to delete this link?
    </p>
    <template #footer>
      <div class="border-top-1 surface-border pt-3">
        <Button
          icon="pi pi-times"
          label="Cancel"
          class="p-button-text"
          @click="modal = false"
        />
        <Button icon="pi pi-check" label="Confirm" @click="deleteLink" />
      </div>
    </template>
  </Dialog>
</template>
