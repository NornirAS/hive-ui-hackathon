<script setup lang="ts">
import Button from 'primevue/button'
import DefaultCard from '@/components/DefaultCard.vue'
import DescriptionList from '@/components/DescriptionList.vue'
import DescriptionListItem from '@/components/DescriptionListItem.vue'
import useUserStore from '@/store'
import type { ServiceObject } from '../types'
import { ROUTES } from '@/router/routes'

const userStore = useUserStore()
</script>

<template>
  <DefaultCard>
    <DescriptionList :list-items="userStore.selectedService">
      <template #header>
        <div class="flex justify-content-between align-content-center">
          Information
          <RouterLink
            v-slot="{ navigate }"
            :to="{
              name: ROUTES.serviceModule.serviceEdit.name,
              params: {
                service: userStore.selectedService.service,
              },
            }"
            custom
          >
            <Button
              label="Edit"
              class="p-button-text"
              icon="pi pi-pencil"
              @click="navigate"
            />
          </RouterLink>
        </div>
      </template>
      <template #default="slotProps">
        <DescriptionListItem>
          <template #key>Domain</template>
          <template #value>
            {{ (slotProps.listItems as ServiceObject).domain }}
          </template>
        </DescriptionListItem>
        <DescriptionListItem>
          <template #key>Service</template>
          <template #value>
            {{ (slotProps.listItems as ServiceObject).service }}
          </template>
        </DescriptionListItem>
        <DescriptionListItem>
          <template #key>Timeout</template>
          <template #value>
            {{ (slotProps.listItems as ServiceObject).timeout }}
          </template>
        </DescriptionListItem>
        <DescriptionListItem>
          <template #key>Data schema</template>
          <template #value>
            {{ (slotProps.listItems as ServiceObject).dataSchema }}
          </template>
        </DescriptionListItem>
      </template>
    </DescriptionList>
  </DefaultCard>
</template>
