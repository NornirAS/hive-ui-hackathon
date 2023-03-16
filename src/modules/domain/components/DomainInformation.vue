<script setup lang="ts">
import DefaultCard from '@/components/DefaultCard.vue'
import DescriptionList from '@/components/DescriptionList.vue'
import DescriptionListItem from '@/components/DescriptionListItem.vue'
import DomainStatus from './DomainStatus.vue'
import type { DomainObject } from '../types'

defineProps<{
  domain: DomainObject
}>()
</script>

<template>
  <DefaultCard>
    <DescriptionList :list-items="domain">
      <template #header>Information</template>
      <template #default="slotProps">
        <DescriptionListItem>
          <template #key>Domain</template>
          <template #value>
            {{ (slotProps.listItems as DomainObject).domain }}
          </template>
        </DescriptionListItem>
        <DescriptionListItem>
          <template #key>Status</template>
          <template #value>
            <DomainStatus
              :active="(slotProps.listItems as DomainObject).active"
            />
          </template>
        </DescriptionListItem>
      </template>
    </DescriptionList>
  </DefaultCard>
</template>
