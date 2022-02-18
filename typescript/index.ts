/**
 *  typescript 中的数据类型 、 为了编写更加规范
 *  布尔类型
 *  数字类型
 *  字符串类型
 *  数组类型
 *  元组类型
 *  枚举类型
 * 
 * 
 *  任意类型
 *  null  和 undefined
 *  void 类型
 *  never 类型 
 */


//布尔类型
 let flag:boolean  = false

//数值类型 number
let num:number = 123
num = 12.3

 
//字符串类型 string
let str:string = '你好 ts1234'
console.log(str)

//数组类型 array
let arr:string[] = ['1', '2', '3', '4']
let arr1:number[] = [1, 2, 3, 4]
let arr3:any[] = [1, 2, 3, 4, '5', true, ['1', '2']]
let arr4:Array<string> = ['php', 'javascript', 'python']

//元组类型 tuple  属于数组一种 - 可以指定数组元素的类型
let tuple:[string, number, boolean] = ['ts', 4.55, true]


//枚举类型 、类似变量
 enum Flag {
     success = 1,       //成功 
     error = -1         //失败
 }
 let f:Flag = Flag.success
 console.log('f',f)

 enum Color {
     red, blue, orange = 3
 }
 let c:Color = Color.orange
 console.log('c', c)


 //任意类型 any

 var obox:any = document.getElementById('box')
 console.log(obox)
 obox.style.color = 'red'

 

// null 和 undefined 和 number 类型、 允许有多个参数类型
var b:number|undefined|null  = null
console.log(b)



// void 类型 tsc 中的void 没有任何类型,一般是用于定义方法的时候没有返回值
run()
function run():void {
    console.log('hello run')
}



//never类型： 是其他了 (包括 null 和 undefined) 的子类型, 代表从不会出现的值
//意味着声明的never的变量 只能被 never 类型所复制 \ 指定类型才通过


//几乎用不上
let ff:never
// ff = (() => {
//     throw new Error('error')
// })()



