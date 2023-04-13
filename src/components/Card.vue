<template>
  <div
    @click="navigateToDetail"
    class="h-[444px] w-[256px] p-4 flex flex-col gap-6 hover:shadow-card hover:cursor-pointer group"
  >
    <div class="w-full h-[330px] relative">
      <img class="h-full object-cover" :src="product.attributes.image" />
      <div
        @click="addToCart"
        class="group-hover:visible invisible w-[40px] h-[40px] z-10 rounded-full bg-rose-500 absolute -bottom-5 right-4 flex items-center justify-center"
      >
        <IconCard class="icon__card" />
      </div>
    </div>
    <div class="flex flex-col gap-2 text-start">
      <div class="line-clamp-2 h-14 font-light text-lg text-neutral-500">
        {{ product.attributes.name }}
      </div>
      <div class="font-semibold text-lg text-neutral-700">
        {{ formatCurrency(product.attributes.price) }}
      </div>
    </div>
  </div>
</template>

<script setup>
import IconCard from "../assets/icons/ic-cart.svg";
import { useFormatCurrency } from "../hooks/useFormatCurrency";
import { useRouter } from "vue-router";

const props = defineProps({
  product: {
    type: Object,
    default: {},
  },
});

const $emit = defineEmits("add-cart");

const { formatCurrency } = useFormatCurrency();
const $router = useRouter();

const addToCart = () => {
  $emit("add-cart", props.product);
};

const navigateToDetail = () => {
  $router.push({
    name: "product-detail",
    params: {
      id: props.product.id,
    },
  });
};
</script>

<style lang="scss">
.icon__card path {
  fill: #fff;
}
</style>
