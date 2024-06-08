<script setup lang="ts">
import axios from "~/node_modules/axios/index.js";

const items = ref([])
const paginationInfo = ref([])
const filters = reactive({
  type: ''
})
const currentPage = ref(1)
const isRequestExecuted = ref(false)
const fetchItems = async () => {
  try {
    const params = {
      "type[0]": filters.type,
      _page: currentPage.value,
      _per_page: 5
    }

    const { data } = await axios.get('https://nuxt-apartments.onrender.com/items', {
      params
    })
    items.value = data.data
    paginationInfo.value = data
  } catch (e) {
    console.log(e)
  } finally {
    isRequestExecuted.value = false
  }
}

const onChangeSelect = (event) => {
  filters.type = event.target.value
}

const nextPage = () => {

  if (!isRequestExecuted.value) {
    console.log(paginationInfo.value.next)
    if (paginationInfo.value.next) {
      currentPage.value++
      fetchItems()
    }
  }
}

const previousPage = () => {
  if (!isRequestExecuted.value) {
    if (paginationInfo.value.prev) {
      currentPage.value--
      fetchItems()
    }
  }
}

const openPageByNum = (num) => {
  console.log('Проверка ' + num)
  if (Number(num) >= 1 && Number(num) <= paginationInfo.value.pages) {
    currentPage.value = Number(num)
    fetchItems()
  }
}

onMounted(() => {
  fetchItems()
})

watch(filters, fetchItems)
</script>

<template>
  <div class="flex mb-6">
    <div
        class="w-full h-96 bg-[url('assets/images/background-main.jpg')] bg-cover brightness-50">
    </div>
    <div
        class="text-white absolute w-full h-96 md:text-6xl text-4xl font-medium text-center flex items-center justify-center">
      Лучшие апартаменты
    </div>
  </div>

  <div class="pt-10 bg-gray-300">
    <div class="flex gap-4 flex-row justify-center p-4">
      <select @change="onChangeSelect" class="py-2 px-3 border rounded-md outline-none text-xl w-[350px]">
        <option value="">Тип - По умолчанию</option>
        <option value="Condo">Condo</option>
        <option value="Villa">Villa</option>
      </select>

    </div>
    <Pagination @next-page="nextPage" @previous-page="previousPage" @open-page-by-num="openPageByNum"
                :info="paginationInfo" :currentPage="currentPage" />
  </div>
  <div class="grid gap-5 p-6 justify-items-center"
       style="grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))" v-auto-animate>
    <Card
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :title="item.title.ru"
        :image="item.images[0]"
    />
  </div>
</template>
