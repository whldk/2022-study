<template>
  <div>

    <div style="display:none;">
      <h1>{{msg}}</h1>
      <h3> 绑定对象 </h3>
      <p>绑定对象: {{info.username}} --- {{info.age}}</p>
      
      <p> {{h2}} </p>

      <p>输出html标签 <span v-html="h2"></span> </p>


      <h3> 绑定属性 </h3>

      <img v-bind:src="logoSrc" alt="" width="100" />
      <br>
      <img :src="logoSrc" alt="" width="120" />
      <br>
      <a :[attr]="title" href="https://www.baidu.com/">鼠标放上去</a>

      <h3> 循环遍历数组 </h3>
      

      
      <ul>
        <li v-for="(item, index) in list" :key="index" >
          {{item}} -- {{index}}
        </li>
      </ul>


      <ul>
        <li v-for="(item, index) in list1" :key="index">
          {{item.id}} -- {{item.name}}
            <ol>
              <li v-for="(i, k) in item.info" :key="k">
                  年龄 ---  {{i.age}} --- 性别  --- {{i.sex}}
              </li>
            </ol>
        </li>
      </ul>

    </div>


    <div style="display:none;">
        <h2>{{msg}}</h2>

        <button @click="setMsg()">setMsg</button>
        &nbsp;
        <button @click="getMsg()">getMsg</button>
        &nbsp;
        <button @click="changeClass()">changeClass</button>
        &nbsp;

        <button data-aid='213' @click="eventFn($event)">事件对象</button>
        &nbsp;
        <button data-aid='213' @click="warn('params', $event)">submit</button>

        &nbsp;
        <button data-aid='213' @click="one($event), two($event)">多次事件触发</button>
        <br>

        <div class="red" :class="myClass">
        </div>

        <br>

        <h3>class绑定多个动态属性</h3>

        <div :class="{'active':isActive, 'pink':isPink}">

        </div>

        <br>
        
        <div :class="[activeClass, pinkClass]">

        </div>
        

    </div>


    <div hidden>

        <ul>
          <li>
            姓名:
             <input type="text" v-model="userinfo.username" />
          </li>
           <li>
            年龄:
             <input type="text" v-model="userinfo.age" />
          </li>
           <li> 
             性别: 
            <input type="radio" value="1" v-model="userinfo.sex">
            <label for="sex1">男</label>
            &nbsp;
            <input type="radio" value="2" v-model="userinfo.sex">
            <label for="sex2">女</label>
          </li>

             <li>
            城市:
             <select v-model="userinfo.city">
                <option value="">请选择</option>
                <option v-for="(item, index) in userinfo.citys" :key="index" :value="item">{{item}}</option>
             </select>
          </li>


         <li>
            爱好:
            <span v-for="(item, index) in userinfo.hobby" :key="index">
               <input type="checkbox" :id="'ch_'+index" v-model="item.check"  /> 
               <label for="">{{item.title}}</label>
            </span>
   
          </li>

        </ul> 

        
        <button @click="doSubmit()" class="submit">获取表单内容</button>

    </div>



<div hidden>
  <h3>计算属性</h3>
  {{reverseMsg}}
<h3>筛选功能</h3>
<input type="text" v-model="keyword" placeholder="请输入关键字" />
<ul>
  <li v-for="(item, index) in (keyword ? searchData : listData)" :key="index">{{item}}</li>
</ul>
</div>


    <div>
        <h3>TodoList</h3>
        请输入：<input type="text" @keyup.enter="addData()" v-model="keyword">

        <h5>正在进行</h5>
        <div>
          <ul>
            <div v-for="(item, index) in listTodo" :key="index">
                 <li v-if="!item.checked">
                      <input type="checkbox" v-model="item.checked"  @change="setTodo()"/> 
                      {{item.title}} --- <button @click="delData(index)">删除</button>
                  </li>
            </div>
          </ul>
        </div>


          <h5>已经完成</h5>
        <div>
          <ul>
           <div v-for="(item, index) in listTodo" :key="index">
                 <li v-if="item.checked">
                      <input type="checkbox" v-model="item.checked"   @change="setTodo()"/> 
                      {{item.title}} --- <button @click="delData(index)">删除</button>
                  </li>
            </div>
          </ul>
        </div>

    </div>



</div>

</template>


<!--定义js -->
<script>

import storage from './models/storage'

