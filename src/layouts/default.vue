<script setup lang="ts">
import AppTabs from '../components/AppTabs.vue'
</script>

<template>
  <div class="py-[1.875rem] mx-auto w-full lg:w-2/5">
    <AppTabs />

    <div>
      <slot />
    </div>
  </div>
</template>
