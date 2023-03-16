<script setup lang="ts">
import DefaultCard from '@/components/DefaultCard.vue'
import AppConfig from '@/config'
</script>

<template>
  <DefaultCard class="w-full lg:w-6 my-auto">
    <div class="text-center mb-3">
      <img :src="AppConfig.companyLogoDark" alt="Image" height="60" />
    </div>
    <slot></slot>
  </DefaultCard>
</template>
