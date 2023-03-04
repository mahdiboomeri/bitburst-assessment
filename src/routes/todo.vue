<script setup lang="ts">
import { computed } from 'vue'
import AppAccordion from '../components/AppAccordion.vue'
import TodoCreator from '../components/TodoCreator.vue'
import TodoItem from '../components/TodoItem.vue'
import { useTodoStore } from '../stores/todo.store'

const store = useTodoStore()

const ITEM_HEIGHT = 40 + 16 // height + margin;
const finished = computed(() => [...store.done].length * ITEM_HEIGHT)
const pending = computed(() => [...store.pending].length * ITEM_HEIGHT)

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
        <TransitionGroup tag="div" name="list" class="flex flex-col gap-4 transition-all duration-500" :style="{ height: `${finished}px` }">
          <div v-for="[key, item] in store.done" :key="key">
            <TodoItem
              :id="key"
              :item="item"
              @changed="(value) => changed(key, value)"
            />
          </div>
        </TransitionGroup>
      </template>
    </AppAccordion>

    <TransitionGroup tag="div" name="list" class="flex flex-col gap-4 mt-4 transition-all duration-500" :style="{ height: `${pending}px` }">
      <div v-for="[key, item] in store.pending" :key="key">
        <TodoItem
          :id="key"
          :item="item"
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
  transform: scale(0.85);
}

.list-leave-active {
  position: absolute;
}
</style>
