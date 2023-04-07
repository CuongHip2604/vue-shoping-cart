<template>
  <div class="h-full">
    <Navbar />
    <div class="pt-[75px]">
      <Container>
        <router-view></router-view>
      </Container>
    </div>
  </div>
</template>

<script setup>
import Container from "../components/Container.vue";
import Navbar from "./Navbar.vue";
</script>

<style lang="scss" scoped></style>
