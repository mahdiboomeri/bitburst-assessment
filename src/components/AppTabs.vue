<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex gap-8 px-4 font-bold text-[1.75rem]">
    <RouterLink
      to="/todo" class="link"
    >
      To Do List
    </RouterLink>

    <RouterLink to="/backlog" class="link">
      Backlog
    </RouterLink>
  </div>
</template>

<style scoped lang="postcss">
.link {
  @apply relative pb-3 text-normal-gray;
}

.link.router-link-exact-active {
  @apply text-dark;
}

.link.router-link-exact-active:before {
  content: "";
  @apply w-full rounded-full h-1 bg-normal-blue absolute bottom-0;
}
</style>
