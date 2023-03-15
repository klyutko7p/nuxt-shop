<template>
    <ClientOnly>
        <div class="text-black font-['Quicksand']">
            <TheNavbar class="relative z-10" />
            <div class="container mx-auto mt-3 relative z-1 p-5">
                <slot />
            </div>
        </div>
    </ClientOnly>
</template>

<script setup lang="ts">

</script>

<style scoped></style>