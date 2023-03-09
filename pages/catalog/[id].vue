<template>
    <Head>
        <Title>Online Store - {{ product.title }}</Title>
    </Head>
    <div v-if="!isLoading">
        <div>
            <Product :product="product" :is-single-product="true" />
        </div>
    </div>
    <div v-else>
        <UISpinner />
    </div>
</template>

<script setup lang="ts">
import { useProductsStore } from '../../store/products';
const route = useRoute();
const storeProducts = useProductsStore();

let id = route.params.id;
let product = ref(<Product>{})
let isLoading = ref(true)

onMounted(async () => {
    await storeProducts.fetchProduct(+id);
    product.value = storeProducts.getProduct
    isLoading.value = false;
})

</script>

<style scoped></style>