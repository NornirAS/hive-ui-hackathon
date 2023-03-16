<script setup lang="ts"></script>

<template>
  <li
    class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"
  >
    <div class="text-500 w-6 md:w-2 font-medium">
      <slot name="key"></slot>
    </div>
    <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
      <slot name="value"></slot>
    </div>
    <div class="w-6 md:w-2 flex justify-content-end">
      <slot name="action"></slot>
    </div>
  </li>
</template>
