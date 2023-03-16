<script setup lang="ts">
import { ref } from 'vue'
import AuthPasswordlessForm from '../components/AuthPasswordlessForm.vue'
import AuthPasswordlessResend from '../components/AuthPasswordlessResend.vue'
import AuthCardBrandLogo from '../components/AuthCardBrandLogo.vue'

const isCodeSent = ref(false)
</script>

<template>
  <AuthCardBrandLogo>
    <AuthPasswordlessForm v-if="!isCodeSent" v-model:isCodeSent="isCodeSent" />
    <AuthPasswordlessResend v-else />
  </AuthCardBrandLogo>
</template>
