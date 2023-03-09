<template>
    <div v-if="!isLoading">
            <div class="grid grid-cols-2">
                <div>
                    <img :src="product.image" class="border-2 border-gray-300 p-5 w-1/2 h-80" alt="">
                </div>
                <div>
                    <h1 class="font-medium text-2xl">{{ product.title }} ➖ ${{ product.price }}</h1>
                    <h1 class="italic">{{ product.description }}</h1>
                </div>
            </div>
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