<template>
    <div class="hold-transition layout-top-nav">
        <nav class="main-header navbar navbar-expand-md navbar-light navbar-white">
            <div class="container">
                <a href="index3.html" class="navbar-brand">
                    <span class="brand-text font-weight-light">{{APP_NAME}}</span>
                </a>
                <button class="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse order-3" id="navbarCollapse">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link :to="'/'" class="nav-link">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="'/dashboard'" class="nav-link">Dashboard</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/login" class="nav-link">Login</router-link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
        <div class="content">
            <div class="container">
                <slot></slot>
            </div>
        </div>
    </div>   
</template>
<script>
import AppConfig from '../../AppConfig'
import { RouterLink } from 'vue-router'
export default {
    data(){
        return {
            APP_NAME:AppConfig.APP_NAME
        }
    },
    mounted(){
        console.log('front layout');
    }
}
</script>