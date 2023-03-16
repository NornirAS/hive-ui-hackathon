<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import { passwordlessInit } from '../services/passwordlessService'

defineProps<{
  isCodeSent: boolean
}>()

const emit = defineEmits(['update:isCodeSent'])

const email = ref('')
const isEmailValid = ref(true)

const onCodeSent = () => {
  emit('update:isCodeSent', true)
}

const sendCode = () => {
  passwordlessInit(email.value, onCodeSent)
}
</script>

<template>
  <div class="mb-3">
    <div class="text-center mb-3">
      <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
      <span class="text-900 text-xl font-medium line-height-3">
        Sign Up or Log In
      </span>
    </div>
    <label for="email" class="block text-900 font-medium mb-2">Email</label>
    <InputText
      id="email"
      v-model="email"
      type="text"
      placeholder="Email address"
      class="w-full"
      aria-describedby="email-help"
      :class="[!isEmailValid && 'p-invalid']"
    />
    <small v-if="!isEmailValid" id="email-help" class="p-error">
      Email is not available.
    </small>
  </div>

  <Button label="Continue" icon="pi pi-user" class="w-full" @click="sendCode" />
</template>
