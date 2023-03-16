<script setup lang="ts">
import { ref, defineProps } from 'vue'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import DefaultCard from '@/components/DefaultCard.vue'
import { useDomainsStore } from '../store'
import useUserStore from '@/store'
import { useRouter } from 'vue-router'
import { ROUTES } from '@/router/routes'

const modal = ref(false)
const domainStore = useDomainsStore()
const userStore = useUserStore()
const router = useRouter()

const props = defineProps<{
  domain: string
}>()

const deleteDomain = async () => {
  await domainStore.removeDomain(props.domain)
  router.push({
    name: ROUTES.domainModule.domainList.name,
  })
  await userStore.getUserData()
}
</script>

<template>
  <DefaultCard>
    <div class="text-900 font-medium mb-3 text-3xl">Delete {{ domain }}</div>
    <p class="mt-0 mb-4 p-0 line-height-3">
      You cannot undo this action. All network resources uder this domain,
      including domain itself will be lost.
    </p>
    <Button label="Delete" @click="modal = true" />
  </DefaultCard>
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
          Are you sure you want to delete this domain?
        </span>
      </div>
    </template>
    <template #footer>
      <div class="border-top-1 surface-border pt-3">
        <Button
          icon="pi pi-times"
          label="Cancel"
          class="p-button-text"
          @click="modal = false"
        />
        <Button icon="pi pi-check" label="Delete" @click="deleteDomain()" />
      </div>
    </template>
  </Dialog>
</template>
