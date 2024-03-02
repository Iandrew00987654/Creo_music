import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './view/Home.vue'
import Canciones from './view/Canciones.vue'
import Registrarse from './view/Registrarse.vue'

const routes =[
    {
        path: '',
        name: 'Home',  
        component: Home,  
    },
      
    {
        path:'/canciones',
        name:'Canciones',
        component:Canciones,
    },
    {
        path:'/registrarse',
        name:'Registrarse',
        component:Registrarse,
    }
]
const router=createRouter({
    history:createWebHistory(),
    routes
})
const app = createApp(App);
app.use(router)
app.mount('#app')
