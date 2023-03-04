import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import type { Todo } from '../types/todo'
import { filterMap } from '../composables/filterMap'

export const useTodoStore = defineStore('todo', () => {
  const items = ref<Map<string, Todo>>(new Map())

  const pending = computed(() => filterMap(items.value, item => item.status === 'PENDING'))
  const backlog = computed(() => filterMap(items.value, item => item.status === 'BACKLOG'))
  const done = computed(() => filterMap(items.value, item => item.status === 'DONE'))

  function add(item: Omit<Todo, 'id' | 'createdAt'>) {
    items.value.set(uuidv4(), {
      createdAt: new Date(),
      name: item.name,
      status: item.status,
    })
  }

  function remove(id: string) {
    items.value.delete(id)
  }

  function setStatus(id: string, status: Todo['status']) {
    const item = items.value.get(id)

    if (!item)
      return

    items.value.set(id, {
      ...item,
      status,
    })
  }

  return {
    items,
    pending,
    backlog,
    done,
    add,
    remove,
    setStatus,
  }
})
