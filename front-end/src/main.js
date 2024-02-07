import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import * as VueRouter from 'vue-router'
import ShoppingCartPage from './pages/ShoppingCartPage.vue'
import ProductsPage from './pages/ProductsPage.vue'
import ProductDetailPage from './pages/ProductDetailPage.vue'
import NotFoundPage from './pages/NotFoundPage.vue'


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCfQUZLbxKSA0ui_zxdGyldsAtr7wT7uXw",
  authDomain: "vue-site-87496.firebaseapp.com",
  projectId: "vue-site-87496",
  storageBucket: "vue-site-87496.appspot.com",
  messagingSenderId: "1024126527138",
  appId: "1:1024126527138:web:3f7fd66e308d3902e699fb"
};

initializeApp(firebaseConfig);
createApp(App)
.use(VueRouter.createRouter({
    history: VueRouter.createWebHistory(process.env.BASE_URL),
    routes: [{
        path: '/cart',
        component: ShoppingCartPage,
    }, {
        path: '/products',
        component: ProductsPage, 
    }, {
        path: '/products/:productId',
        component: ProductDetailPage,
    }, {
        path: '/',
        redirect: '/products',
    }, {
        path: '/:pathMatch(.*)*',
        component: NotFoundPage,
    }]
}))
.mount('#app')
