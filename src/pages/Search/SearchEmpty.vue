<template>
  <div class="flex justify-center items-center h-full">
    <div class="flex flex-col gap-2">
      <div class="text-lg font-semibold">
        We couldn’t find anything for “{{ keyword }}”
      </div>
      <div class="font-light text-sm">
        These popular items might interest you
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  keyword: String,
});
</script>

<style lang="scss" scoped></style>
