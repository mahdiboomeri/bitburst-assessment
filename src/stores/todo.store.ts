import { defineStore } from 'pinia'
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import type { Todo } from '../types/todo'

export const useTodoStore = defineStore('todo', () => {
  const items = ref<Map<string, Todo>>(new Map())

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
    add,
    remove,
    setStatus,
  }
})
