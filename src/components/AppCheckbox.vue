<script setup lang="ts">
defineProps<{
  id: string
  modelValue: boolean
}>()

const emit = defineEmits<{
  (event: 'update:modelValue', value: boolean): void
}>()
</script>

<template>
  <div class="relative w-6 h-6">
    <input
      :id="id"
      type="checkbox"
      class="checkbox w-full h-full rounded-full appearance-none outline-none cursor-pointer border border-light-gray checked:bg-normal-blue checked:border-normal-blue transition-colors"
      :checked="modelValue"
      @change="(event) => emit('update:modelValue', (event.target as HTMLInputElement).checked)"
    >

    <svg class="tick absolute top-1/2 -translate-y-1/2 transition-transform inset-x-0 mx-auto pointer-events-none" width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.02686 9.05222L0.173621 5.19898C-0.0578738 4.96748 -0.0578738 4.59214 0.173621 4.36062L1.01196 3.52227C1.24345 3.29075 1.61882 3.29075 1.85031 3.52227L4.44604 6.11797L10.0058 0.558238C10.2373 0.326743 10.6126 0.326743 10.8441 0.558238L11.6825 1.3966C11.914 1.62809 11.914 2.00343 11.6825 2.23495L4.86521 9.05224C4.6337 9.28373 4.25835 9.28373 4.02686 9.05222Z" fill="white" />
    </svg>
  </div>
</template>

<style scoped lang="postcss">
.tick {
  @apply scale-0;
}
.checkbox:checked + .tick {
  @apply scale-100;
}
</style>
