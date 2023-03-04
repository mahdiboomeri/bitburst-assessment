<script setup lang="ts">
import TodoCreator from '../components/TodoCreator.vue'
import TodoItem from '../components/TodoItem.vue'
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
    <TransitionGroup tag="div" name="list" class="bg-red-100">
      <div v-for="[key, item] in store.done" :key="key">
        <TodoItem
          :id="key"
          :item="item"
          class="mt-4"
          @changed="(value) => changed(key, value)"
        />
      </div>
    </TransitionGroup>

    <TransitionGroup tag="div" name="list">
      <div v-for="[key, item] in store.pending" :key="key">
        <TodoItem
          :id="key"
          :item="item"
          class="mt-4"
          @changed="(value) => changed(key, value)"
        />
      </div>
    </TransitionGroup>

    <TodoCreator class="mt-auto" type="PENDING" />
  </div>
</template>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translate(30px, 0);
}

.list-leave-active {
  position: absolute;
}
</style>
