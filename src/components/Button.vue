<template>
  <button
    @click="onClick"
    :class="classes"
    class="relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition py-2 px-4 font-semibold border-2"
    :disabled="disabled"
  >
    <div>
      <span>{{ label }}</span>
    </div>
  </button>
</template>

<script setup>
import { computed } from "@vue/reactivity";

const props = defineProps({
  outline: Boolean,
  label: {
    type: String,
    require: true,
  },
  disabled: Boolean,
  width: Number,
});

const classes = computed(() => {
  return {
    "bg-rose-500 border-rose-500 text-white": !props.outline,
    "bg-white border-black text-black": props.outline,
    [`w-[${props.width}px]`]: !!props.width,
    "w-full": !props.width,
  };
});

const $emit = defineEmits(["onClick"]);

const onClick = () => {
  $emit("onClick");
};
</script>

<style lang="scss" scoped></style>
