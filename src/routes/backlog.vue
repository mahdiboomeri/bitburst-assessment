<script setup lang="ts">
import { computed, ref } from 'vue'
import AppButtonOutline from '../components/AppButtonOutline.vue'
import TodoCreator from '../components/TodoCreator.vue'
import TodoFilter from '../components/TodoFilter.vue'
import TodoItem from '../components/TodoItem.vue'
import TodoList from '../components/TodoList.vue'
import { filterMap } from '../composables/filterMap'
import { useTodoStore } from '../stores/todo.store'

const store = useTodoStore()
const search = ref('')

const filteredItems = computed(() => {
  if (!search.value)
    return store.backlog

  return filterMap(store.backlog, item => item.name.toLocaleLowerCase().includes(search.value))
})

function nameSort() {
  const items = [...store.items]
  const sorted = items.sort((a, b) => {
    return a[1].name.localeCompare(b[1].name)
  })

  store.items = new Map(sorted)
}

function dateSort() {
  const items = [...store.items]
  const sorted = items.sort((a, b) => {
    return a[1].createdAt.getTime() - b[1].createdAt.getTime()
  })

  store.items = new Map(sorted)
}

function moveTodo(key: string) {
  store.setStatus(key, 'PENDING')
}
</script>

<template>
  <TodoFilter v-model:search="search" class="mt-4" @name-sort="nameSort" @date-sort="dateSort" />

  <TodoList :items="filteredItems" class="mt-4">
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
