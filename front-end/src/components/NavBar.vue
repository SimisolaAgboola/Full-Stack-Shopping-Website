<template>
    <div class="nav-bar">
        <div class="products-link">
            <router-link to="/products">
                <img :src="logo" />   
            </router-link>
        </div>
        <div class="nav-buttons-wrap">
            <button @click="signOut" v-if="user">Sign Out</button>
            <router-link to="/cart">
                <button>Shopping Cart</button>
            </router-link>
        </div>     
    </div>
</template>

<script>
import { getAuth, signOut } from 'firebase/auth';
import logo from '@/assets/company-logo.png';

export default{
    name: "NavBar",
    props: ['user'],
    data() {
        return{
            logo,
            
        }
    },
    methods: {
        signOut() {
            const auth = getAuth();
            signOut(auth);
        }
    }
}
</script>