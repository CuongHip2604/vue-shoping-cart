<template>
  <Input
    id="search"
    placeholder="Search products..."
    :icon="IconSearch"
    width="320"
  />
</template>

<script setup>
import Input from "../components/Input.vue";
import IconSearch from "../assets/icons/ic-search.svg";
</script>
