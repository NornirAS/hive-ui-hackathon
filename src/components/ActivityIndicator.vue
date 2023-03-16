<script setup lang="ts">
import ProgressSpinner from 'primevue/progressspinner'
</script>

<template>
  <div class="activity-indicator">
    <ProgressSpinner
      style="width: 50px; height: 50px"
      stroke-width="8"
      fill="var(--surface-ground)"
      animation-duration=".5s"
      aria-label="Custom ProgressSpinner"
    />
  </div>
</template>
<style scoped lang="css">
.activity-indicator {
  background-color: #fff;
  padding: 30px;
  display: flex;
  margin: auto;
  align-items: center;
}
</style>
