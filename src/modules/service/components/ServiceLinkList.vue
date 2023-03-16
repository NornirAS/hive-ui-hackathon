<script setup lang="ts">
import { ref, watch } from 'vue'
import DefaultCard from '@/components/DefaultCard.vue'
import StackedList from '@/components/StackedList.vue'
import StackedListItem from '@/components/StackedListItem.vue'
import ServiceLinkListHeader from './ServiceLinkListHeader.vue'
import ServiceLinkListItem from './ServiceLinkListItem.vue'
import ServiceLinkAdd from './ServiceLinkAdd.vue'
import useUserStore from '@/store'

const search = ref('')
const isEditMode = ref(false)

const userStore = useUserStore()

watch(isEditMode, newVal => {
  if (newVal) userStore.initLinksEditMode()
})
</script>

<template>
  <DefaultCard>
    <StackedList
      :list-items="isEditMode ? userStore.editedLinks : userStore.links"
    >
      <template #title>Links</template>
      <template #header>
        <ServiceLinkListHeader
          v-model:search="search"
          v-model:is-edit-mode="isEditMode"
        />
      </template>
      <template #default="slotProps">
        <StackedListItem>
          <ServiceLinkListItem
            :item="slotProps.item"
            :is-edit-mode="isEditMode"
          />
        </StackedListItem>
      </template>
    </StackedList>
    <div v-if="isEditMode" class="mt-3">
      <ServiceLinkAdd />
    </div>
  </DefaultCard>
</template>
