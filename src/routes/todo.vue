<script setup lang="ts">
import AppAccordion from '../components/AppAccordion.vue'
import TodoActionMenu from '../components/TodoActionMenu.vue'
import TodoCreator from '../components/TodoCreator.vue'
import TodoItem from '../components/TodoItem.vue'
import TodoList from '../components/TodoList.vue'
import { useTodoStore } from '../stores/todo.store'

const store = useTodoStore()
</script>

<template>
  <AppAccordion>
    <template #summary>
      {{ [...store.done].length }} Done
    </template>

    <template #content>
      <TodoList :items="store.done">
        <template #item="{ value }">
          <TodoItem
            :id="value.key"
            :item="value.item"
          />
        </template>
      </TodoList>
    </template>
  </AppAccordion>

  <TodoList :items="store.pending" class="mt-4">
    <template #item="{ value }">
      <TodoItem
        :id="value.key"
        :item="value.item"
      >
        <template #actions>
          <TodoActionMenu
            :actions="[
              {
                name: 'Delete',
                action: () => store.remove(value.key),
              },
              {
                name: 'Move to Backlog',
                action: () => store.setStatus(value.key, 'BACKLOG'),
              },
            ]"
          />
        </template>
      </TodoItem>
    </template>
  </TodoList>

  <TodoCreator class="mt-auto" type="PENDING" />
</template>
