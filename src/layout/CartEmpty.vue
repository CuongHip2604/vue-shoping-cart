<template>
  <div class="flex flex-col gap-8 justify-center items-center h-full">
    <IconCartEmpty />
    <div class="text-3xl font-semibold">Your bag is empty</div>
    <div class="text-center font-light">
      Looks like you haven’t added any items to the bag yet. <br />
      Start shopping to fill it in.
    </div>
  </div>
</template>

<script setup>
import IconCartEmpty from "../assets/icons/ic-cart-empty.svg";
</script>

<style lang="scss" scoped></style>
