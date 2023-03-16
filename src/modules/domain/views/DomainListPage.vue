<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import StackedList from '@/components/StackedList.vue'
import StackedListItemLink from '@/components/StackedListItemLink.vue'
import DomainListHeader from '@/modules/domain/components/DomainListHeader.vue'
import DomainListItem from '@/modules/domain/components/DomainListItem.vue'
import type { DomainObject } from '../types/index'
import DefaultCard from '@/components/DefaultCard.vue'
import useUserStore from '@/store'
import { ROUTES } from '@/router/routes'

const userStore = useUserStore()

const search = ref('' as string)

const filteredDomains = computed(() => {
  if (search.value === '') return userStore.domains
  return userStore.domains.filter((d: DomainObject) => {
    return d.domain.toLowerCase().includes(search.value.toLowerCase())
  })
})

userStore.getUserData()
</script>

<template>
  <DefaultCard>
    <StackedList :list-items="filteredDomains">
      <template #header>
        <DomainListHeader v-model:search="search" />
      </template>
      <template #default="slotProps">
        <StackedListItemLink
          :to="{
            name: ROUTES.domainModule.domainDetails.name,
            params: {
              slug: (slotProps.item as DomainObject).domain,
            }
          }"
        >
          <template #default>
            <DomainListItem :item="(slotProps.item as DomainObject)" />
          </template>
        </StackedListItemLink>
      </template>
    </StackedList>
  </DefaultCard>
</template>
