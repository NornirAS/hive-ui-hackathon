<script setup lang="ts">
import { useRouter } from 'vue-router'
import Button from 'primevue/button'
import { ROUTES } from '@/router/routes'

const router = useRouter()

const goBack = () => {
  router.go(-1)
}

const goHome = () => {
  router.push({ name: ROUTES.publicModule.home.name })
}
</script>

<template>
  <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div
      style="
        background: radial-gradient(
          50% 109137.91% at 50% 50%,
          rgba(233, 30, 99, 0.1) 0%,
          rgba(254, 244, 247, 0) 100%
        );
      "
      class="text-center"
    >
      <span class="bg-white text-pink-500 font-bold text-2xl inline-block px-3">
        404
      </span>
    </div>
    <div class="mt-6 mb-5 font-bold text-6xl text-900 text-center">
      Page Not Found
    </div>
    <p class="text-700 text-3xl mt-0 mb-6 text-center">
      Sorry, we couldn't find the page.
    </p>
    <div class="text-center">
      <Button
        class="p-button-text mr-2"
        label="Go Back"
        icon="pi pi-arrow-left"
        @click="goBack"
      />
      <Button label="Go to Dashboard" icon="pi pi-home" @click="goHome" />
    </div>
  </div>
</template>
