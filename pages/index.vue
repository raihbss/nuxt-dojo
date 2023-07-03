<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="product in products">
                <ProductCard :product="product"/>
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'default'
    });

    const {data: products} = await useFetch('https://fakestoreapi.com/products');

    useHead({
        title: "Nuxt Dojo | Merch",
        meta: [
            {name: 'content', content: 'Nuxt 3 Merch'}
        ]
    });
</script>

<style scoped>
h2{
    margin-bottom: 20px;
    font-size: 36px;
}
p{
    margin: 20px 0;
}
</style>