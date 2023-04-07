<template>
  <div class="flex flex-col gap-20">
    <Banner />
    <template v-for="category in categories" :key="category.id">
      <Products
        v-if="category.attributes.products.data?.length"
        :label="category.attributes.name"
        :products="category.attributes.products.data"
      />
    </template>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useCategoryStore } from "../../store/category";
import Banner from "./Banner.vue";
import Products from "./Products.vue";

const categoryStore = useCategoryStore();

const categories = computed(() => categoryStore.categories);

onMounted(() => {
  getCategories();
});

const getCategories = async () => {
  await categoryStore.getCategories();
};
</script>

<style scoped></style>
