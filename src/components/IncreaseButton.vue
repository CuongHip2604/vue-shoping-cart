<template>
  <div class="flex rounded-md">
    <button
      type="button"
      :disabled="isDisabled"
      @click="decrease"
      class="cursor-pointer w-8 h-8 flex items-center justify-center rounded-l-md px-2 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 disabled:cursor-not-allowed disabled:text-neutral-300 text-3xl font-semibold"
    >
      -
    </button>
    <button
      type="button"
      disabled
      class="cursor-pointer w-8 h-8 relative inline-flex items-center justify-center px-2 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 disabled:cursor-not-allowed focus:z-20 focus:outline-offset-0"
    >
      {{ quantity }}
    </button>
    <button
      @click="increase"
      type="button"
      class="cursor-pointer w-8 h-8 flex items-center justify-center rounded-r-md px-2 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 disabled:cursor-not-allowed disabled:text-neutral-400 text-xl font-semibold"
    >
      +
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  quantity: {
    type: Number,
    required: true,
  },
});

const $emit = defineEmits(["increase", "decrease"]);

const isDisabled = computed(() => props.quantity === 1);

const increase = () => {
  $emit("increase", props.quantity + 1);
};

const decrease = () => {
  $emit("decrease", props.quantity - 1);
};
</script>

<style lang="scss" scoped></style>