// 函数的定义

    //es5 定义函数的方法
    //函数申明法
    // functuion arr(){

    // }
    // //匿名方法
    // var arr = function(){
    // }

    // ts 中定义方法

    function func1():number {
        return 1
    }

    function func2():number[] {
        return [1, 2, 3]
    }

    console.log(func2())

    //ts 的匿名函数
    let f3 = function():string[]{
        return ['1','2','3']
    }


    //ts的定义方法传参

    // function getInfo(name:string, age:number):string{
    //     return name +'---'+ age
    // }

    // alert(getInfo('zs', 20))

    //匿名
    // var gg = function(name:string, age:number):string{
    //     return name +'---'+ age
    // }

    // alert(gg('zs', 20))


    //没有返回值的方法

    function run1():void{
        console.log('rrrr')
    }
    run1()

    //方法可选参数

    //es 的实参和行参可以不一样, 但ts中必须一样，如果不一样就需要配置可选参数
    //可选参数必须配置在参数最后面
    // function getInfo(name:string, age?:number):string{

    //     if(age) {
    //         return `${name} --- ${age}`
    //     } 

    //     return `${name} --- 年龄保密`

    // }

    // alert(getInfo('zs', 20))


    //默认参数 、 可选参数
    //es5 和 es6 和 ts 中 都可以设置默认参数
 
    // function getInfo(name:string='zs', age:number=20):string{
    //     return `${name} --- ${age}`
    // }
    //alert(getInfo())

    

    //剩余参数

    // function sum(a:number ,b:number, c:number, d:number):number {
    //     return a+b+c+d
    // }

    function sumd(...result:number[]):number {
        let sum = 0
        for(let i = 0; i < result.length; i++) {
            sum += result[i]
        }
        return sum
    }

    //alert(sumd(1,2,3,4,5,6,7,8,9,10))

    console.log(arr.slice(0,5))
    

    /**
     * ts 中自定义方法传入参数对 json 进行约束
     */

    // function printLable(lableInfo:{lable:string}) :void 
    // {
    //     console.log('print', lableInfo)
    // }

    // printLable({lable:'zs'})


    // 对批量方法传入参数 进行约束

    //接口：行为和动作的规范，对批量方法进行约束 
    //共用接口规则、严格要求 interface 的规则进行
    interface fullname 
    { 
        fistName:string;    //注意; 结束
        secName:string;
    }

    function printName(name:fullname):void 
    {
        console.log('print', name.fistName + '--' + name.secName)
    }

    // function printInfo(name:fullname) :void 
    // {
    //     console.log('print', name.fistName + '--' + name.secName + '--' +name.age)
    // }

    //传入的参数必须包含字段
    printName({fistName:'wh', secName:'zs'})

    //printInfo({fistName:'wh', secName:'zs', age: 20})


    //ts 函数重载

    //java中方法的重载：重载指的是二个或者二个以上同名函数，但他们的参数不一样、这时会出现函数重载的情况

    //typescript中的重载： 通过为同一个函数提供多个函数类型定义来试下多种功能的目的

    //ts 为了兼容es5 \ es6 重载的写法 和 java中有区别

    //es5 出现同名方法、下面的会替换上面的方法
    // function css(c){

    // }

    // function css(c,v){

    // }

    //ts 中的重载 允许多个重载 、 但毫无意义

    function getInfo(name:string):string

    function getInfo(age:number):number

    function getInfo(name:string, age:number):string

    function getInfo(str:any):any{
        if(typeof str === 'string'){
            return '我叫' + str
        } else {
            return '我的年龄是' + str
        }
    }

    //alert(getInfo('zs'))

    //箭头函数 es6
    
    // setTimeout(() => {
    //     alert('run')
    // })

    //es5方式
    // setTimeout(function(){
    //     alert('run')
    // },1000)

    //4、typeScript 中的类

    //1、 ts 中类的定义 、 继承 、 组合

    // class Person{

    //     name:string    //属性

    //     constructor(name:string){
    //         this.name = name 
    //     }

    //     run():string{
    //         return `${this.name} --- 在运动`
    //     }

    //     getName():string{
    //         return this.name
    //     }

    //     setName(name:string):void{
    //         this.name = name
    //     }

    // }

    // let p = new Person('张三')
    // console.log(  p.getName() )
    // p.setName('李三') 
    // console.log(  p.getName() )
    // console.log(  p.run() )



    // class Web extends Person {
    //     constructor(name:string) {
    //         super(name) //继承父类 类似parent 调用

    //         this.name = 'hello'
    //     }

    //     work(){
    //         alert(`${this.name} ---  你好`)
    //     }

    //     run():string {
    //         return `${this.name} --- 在子类run`
    //     }
        
    // }

    // var W = new Web('李四')
    // console.log(  W.run() )
    // W.work()


    //类的修饰符 、 
    /**
     * public       在当前类、子类、外部都可以访问
     * protected    在当前类、 子类可以访问 、外部无法访问
     * private      在类里面可以访问、子类、类外部都无法访问
     */
//     class Person{
//         public name:string
        
//         protected age:number

//         private sex:number

//         constructor(result:any[]){
//             this.name = result[0]
//             this.age = result[1]
//             this.sex = result[2]
//         }

//         getInfo():any{
//             return [this.name, this.age, this.sex]
//         }
//     }

//    var P = new Person(['zs', 20, 1])

//    console.log(P.getInfo(), P.name,)

//     //属性“age”受保护，只能在类“Person”及其子类中访问。
//     //属性“sex”为私有属性，只能在类“Person”中访问。
//     //console.log(P.age, P.sex)

//    class Web extends Person {
     
//         //父类继承
//         constructor(result:any[]){
//             super(result)
//         }

        
//         run():string{
//             return `${this.age} --- ${this.age} --- 年龄`
//         }

//         getInfo1():any[] {
         
//              let arr = this.getInfo()
//              console.log('子类', arr)
//              return arr
//         }
//    }

//      var W = new Web(['知识', 25, 0])

//      alert(W.run())

//      W.getInfo1()


// ts 的静态方法

// class Person {
//     public name:string
//     public static age:number = 20
//     constructor(name:string){
//         this.name = name
//     }
//     run(){
//         alert(`${this.name} --- 在运动`)
//     }

