<script setup lang="ts">
defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <input
    class="py-3 px-4 rounded-md placeholder:text-light-gray border border-light-gray text-dark focus:border-normal-blue outline-none text-[15px]"
    :value="modelValue"
    @input="(event) => emit('update:modelValue', (event.target as HTMLInputElement).value)"
  >
</template>
