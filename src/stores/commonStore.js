import { defineStore } from 'pinia'
import General from '../helper/General';

export const useCommonStore = defineStore('common',{
  state: () => {
    console.log('useCommonStore state');
    if(!localStorage.getItem('device_uid')){
      localStorage.setItem('device_uid',General.makeId(32))
    }
    let user={};
    if(localStorage.getItem('user_data')){
      user=JSON.parse(localStorage.getItem('user_data'));
    }
    return {
      isAuthenticated: localStorage.getItem('auth_token')?true:false,
      deviceUid:localStorage.getItem('device_uid'),
      authToken:localStorage.getItem('auth_token'),
      userData:user,
      loading:false,
      flashMessage:{type:'',message:''}
    }
  },
  getters: {
    
  },
  actions: {
    setAuthToken(token) {
      localStorage.setItem('auth_token',token);
      this.authToken=token;
    },
    setUserData(data) {
      localStorage.setItem('user_data',JSON.stringify(data));
      this.userData=data;
    },
    clearUserSession(){
      console.log('clearUserSession');
      localStorage.setItem('auth_token','');
      localStorage.setItem('user_data','{}');
      this.userData={};
    }
  }
})
