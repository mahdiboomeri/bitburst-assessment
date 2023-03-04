import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useTodoStore } from './todo.store'

describe('Todo Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('can add', () => {
    const todo = useTodoStore()

    todo.add({
      name: 'Test',
      status: 'PENDING',
    })

    expect([...todo.items]).toHaveLength(1)
  })

  it('can remove', () => {
    const todo = useTodoStore()

    todo.add({
      name: 'Test',
      status: 'PENDING',
    })
    todo.remove([...todo.items][0][0])

    expect([...todo.items]).toHaveLength(0)
  })

  it('can change status', () => {
    const todo = useTodoStore()

    todo.add({
      name: 'Test',
      status: 'PENDING',
    })

    expect([...todo.pending]).toHaveLength(1)

    todo.setStatus([...todo.items][0][0], 'BACKLOG')

    expect([...todo.pending]).toHaveLength(0)
    expect([...todo.backlog]).toHaveLength(1)
  })
})
