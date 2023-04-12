<template>
  <div class="h-full">
    <Navbar />
    <div class="pt-[75px]">
      <Container>
        <router-view></router-view>
      </Container>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Container from "../components/Container.vue";
import Footer from "./Footer.vue";
import Navbar from "./Navbar.vue";
import { useCartStore } from "../store/cart";
import { useAuthStore } from "../store/auth";

const cartStore = useCartStore();
const authStore = useAuthStore();

onMounted(() => {
  authStore.isAuthenticated && getOrders();
});

const getOrders = async () => {
  await cartStore.getOrders();
};
</script>

<style lang="scss" scoped></style>
