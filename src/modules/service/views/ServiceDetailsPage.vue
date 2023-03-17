<script setup lang="ts">
import ServiceInformation from '../components/ServiceInformation.vue'
import ServiceDelete from '../components/ServiceDelete.vue'
import ServiceLinkList from '../components/ServiceLinkList.vue'
import ServiceGhostAdd from '../components/ServiceGhostAdd.vue'
</script>

<template>
  <div class="mb-4">
    <ServiceInformation />
  </div>
  <!-- <div class="mb-4">
    <ServiceLinkList />
  </div> -->
  <div class="mb-4">
    <ServiceGhostAdd />
  </div>
  <div class="mb-4">
    <ServiceDelete />
  </div>
</template>
