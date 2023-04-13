<template>
  <carousel :items-to-show="1" :autoplay="5000" wrapAround>
    <slide v-for="slide in 5" :key="slide">
      <div
        :style="{
          'background-image': 'url(src/assets/images/banner_1.png)',
        }"
        class="w-full h-[62vh] px-20 bg-no-repeat bg-cover bg-left-top"
      >
        <div class="flex items-center h-full">
          <div class="text-start">
            <div class="font-semibold text-4xl leading-[120%] mb-6">
              Colorful summer dresses <br />
              are already in store
            </div>
            <Button :width="167" :label="'Learn more'.toUpperCase()" />
          </div>
        </div>
      </div>
    </slide>
    <template #addons>
      <navigation />
      <pagination
        class="absolute bottom-2 left-1/2 translate -translate-x-1/2"
      />
    </template>
  </carousel>
</template>

<script setup>
import Button from "../../components/Button.vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
</script>

<style lang="scss" scoped></style>
