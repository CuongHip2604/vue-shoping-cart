<template>
  <router-view></router-view>
</template>

<script setup>
import { onMounted } from "vue";
import { useAuthStore } from "./store/auth";
import { parseJwt } from "./shared/utils";

const authStore = useAuthStore();

const isTokenExpired = () => {
  const token = authStore.$state.jwt;
  if (!token) return;
  const decoded = parseJwt(token);

  return Date.now() >= decoded.exp * 1000;
};

onMounted(() => {
  if (isTokenExpired()) {
    authStore.logout();
  }
});
</script>
