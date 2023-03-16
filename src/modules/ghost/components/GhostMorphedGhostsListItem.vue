<script setup lang="ts">
import Button from 'primevue/button'
import { ghostMorphedRemove } from '@/api'
import { useGhostDetailsStore } from '../store'
import { parseGhostAddress } from '../helpers'
import type { MorphedGhost } from '../types'

const props = defineProps<{
  ghost: MorphedGhost
}>()

const ghostDetailsStore = useGhostDetailsStore()

const removeMorphedGhost = async () => {
  const refGhostAddress = parseGhostAddress(props.ghost.ghostAddress)
  const { error } = await ghostMorphedRemove({
    ...ghostDetailsStore.ghost,
    ...refGhostAddress,
  })
  if (error) return
  ghostDetailsStore.fetchGhostStatus()
}
</script>

<template>
  <div class="flex">
    <div class="mr-0 md:mr-8">
      <span class="block text-900 font-medium mb-1">
        {{ ghost.ghostAddress }}
      </span>
    </div>
  </div>
  <div class="mt-2 md:mt-0 flex flex-nowrap">
    <Button
      icon="pi pi-trash"
      class="p-button-outlined p-button-sm p-button-danger"
      @click="removeMorphedGhost"
    />
  </div>
</template>
