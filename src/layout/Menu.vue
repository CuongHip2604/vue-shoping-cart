<template>
  <div class="flex flex-row">
    <template v-for="tab in tabs" :key="tab.key">
      <menu-item
        :id="tab.key"
        :label="tab.value"
        :is-active="tab.key === currentTab"
        @on-click="handleChangeTab"
        >{{ tab.value }}</menu-item
      >
    </template>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import MenuItem from "./MenuItem.vue";

const tabs = reactive([
  {
    key: "1",
    value: "Home",
    path: "/",
  },
  {
    key: "2",
    value: "Clothes",
    path: "/propducts",
  },
  {
    key: "3",
    value: "Sport shoes",
    path: "/propducts",
  },
]);

const currentTab = ref("1");

const handleChangeTab = (key) => {
  currentTab.value = key;
};
</script>
