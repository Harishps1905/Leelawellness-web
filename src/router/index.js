import { createRouter, createWebHistory } from 'vue-router'

// layout
import WebsiteLayout from '@/layouts/WebsiteLayout.vue'
import Dashboard from '@/layouts/DashboardLayout.vue'

// page
import Landing from '@/views/Landing.vue'
import AboutUs from '@/views/About.vue';
import NotFound from "@/views/NotFound.vue";

const routes = [
    {
        path: '/',
        component: WebsiteLayout,
        redirect: '/',
        children: [
            {
                path: '',
                name: 'Landing',
                component: Landing
            },
            {
                path: '/about',
                name: 'AboutUs',
                component: AboutUs
            }
        ]
    },
    {
        path: '/admindashboard',
        name: 'dashboard',
        component: Dashboard,
        children: [
            {
                path: '/dashboard',
                name: 'AboutUs',
                component: () => import("@/admin/DashboardAdmin.vue"),
            },
            {
                path: '/dashboard/products',
                name: 'products',
                component: () => import("@/admin/Products.vue"),
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
    }
})


export default router
