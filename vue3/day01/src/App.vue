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
        <li v-for="(item, index) in list" :key="index">
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


    <div>
        <h2>{{msg}}</h2>

        <button @click="setMsg()">setMsg</button>
        &nbsp;
        <button @click="getMsg()">getMsg</button>
        &nbsp;
        <button @click="changeClass()">changeClass</button>
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

</div>



</template>


<!--定义js -->
<script>
export default {
  name:"App",

  //存放数据
  data() {
    return {
      msg:'你好, vue3',
      attr:'title',
      title:'我是一个title',
      info:{
          username:'张三',
          age:20
      },
      h2:"<h2>我是标签</h2>",
      logoSrc:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fc9%2F63%2F77%2Fc963777ebd9c8ebf5583b39565cfa1d7.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647829303&t=4e7879f15ddc85c65477cf0749603f76',
      list:['ldk', 'zs', 'ls'],
      list1:[
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
    setMsg(){
      this.msg = 'hello, vue 3'
    },
    getMsg(){
      alert(this.msg)
    },
    changeClass(){
      this.myClass = (this.myClass === 'red' ?  'yellow' : 'red');
    },
    
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
