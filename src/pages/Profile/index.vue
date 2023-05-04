<template>
  <div class="py-4">
    <Tabs
      :items="items"
      :active-key="activeKey"
      @on-tab-change="handleTabChange"
    />

    <div class="py-5 flex justify-center items-center">
      <MyProfile v-if="activeKey === 'profile'" />
      <ChangePassword v-else />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import Tabs from "../../components/Tabs.vue";
import MyProfile from "./MyProfile.vue";
import ChangePassword from "./ChangePassword.vue";

const items = [
  {
    label: "My Profile",
    key: "profile",
  },
  {
    label: "Change Password",
    key: "change-password",
  },
];

const $route = useRoute();
const $router = useRouter();

onMounted(() => {
  if (activeKey) {
    $router.push({
      query: {
        tab: activeKey.value,
      },
    });
  }
});

const activeKey = computed(() => {
  return $route.query.tab || items[0].key;
});

const handleTabChange = (key) => {
  $router.push({
    query: {
      tab: key,
    },
  });
};
</script>

<style lang="scss" scoped></style>
