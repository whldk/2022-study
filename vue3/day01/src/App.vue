<template>
     <!-- <HeadView  :title="msg"/>  -->
     <v-header :title="msg" :Home="this" ref="header"></v-header>
    <h5>{{msg}}</h5>
    <hr/>

    <button @click="getSon">执行子组件方法</button>
    
    <button @click="setSon">修改子组件方法</button>

    <hr>
    <v-login @submit="doLogin"></v-login>

    <hr>

    <p>我是App 组件</p>

    <button @click="isShow = !isShow">挂载 、卸载组件</button>
    <keep-alive>
        <life-cycle v-if="isShow"></life-cycle>
    </keep-alive>

    <hr>
<!-- 
    <v-news></v-news> -->

    <button @click="getData">点击mixins</button>

</template>


<script>
//引入
//import TestData from './components/TestData.vue'
import HeadView from './components/HeadView.vue'
import LoginView from './components/LoginView.vue'
import LiveCycle from './components/LiveCycle.vue'
//import NewsView from './components/NewsView.vue'
export default {
    //mixins:[NewsView],
    data() {
        return {
            isShow:false,
            msg:'app根组件',
            currentTab:0,
            posts:[
                {
                    id:1,
                    title:'nodeJs',
                    content:'nodejs 系列教程'
                },
                  {
                    id:2,
                    title:'GoLang',
                    content:'GoLang 系列教程'
                },
                  {
                    id:3,
                    title:'Python',
                    content:'Python 系列教程'
                },
            ]
        }
    },
    methods: {
        //如果mixins 里面有 getData 那就使用 getData 的方法
        // getData(){
        //     console.log('getData')
        // },
        run(){
            console.log('run')
        },
        getSon(){
           alert(this.$refs.header.msg)

           this.$refs.header.mySon()
        },
        setSon(){
            this.$refs.header.msg = '修改子类的属性'
        },
        doLogin(data){
            console.log('data',data)
        },
        activated() {
            console.log('keep-live 缓存的组件激活调用')
        },
        deactivated() {
            console.log('keep-live 缓存的组件停用时调用')
        },
        beforeMount() {
            console.log('实例销毁之前')
        },
        unmounted() {
            console.log('实例销毁之后')
        },
    },
    components:{
      "v-header":HeadView,
      'v-login':LoginView,
      'life-cycle':LiveCycle,
      //'v-news' : NewsView
    }
}
</script>

<style lang="scss">
//scope 表示 css 是一个局部作用域
    h5{
        text-align: center;
    }
</style>