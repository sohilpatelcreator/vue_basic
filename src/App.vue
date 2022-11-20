<template>
  <div>
      <div v-show="commonStore.loading">Loading</div>
      <component :is="layout">
          <router-view />
      </component>
  </div>
</template>
<script >
import { RouterView } from 'vue-router'
import BlankLayout from './views/layout/BlankLayout.vue';
import {useCommonStore} from './stores/commonStore';

export default{
  setup(){
    const commonStore=useCommonStore();
    return {commonStore:commonStore}
  },
  computed:{
    layout(){
      return this.$route.meta.layout || BlankLayout; 
    }
  }
}
</script>
