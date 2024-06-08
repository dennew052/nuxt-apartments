<script setup>

defineProps({
  info: Object,
  currentPage: Number
})
const emit = defineEmits(['nextPage', 'previousPage', 'openPageByNum'])

</script>

<template>
  <div class="flex justify-center p-6">
    <div
        class="flex text-xl [&>div]:w-12 [&>div]:h-12 [&>div]:border-l-2 [&>div]:bg-white [&>div]:flex [&>div]:items-center [&>div]:justify-center [&>div:active]:bg-gray-300">
      <div :class="info && info.prev ? 'cursor-pointer' : ['text-gray-300', 'active:!bg-white']"
           @click="() => emit ('openPageByNum', 1)">«
      </div>
      <div :class="info && info.prev ? 'cursor-pointer' : ['text-gray-300', 'active:!bg-white']"
           @click="() => emit ('previousPage')">‹
      </div>
      <div v-if="info.pages" class="!w-fit pl-4 pr-4 active:!bg-white">{{ currentPage }} из {{ info.pages }}</div>
      <div :class="info && info.next ? 'cursor-pointer' : ['text-gray-300', 'active:!bg-white']"
           @click="() => emit ('nextPage')">›
      </div>
      <div :class="info && info.next ? 'cursor-pointer' : ['text-gray-300', 'active:!bg-white']"
           @click="() => emit ('openPageByNum', info.pages)">»
      </div>
    </div>
    <input @change="(event) => { emit('openPageByNum', event.target.value); event.target.value = '' }" type="text" class="ml-4 w-14 text-center">
  </div>
</template>