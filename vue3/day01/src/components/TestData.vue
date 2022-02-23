<template>
    <div>
        <h5>{{title1}}</h5>
        <button @click="getTitle1()">获取</button>
    </div>
</template>

<script>
export default {
        data() {
            return {
                title1:'首页组件'
            }
        },

        methods: {
            getTitle1(){
                alert(this.title1)
            }
        },
}
</script>

<style lang='scss'>
    h5 {
        text-align: center;
    }
</style>