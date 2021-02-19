import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../components/Home'
import Poem from "../components/poem/poem"
import About from "../components/About"

// mode:"history"
// const routerHistory = createWebHistory()

// mode:"hash模式"
const routerHistory = createWebHashHistory()

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/poem',
        name: 'poem',
        component: Poem
    },
    {
        path: '/vue3BaiDuCalendar',
        name: 'vue3BaiDuCalendar',
        component: () => import('../components/calendar/calendar')
    }
]

export default createRouter({
    history: routerHistory,
    routes
})
