<script setup lang="ts">
import { computed } from 'vue'
import type { Todo } from '../types/todo'
import { formatDate } from '../composables/date'
import AppCheckbox from './AppCheckbox.vue'

const props = defineProps<{
  id: string
  item: Todo
}>()

const emit = defineEmits<{
  (event: 'changed', value: boolean): void
}>()

const isChecked = computed(() => props.item.status === 'DONE')
</script>

<template>
  <div class="flex items-center gap-2">
    <AppCheckbox :id="id" class="flex-shrink-0" :model-value="isChecked" @update:model-value="(value) => emit('changed', value)" />

    <label :for="id" class="cursor-pointer overflow-hidden">
      <p class="text-[15px] font-normal truncate" :class="isChecked ?? 'text-dark-gray line-through'">
        {{ item.name }}
      </p>

      <p class="text-[10px] font-normal mt-0.5 text-dark-gray">
        {{ formatDate(item.createdAt) }}
      </p>
    </label>

    <div class="ml-auto flex-shrink-0">
      <slot name="actions" />
    </div>
  </div>
</template>
