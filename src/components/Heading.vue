<template>
  <div :class="{ 'text-center': center, 'text-start': !center }">
    <div class="text-2xl font-bold">{{ title }}</div>
    <div class="text-neutral-500 mt-2 font-light">{{ subtitle }}</div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  center: Boolean,
});
</script>

<style lang="scss" scoped></style>
