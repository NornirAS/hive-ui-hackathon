<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import ActionPanel from '@/components/ActionPanel.vue'
import { serviceRemove } from '@/api'
import router from '@/router'
import useUserStore from '@/store'
import { ROUTES } from '@/router/routes'

const userStore = useUserStore()

const modal = ref(false)
const title = 'Delete Service'
const panelText = 'This action cannot be undone.'
const dialogText = 'Are you sure you want to delete this service?'

const deleteService = async () => {
  const { error } = await serviceRemove({
    domain: userStore.selectedService.domain,
    service: userStore.selectedService.service,
  })

  if (error) {
    // handle error
    return
  }

  modal.value = false

  router.push({ name: ROUTES.serviceModule.serviceList.name })

  await userStore.getUserData()
}
</script>

<template>
  <ActionPanel>
    <template #title>{{ title }}</template>
    <template #default>{{ panelText }}</template>
    <template #action>
      <Button class="p-button-sm" label="Delete" @click="modal = true" />
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
          @click="modal = false"
        />
        <Button icon="pi pi-check" label="Confirm" @click="deleteService" />
      </div>
    </template>
  </Dialog>
</template>
