<template>
  <div class="flex flex-col gap-10">
    <div class="text-center text-4xl">Similar Products</div>
    <Carousel :items-to-show="5" wrapAround class="product-container">
      <Slide v-for="product in products" :key="product.id">
        <Card :product="product" @add-cart="handleAddCart" />
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import { Carousel, Slide, Navigation } from "vue3-carousel";
import Card from "../../components/Card.vue";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useProductStore } from "../../store/product";
import useAddToCart from "../../hooks/useAddToCart";

const $route = useRoute();
const productStore = useProductStore();
const { addToCart } = useAddToCart();

const productId = computed(() => $route.params.id);

const products = computed(() =>
  productStore.products.filter((el) => el.id != productId)
);

onMounted(() => {
  productStore.getProducts();
});

const handleAddCart = async (product) => {
  await addToCart(product);
};
</script>

<style lang="scss">
.product-container .carousel__track {
  padding: 20px 0 !important;
}
</style>
