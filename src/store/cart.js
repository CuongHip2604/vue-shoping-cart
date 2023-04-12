import { defineStore } from "pinia";
import { ref } from "vue";
import API from "../shared/services/cart";
import { useAuthStore } from "./auth";

export const useCartStore = defineStore("cart", () => {
  const total = ref(0);
  const orders = ref([]);
  const authStore = useAuthStore();

  const getOrders = async () => {
    const params = {
      populate: "product",
      ["filters[user][id]"]: authStore.userProfile.id,
    };
    const res = await API.getOrders(params);

    orders.value = res.data;
    total.value = res.meta.pagination.total;
  };

  const createOrder = async (payload) => {
    const res = await API.createOrder(payload);

    res.data.id && getOrders();
  };

  const updateOrder = async (payload) => {
    const res = await API.updateOrder(payload);

    res.data.id && getOrders();
  };

  return {
    total,
    orders,
    getOrders,
    createOrder,
    updateOrder,
  };
});
