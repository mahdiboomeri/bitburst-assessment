<template>
  <details class="border-y border-chrome">
    <summary class="font-normal text-light-gray text-[15px] py-3 cursor-pointer">
      <slot name="summary" />
    </summary>

    <div>
      <slot name="content" />
    </div>
  </details>
</template>
