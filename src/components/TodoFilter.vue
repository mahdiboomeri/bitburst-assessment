<script setup lang="ts">
import AppButton from './AppButton.vue'
import AppInput from './AppInput.vue'

defineProps<{
  search: string
}>()

const emit = defineEmits<{
  (event: 'update:search', value: string): void
  (event: 'nameSort'): void
  (event: 'dateSort'): void
}>()
</script>

<template>
  <div class="flex gap-4">
    <AppInput model-value="search" placeholder="Search" class="flex-grow" @update:model-value="(value) => emit('update:search', value)" />

    <AppButton intent="normal" @click="emit('nameSort')">
      Sort by Name
    </AppButton>

    <AppButton intent="normal" @click="emit('dateSort')">
      Sort by Date
    </AppButton>
  </div>
</template>
