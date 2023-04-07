<template>
  <div class="flex flex-col gap-6">
    <div class="text-4xl text-neutral-500 font-light">{{ label }}</div>
    <Carousel :items-to-show="5" wrapAround class="product-container">
      <Slide v-for="product in products" :key="product.id">
        <Card :product="product" />
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

defineProps({
  label: {
    type: String,
    required: true,
  },
  products: {
    type: Array,
    default: [],
  },
});
</script>

<style lang="scss">
.product-container .carousel__track {
  padding-bottom: 20px !important;
}
</style>
