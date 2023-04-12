<template>
  <Input
    id="search"
    placeholder="Search products..."
    :icon="IconSearch"
    width="320"
    :value="$route.query.q"
    @on-input="onSearch"
  />
</template>

<script setup>
import Input from "../components/Input.vue";
import IconSearch from "../assets/icons/ic-search.svg";
import { useDebounce } from "../hooks/useDebounce";
import { useRoute, useRouter } from "vue-router";

const { debounce } = useDebounce();
const $router = useRouter();
const $route = useRoute();

const onSearch = debounce((keyword) => {
  $router.push({
    name: "search",
    query: {
      q: keyword,
    },
  });
}, 500);
</script>