//     public static work(){
//         alert(`${this.age} --- 在工作`)
//     }
// }

// console.log(Person.age)
// Person.work()


//多态：父类定义一个方法不去实现、让继承的子类取实现、每一个子类有不同的表现
//多态属于继承
//  class Animal{

//     name:string

//     constructor(name:string){
//         this.name = name
//     }

//     eat() : void {
//         console.log('吃的方法')
//     }
    
// }

// class Cat extends Animal{
//     constructor(name:string){
//         super(name)
//     }

//     eat() : void {
//         console.log(`${this.name} 吃的猫粮`)
//     }
// }


// class Pig extends Animal{
//     constructor(name:string){
//         super(name)
//     }

//     eat() : void {
//         console.log(`${this.name} 吃的饲料`)
//     }
// }

// let A = new Animal('animal');
// let C = new Cat('cat');
// let P = new Pig('pig');

// A.eat()
// C.eat()
// P.eat()


//抽象方法 、提供其他类继承的积累、不能直接被实例化
//用abstract 关键字定义抽象类和抽象方法、 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
//用abstract 必须包含一个以上 abstract的方法或者属性

// abstract class Person{
    
//     abstract name :string

//     abstract eat():any

//     sleep(){
//         console.log('sleep')
//     }
// }


// class eat extends Person{
//     name:string = '123'
//     eat():any{
//         console.log('吃吃吃')
//     }

//     work(name:string):string{
//      return `${name} -- 在学习`
//     }
// }

// let e = new eat()
// e.eat()
// e.sleep()
// console.log(e.work('ldk'))




/**
 * typescript 的接口作用
 * 用来约束行为和动作的规范、起到了一个封装的作用、同时增加了更灵活的接口类型、包括属性、函数、可索引和类
 * 定义标准：
 * 属性类接口
 * 函数类型接口
 * 可索引接口
 * 类类型接口
 * 接口扩展
 */


// 1、 属性接口 、对json的约束 、参数的顺序可以不一样

// interface checkParams {
//     name:string;
//     age:number;
//     sex:boolean;
//     addr?:string;       //可选
// }

// function printLab(data:checkParams):void
// {
//     console.log('printLab',data)
// }


// let data = {
//     name:'whldk',
//     age:25,
//     sex:true,
//     addr:'武汉'
// }
// printLab(data)


// interface Config{
//     type:string;
//     url:string;
//     data?:string;
//     dataType:string
// }

// function ajax(config:Config) {
//     let xhr = new XMLHttpRequest()
//     xhr.open(config.type, config.url, true)
//     xhr.send(config.data)
//     xhr.onreadystatechange=(() => {
//         if(xhr.readyState === 4 && xhr.status === 200) {
//             if(config.dataType === 'json') {
//                 JSON.parse(xhr.responseText)
//             } else {
//                 console.log(xhr.responseText)
//             }
//         }

//         if(xhr.readyState === 4 && xhr.status !== 200) {
         
//                 //console.log('xhr', xhr)
//                 if(config.dataType === 'json') {
//                     let data =  JSON.parse(xhr.responseText)
//                     console.log('d',data)
//                 } else {
//                     console.log('11',xhr.responseText)
//                 }
            
//         }
//     })
// }

// ajax({
//     type:'get',
//     url:'https://www.xinke081.cn/mengoo-esp/site/school',
//     data:'',
//     dataType:'json'
// })



//函数类型接口:对方法传入的参数、 以及返回值进行约束

interface encrypt{
    (key:string, value:string):string
}

let md5:encrypt = function(key:string, value:string):string{
    return key + value
}

console.log(md5('name','zs'))


//可索引接口:数组、对象的约束（不常用）

// interface UserArr {
//     [index:number]:string
// }

// var arr_col:UserArr = ['1','2', '3']



// //类 类型接口 、对类的约束 和抽象类有点相似

// interface Animal {
//     name:string;
//     eat(str:string):void;
// }

// class Dog implements Animal {
//     name: string;
//     constructor(name: string){
//      this.name = name
//     }
//     eat(str: string): void {
//         console.log('str',this.name + str)
//     }
// }

// let D = new Dog('小黑')
// D.eat('zs')


