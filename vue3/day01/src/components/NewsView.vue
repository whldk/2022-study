<template>
    <div>
        <button @click="getData">获取json数据</button>
    </div>
</template>

<script>

export default {
    data() {
        return {
            list:[]
        }
    },
    methods: {
        getData(){
            let api = 'https://www.xinke081.cn/mengoo-esp/site/school?school_alias=zy'
            this.Axios.get(api)
                 .then((res) =>{
                    console.log('res',res.data[0])
            }).catch((err) => {
                console.log('err',err)
            })
        }
    },
    
}
</script>

<style lang="scss" scope>
    
</style>