import { defineStore } from "pinia";
import { ref } from "vue";
import API from "../shared/services/product";

export const useProductStore = defineStore("product", () => {
  const products = ref([]);
  const total = ref(0);

  const getProducts = async (params) => {
    const res = await API.getProducts(params);

    products.value = res.data;
    total.value = res.meta.pagination.total;
  };

  return {
    getProducts,
    products,
    total,
  };
});
