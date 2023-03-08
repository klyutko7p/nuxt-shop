<template>
    <div v-if="!isLoading">
        <h1>{{ product.title }}</h1>
    </div>
    <div v-else>
        <UISpinner />
    </div>
</template>

<script setup lang="ts">
import { useProductsStore } from '../../store/products';
const route = useRoute();
const store = useProductsStore();

let id = route.params.id;
let product = ref(<Product>{})
let isLoading = ref(true)

onMounted(async () => {
    await store.fetchProduct(+id);
    product.value = store.getProduct
    isLoading.value = false;
})

</script>

<style scoped></style>