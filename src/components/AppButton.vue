<script setup lang="ts">
defineProps<{
  intent: 'normal' | 'light'
}>()
</script>

<template>
  <button
    type="button"
    class="py-3 px-4 rounded-md font-medium text-[15px] border text-white disabled:bg-light-gray disabled:border-normal-gray transition-colors"
    :class="{
      'bg-normal-blue border-dark-blue': intent === 'normal',
      'bg-light-blue border-normal-blue': intent === 'light',
    }"
  >
    <slot />
  </button>
</template>
