<script setup>
import axios from "axios";

const route = useRoute()

const items = ref([])
const fetchItems = async () => {
  try {
    const {data} = await axios.get(`http://localhost:3001/items/${route.params.id}`)
    items.value = data
  } catch (e) {
    console.log(e)
  } finally {
    isItemsFetching.value = false
  }
}

const currentImageIndex = ref(0)
const isImageLoading = ref(false)
const isItemsFetching = ref(true)

const previousImage = () => {
  if ((currentImageIndex.value >= 0) && (isImageLoading.value === false)) {
    isImageLoading.value = true
    currentImageIndex.value--
  }
}
const nextImage = () => {
  if ((currentImageIndex.value < items.value.images.length - 1) && (isImageLoading.value === false)) {
    isImageLoading.value = true
    currentImageIndex.value++
  }
}

const imageLoaded = () => {
  isImageLoading.value = false
  // console.log('Картинка успешно загружена');
};

onMounted(() => {
  fetchItems()
})
</script>

<template>
  <div class="flex flex-col gap-8 items-center pt-4 m-4"
       v-if="!isItemsFetching">
    <div class="relative">
      <img :src="items.images?.[currentImageIndex]" @load="imageLoaded" alt="image"
           class="w-[1000px] h-[700px] object-cover" :class="isImageLoading ? 'opacity-50' : 'opacity-100'">
      <div
          @click="previousImage"
          v-if="currentImageIndex > 0"
          class="w-12 h-12 bg-white absolute top-[50%] left-0 translate-x-[25%] -translate-y-[50%] rounded-full opacity-60 hover:scale-110 transition cursor-pointer">
        <div class="text-3xl font-bold text-center -translate-x-0.5 translate-y-0.5">
          <
        </div>
      </div>
      <div
          @click="nextImage"
          v-if="currentImageIndex < items.images?.length - 1"
          class="w-12 h-12 bg-white absolute top-[50%] right-0 -translate-x-[25%] -translate-y-[50%] rounded-full opacity-60 hover:scale-110 transition cursor-pointer">
        <div class="text-3xl font-bold text-center translate-x-0.5 translate-y-0.5">
          >
        </div>
      </div>
      <div class="text-center">{{ currentImageIndex + 1 }}/{{ items.images?.length }}</div>
    </div>
    <div class="flex flex-col items-center justify-between h-[700px] text-2xl gap-8">
      <div class="font-medium">{{ items.title.ru }}</div>
      <div>{{ parseInt(items.price).toLocaleString() }} руб.</div>
      <div class="text-lg max-w-[800px] pb-24" v-html="items.description.ru"></div>
    </div>
  </div>
</template>