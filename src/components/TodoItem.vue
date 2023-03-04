<script setup lang="ts">
import type { Todo } from '../types/todo'
import { formatDate } from '../composables/date'
import AppCheckbox from './AppCheckbox.vue'

defineProps<{
  id: string
  item: Todo
}>()
</script>

<template>
  <div class="flex items-center gap-2">
    <AppCheckbox :id="id" :model-value="false" />

    <label :for="id" class="cursor-pointer">
      <p class="text-[15px] font-normal">
        {{ item.name }}
      </p>

      <p class="text-[10px] font-normal mt-0.5 text-dark-gray">
        {{ formatDate(item.createdAt) }}
      </p>
    </label>

    <div class="ml-auto">
      <slot name="actions" />
    </div>
  </div>
</template>
