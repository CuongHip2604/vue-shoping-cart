<template>
  <div ref="dropdownRef" class="relative">
    <IconAccount class="cursor-pointer" @click="showMenuInfo" />
    <div
      v-if="isOpen"
      class="absolute rounded-md shadow-lg w-[14vw] bg-white overflow-hidden right-0 top-8 text-sm"
    >
      <div class="flex flex-col cursor-pointer">
        <template v-for="(menu, index) in menus" :key="menu.id">
          <dropdown-item
            :id="menu.id"
            :label="menu.label"
            :class="{ 'border-t-0': !index }"
            @on-click="onMenuClick"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import IconAccount from "../assets/icons/ic-account.svg";
import DropdownItem from "./DropdownItem.vue";
import useDetectOutsideClick from "../hooks/useDetectOutsideClick";
import { useAuthStore } from "../store/auth";

const router = useRouter();
const authStore = useAuthStore();

const isOpen = ref(false);
const dropdownRef = ref();

const menus = computed(() => {
  if (!authStore.isAuthenticated) {
    return [
      {
        label: "Login",
        id: "1",
      },
      {
        label: "Register",
        id: "2",
      },
    ];
  }

  return [
    {
      label: "Profile",
      id: "3",
    },
    {
      label: "Logout",
      id: "4",
    },
  ];
});

useDetectOutsideClick(dropdownRef, () => {
  isOpen.value = false;
});

const showMenuInfo = () => {
  isOpen.value = !isOpen.value;
};

const onMenuClick = (key) => {
  switch (key) {
    case "1":
      router.push("/login");
      break;
    case "2":
      router.push("/register");
      break;
    case "4":
      authStore.logout();
      break;

    default:
      router.push("/profile");
      break;
  }
};
</script>
