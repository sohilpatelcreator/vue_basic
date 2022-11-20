<template>
    <div>
        <div class="login-logo">
            <router-link to="/"><b>{{APP_NAME}}</b></router-link>
        </div>
        <div class="card">
            <div class="card-body login-card-body">
                <p class="login-box-msg">Sign in to start your session</p>
                <AlertMessageWidget :type="flashMessage.type" :message="flashMessage.message" @resetFlash="resetFlashMessage"></AlertMessageWidget>
                <form @submit.prevent="handleSubmit($event)" method="post">
                    <div class="input-group mb-3">
                        <input name="email" type="email" class="form-control" placeholder="Email" required/>
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-envelope"></span>
                                </div>
                            </div>
                    </div>
                    <div class="input-group mb-3">
                        <input type="password" name="password" class="form-control" placeholder="Password" required/>
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-lock"></span>
                                </div>
                            </div>
                    </div>
                    <div class="row">
                        <div class="col-8">
                            <div class="icheck-primary">
                                <input type="checkbox" id="remember" name="remember"/>
                                    <label htmlFor="remember">
                                        Remember Me
                                    </label>
                            </div>
                        </div>
                        <div class="col-4">
                            <button type="submit" class="btn btn-primary btn-block">Sign In</button>
                        </div>
                    </div>
                </form>

                <p class="mb-1">
                    <router-link to="/forgot-password">I forgot my password</router-link>
                </p>
                <p class="mb-0">
                    <router-link to="/register" class="text-center">Register a new membership</router-link>
                </p>
            </div>

        </div>
    </div>
</template>
<script>
import AppConfig from '../../AppConfig'
import General from '../../helper/General';
import {Ajax} from '../../helper/Ajax';
import AlertMessageWidget from '../common/AlertMessageWidget.vue';
import { useCommonStore } from '../../stores/commonStore';
import router from '../../router';
export default {
    components:{AlertMessageWidget},
    data() {
        let flashMessage={type:'',message:''};
        return {
            APP_NAME:AppConfig.APP_NAME,
            flashMessage
        }
    },
    setup(){
        const commonStore=useCommonStore();
        return {
            commonStore:commonStore
        }
    },
    methods:{
        handleSubmit:function (e){
            e.preventDefault();
            console.log('handleSubmit',e.target);
            let self=this;
            // let flashMessage=this.flashMessage;
            // const commonStore=this.commonStore;
            Ajax.post('site/login',General.serializeForm(e.target),function(response){
                console.log(response);
                self.commonStore.loading=false;
                if(response.status){
                    self.commonStore.setAuthToken(response.auth_token);
                    self.commonStore.setUserData(response.data);
                    router.push("/dashboard");
                    self.flashMessage={type:'success',message:response.message};
                }else{
                    self.flashMessage={type:'danger',message:response.message};
                }
            });    
        },
        resetFlashMessage:function(){
            console.log('resetFlashMessage');
            this.flashMessage={type:'',message:''};
        }
    }
}
</script>
