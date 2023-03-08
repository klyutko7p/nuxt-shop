<template>
    <div>
        <Head>
            <Title>{{ title }}</Title>
        </Head>
    </div>
    <div>
        <Credits :title="title" />
    </div>
</template>

<script setup lang="ts">
const title = ref("Online Store")

</script>

<style scoped>

</style>