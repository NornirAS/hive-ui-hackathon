<script setup lang="ts">
import { ROUTES } from '@/router/routes'

const navItems = [
  {
    label: 'Home',
    to: {
      name: ROUTES.publicModule.home.name,
    },
    icon: 'pi pi-home',
  },
  {
    label: 'Domains',
    to: {
      name: ROUTES.domainModule.domainList.name,
    },
  },
  {
    label: 'Services',
    to: {
      name: ROUTES.serviceModule.serviceList.name,
    },
  },
  {
    label: 'Ghosts',
    to: {
      name: ROUTES.ghostModule.ghostList.name,
    },
  },
]
</script>

<template>
  <ul
    class="list-none p-0 m-0 flex justify-content-center lg:align-items-center select-none flex-column lg:flex-row"
  >
    <li v-for="(item, index) in navItems" :key="index">
      <slot :item="item"></slot>
    </li>
  </ul>
</template>
