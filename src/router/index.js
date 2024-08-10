import { createRouter, createWebHistory } from 'vue-router'

// layout
import WebsiteLayout from '@/layouts/WebsiteLayout.vue'
import Dashboard from '@/layouts/DashboardLayout.vue'

// page
import Landing from '@/views/Landing.vue'
import AboutUs from '@/views/About.vue';
import NotFound from "@/views/NotFound.vue";
import ContactUs from "@/views/ContactUs.vue";

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
            },
            {
                path: '/contact-us',
                name: 'ContactUs',
                component: ContactUs
            },
            
            {
                path: '/admin',
                name: 'loginAdmin',
                component: () => import("@/views/Login.vue"),

            },
            {
                path: '/products',
                name: 'ProductPage',
                component: () => import("@/views/ProductPage.vue"),

            },
            {
                path: '/cart',
                name: 'cart',
                component: () => import("@/views/CartPage.vue"),

            },
            {
                path: '/products/:id',
                name: 'ProductPageDesc',
                component: () => import("@/views/ProductPageDesc.vue"),
                props: true
              }
        ]
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        children: [
            {
                path: '',
                name: 'dashboard',
                component: () => import("@/admin/DashboardAdmin.vue"),
            },
            {
                path: '/dashboard/products',
                name: 'products',
                component: () => import("@/admin/Products.vue"),
            },
            {
                path: '/dashboard/customers',
                name: 'customers',
                component: () => import("@/admin/Customers.vue"),
            },
            {
                path: '/dashboard/settings',
                name: 'settings',
                component: () => import("@/admin/Settings.vue"),
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
