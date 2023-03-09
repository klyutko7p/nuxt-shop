<template>
    <div class="grid grid-cols-1" v-if="!isCart && !isSingleProduct">
        <img :src="product.image" alt="" class="w-52 relative h-80 mx-auto cursor-pointer mb-7"
            @click="router.push(`/catalog/${product.id}`)">
        <h1 class="cursor-pointer hover:text-[var(--hover-color)] text-2xl overflow-hidden text-ellipsis whitespace-nowrap"
            @click="router.push(`/catalog/${product.id}`)">{{ product.title }}</h1>
        <h1 class="uppercase mb-2 cursor-pointer hover:text-[var(--hover-color)]"
            @click="router.push(`/categories/${product.category}`)">{{ product.category }}</h1>
        <h1 class="font-bold text-2xl mb-3">${{ product.price.toFixed(2) }}</h1>
        <div class="flex items-center justify-center text-xl cursor-pointer hover:text-[var(--hover-color)]"
            @click="addToCart">
            <Icon name="fa-regular:plus-square" class="mr-2" />
            <h1>Add to Cart</h1>
        </div>
        <div class="absolute top-0 right-0 pr-3">
            <Icon name="material-symbols:add-shopping-cart" size="1.5em"
                class=" cursor-pointer hover:text-[var(--hover-color)]" @click="addToCart" />
        </div>
    </div>
    <div v-else-if="isCart && !isSingleProduct" class="grid grid-cols-3 max-xl:grid-cols-1">
        <div class="mt-5">
            <img :src="product.image" alt="img" class="max-xl:h-full max-xl:w-1/3 mx-auto w-1/2 h-80">
        </div>
        <div class="text-center mt-10">
            <h1 class="text-2xl mb-3 font-bold">{{ product.title }}</h1>
            <h1 class="font-medium text-5xl m-10">${{ product.price.toFixed(2) }}</h1>
            <h1 class="italic">{{ product.description }}</h1>
        </div>
        <div class="mt-20">
            <div class="flex items-center justify-center">
                <Icon name="ic:baseline-plus" class="hover:text-[var(--hover-color)] duration-200 hover:cursor-pointer"
                    size="2em" @click="changeQuantity('+')" />
                <h1 class="font-bold text-4xl">{{ product.quantity }}</h1>
                <Icon name="ic:baseline-minus" class="hover:text-[var(--hover-color)] duration-200 hover:cursor-pointer"
                    size="2em" @click="changeQuantity('-')" v-if="product.quantity > 1" />
            </div>
            <div class="text-center mt-5">
                <h1 class="text-2xl">Total cost: ${{ (product.quantity * product.price).toFixed(2) }}</h1>
                <UIDeleteButton class="mt-3" @click="deleteProduct(product.id)">Delete</UIDeleteButton>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="grid grid-cols-2 max-lg:grid-cols-1">
            <div>
                <img :src="product.image" class="border-2 border-gray-300 p-5 w-1/2 h-full max-lg:mx-auto max-lg:border-0"
                    alt="">
            </div>
            <div class="text-center">
                <h1 class="font-medium text-2xl">{{ product.title }} ➖ ${{ product.price }}</h1>
                <h1 class="uppercase m-5 cursor-pointer text-xl hover:text-[var(--hover-color)]"
                    @click="$router.push(`/categories/${product.category}`)">{{ product.category }}</h1>
                <h1 class="italic">{{ product.description }}</h1>
                <div>
                    <h1 class="text-2xl font-extrabold mt-5">{{ product.rating.count }} number of ratings, {{
                        product.rating.rate }}
                        AVG of rating
                    </h1>
                </div>
                <div class="flex items-center justify-center text-3xl mt-10 cursor-pointer hover:text-[var(--hover-color)]"
                    @click="addToCart">
                    <Icon name="fa-regular:plus-square" class="mr-2" />
                    <h1>Add to Cart</h1>
                </div>
            </div>
        </div>
        <ProductsSlider :products="products" v-if="!isLoading" :category="product.category" />
        <div v-else>
            <UISpinner />
        </div>
    </div>
</template>

<script setup lang="ts">


import { useCartStore } from '../store/cart';
import { useCategoriesStore } from '../store/categories';

const router = useRouter();
const storeCart = useCartStore();
const storeCategories = useCategoriesStore();

let products = ref<Array<Product>>([])
let isLoading = ref(true)

function addToCart() {
    storeCart.addProductToCart(props.product);
}

function changeQuantity(sign: string) {
    storeCart.changeQuantity(sign, props.product);
}

function deleteProduct(id: number) {
    storeCart.deleteProduct(id);
    storeCart.actionSum();
}

const props = defineProps({
    product: { type: Object as PropType<Product>, required: true },
    isCart: { type: Boolean, default: false },
    isSingleProduct: { type: Boolean, default: false },
})

onMounted(async () => {
    await storeCategories.fetchProductsByCategory(props.product.category)
    products.value = storeCategories.getProductsByCategory
    isLoading.value = false;
})

</script>

<style scoped></style>