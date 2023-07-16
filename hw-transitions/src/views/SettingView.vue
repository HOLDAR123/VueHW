<template>
    <main>
        <h1>Настройки</h1>
        <section v-if="route.name === 'settings'">
            <button @click="router.push({ name: 'settings-profile' })">
                Открыть настройки профиля
            </button>
        </section>
        <section>
            <router-view />
        </section>
        <footer>
            <router-link :to="{ name: 'home' }">
                На главную
            </router-link>
        </footer>
    </main>
</template>

<script setup>
    import {
        useRouter,
        useRoute
    } from 'vue-router'
    const router = useRouter()
    const route = useRoute()
</script>