<script setup lang="ts">
import { ref } from 'vue'
import DefaultCard from '@/components/DefaultCard.vue'
import StackedList from '@/components/StackedList.vue'
import StackedListItem from '@/components/StackedListItem.vue'
import GhostMorphedGhostsListHeader from './GhostMorphedGhostsListHeader.vue'
import GhostMorphedGhostsListItem from './GhostMorphedGhostsListItem.vue'
import { useGhostDetailsStore } from '../store'
import type { MorphedGhost } from '../types'

const ghostDetailsStore = useGhostDetailsStore()

const search = ref('')
</script>

<template>
  <DefaultCard>
    <StackedList :list-items="ghostDetailsStore.morphedGhosts">
      <template #title> Morphed Ghosts </template>
      <template #header>
        <GhostMorphedGhostsListHeader v-model:search="search" />
      </template>
      <template #default="slotProps">
        <StackedListItem>
          <template #default>
            <GhostMorphedGhostsListItem
              :ghost="(slotProps.item as MorphedGhost)"
            />
          </template>
        </StackedListItem>
      </template>
    </StackedList>
  </DefaultCard>
</template>
