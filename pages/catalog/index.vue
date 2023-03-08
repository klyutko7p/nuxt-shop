<template>
    <div class="">
        <div class="mb-5">
            <div class="mb-5">
                <UISearchInput @set-query="setQuery" text="Title of product" :with-icon="true" />
            </div>
            <div>
                <h1 class="font-bold text-xl mb-3">Products
                    <Icon name="ic:outline-view-stream" size="1.5em" />
                </h1>
                <div class="flex items-center justify-start">
                    <UIFilterButton class="mr-5" @click="getProductsByFilter('top')">TOP</UIFilterButton>
                    <UIFilterButton @click="getProductsByFilter('popular')">POPULAR</UIFilterButton>
                </div>
            </div>
        </div>
        <div v-if="!isLoading">
            <div class="grid max-xl:grid-cols-2 max-sm:grid-cols-1 grid-cols-3 gap-20 mb-10" v-if="products.length > 0">
                <div v-for="product in products" class="text-center rounded-md shadow-xl p-5 relative">
                    <Product :product="product" />
                </div>
            </div>
            <div class="text-center" v-else>
                <h1 class="font-bold text-2xl">Sorry, we don't have products on these filters</h1>
                <UISpinner />
            </div>
        </div>
        <div v-else>
            <UISpinner />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useProductsStore } from '~~/store/products';

const store = useProductsStore();
let products = ref<Array<Product>>([]);
let isLoading = ref(true);

function setQuery(query: string) {
    store.query = query;
    let fetchProducts: Array<Product> = store.getProducts

    if (query === '') {
        products.value = fetchProducts;
    } else {
        products.value = fetchProducts.filter((product) => product.title.toLowerCase().includes(store.query.toLowerCase()));
    }
}

function getProductsByFilter(filter: string) {
    let arrayProducts: Array<Product> = products.value;

    if (filter === 'top') {
        arrayProducts.sort((a, b) => a.rating.rate > b.rating.rate ? 1 : -1)
    }

    if (filter === 'popular') {
        arrayProducts.sort((a, b) => a.rating.count > b.rating.count ? 1 : -1)
    }
}

onMounted(async () => {
    await store.fetchProducts();
    products.value = store.getProducts;
    isLoading.value = false;
})

</script>

<style scoped></style>