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

  const deleteOrder = async (params, isRefetchList = true) => {
    const res = await API.deleteOrder(params);

    res.data.id && isRefetchList && getOrders();
  };

  const payment = async (payload) => {
    const res = await API.payment(payload);

    if (res.data.id) {
      const orders = payload.data.orders;

      for (let index = 0; index < orders.length; index++) {
        const id = orders[index];
        const params = {
          id,
        };
        await deleteOrder(params, false);
      }

      await getOrders();
    }
  };

  return {
    total,
    orders,
    getOrders,
    createOrder,
    updateOrder,
    deleteOrder,
    payment,
  };
});
