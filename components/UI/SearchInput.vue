<template>
    <div class="flex items-center justify-center relative">
        <Icon name="material-symbols:search" size="2em" class="mr-3 absolute right-0 text-white" v-if="withIcon" />
        <input type="text" @input="emitFunction" v-model.trim="query" :placeholder="text"
            class="bg-gray-50 border border-gray-300 text-white text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">   
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['setQuery'])
let query = ref('')

defineProps({
    text: String,
    withIcon: Boolean,
})
 
function emitFunction() {
    emit('setQuery', query)
}



</script>

<style scoped></style>