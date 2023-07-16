<template>
    <main>
        <h1>Пользователь ID {{ id }}</h1>
        <section>
            <router-link :to="{ name: 'home' }">
                На главную
            </router-link>
        </section>
    </main>
</template>

<script setup>
    import {
        computed
    } from 'vue'
    import {
        useRoute
    } from 'vue-router'
    const route = useRoute()
    const id = computed(() => route.params.id)
</script>

<style scoped>

</style>