<template>
  <button
    class="relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full py-2 font-semibold border-2"
    :disabled="disabled"
    :class="{
      'bg-rose-500 border-rose-500 text-white': !outline,
      'bg-white border-black text-black': outline,
      [`w-[${width}px]`]: width,
    }"
  >
    <div>
      <span>{{ label }}</span>
    </div>
  </button>
</template>

<script setup>
defineProps({
  outline: Boolean,
  label: {
    type: String,
    require: true,
  },
  disabled: Boolean,
  width: String | Number,
});
</script>

<style lang="scss" scoped></style>
