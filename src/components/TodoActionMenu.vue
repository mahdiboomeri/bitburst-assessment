<script setup lang="ts">
import { vOnClickOutside } from '@vueuse/components'
import { ref } from 'vue'

defineProps<{
  actions: {
    name: string
    action: Function
  }[]
}>()

const open = ref(false)

function closeMenu() {
  open.value = false
}

function toggleMenu() {
  open.value = !open.value
}
</script>

<template>
  <div v-on-click-outside="closeMenu" class="relative">
    <button type="button" class="w-10 h-10 rounded-full text-dark-gray hover:text-dark hover:bg-chrome flex justify-center items-center transition-colors" @click="toggleMenu">
      <svg width="21" height="6" viewBox="0 0 21 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.9465 3.05581C12.9465 4.66603 11.6437 5.96877 10.0335 5.96877C8.4233 5.96877 7.12056 4.66603 7.12056 3.05581C7.12056 1.44559 8.4233 0.142853 10.0335 0.142853C11.6437 0.142853 12.9465 1.44559 12.9465 3.05581ZM17.1541 0.142853C15.5439 0.142853 14.2411 1.44559 14.2411 3.05581C14.2411 4.66603 15.5439 5.96877 17.1541 5.96877C18.7643 5.96877 20.067 4.66603 20.067 3.05581C20.067 1.44559 18.7643 0.142853 17.1541 0.142853ZM2.91296 0.142853C1.30274 0.142853 0 1.44559 0 3.05581C0 4.66603 1.30274 5.96877 2.91296 5.96877C4.52317 5.96877 5.82591 4.66603 5.82591 3.05581C5.82591 1.44559 4.52317 0.142853 2.91296 0.142853Z" fill="currentColor" />
      </svg>
    </button>

    <Transition name="slide-fade">
      <div
        v-if="open"
        class="absolute right-12 top-0 w-[130px] border border-light-gray rounded-md"
      >
        <div
          v-for="(action, index) in actions"
          :key="index"
          class="cursor-pointer py-2 px-3 text-[13px] font-medium border-b border-light-gray last:border-b-0 text-normal-blue"
          @click="action.action"
        >
          {{ action.name }}
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
