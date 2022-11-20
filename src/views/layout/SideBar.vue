<template>
    <aside class="main-sidebar sidebar-dark-primary">
            <a href="index3.html" class="brand-link">
                <img :src="APP_LOGO" class="brand-image img-circle elevation-3"/>
                    <span class="brand-text font-weight-light">{{APP_NAME}}</span>
            </a>
            <div class="sidebar" style="marginTop:10px">
                <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div class="image">
                        <img :src="NO_IMAGE" class="img-circle elevation-2" alt="User Image"/>
                    </div>
                    <div class="info">
                        <a href="profile" class="d-block">{{commonStore.userData.name}}</a>
                    </div>
                </div>
                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li class="nav-item"><router-link :to="'/dashboard'" class="nav-link"><i class="fa fa-tachometer-alt nav-icon"></i><p> Dashboard</p></router-link></li>
                        <li class="nav-item"><router-link :to="'/note/index'" class="nav-link"><i class="fa fa-users nav-icon"></i><p> Notes</p></router-link></li>
                        <li class="nav-item"><a @click="logout()" class="nav-link"><i class="fa fa-sign-out-alt nav-icon"></i><p> Logout</p></a></li>
                    </ul>
                </nav>
            </div>
        </aside>
</template>
<script>
import { RouterLink } from 'vue-router'
import AppConfig from '../../AppConfig'
import { useCommonStore } from '../../stores/commonStore'
export default {
    data(){
        return {
            APP_LOGO:AppConfig.APP_LOGO,
            APP_NAME:AppConfig.APP_NAME,
            NO_IMAGE:AppConfig.NO_IMAGE
        }
    },
    setup(){
        console.log('sidebar  setup');
        let commonStore=useCommonStore();
        console.log(commonStore.userData);
        return {commonStore:commonStore}
    },
    methods:{
        logout(){
            console.log('logout');
            this.commonStore.clearUserSession();
            this.$router.push("/login");
        }
    }
}
</script>