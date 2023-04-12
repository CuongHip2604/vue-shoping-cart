<template>
  <template v-if="productTotal">
    <div class="py-4 text-right">
      <span class="font-light mr-2">Products found:</span>
      <span class="font-semibold">{{ productTotal }}</span>
    </div>
    <div class="flex flex-wrap gap-2">
      <Card
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add-cart="handleAddCart"
      />
    </div>
    <div class="mt-10 flex justify-center">
      <Pagination
        :totalPages="totalPages"
        :currentPage="currentPage"
        @page-changed="handlePageChange"
      />
    </div>
  </template>
  <template v-else>
    <div class="flex justify-center items-center h-screen">
      <Empty />
    </div>
  </template>
</template>

<script setup>
import { computed } from "vue";
import { useProductStore } from "../../store/product";
import Empty from "../../components/Empty.vue";
import Card from "../../components/Card.vue";
import Pagination from "../../components/Pagination.vue";
import useAddToCart from "../../hooks/useAddToCart";

defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
});

const { addToCart } = useAddToCart();

const $emit = defineEmits(["page-changed"]);

const productStore = useProductStore();

const products = computed(() => productStore.products);
const productTotal = computed(() => productStore.total);

const handlePageChange = (page) => {
  $emit("page-changed", page);
};

const handleAddCart = async (product) => {
  await addToCart(product);
};
</script>

<style lang="scss" scoped></style>
