<script setup lang="ts">
import DomainInformation from '../components/DomainInformation.vue'
import DomainDelete from '../components/DomainDelete.vue'
import useUserStore from '@/store'
import { useRoute } from 'vue-router'

const userStore = useUserStore()
const route = useRoute()
const slug = route.params.slug
const domain = () => userStore.getDomainBySlug()(slug as string)
</script>

<template>
  <div class="mb-4">
    <DomainInformation :domain="domain()" />
  </div>
  <div class="mb-4">
    <DomainDelete :domain="(slug as string)" />
  </div>
</template>
