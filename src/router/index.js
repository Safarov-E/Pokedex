import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home';
import Category from '../components/Category';
import Create from '../components/Category'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/category/:name',
            name: 'show',
            component: Category,
            children: [
                {
                    path: 'pokemons/new',
                    component: Create
                }
            ]
        }
    ]
}) 