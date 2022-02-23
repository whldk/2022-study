<template>
    <div>
        <input type="text" v-model="username">
        <br>
        <input type="password" v-model="password">

        <button @click="doLogin">登录</button>
    </div>
</template>

<script>
import event from '../models/event';
export default {
    data() {
        return {
            username:'',
            password:''
        }
    },
    emits:{
        submit:({username, password}) =>{
            if(username !== "" && password !=""){
                return true
            } else {
                console.error('用户名或密码不可为空')
                return false
            }
        }
    },
    methods: {
        doLogin(){
            console.log('do login')
            this.$emit('submit', {
                username:this.username,
                password:this.password
            })
        }
    },

    mounted() {
        event.on('toLogin', (data) =>{
                console.log('监听广播',data)
        })
    },
}
</script>