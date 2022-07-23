import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import Home from '../views/Home.vue'
import FilmesCurtidos from '../views/FilmesCurtidos.vue'
import FilmesNaoCurtidos from '../views/FilmesNaoCurtidos.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/filmes-curtidos',
        name: 'Filmes Curtidos',
        component: FilmesCurtidos
    },
    {
        path: '/filmes-nao-curtidos',
        name: 'Filmes Não Curtidos',
        component: FilmesNaoCurtidos
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router