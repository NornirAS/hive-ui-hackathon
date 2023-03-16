<script setup lang="ts">
import InputText from 'primevue/inputtext'
import LayoutTopbarNavigation from './LayoutTopbarNavigation.vue'
import LayoutTopbarNavigationItem from './LayoutTopbarNavigationItem.vue'
import AppConfig from '@/config'
</script>

<template>
  <div
    class="surface-overlay py-3 px-6 flex align-items-center justify-content-between relative lg:static"
    style="min-height: 80px"
  >
    <img
      :src="AppConfig.companyLogoDark"
      alt="Image"
      height="60"
      class="mr-0 lg:mr-6"
    />
    <a
      v-ripple
      v-styleclass="{
        selector: '@next',
        enterClass: 'hidden',
        leaveToClass: 'hidden',
        hideOnOutsideClick: true,
      }"
      class="cursor-pointer block lg:hidden text-700 p-ripple"
    >
      <i class="pi pi-bars text-4xl"></i>
    </a>
    <div
      class="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 z-1 shadow-2 lg:shadow-none"
    >
      <LayoutTopbarNavigation>
        <template #default="slotProps">
          <LayoutTopbarNavigationItem :item="slotProps.item" />
        </template>
      </LayoutTopbarNavigation>
      <ul
        class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 surface-border lg:border-top-none"
      >
        <li class="flex-order-2 lg:flex-order-0">
          <div class="flex px-6 p-3 lg:px-3 lg:py-2">
            <span class="p-input-icon-left w-full">
              <i class="pi pi-search text-gray-400"></i>
              <InputText type="text" placeholder="Search" class="w-full" />
            </span>
          </div>
        </li>
        <li class="border-top-1 surface-border lg:border-top-none">
          <a
            v-ripple
            class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple"
          >
            <img
              :src="AppConfig.profilePicture"
              class="mr-3 lg:mr-0"
              style="width: 32px; height: 32px"
            />
            <div class="block lg:hidden">
              <div class="text-900 font-medium">My Account</div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
