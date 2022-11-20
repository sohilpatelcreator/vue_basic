<template>
    <div class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed">
        <div class="wrapper">
            <nav-bar/>
            <side-bar/>
            <div class="content-wrapper">
                <section class="content">
                    <div class="container-fluid">
                        <alert-message />
                        <slot></slot>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>
<script>
import SideBar from './SideBar.vue'
import NavBar from './NavBar.vue'
import AlertMessage from './../common/AlertMessage.vue'

export default {
    components:{SideBar,NavBar,AlertMessage},
    mounted(){
        console.log('main layout');
    }
}
</script>