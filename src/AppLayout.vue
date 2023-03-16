<script setup lang="ts">
import DefaultLayout from './layouts/DefaultLayout.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <component :is="route.meta.layout || DefaultLayout">
    <router-view></router-view>
  </component>
</template>
