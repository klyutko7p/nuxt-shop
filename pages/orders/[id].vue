<template>
    <Head>
        <Title>Online Store - Order {{ order.orderId }} </Title>
    </Head>
    <div>
        <div class="flex items-center justify-center flex-col">
            <h1 class="text-center font-bold text-2xl">You have successfully purchased the goods and placed an order!</h1>
            <Icon name="ic:baseline-check" class="text-green-500" size="4em " />
        </div>
        <div>
            <h1 class="text-3xl mb-10">Your order ID: {{ order.orderId }}</h1>
            <div>
                <h1 class="font-bold text-2xl mb-2">Items ➖ {{ order.products?.length }}</h1>
                <hr class="mb-5" />
                <div v-for="product in order.products" class="grid grid-cols-2 mb-10 max-sm:grid-cols-1">
                    <div class="max-sm:mb-10">
                        <img :src="product.image" class="w-1/3 h-full max-sm:mx-auto max-sm:w-2/3" alt="">
                    </div>
                    <div class="text-center text-2xl">
                        <h1>{{ product.title }}</h1>
                        <h1 class="font-bold text-3xl mt-3">{{ product.quantity }} items</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useOrdersStore } from '../../store/orders';

const route = useRoute()
const storeOrders = useOrdersStore()

let order = ref(<Order>{})

onMounted(() => {
    storeOrders.findOrder(+route.params.id);
    order.value = storeOrders.getOrder;
})

</script>

<style scoped></style>