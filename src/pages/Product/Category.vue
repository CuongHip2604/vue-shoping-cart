<template>
  <div class="py-4 text-2xl font-semibold">Categories</div>
  <div class="flex gap-2 flex-col text-lg font-light">
    <div
      v-for="item in categories"
      :key="item.key"
      class="cursor-pointer py-2 border-b-[2px] border-rose-500 border-opacity-0 w-max"
      :class="{ 'border-opacity-100': item.key === category }"
      @click="handleChangeCategory(item.key)"
    >
      {{ item.value }}
    </div>
  </div>
</template>

<script setup>
import { reactive, watch } from "vue";
import { useRouter } from "vue-router";

defineProps({
  category: {
    type: String,
    required: true,
  },
});

const router = useRouter();

const categories = reactive([
  {
    key: "clothes",
    value: "Clothes",
  },
  {
    key: "sport_shoes",
    value: "Sport shoes",
  },
]);

const handleChangeCategory = (key) => {
  router.push({
    query: {
      category: key,
    },
  });
};
</script>

<style lang="scss" scoped></style>
