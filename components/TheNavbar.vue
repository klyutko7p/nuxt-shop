<template>
    <nav class="flex items-center justify-around p-2 border-b-4 border-b-black">
        <div>
            <img src="@/assets/klyutko-logo.svg" alt="" class="w-48" @click="$router.push('/')">
        </div>
        <div class="flex justify-center items-center text-gray-400 max-md:hidden">
            <NuxtLink active-class="text-black" to="/catalog"
                class="cursor-pointer font-medium mr-7 hover:text-[var(--hover-color)] duration-300 text-xl">Catalog
            </NuxtLink>
            <NuxtLink active-class="text-black" to="/categories"
                class="cursor-pointer font-medium mr-7 hover:text-[var(--hover-color)] duration-300 text-xl">Categories
            </NuxtLink>
            <div>
                <NuxtLink active-class="text-black" to="/cart"
                    class="cursor-pointer font-medium mr-7 relative hover:text-[var(--hover-color)] duration-300 text-xl">
                    <Icon name="ps:cart">
                    </Icon>
                    <h1 class="absolute bottom-0 right-0 mb-4" v-if="products.length > 0">+{{ products?.length }}</h1>
                </NuxtLink>
            </div>
        </div>
        <div class="md:hidden flex items-center">
            <div>
                <NuxtLink active-class="text-black" to="/cart"
                    class="cursor-pointer font-medium mr-7 relative hover:text-[var(--hover-color)] duration-300 text-xl">
                    <Icon name="ps:cart">
                    </Icon>
                    <h1 class="absolute bottom-0 right-0 mb-4 animate__animated animate__fadeIn" v-if="products.length > 0">
                        +{{ products?.length }}</h1>
                </NuxtLink>
            </div>
            <div class="space-y-2 cursor-pointer  animate__animated animate__fadeIn" v-if="!isActivatedBurgerMenu"
                @click="isActivatedBurgerMenu = true">
                <div class="w-6 h-0.5 bg-gray-600"></div>
                <div class="w-6 h-0.5 bg-gray-600"></div>
                <div class="w-6 h-0.5 bg-gray-600"></div>
            </div>
            <div v-else class="animate__animated animate__fadeIn animate__faster">
                <h1 class="font-medium text-4xl cursor-pointer" @click="isActivatedBurgerMenu = false">X</h1>
                <div class="top-0 left-0 p-10  bg-gray-200 h-screen fixed font-bold text-xl">
                    <div class="absolute top-3 right-5" @click="isActivatedBurgerMenu = false">
                        <h1>X</h1>
                    </div>
                    <div
                        class="mt-40 text-4xl gap-10 flex flex-col text-center animate__animated animate__fadeInLeft animate__faster">
                        <img src="@/assets/klyutko-logo.svg" alt="" class="w-48"
                            @click="$router.push('/'), isActivatedBurgerMenu = false">
                        <NuxtLink to="/catalog" @click="isActivatedBurgerMenu = false">Catalog</NuxtLink>
                        <NuxtLink to="/categories" @click="isActivatedBurgerMenu = false">Categories</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { useCartStore } from '../store/cart';

const storeProducts = useCartStore();
let products = ref<Array<Product>>([]);
let isActivatedBurgerMenu = ref(false);

onMounted(async () => {
    products.value = storeProducts.getProductsByCart
})


</script>

