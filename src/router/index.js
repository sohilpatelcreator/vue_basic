import { createRouter, createWebHistory } from 'vue-router'
import  BlankLayout from '../views/layout/BlankLayout.vue';
import  MainLayout from '../views/layout/MainLayout.vue';
import  FrontLayout from '../views/layout/FrontLayout.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/front/Home.vue'),
      meta:{
        layout:FrontLayout,
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/site/Login.vue'),
      meta:{
        layout:BlankLayout,
        guard:'guest'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/site/Register.vue'),
      meta:{
        layout:BlankLayout,
        guard:'guest'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/front/About.vue'),
      meta:{
        layout:FrontLayout,
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/site/Dashboard.vue'),
      meta:{
        layout:MainLayout,
        guard:'userAuth'
      }
    },
    {
      path: '/note/index',
      name: 'note/index',
      component: () => import('../views/note/NoteIndex.vue'),
      meta:{
        layout:MainLayout,
        guard:'userAuth'
      }
    }
  ]
})

router.beforeEach((to, from,next) => {
  console.log('beforeEach',to.meta.guard,localStorage.getItem('auth_token'));
  if(to.meta.guard=='userAuth'){
    if(localStorage.getItem('auth_token')){  
      next();
    }else{
      next('login');
    }
  }else if(to.meta.guard=='guest'){
    if(localStorage.getItem('auth_token')){  
      next('dashboard');
    }else{
      next();
    }
  }else{
    next();
  }
})

export default router
