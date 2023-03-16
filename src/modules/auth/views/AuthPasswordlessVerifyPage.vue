<script setup lang="ts">
import ProgressSpinner from 'primevue/progressspinner'
import AuthCardBrandLogo from '../components/AuthCardBrandLogo.vue'
import { passwordlessConsume } from '../services/passwordlessService'

passwordlessConsume()
</script>

<template>
  <AuthCardBrandLogo>
    <ProgressSpinner
      class="flex justify-content-center mb-4"
      aria-label="Loading"
    />

    <div class="flex justify-content-center text-900 text-3xl font-medium mb-3">
      Verifying...
    </div>
  </AuthCardBrandLogo>
</template>
