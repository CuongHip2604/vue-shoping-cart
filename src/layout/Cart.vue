<template>
  <div>
    <IconCart class="cursor-pointer" @click="showCart" />

    <div
      v-if="isOpen"
      @click.self="hiddenCart"
      class="bg-neutral-800/70 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
    >
      <div
        class="w-full sm:w-1/2 md:w-2/5` lg:w-2/6 xl:w-1/5 ml-auto h-full z-50"
      >
        <div
          class="translate duration-300 h-full"
          :class="{
            'translate-x-full opacity-0': !isOpen,
            'translate-x-0 opacity-100': isOpen,
          }"
        >
          <div
            class="translate p-6 h-full border-0 relative flex flex-col w-full bg-white outline-none focus:outline-none"
          >
            <div
              @click="hiddenCart"
              class="absolute cursor-pointer right-6 top-6 w-[40px] h-[40px] bg-rose-500 flex justify-center items-center rounded-full"
            >
              <IconClose />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import IconCart from "../assets/icons/ic-cart.svg";
import IconClose from "../assets/icons/ic-close.svg";

const isOpen = ref(false);

const showCart = () => {
  isOpen.value = !isOpen.value;
};

const hiddenCart = () => {
  isOpen.value = false;
};
</script>

<style lang="scss" scoped></style>
