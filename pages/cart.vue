<template>
    <div>
        <h1 class="text-xl font-bold">Cart ➖ ${{ cart.getSumOfProducts.toFixed(2) }}
            <Icon name="ic:outline-shopping-cart" size="1.5em" />
            <Icon name="mdi:trash-can" size="1.5em" class="cursor-pointer" @click="cart.clearCart" />
        </h1>
        <div class="rounded-lg shadow-black shadow-2xl p-5 grid-cols-1 mb-10 mt-10"
            v-if="cart.getProductsByCart.length > 0">
            <div v-for="product in products" class="border-t-2 mb-5 border-gray-300">
                <Product :product="product" :is-cart="true" />
            </div>
            <div class="text-2xl text-center mt-10">
                <h1 class="font-bold">Cost for all items - ${{ cart.getSumOfProducts.toFixed(2) }}</h1>
                <div class="flex items-center justify-center mt-5">
                    <UIMainButton @click="createOrder">Buy</UIMainButton>
                </div>
            </div>
        </div>
        <div v-else class="text-center mt-10 text-4xl">
            <h1>We're waiting for your purchases</h1>
            <h1 class="mt-5 text-7xl">🤭</h1>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCartStore } from '../store/cart';
import { useOrdersStore } from '../store/orders';

const cart = useCartStore();
const orders = useOrdersStore();
const router = useRouter();

let products = ref<Array<CartProduct>>([]);

function createOrder() {
    let orderId = orders.getRandomInt(1000000);
    orders.addOrder(products.value, orderId);
    router.push(`/orders/${orderId}`);
}

onMounted(() => {
    products.value = cart.getProductsByCart;
    cart.actionSum();
})

</script>

<style scoped></style>