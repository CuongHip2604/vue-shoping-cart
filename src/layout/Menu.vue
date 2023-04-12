<template>
  <div class="flex flex-row">
    <template v-for="tab in tabs" :key="tab.key">
      <menu-item
        :id="tab.key"
        :label="tab.value"
        :is-active="tab.path === currentTab"
        @on-click="handleChangeTab"
        >{{ tab.value }}</menu-item
      >
    </template>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import MenuItem from "./MenuItem.vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const tabs = reactive([
  {
    key: "1",
    value: "Home",
    path: "/home",
  },
  {
    key: "2",
    value: "Clothes",
    path: "/products?category=clothes",
  },
  {
    key: "3",
    value: "Sport shoes",
    path: "/products?category=sport_shoes",
  },
]);

const currentTab = computed(() => {
  return route.fullPath || "/home";
});

const handleChangeTab = (key) => {
  const path = tabs.find((el) => el.key === key)?.path;

  path && router.push(path);
};
</script>
