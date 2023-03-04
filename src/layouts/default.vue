<script setup lang="ts">
import AppTabs from '../components/AppTabs.vue'
</script>

<template>
  <div class="py-[1.875rem] mx-auto w-full lg:w-2/5 min-h-screen flex flex-col">
    <AppTabs />

    <div class="flex-grow flex flex-col px-4 ">
      <slot />
    </div>
  </div>
</template>
