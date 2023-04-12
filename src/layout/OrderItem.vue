<template>
  <div class="w-full h-[216px] p-2 flex gap-4 items-start relative group">
    <div
      @click="deleteOrder"
      class="absolute right-0 top-0 cursor-pointer group-hover:visible invisible transition"
    >
      <IconClose />
    </div>
    <div class="h-[200px] basis-[140px]">
      <img class="w-full h-full object-cover" :src="product.attributes.image" />
    </div>
    <div class="order__information">
      <div class="font-light text-base line-clamp-4 pr-4">
        {{ product.attributes.name }}
      </div>
      <div class="text-lg font-semibold">
        {{ formatCurrency(order.attributes.total) }}
      </div>
      <IncreaseButton
        :quantity="order.attributes.quantity"
        @increase="handleIncrease"
        @decrease="handleDecrease"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import IncreaseButton from "../components/IncreaseButton.vue";
import { useFormatCurrency } from "../hooks/useFormatCurrency";
import IconClose from "../assets/icons/ic-close.svg";

const props = defineProps({
  order: {
    type: Object,
    default: () => {},
  },
});

const $emit = defineEmits(["delete-order", "update-order"]);

const { formatCurrency } = useFormatCurrency();

const product = computed(() => props.order.attributes.product.data);

const handleIncrease = (quantity) => {
  updateTotalAndQuantity(quantity);
};
const handleDecrease = (quantity) => {
  updateTotalAndQuantity(quantity);
};

const updateTotalAndQuantity = (quantity) => {
  props.order.attributes.quantity = quantity;
  props.order.attributes.total = quantity * product.value.attributes.price;
  $emit("update-order", {
    quantity: props.order.attributes.quantity,
    total: props.order.attributes.total,
    id: props.order.id,
  });
};

const deleteOrder = () => {
  $emit("delete-order", props.order.id);
};
</script>

<style lang="scss" scoped>
.order__information {
  @apply flex flex-col gap-4 h-full;
  width: calc(100% - 156px);
}
</style>
