<template>
  <div v-if="product" class="grid grid-cols-[450px_1fr] gap-8">
    <div class="">
      <div class="bg-rose-400">
        <img
          class="w-full h-full object-cover"
          :src="product.attributes.image"
        />
      </div>
    </div>
    <div class="flex flex-col gap-6">
      <div class="font-semibold text-2xl">{{ product.attributes.name }}</div>
      <div class="font-semibold text-lg">
        {{ formatCurrency(product.attributes.price) }}
      </div>
      <div class="flex gap-4 items-end">
        <div class="font-semibold">Size:</div>
        <div class="flex gap-4 overflow-auto">
          <button
            v-for="size in sizes"
            :key="size"
            @click="onChangeSize(size)"
            :class="{ 'ring-rose-500': selectedSize === size }"
            class="cursor-pointer w-14 relative inline-flex items-center justify-center px-2 py-1 text-gray-900 ring-1 ring-inset ring-gray-300 disabled:cursor-not-allowed focus:z-20 focus:outline-offset-0"
          >
            {{ size }}
          </button>
        </div>
      </div>
      <div class="flex gap-4 items-center">
        <IncreaseButton
          :quantity="quantity"
          @increase="onChangeQuantity"
          @decrease="onChangeQuantity"
        />
        <Button
          :disabled="!selectedSize"
          label="Add to cart"
          :width="167"
          @on-click="handleAddCart"
        />
      </div>
      <div>
        <div class="font-semibold text-xl">Description</div>
        <hr class="mt-2 my-4" />
        <div
          class="max-h-[250px] overflow-auto pr-4"
          v-html="product.attributes.description"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import Button from "../../components/Button.vue";
import IncreaseButton from "../../components/IncreaseButton.vue";
import { useRoute } from "vue-router";
import { useProductStore } from "../../store/product";
import { useFormatCurrency } from "../../hooks/useFormatCurrency";
import useAddToCart from "../../hooks/useAddToCart";

const $route = useRoute();
const productStore = useProductStore();
const { formatCurrency } = useFormatCurrency();
const { addToCart } = useAddToCart();

const sizes = ref(["S", "M", "L", "XL", "XXL"]);
const selectedSize = ref();
const quantity = ref(1);

const productId = computed(() => $route.params.id);
const product = computed(() => productStore.product);

onMounted(() => {
  productId && getProduct();
});

const getProduct = async () => {
  await productStore.getProduct({ id: productId.value, populate: "category" });
};

const onChangeSize = (size) => {
  selectedSize.value = size;
};

const onChangeQuantity = (value) => {
  quantity.value = value;
};

const handleAddCart = async () => {
  await addToCart(product.value, quantity.value);
};
</script>

<style lang="scss" scoped></style>
