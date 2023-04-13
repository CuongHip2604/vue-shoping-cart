import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import useToaster from "../hooks/useToast";
import API from "../shared/services/auth";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore(
  "auth",
  () => {
    const isAuthenticated = ref(false);
    const userProfile = ref({});
    const jwt = ref("");

    const $toast = useToaster();
    const $router = useRouter();

    const login = async (payload) => {
      const res = await API.login(payload);

      if (res.error) {
        return $toast.showError(res.error.message);
      }

      $toast.showSuccess("Login is successfull !");
      jwt.value = res.jwt;
      isAuthenticated.value = true;
      userProfile.value = res.user;
      $router.push("/");
    };

    const register = async (payload) => {
      const res = await API.register(payload);

      if (res.error) {
        return $toast.showError(res.error.message);
      }

      $toast.showSuccess("Register is successfull !");
      jwt.value = res.jwt;
      isAuthenticated.value = true;
      userProfile.value = res.user;
      $router.push("/");
    };

    const logout = () => {
      jwt.value = "";
      isAuthenticated.value = false;
      userProfile.value = {};

      $router.push("/login");
    };

    return {
      isAuthenticated,
      login,
      userProfile,
      jwt,
      register,
      logout,
    };
  },
  {
    persist: true,
  }
);
