<template>
  <div class="min-h-screen py-8">
    <template v-if="products.length">
      <div class="py-4 text-lg">
        Showing {{ total }} results for “{{ keyword }}”
      </div>
      <SearchResult
        :products="products"
        :current-page="currentPage"
        :total-pages="totalPages"
      />
    </template>
    <SearchEmpty v-else :keyword="keyword" />
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useProductStore } from "../../store/product";
import { useRoute } from "vue-router";
import SearchEmpty from "./SearchEmpty.vue";
import SearchResult from "./SearchResult.vue";

const $route = useRoute();
const productStore = useProductStore();

const keyword = computed(() => $route.query.q);
const products = computed(() => productStore.products);
const total = computed(() => productStore.total);

watch(keyword, () => {
  onSearch();
});

onMounted(() => {
  if (keyword.value) {
    onSearch();
  }
});

const currentPage = ref(1);
const limit = ref(24);
const totalPages = computed(() => {
  return Math.ceil(productStore.total / limit.value);
});

const onSearch = async () => {
  const params = {
    ["filters[name][$contains]"]: keyword.value,
  };

  await productStore.getProducts(params);
};
</script>

<style lang="scss" scoped></style>
