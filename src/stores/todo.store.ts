import { defineStore } from 'pinia'
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import type { Todo } from '../types/todo'

export const useAlertsStore = defineStore('todo', () => {
  const items = ref<Todo[]>([])

  function add(item: Omit<Todo, 'id' | 'createdAt'>) {
    items.value.push({
      id: uuidv4(),
      createdAt: new Date(),
      name: item.name,
      status: item.status,
    })
  }

  return {
    items,
    add,
  }
})
