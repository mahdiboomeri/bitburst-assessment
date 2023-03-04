<script setup lang="ts">
import { ref } from 'vue'
import type { Todo } from '../types/todo'
import AppButton from './AppButton.vue'
import AppInput from './AppInput.vue'

defineProps<{
  type: Todo['status']
}>()

const todo = ref('')
</script>

<template>
  <div class="flex gap-4">
    <AppInput v-model="todo" type="text" placeholder="Type your todo here" class="flex-grow" />

    <AppButton intent="normal" :disabled="!todo">
      Add Item
    </AppButton>
  </div>
</template>
