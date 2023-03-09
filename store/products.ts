import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", () => {
  let products = ref();
  let product = ref();
  let query = ref("");
  const urlLink = "https://fakestoreapi.com/products";

  async function fetchProducts() {
    let { data } = await useFetch(urlLink);
    products.value = data.value;
  }

  async function fetchProduct(id: number) {
    let { data } = await useFetch(urlLink + `/${id}`);
    product.value = data.value;
  }

  const getProducts = computed(() => products.value);
  const getProduct = computed(() => product.value);
  const getQuery = computed(() => query.value);

  return {
    fetchProducts,
    getProducts,
    query,
    products,
    getProduct,
    fetchProduct,
    getQuery,
  };
});
