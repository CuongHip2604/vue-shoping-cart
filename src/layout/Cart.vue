<template>
  <div class="relative">
    <IconCart class="cursor-pointer" @click="showCart" />

    <div
      v-if="total"
      :class="{ 'text-[10px]': total > 9 }"
      class="absolute -top-2 -right-2 w-4 h-4 bg-rose-500 text-xs text-white rounded-full flex justify-center items-center"
    >
      {{ total > 9 ? "9+" : total }}
    </div>

    <Transition name="slide-fade">
      <div
        @click.self="hiddenCart"
        v-if="isOpen"
        class="fixed top-0 right-0 z-50 h-screen overflow-y-auto transition-transform bg-gray-900/50 w-full transform-none"
      >
        <div
          class="w-full relative sm:w-[410px] ml-auto h-full p-4 bg-white flex flex-col gap-4"
        >
          <Orders @onHiddenCart="hiddenCart" />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import IconCart from "../assets/icons/ic-cart.svg";
import { useCartStore } from "../store/cart";
import Orders from "./Orders.vue";

const cartStore = useCartStore();

const isOpen = ref(false);
const total = computed(() => cartStore.total);

watch(isOpen, (value) => {
  if (value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});

const showCart = () => {
  isOpen.value = !isOpen.value;
};

const hiddenCart = () => {
  isOpen.value = false;
};
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(50%);
  opacity: 0;
}
</style>
