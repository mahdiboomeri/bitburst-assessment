<script setup lang="ts">
import { computed } from 'vue'
import { useDateFormat } from '@vueuse/core'
import type { Todo } from '../types/todo'
import { useTodoStore } from '../stores/todo.store'
import AppCheckbox from './AppCheckbox.vue'

const props = defineProps<{
  id: string
  item: Todo
}>()

const store = useTodoStore()
const isChecked = computed(() => props.item.status === 'DONE')
const date = useDateFormat(props.item.createdAt, 'YYYY-MM-DD HH:mm:ss')

function changed(value: boolean) {
  if (value)
    store.setStatus(props.id, 'DONE')
  else
    store.setStatus(props.id, 'PENDING')
}
</script>

<template>
  <div class="flex items-center gap-2">
    <AppCheckbox :id="id" class="flex-shrink-0" :model-value="isChecked" @update:model-value="changed" />

    <label :for="id" class="cursor-pointer overflow-hidden">
      <p class="text-[15px] font-normal truncate" :class="{ 'text-dark-gray line-through': isChecked }">
        {{ item.name }}
      </p>

      <p class="text-[10px] font-normal mt-0.5 text-dark-gray">
        {{ date }}
      </p>
    </label>

    <div class="ml-auto flex-shrink-0">
      <slot name="actions" />
    </div>
  </div>
</template>
