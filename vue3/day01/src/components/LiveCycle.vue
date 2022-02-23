<template>
    <h2>生命周期函数</h2>
    <div class="tab_info">
        <ul class="tab_header">
            <li v-for="(item,index) in posts" :key="index" @click="currentIndex=index" :class="{'active':currentIndex===index}">
                {{item.title}}
            </li>
        </ul>

        <div class="tab_content">
                <span v-html="content"></span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg:'tab 切换',
            currentIndex:0,
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
    
    computed:{
        content(){
            return this.posts[this.currentIndex].content
        }
    },
}
</script>

<style lang="scss" scope>
    .h2 {
        text-align: center;
    }

    ul{
        list-style: none;
    }

    .tab_info{
        width: 600px;
        margin: 0 auto;
        border: 1px solid #eee;
        .tab_header{
            width: 100%;
            height: 40px;
            line-height: 40px;
            li {
                display:inline-block;
                margin: 0px 5px;
                background-color: #eee;
                text-align: center;
                padding: 0px 10px;
                    cursor: pointer;

                &.active{
                    background: red;
                    color: #eee;
                }
            }
        }
    }
    

       .tab_content {
           padding: 20px;
       }
</style>