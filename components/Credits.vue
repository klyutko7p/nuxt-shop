<template>
    <div class="flex items-center justify-center mt-40">
        <img src="@/assets/klyutko-logo.svg" alt="">
    </div>
        <div class="text-center mt-5 text-5xl font-extrabold">
        {{ title }}
    </div>
    <div class="flex items-center justify-center mt-10">
        <a href="https://t.me/klyutko7p" class="mr-10">
            <i class="fi fi-brands-telegram cursor-pointer text-4xl hover:rotate-3"></i>
        </a>
        <a href="https://github.com/klyutko7p">
            <i class="fi fi-brands-github cursor-pointer text-4xl"></i>
        </a>
    </div>
</template>

<script setup lang="ts">

defineProps({
    title: { type: String, require: true }
})

</script>

<style scoped>
@import url("https://cdn-uicons.flaticon.com/uicons-brands/css/uicons-brands.css");
</style>