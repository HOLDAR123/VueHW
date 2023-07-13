import {createApp} from 'vue'
import App from './App.vue'
import {createRouter, createWebHashHistory} from "vue-router";
import UserList from './components/UserList'


let vm = createApp(App)

let routes = [
    {path: '/user/:index', component: UserList}
]


let router = createRouter({
    routes,
    history: createWebHashHistory()
})


vm.use(router)
vm.mount('#app')