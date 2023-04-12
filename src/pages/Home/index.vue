<template>
  <div class="flex flex-col gap-20">
    <Banner />
    <template
      v-if="!isLoading"
      v-for="category in categories"
      :key="category.id"
    >
      <Products
        v-if="category.attributes.products.data?.length"
        :label="category.attributes.name"
        :products="category.attributes.products.data"
      />
    </template>
    <template v-else>
      <div class="flex justify-center items-center h-[40vh]">
        <Loading />
      </div>
    </template>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useCategoryStore } from "../../store/category";
import Banner from "./Banner.vue";
import Products from "./Products.vue";
import Loading from "../../components/Loading.vue";

const categoryStore = useCategoryStore();

const categories = computed(() => categoryStore.categories);

const isLoading = ref(false);

onMounted(() => {
  getCategories();
});

const getCategories = async () => {
  isLoading.value = true;
  await categoryStore.getCategories();
  isLoading.value = false;
};
</script>

<style scoped></style>
