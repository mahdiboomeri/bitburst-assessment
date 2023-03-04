<script setup lang="ts">
import { ref } from 'vue'
import type { Todo } from '../types/todo'
import { useTodoStore } from '../stores/todo.store'
import AppButton from './AppButton.vue'
import AppInput from './AppInput.vue'

const props = defineProps<{
  type: Todo['status']
}>()

const store = useTodoStore()
const todo = ref('')

function addTodo() {
  if (!todo.value)
    return

  store.add({
    name: todo.value,
    status: props.type,
  })

  todo.value = ''
}
</script>

<template>
  <div class="flex flex-wrap gap-4 max-w-full">
    <AppInput v-model="todo" type="text" placeholder="Type your todo here" class="flex-grow" @keyup.enter="addTodo" />

    <AppButton intent="normal" class="flex-shrink-0" :disabled="!todo" @click="addTodo">
      Add Item
    </AppButton>
  </div>
</template>
