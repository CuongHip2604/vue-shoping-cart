import { defineStore } from "pinia";
import { ref } from "vue";
import API from "../shared/services/category";

export const useCategoryStore = defineStore("category", () => {
  const categories = ref([]);

  const getCategories = async () => {
    const res = await API.getCategories();

    categories.value = res.data;
  };

  return {
    getCategories,
    categories,
  };
});
