<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2"
  >
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

<script setup>
import Card from "../../components/Card.vue";
import Pagination from "../../components/Pagination.vue";
import useAddToCart from "../../hooks/useAddToCart";

defineProps({
  products: {
    type: Object,
    required: true,
  },
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

const handlePageChange = (page) => {
  $emit("page-changed", page);
};

const handleAddCart = async (product) => {
  await addToCart(product);
};
</script>

<style lang="scss" scoped></style>
