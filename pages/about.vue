<template>
    <div>
        <h2>About Page</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium iure, odit ex, molestias nemo nam ad facere, error dolorum omnis labore. Odit officia totam ratione accusamus ut maxime blanditiis.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium iure, odit ex, molestias nemo nam ad facere, error dolorum omnis labore. Odit officia totam ratione accusamus ut maxime blanditiis.</p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
     definePageMeta({
        layout: 'default'
    });

    const { data } = await useFetch('/api/currency/GBP');
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