//接口扩展 ： 接口可以继承接口


// interface Animal {
//     eat():void;
// }



// interface Person extends Animal {
//     work():void;
// }

// class Web implements Person{
//     public name:string;
//     constructor(name:string){
//         this.name = name
//     }
//     eat(): void {
//         console.log('eat')
//     }

//     work(): void {
//         console.log('work')
//     }
// }

// let W = new Web('ldk')

// W.eat()
// W.work()



/**
 * 泛型 ： 软件工程中、我们不仅要创建一致的定义良好的API 、同时也要考虑可重用性、
 * 组件不仅能支持当前的数据类型、同时也能支持未来的数据类型、这在创建大型系统时为你提供了十分灵活的功能
 * 在像C# 和 JAVA 这样的语言中， 可以使用泛型来创建可重用的组件、一个组件可以支持多种类型的数据，
 * 通俗理解： 泛型就是解决 类、 接口、 方法的复用性、 以及对不特定数据类型的支持
 * 泛型：可以支持不特定的数据类型
 */



//只能返回string 类型的数据
function getData(value:string):string{
    return value
}


//同时返回 string 和 number
function getData1(value:string|number):string|number
{
    return value
}

//任意类型
function getData2(value:any):any{
    return value
}


function getData3<T>(value:T):T{
    return value
}


//同时返回 string 类型 和 number 类型

// interface S{
   
// }

// let key:S = '123'
// let key:string  = '123'



class MinClass<T>{

    public list:T[] = [];

    add(num:T):void {
        this.list.push(num)
    }

    min():T{
        var min = this.list[0]
        for(var i = 0; i < this.list.length; i++) {
            if(min > this.list[i]) {
                min = this.list[i]
            }
        }
        return min
    }
}

// var m = new MinClass<number>()  /**实例化 并且制定了类的T代表的类型是number */
// m.add(1)
// m.add(13)
// m.add(23)
// m.add(33)
// m.add(43)

// alert(m.min())

// var m1 = new MinClass<string|number>()  /**实例化 并且制定了类的T代表的类型是string */
// m1.add('a')
// m1.add('b')
// m1.add('c')
// m1.add('d')
// m1.add(2)

// alert(m1.min())

//1、 泛型接口

// interface config{
//     <T>(value:T):T;
// }

// var getData4:config=function <T>(value:T):T{
//     return value;
// }

//2  泛型接口

// interface config<T> {
//     (value:T):T;
// }

// function getData5<T>(value:T):T{
//     return value
// }

// //var gd:config<string>=getData5

// var gd = getData5('123')


class User {
    username:string|undefined;
    password:string|undefined
}

class Db{
    add(user:User):boolean{
        console.log('user',user)
        return true;
    }
}

// var u = new User({username:'zs', password:'123456;});    //初始化赋值

// var db = new Db();

// db.add(u)


//操作类的 泛型
class Mydb<T> {
    add(info:T):boolean{
        console.log('info',info)
        return true;
    }
}
var u = new User()

//外面赋值
u.username = 'zs'
u.password = '123456'


var d = new Mydb<User>()
d.add(u)


//提前与类映射



// 8 模块
// 8.1  模块的概念
// 8.2  模块导出的几种方法
//  1、export 导出声明
//  2、export 导出语句
//  3、export default
//  4、import导入模块
// 8.3 模块化封装db库



/**
 *  9 命名空间
 *  在代码量较大的情况下、为了避免各种变量命名相冲突、 可以将相似功能的函数、类、接口等放置到命名空间内
 *  
 *  命名空间和模块的区别
 *  
 *      命名空间 ： 内部模块、主要用户组织代码、避免命名冲突
 *      模块：      ts的外部模块的简称，侧重代码的重用，一个模块里支持多个命名空间
 */

 namespace A1{

     export class Cat{
          
        public str:string = '123'
        arr():void{
            console.log('A')
        }
     }
     
    

    
}

 namespace B1{


    export class Cat{
        
        public str:string = '123'
        arr():void{
            console.log('A')
        }
     }

}
   

  
//命名空间对外
new A1.Cat().arr()


let s =new A1.Cat().str
console.log('s',s)