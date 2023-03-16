<script setup lang="ts">
import Button from 'primevue/button'
import { useRouter } from 'vue-router'
import { ROUTES } from '@/router/routes'

const router = useRouter()

const goToLogin = () => {
  router.push({ name: ROUTES.authModule.auth.name })
}
</script>

<template>
  <div class="relative p-8 overflow-hidden h-screen w-full">
    <img
      src="https://i.imgur.com/2gius7m.png"
      alt="Image"
      class="absolute top-0 left-0 w-auto h-full block md:w-full"
    />

    <div class="flex m-8">
      <div class="flex m-auto justify-content-center align-content-center">
        <div>
          <div class="flex relative">
            <div
              class="flex m-auto justify-content-center align-content-center"
            >
              <img src="https://i.imgur.com/iVE4NBG.png" alt="Image" />
            </div>
          </div>

          <div class="flex relative">
            <div
              class="flex m-auto justify-content-center align-content-center"
            >
              <img
                src="https://i.imgur.com/ZmH9KUj.png"
                alt="Image"
                class="w-6"
              />
            </div>
          </div>

          <div class="text-center relative">
            <Button label="Login" @click="goToLogin" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
