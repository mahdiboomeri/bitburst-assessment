<script setup lang="ts">
import TodoCreator from '../components/TodoCreator.vue'
import TodoItem from '../components/TodoItem.vue'
</script>

<template>
  <div class="flex flex-col flex-grow">
    <TodoItem
      id="hello"
      class="mt-10"
      :item="{
        createdAt: new Date(),
        name: 'Hello there',
        status: 'PENDING',
      }"
    />
    <TodoCreator class="mt-auto" type="PENDING" />
  </div>
</template>
