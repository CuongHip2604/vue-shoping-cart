<template>
  <div class="fixed w-full bg-white z-10 shadow-sm top-0 left-0">
    <div class="py-4 border-b-[1px]">
      <Container>
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-10">
            <Logo />
            <MainMenu />
          </div>
          <div class="flex justify-between gap-10 items-center">
            <Search />
            <UserMenu />
            <Cart v-if="authStore.isAuthenticated" />
          </div>
        </div>
      </Container>
    </div>
  </div>
</template>

<script setup>
import Container from "../components/Container.vue";
import { useAuthStore } from "../store/auth";
import Cart from "./Cart.vue";
import Logo from "./Logo.vue";
import MainMenu from "./Menu.vue";
import Search from "./Search.vue";
import UserMenu from "./UserMenu.vue";

const authStore = useAuthStore();
</script>

<style lang="scss" scoped></style>
