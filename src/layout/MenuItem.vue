<template>
  <div
    class="px-4 text-neutral-500 font-light cursor-pointer"
    :class="{
      'font-semibold text-rose-500 border-b-2 border-rose-500 mb-[-25px]':
        isActive,
    }"
    @click="handleClick"
  >
    {{ label.toUpperCase() }}
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
});

const $emit = defineEmits(["onClick"]);

const handleClick = () => {
  $emit("onClick", props.id);
};
</script>
