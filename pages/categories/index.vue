<template>
    <div>
        <h1 class="font-bold text-xl mb-10">Categories
            <Icon name="material-symbols:category-outline" size="1.5em" />
        </h1>
        <div v-if="!isLoading" class="flex items-center text-2xl justify-between max-lg:flex-col max-lg:text-xl gap-10">
            <div v-for="category in categories">
                <h1 class="uppercase font-bold hover:text-[var(--hover-color)] hover:cursor-pointer duration-200" @click="router.push(`/categories/${category}`)">{{
                    category }}</h1>
            </div>
        </div>

        <div v-else>
            <UISpinner />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCategoriesStore } from '../../store/categories';

const router = useRouter();
const store = useCategoriesStore();
let categories = ref([])
let isLoading = ref(true)

onMounted(async () => {
    await store.fetchCategories();
    categories.value = store.getCategories;
    isLoading.value = false;
})

</script>

