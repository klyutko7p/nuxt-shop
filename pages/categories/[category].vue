<template>
    <Head>
        <Title>Online Store - {{ category }}</Title>
    </Head>
    <div v-if="!isLoading">
        <h1 class="text-xl font-bold mb-10"> <span class="uppercase">{{ category }}</span> ➖ {{ products.length }} items.
        </h1>
        <div class="grid max-xl:grid-cols-2 max-sm:grid-cols-1 grid-cols-3 gap-20 mb-10">
            <div v-for="product in products" class="text-center rounded-md shadow-xl p-5 relative">
                <Product :product="product" />
            </div>
        </div>
    </div>
    <div v-else>
        <UISpinner />
    </div>
</template>

<script setup lang="ts">
import { useCategoriesStore } from '../../store/categories';

const route = useRoute();
const store = useCategoriesStore();
const category = route.params.category;
let products = ref<Array<Product>>([])
let isLoading = ref(true)

onMounted(async () => {
    await store.fetchProductsByCategory(category)
    products.value = store.getProductsByCategory
    isLoading.value = false;
})

</script>

<style scoped></style>