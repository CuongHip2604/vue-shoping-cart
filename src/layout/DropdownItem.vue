<template>
  <div
    @click="handleClicke"
    class="px-4 py-3 hover:bg-neutral-100 transition font-semibold border-t-[1px] border-neutral-300"
  >
    {{ label }}
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
});

const emit = defineEmits(["onClick"]);

const handleClicke = () => {
  emit("onClick", props.id);
};
</script>
