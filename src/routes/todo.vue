<script setup lang="ts">
import AppAccordion from '../components/AppAccordion.vue'
import TodoCreator from '../components/TodoCreator.vue'
import TodoItem from '../components/TodoItem.vue'
import TodoList from '../components/TodoList.vue'
import { useTodoStore } from '../stores/todo.store'

const store = useTodoStore()

function changed(id: string, value: boolean) {
  if (value)
    store.setStatus(id, 'DONE')
  else
    store.setStatus(id, 'PENDING')
}
</script>

<template>
  <div class="flex flex-col flex-grow">
    <AppAccordion>
      <template #summary>
        Done
      </template>

      <template #content>
        <TodoList :items="store.done">
          <template #item="{ value }">
            <TodoItem
              :id="value.key"
              :item="value.item"
              @changed="(checked) => changed(value.key, checked)"
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
          @changed="(checked) => changed(value.key, checked)"
        >
          <template #actions>
            <button type="button">
              <svg width="21" height="6" viewBox="0 0 21 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.9465 3.05581C12.9465 4.66603 11.6437 5.96877 10.0335 5.96877C8.4233 5.96877 7.12056 4.66603 7.12056 3.05581C7.12056 1.44559 8.4233 0.142853 10.0335 0.142853C11.6437 0.142853 12.9465 1.44559 12.9465 3.05581ZM17.1541 0.142853C15.5439 0.142853 14.2411 1.44559 14.2411 3.05581C14.2411 4.66603 15.5439 5.96877 17.1541 5.96877C18.7643 5.96877 20.067 4.66603 20.067 3.05581C20.067 1.44559 18.7643 0.142853 17.1541 0.142853ZM2.91296 0.142853C1.30274 0.142853 0 1.44559 0 3.05581C0 4.66603 1.30274 5.96877 2.91296 5.96877C4.52317 5.96877 5.82591 4.66603 5.82591 3.05581C5.82591 1.44559 4.52317 0.142853 2.91296 0.142853Z" fill="currentColor" />
              </svg>
            </button>
          </template>
        </TodoItem>
      </template>
    </TodoList>

    <TodoCreator class="mt-auto" type="PENDING" />
  </div>
</template>
