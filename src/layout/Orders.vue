<template>
  <div class="flex justify-between items-center">
    <div class="flex gap-2 text-lg items-center">
      <div class="font-light">Total items:</div>
      <div class="font-semibold">{{ orderTotal }}</div>
    </div>
    <div @click="hiddenCart" class="w-6 h-6 cursor-pointer">
      <IconClose />
    </div>
  </div>
  <div class="h-full overflow-auto">
    <OrderItem
      v-if="orders.length"
      v-for="order in orders"
      :key="order.id"
      :order="order"
      @delete-order="deleteOrder"
      @update-order="updateOrder"
    />
    <CartEmpty v-else />
    <CartLoading v-if="isLoading" />
  </div>
  <div class="flex flex-col gap-4">
    <template v-if="total">
      <div class="flex justify-between text-lg">
        <div class="font-light">Total:</div>
        <div class="font-semibold">{{ formatCurrency(total) }}</div>
      </div>
      <Button label="CHECKOUT" @on-click="handleCheckout" />
    </template>
    <Button v-else label="START SHOPPING" @on-click="handleNavigate" />
  </div>
</template>

<script setup>
import Button from "../components/Button.vue";
import IconClose from "../assets/icons/ic-close.svg";
import OrderItem from "./OrderItem.vue";
import { useCartStore } from "../store/cart";
import { computed, ref } from "vue";
import { useFormatCurrency } from "../hooks/useFormatCurrency";
import CartLoading from "./CartLoading.vue";
import { useDebounce } from "../hooks/useDebounce";
import useToaster from "../hooks/useToast";
import CartEmpty from "./CartEmpty.vue";
import { useRoute, useRouter } from "vue-router";

const $emit = defineEmits(["onHiddenCart"]);

const cartStore = useCartStore();
const { formatCurrency } = useFormatCurrency();
const { debounce } = useDebounce();
const $toast = useToaster();
const $router = useRouter();
const $route = useRoute();

const isLoading = ref(false);

const orders = computed(() => cartStore.orders);
const total = computed(() => {
  const result = orders.value.reduce((acc, curr) => {
    return acc + curr.attributes.total;
  }, 0);

  return result;
});
const orderTotal = computed(() => cartStore.total);

const hiddenCart = () => {
  $emit("onHiddenCart");
};

const deleteOrder = async (id) => {
  isLoading.value = true;
  const params = {
    id,
  };

  await cartStore.deleteOrder(params);
  isLoading.value = false;
};

const updateOrder = debounce(async (payload) => {
  isLoading.value = true;
  await cartStore.updateOrder({ data: payload, id: payload.id });
  isLoading.value = false;
}, 500);

const handleCheckout = async () => {
  isLoading.value = true;
  const payload = {
    data: {
      total: total.value,
      orders: orders.value.map((el) => el.id),
    },
  };

  await cartStore.payment(payload);
  isLoading.value = false;

  hiddenCart();

  $toast.showSuccess("Payment is successfull !");
};

const handleNavigate = () => {
  if ($route.name !== "products") {
    $router.push({
      name: "products",
      query: {
        category: "clothes",
      },
    });
  }

  hiddenCart();
};
</script>

<style lang="scss" scoped></style>
