<script setup lang="ts">
import { reactive } from 'vue'
import Button from 'primevue/button'
import { passwordlessResend } from '../services/passwordlessService'

const initState = reactive({
  isResend: false,
  resendInterval: 120, // seconds
})

const state = reactive({ ...initState })

const resetState = () => {
  Object.assign(state, initState)
}

// Start countdown until next resend
const startCountdown = () => {
  state.isResend = true
  setInterval(() => {
    state.resendInterval = state.resendInterval - 1
    if (state.resendInterval === 0) return resetState()
  }, 1000)
}

const resendCode = () => {
  passwordlessResend(startCountdown)
}
</script>

<template>
  <div class="mb-3">
    <div class="text-center mb-3">
      <div class="text-900 text-3xl font-medium mb-3">
        Check your email to continue
      </div>
      <span class="text-900 text-xl font-medium line-height-3">
        Didn't get an email?
      </span>
    </div>
  </div>

  <Button
    :label="state.isResend ? state.resendInterval.toString() : 'Resend'"
    class="w-full"
    :disabled="state.isResend"
    @click="resendCode"
  />
</template>
