<script setup lang="ts">
import { ref } from 'vue'
import DefaultCard from '@/components/DefaultCard.vue'
import StackedList from '@/components/StackedList.vue'
import StackedListItem from '@/components/StackedListItem.vue'
import GhostLinkedFromListHeader from './GhostLinkedFromListHeader.vue'
import GhostLinkedFromListItem from './GhostLinkedFromListItem.vue'
import { useGhostDetailsStore } from '../store'
import type { Link } from '../types'

const ghostDetailsStore = useGhostDetailsStore()

const search = ref('')
</script>

<template>
  <DefaultCard>
    <StackedList :list-items="ghostDetailsStore.linkedFrom">
      <template #title> Links From </template>
      <template #header>
        <GhostLinkedFromListHeader v-model:search="search" />
      </template>
      <template #default="slotProps">
        <StackedListItem>
          <template #default>
            <GhostLinkedFromListItem :link="(slotProps.item as Link)" />
          </template>
        </StackedListItem>
      </template>
    </StackedList>
  </DefaultCard>
</template>
