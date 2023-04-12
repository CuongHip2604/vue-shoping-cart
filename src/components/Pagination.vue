<template>
  <div>
    <div class="flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
      <button
        type="button"
        @click="onClickFirstPage"
        :disabled="isInFirstPage"
        class="cursor-pointer w-10 h-10 flex items-center rounded-l-md px-2 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 disabled:cursor-not-allowed disabled:text-neutral-400"
      >
        <IconArrowDoubleLeft />
      </button>
      <button
        type="button"
        @click="onClickPreviousPage"
        :disabled="isInFirstPage"
        class="cursor-pointer w-10 h-10 relative inline-flex items-center px-2 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 disabled:cursor-not-allowed disabled:text-neutral-400 focus:z-20 focus:outline-offset-0"
      >
        <IconArrowLeft />
      </button>
      <button
        type="button"
        v-for="page in totalPages"
        @click="onClickPage(page)"
        :key="page"
        :aria-current="page === currentPage ? 'page' : 'false'"
        :class="{
          'bg-rose-500 text-white': page === currentPage,
          'text-gray-900 hover:bg-gray-50': page !== currentPage,
        }"
        class="cursor-pointer disabled:cursor-not-allowed relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
      >
        {{ page }}
      </button>
      <button
        type="button"
        @click="onClickNextPage"
        :disabled="isInLastPage"
        class="cursor-pointer w-10 h-10 relative inline-flex items-center px-2 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:text-neutral-400 focus:z-20 focus:outline-offset-0"
      >
        <IconArrowRight />
      </button>
      <button
        type="button"
        @click="onClickLastPage"
        :disabled="isInLastPage"
        class="cursor-pointer w-10 h-10 flex items-center rounded-r-md px-2 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 disabled:cursor-not-allowed disabled:text-neutral-400"
      >
        <IconArrowDoubleRight />
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import IconArrowLeft from "../assets/icons/ic-arrow-left.svg";
import IconArrowRight from "../assets/icons/ic-arrow-right.svg";
import IconArrowDoubleRight from "../assets/icons/ic-chevron-double-right.svg";
import IconArrowDoubleLeft from "../assets/icons/ic-chevron-double-left.svg";

const props = defineProps({
  totalPages: {
    type: Number,
    required: true,
  },
  currentPage: {
    type: Number,
    required: true,
  },
});

const $emit = defineEmits(["page-changed"]);

const isInFirstPage = computed(() => {
  return props.currentPage === 1;
});

const isInLastPage = computed(() => {
  return props.currentPage === props.totalPages;
});

const onClickFirstPage = () => {
  $emit("page-changed", 1);
};
const onClickPreviousPage = () => {
  $emit("page-changed", props.currentPage - 1);
};
const onClickPage = (page) => {
  $emit("page-changed", page);
};
const onClickNextPage = () => {
  $emit("page-changed", props.currentPage + 1);
};
const onClickLastPage = () => {
  $emit("page-changed", props.totalPages);
};
</script>

<style lang="scss"></style>
