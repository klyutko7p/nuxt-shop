import { defineStore } from "pinia";

export const useCategoriesStore = defineStore("categories", () => {
  let categories = ref();
  let products = ref();
  const urlLink = "https://fakestoreapi.com/products";

  async function fetchCategories() {
    let { data } = await useFetch(urlLink + "/categories");
    categories.value = data.value;
  }

  async function fetchProductsByCategory(category: string | string[]) {
    let { data } = await useFetch(urlLink + "/category" + `/${category}`);
    products.value = data.value;
  }

  const getCategories = computed(() => categories.value);
  const getProductsByCategory = computed(() => products.value);

  return {
    getCategories,
    fetchCategories,
    fetchProductsByCategory,
    getProductsByCategory,
  };
});
