<template>
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
        <ul class="navbar-nav">
            <li class="nav-item">
                <router-link class="nav-link" data-widget="pushmenu" :to="'/'"><i class="fas fa-bars"></i></router-link>
            </li>
        </ul>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item d-none d-sm-inline-block">
                <router-link :to="'/dashboard'" class="nav-link">Dashboard</router-link>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    
}
</script>