<template>
  <div
    v-if="items && items.length"
    class="border-b border-gray-200 dark:border-gray-700"
  >
    <ul
      class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400"
    >
      <li v-for="tab in items" :key="tab.key" class="mr-2">
        <div
          class="cursor-pointer inline-flex p-4 border-b-2 rounded-t-lg hover:text-rose-300 group"
          :class="{
            'text-rose-500 border-rose-500': activeKey === tab.key,
            'border-transparent': activeKey !== tab.key,
          }"
          @click="handleTabChange(tab.key)"
        >
          {{ tab.label }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
  activeKey: {
    type: String,
    required: true,
  },
});

const $emits = defineEmits(["onTabChange"]);

const handleTabChange = (key) => {
  $emits("onTabChange", key);
};
</script>

<style lang="scss" scoped></style>
