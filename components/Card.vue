<script setup>
defineProps({
  id: String,
  title: String,
  image: String
})
</script>

<template>
  <NuxtLink :to="`/${id}`">
    <div
        class="h-96 flex rounded-2xl border border-slate-100 cursor-pointer transition hover:-translate-y-2 flex-col"
        style="box-shadow: rgba(50, 50, 93, 0.25) 0 6px 12px -2px, rgba(0, 0, 0, 0.3) 0 3px 7px -3px">
      <img :src="image" alt="photo" class="min-h-72 object-cover rounded-t-xl">
      <div class="text-2xl h-full flex items-center justify-center text-center font-medium">{{ title }}</div>
    </div>
  </NuxtLink>
</template>