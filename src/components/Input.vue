<template>
  <div className="w-full relative">
    <label v-if="label" :for="id" class="flex flex-row gap-1 cursor-pointer"
      ><span class="text-neutral-500">{{ label }}</span>
      <span class="text-rose-500">*</span></label
    >
    <input
      :id="id"
      :type="type"
      class="w-full p-2 font-light bg-white border-[1px] rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed focus:border-black border-neutral-300"
      :placeholder="placeholder"
      v-bind="$attrs"
      :class="classBinding"
      :disabled="disabled"
      @input="onInput"
    />
    <small v-show="errorMessage" class="text-rose-500">{{
      errorMessage
    }}</small>
    <div class="absolute right-2 top-1/2 -translate-y-1/2">
      <component :is="icon" />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  id: {
    type: String,
    require: true,
  },
  label: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: String,
  disabled: Boolean,
  errorMessage: String,
  icon: Object,
  width: String | Number,
});

const $emits = defineEmits(["onInput"]);

const classBinding = computed(() => {
  return {
    "border-rose-500": props.errorMessage,
    "mt-2": props.label,
    "pr-8": props.icon,
    [`w-[${props.width}px]`]: props.width,
  };
});

const onInput = (e) => {
  const keyword = e.target.value;
  $emits("onInput", keyword);
};
</script>
