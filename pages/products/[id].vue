<template>
    <div>
        <Head>
            <Title>Nuxt Dojo | {{ product.title }}</Title>
            <Meta name="description" :content="product.description" />
        </Head>
        <ProductDetails :product="product"></ProductDetails>
    </div>
</template>

<script setup>
import ProductDetails from '../../components/ProductDetails.vue';

    const { id } = useRoute().params;
    const url = 'https://fakestoreapi.com/products/' + id;
    const { data: product } = await useFetch(url, {key: id});

    if(!product.value){
        throw createError({statusCode: 404, statusMessage: 'Product Not Found.', fatal: true});
    }

    definePageMeta({
        layout: 'products'
    });
</script>

<style scoped>

</style>