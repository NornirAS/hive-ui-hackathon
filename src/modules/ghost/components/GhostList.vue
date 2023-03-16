<script setup lang="ts">
import { ref } from 'vue'
import DefaultCard from '@/components/DefaultCard.vue'
import StackedList from '@/components/StackedList.vue'
import StackedListItemLink from '@/components/StackedListItemLink.vue'
import GhostListHeader from './GhostListHeader.vue'
import GhostListItem from './GhostListItem.vue'
import { useGhostDetailsStore } from '../store'
import useUserStore from '@/store'
import type { GhostObject } from '../types'
import { ROUTES } from '@/router/routes'

const userStore = useUserStore()
const ghostDetailsStore = useGhostDetailsStore()

const search = ref('')

const test = (ghost: GhostObject) => {
  ghostDetailsStore.getGhostDetails(ghost)
  ghostDetailsStore.fetchGhostStatus()
}
</script>

<template>
  <DefaultCard>
    <StackedList :list-items="userStore.ghosts">
      <template #header>
        <GhostListHeader v-model:search="search" />
      </template>
      <template #default="slotProps">
        <div @click="test(slotProps.item)">
          <StackedListItemLink
            :to="{
              name: ROUTES.ghostModule.ghostDetails.name,
              params: {
                domain: (slotProps.item as GhostObject).domain,
                service: (slotProps.item as GhostObject).service,
                ghostID: (slotProps.item as GhostObject).ghostID
              },
            }"
          >
            <GhostListItem :ghost="slotProps.item" />
          </StackedListItemLink>
        </div>
      </template>
    </StackedList>
  </DefaultCard>
</template>
