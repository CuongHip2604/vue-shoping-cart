<template>
  <div class="py-10">
    <div class="flex flex-row">
      <div class="w-[198px] px-4 border-r-[1px] border-neutral-300">
        <Category :category="category" />
      </div>
      <div class="w-full px-4">
        <template v-if="!isLoading">
          <Products
            :current-page="currentPage"
            :total-pages="totalPages"
            @page-changed="handlePageChange"
          />
        </template>
        <template v-else>
          <div class="flex justify-center items-center h-screen">
            <Loading />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useProductStore } from "../../store/product";
import Loading from "../../components/Loading.vue";
import Category from "./Category.vue";
import { useRoute } from "vue-router";
import Products from "./Products.vue";

const route = useRoute();
const productStore = useProductStore();

const isLoading = ref(false);

const category = computed(() => {
  return route.query.category || "clothes";
});

const currentPage = ref(1);
const limit = ref(8);
const totalPages = computed(() => {
  return Math.ceil(productStore.total / limit.value);
});

onMounted(async () => {
  await getProductsByCategory();
});

watch(category, () => {
  getProductsByCategory();
});

watch(currentPage, () => {
  getProductsByCategory();
});

const getProductsByCategory = async () => {
  isLoading.value = true;
  const params = {
    ["filters[category]"]: category.value === "clothes" ? 1 : 2,
    ["pagination[page]"]: currentPage.value,
    ["pagination[pageSize]"]: limit.value,
  };

  await productStore.getProducts(params);
  isLoading.value = false;
};

const handlePageChange = (page) => {
  currentPage.value = page;
};
</script>

<style lang="scss" scoped></style>
