<script setup lang="ts">
import DefaultCard from '@/components/DefaultCard.vue'
import DescriptionList from '@/components/DescriptionList.vue'
import DescriptionListItem from '@/components/DescriptionListItem.vue'
import { useGhostDetailsStore } from '../store'

const ghostDetailsStore = useGhostDetailsStore()
</script>

<template>
  <DefaultCard>
    <DescriptionList>
      <template #header>Information</template>
      <template #default>
        <DescriptionListItem>
          <template #key>Ghost Address</template>
          <template #value>
            {{ ghostDetailsStore.ghost.domain }}/{{
              ghostDetailsStore.ghost.service
            }}/{{ ghostDetailsStore.ghost.ghostID }}
          </template>
        </DescriptionListItem>
      </template>
    </DescriptionList>
  </DefaultCard>
</template>
