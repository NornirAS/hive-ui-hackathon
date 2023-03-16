<script setup lang="ts">
import GhostInformation from '../components/GhostInformation.vue'
import GhostLinkedFromList from '../components/GhostLinkedFromList.vue'
import GhostMorphedGhostsList from '../components/GhostMorphedGhostsList.vue'
</script>

<template>
  <div class="mb-4">
    <GhostInformation />
  </div>
  <div class="mb-4">
    <GhostMorphedGhostsList />
  </div>
  <div class="mb-4">
    <GhostLinkedFromList />
  </div>
</template>
