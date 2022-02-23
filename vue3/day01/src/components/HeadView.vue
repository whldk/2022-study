<template>
    <header>我是一个头部组件</header>
    <h3>{{title}}</h3>

    <p> {{msg}} </p>
    
    <p> 
    <button @click="runParent">执行父组件方法</button> 
    </p>
    <p><button @click="setParentMsg">修改父组件方法</button></p>
    <p> <button @click="sendLogin">触发登录组件里面的事件、实现传值</button></p>

</template>


<script>
import event from '../models/event';
export default {
    name:"headView",
    props:{
        title:Number,
        Home:Object
    },
    //vue 3 中一切美好的事物都从setup 开始
    // 依然需要基于props 注册使用
    //【本身是响应式，基于票Proxy实现代理的】
    // setup 发生在初始化 props 和 beforeCreate 之间，所以在setup 中是没有 this 
    // vue2 中的  data / methods / cpmputed / watch / filters ... 这些options api 聚合再 setup 函数中处理、
    // 且基于vue3中提供的各种api，实现函数式编程！！！！
    // steup 中返回的内容可以直接在视图中进行渲染
    // steup 函数 只有在组件第一次加载的时候 执行一次， 当组件重新渲染不会再次执行它 【销毁后在重新加载、则属于第一次加载逻辑】
    // setup(props) {
    //     console.log('props', props)

    //     let num = ref(0)
    //     setTimeout(()=>{
    //         num.value  = 100;
    //     }, 2000)

    //     return {
    //         num
    //     }
    // }

    data() {
        return {
            msg:'我是头部组件'
        }
    },
    methods: {

        //单向数据流、 只能从父级更新组件数据、不能从子组件更新父组件
        runParent(){
            this.Home.run()
        },
        mySon(){
            console.log('我是头部')
        },
        setParentMsg()
        {
            this.$parent.msg = '修改之后的'
        },
        sendLogin(){

            //广播
            event.emit('toLogin', this.msg)
           
        }
    },
}
</script>

<style lang="scss" scoped>

</style>>
    