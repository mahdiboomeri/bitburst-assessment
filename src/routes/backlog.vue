<script setup lang="ts">
import AppButtonOutline from '../components/AppButtonOutline.vue'
import TodoCreator from '../components/TodoCreator.vue'
import TodoItem from '../components/TodoItem.vue'
import TodoList from '../components/TodoList.vue'
import { useTodoStore } from '../stores/todo.store'

const store = useTodoStore()

function moveTodo(key: string) {
  store.setStatus(key, 'PENDING')
}
</script>

<template>
  <TodoList :items="store.backlog" class="mt-4">
    <template #item="{ value }">
      <TodoItem
        :id="value.key"
        :item="value.item"
      >
        <template #actions>
          <AppButtonOutline @click="moveTodo(value.key)">
            Move to List
          </AppButtonOutline>
        </template>
      </TodoItem>
    </template>
  </TodoList>

  <TodoCreator class="mt-auto" type="BACKLOG" />
</template>
