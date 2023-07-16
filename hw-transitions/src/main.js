import {createApp} from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import HomeView from "@/views/HomeView";
import SettingView from "@/views/SettingView";
import SettingProfileView from "@/views/SettingProfileView";
import UserView from "@/views/UserView";
import NotFoundView from "@/views/NotFoundView";


const router = createRouter({
    routes: [{
        path: '/',
        name: 'home',
        component: HomeView
    },
        {
            path: '/settings',
            name: 'setting',
            component: SettingView,
            children: [{
                path: 'profile',
                name: 'settings-profile',
                component: SettingProfileView
            }]
        },
        {
            path: '/user/:id',
            name: 'user',
            component: UserView
        },
        {
            path: '/:pathMatch(.*)*',
            name: '404',
            component: NotFoundView
        }],
    history: createWebHistory()
})


const app = createApp(App)
app.use(router)
app.mount('#app')


// createApp(App).mount('#app')
