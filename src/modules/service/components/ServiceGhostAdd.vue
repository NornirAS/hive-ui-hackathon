<script setup lang="ts">
import Button from 'primevue/button'
import router from '@/router'
import ActionPanel from '@/components/ActionPanel.vue'
import { serviceGhostsAdd } from '@/api'
import useUserStore from '@/store'
import { ROUTES } from '@/router/routes'

const userStore = useUserStore()

const addGhosts = async () => {
  const { error } = await serviceGhostsAdd({
    ...userStore.selectedService,
  })

  if (error) return

  await userStore.getUserData()

  router.push({ name: ROUTES.ghostModule.ghostList.name })
}
</script>

<template>
  <ActionPanel>
    <template #title>Add Ghosts</template>
    <template #action>
      <Button label="Confirm" class="p-button-sm" @click="addGhosts" />
    </template>
  </ActionPanel>
</template>