export default {
  name:"App",

  //存放数据
  data() {
    return {
      listTodo:[],
      keyword:"",
      listData:[
        'aaaaaa',
        'ababab',
        'cccccc',
        'acacacac'
      ],
      msg:'你好, vue3',
      attr:'title',
      title:'我是一个title',
      info:{
          username:'张三',
          age:20,
          sex:1
      },
      userinfo:{
          username:'张三',
          age:22,
          sex:1,
          city:'',
          citys:['北', '上', '广', '深', '武'],
          hobby:[
                {'title':'吃', 'check':true},
                {'title':'喝', 'check':true},
                {'title':'玩', 'check':false},
                {'title':'乐', 'check':true},
                {'title':'睡', 'check':true}
            ]
      },
      h2:"<h2>我是标签</h2>",
      logoSrc:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fc9%2F63%2F77%2Fc963777ebd9c8ebf5583b39565cfa1d7.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647829303&t=4e7879f15ddc85c65477cf0749603f76',
      list:['ldk', 'zs', 'ls'],
      list2:[
        {
          id:1,
          name:'ldk',
          info:[
            {
              age:20,
              sex:1
            },
              {
              age:21,
              sex:0
            },
              {
              age:22,
              sex:1
            },
          ]
        },
            {
          id:2,
          name:'tj',
               info:[
            {
              age:30,
              sex:1
            },
              {
              age:31,
              sex:0
            },
              {
              age:32,
              sex:1
            },
          ]
        },
            {
          id:2,
          name:'mw',
          info:[
            {
              age:40,
              sex:1
            },
              {
              age:41,
              sex:0
            },
              {
              age:42,
              sex:1
            },
          ]
        },
      ],
      myClass:'red',
      isActive:true,
      isPink:false,
      //另一种写法 动态样式
      activeClass:'active', 
      pinkClass:'pink'
    }
  },

  //存放方法
  methods: {
    addData(){
   
      this.listTodo.push({
        title:this.keyword,
        checked:false
      })

      this.keyword = ''

      storage.set('listTodo', this.listTodo)

    },
    delData(key){
      this.listTodo.splice(key, 1);
      storage.set('listTodo', this.listTodo)
    },

    setTodo(){
      storage.set('listTodo', this.listTodo)
      //localStorage.setItem('todoList', JSON.stringify(this.listTodo))
    },
    setMsg(){
      this.msg = 'hello, vue 3'
    },
    getMsg(){
      alert(this.msg)
    },
    changeClass(){
      this.myClass = (this.myClass === 'red' ?  'yellow' : 'red');
    },
    eventFn(e){

      //获取原生dom属性
      e.srcElement.style.background = 'red'

      //获取自定义对象
      let d =  e.srcElement.dataset

       console.log('d',d)
    },
    warn(m, e){
      //console.log(e)
      if(e){
        //获取原生dom属性
        e.srcElement.style.background = 'red'

        //获取自定义对象
        let d =  e.srcElement.dataset
          console.log('d',d)
          e.preventDefault();
        }
        alert(m)
    },
    one(e){
         if(e){
           console.log('one')
         }
    },
     two(e){
         if(e){
           console.log('two')
         }
    },

    doSubmit(){
          //三种方式获取dom表单

          //原生js获取
          //let u = document.querySelector('#username')
          //console.log('u', u.value)


          //vue 通过refs 获取属性
          //let a = this.$refs.age.value
          //console.log('a', a)


          //双向数据绑定

          console.log(this.userinfo)
    }
  },


  //计算属性
  computed:{
    reverseMsg(){
      return this.msg.split("").reverse().join("");
    },
    searchData(){
        var tmp = [];

        this.listData.forEach( (value) => {
            if (value.indexOf(this.keyword) != -1 && this.keyword != "") {
              tmp.push(value)
            }
        })
        return tmp; 
    }
  },


  //监听数据
  watch:{

  },

  //页面加载的时候初始化
  mounted() {

    let listTodo =   storage.get('listTodo')
    if(listTodo) {
      this.listTodo = listTodo
    }
  },

}
</script>

<!-- 定义css -->
<style>

  div{
    text-align: center;
    color: rgb(78, 192, 83);
  }

  ul {
    list-style: none;
  }

  .red{
    background: red;
    width: 100px;
    height: 100px;
    text-align: center;
  }

  .yellow{
  background: yellow;
  width: 100px;
  height: 100px;
  text-align: center;
}

.active{
  background: blueviolet;
   width: 100px;
   height: 100px;
   text-align: center;
}

.pink{
  background: pink;
}
</style>
