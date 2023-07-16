<template>
    <main>
        <h1>Главная</h1>
        <section>
            <ul>
                <li>
                    <router-link :to="{ name: 'setting' }">
                        Настройки
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'user', params: { id: 123 } }">
                        Пользователь 123
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'user', params: { id: 456 } }">
                        Пользователь 456
                    </router-link>
                </li>
            </ul>
        </section>
    </main>
</template>

<script>
    export default {
        name: "HomeView"
    }
</script>

<style scoped>

</style>