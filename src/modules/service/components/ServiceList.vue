<script setup lang="ts">
import { ref } from 'vue'
import DefaultCard from '@/components/DefaultCard.vue'
import StackedList from '@/components/StackedList.vue'
import StackedListItemLink from '@/components/StackedListItemLink.vue'
import ServiceListHeader from './ServiceListHeader.vue'
import ServiceListItem from './ServiceListItem.vue'
import useUserStore from '@/store'
import type { ServiceObject } from '../types'
import { ROUTES } from '@/router/routes'

const userStore = useUserStore()

const search = ref('')
</script>

<template>
  <DefaultCard>
    <StackedList :list-items="userStore.services">
      <template #header>
        <ServiceListHeader v-model:search="search" />
      </template>
      <template #default="slotProps">
        <StackedListItemLink
          :to="{
            name: ROUTES.serviceModule.serviceDetails.name,
            params: {
              service: (slotProps.item as ServiceObject).service,
            },
          }"
        >
          <ServiceListItem :item="slotProps.item" />
        </StackedListItemLink>
      </template>
    </StackedList>
  </DefaultCard>
</template>
