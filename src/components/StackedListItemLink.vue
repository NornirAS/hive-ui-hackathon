<script setup lang="ts">
import { RouteLocationRaw } from 'vue-router'

defineProps<{
  to: RouteLocationRaw
}>()
</script>

<template>
  <router-link v-slot="{ href, navigate }" :to="to" custom>
    <li class="border-bottom-1 surface-border">
      <a
        v-ripple
        class="flex flex-column md:flex-row md:align-items-center md:justify-content-between cursor-pointer py-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple no-underline"
        :href="href"
        @click="navigate"
      >
        <slot></slot>
      </a>
    </li>
  </router-link>
</template>
