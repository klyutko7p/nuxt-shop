<template>
    <div class="mb-10">
        <h1 class="my-10 font-bold text-3xl uppercase">Other products in {{ category }}:</h1>
        <Carousel :wrap-around="true" :items-to-show="3" :breakpoints="breakpoints">
            <Slide v-for="(product, index) in products" :key="index" class="flex flex-col"
                @click="$router.push(`/catalog/${product.id}`)">
                <img :src="product.image" class="w-1/4 h-full  cursor-pointer " alt="">
                <h1
                    class="font-bold p-3  cursor-pointer hover:text-[var(--hover-color)] overflow-hidden text-ellipsis whitespace-nowrap text-sm">
                    {{
                        product.title }}</h1>
                <h1 class="text-2xl">${{ product.price }}</h1>
            </Slide>
            <template #addons>
                <Navigation />
            </template>
        </Carousel>
    </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

defineProps({
    products: { type: Array<Product>, required: true },
    category: { type: String, required: true },
})

let breakpoints = {
    240: {
        itemsToShow: 1,
        itemsToScroll: 1,
        transition: 500,
        snapAlign: "start",
    },
    580: {
        itemsToShow: 1,
        itemsToScroll: 1,
        transition: 500,
        snapAlign: "start",
    },
    770: {
        itemsToShow: 2,
        itemsToScroll: 1,
        transition: 500,
        snapAlign: "start",
    },
    1040: {
        mouseDrag: false,
        itemsToShow: 2,
        itemsToScroll: 1,
        transition: 500,
        snapAlign: "start",
    },
    1200: {
        itemsToShow: 3,
        itemsToScroll: 1,
        transition: 500,
        snapAlign: "start",
    }
}


</script>

<style scoped></style>