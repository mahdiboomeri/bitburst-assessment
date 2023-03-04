<script setup lang="ts">
import { computed } from 'vue'
import type { Todo } from '../types/todo'

const props = defineProps<{
  items: Map<string, Todo>
}>()

const ITEM_HEIGHT = 40 + 16 // height + margin;
const height = computed(() => [...props.items].length * ITEM_HEIGHT)
</script>

<template>
  <TransitionGroup
    tag="div"
    name="list"
    class="flex flex-col gap-4 transition-all duration-500 relative"
    :style="{ height: `${height}px` }"
  >
    <div v-for="[key, item] in items" :key="key">
      <slot name="item" :value="{ key, item }" />
    </div>
  </TransitionGroup>
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
  width: 100%;
}
</style>
