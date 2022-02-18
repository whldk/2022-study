"use strict";
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
let flag = false;
//数值类型 number
let num = 123;
num = 12.3;
//字符串类型 string
let str = '你好 ts1234';
console.log(str);
//数组类型 array
let arr = ['1', '2', '3', '4'];
let arr1 = [1, 2, 3, 4];
let arr3 = [1, 2, 3, 4, '5', true, ['1', '2']];
let arr4 = ['php', 'javascript', 'python'];
//元组类型 tuple  属于数组一种 - 可以指定数组元素的类型
let tuple = ['ts', 4.55, true];
//枚举类型 、类似变量
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = -1] = "error"; //失败
})(Flag || (Flag = {}));
let f = Flag.success;
console.log('f', f);
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 1] = "blue";
    Color[Color["orange"] = 3] = "orange";
})(Color || (Color = {}));
let c = Color.orange;
console.log('c', c);
//任意类型 any
var obox = document.getElementById('box');
console.log(obox);
obox.style.color = 'red';
// null 和 undefined 和 number 类型、 允许有多个参数类型
var b = null;
console.log(b);
// void 类型 tsc 中的void 没有任何类型,一般是用于定义方法的时候没有返回值
run();
function run() {
    console.log('hello run');
}
//never类型： 是其他了 (包括 null 和 undefined) 的子类型, 代表从不会出现的值
//意味着声明的never的变量 只能被 never 类型所复制 \ 指定类型才通过
//几乎用不上
let ff;
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
function func1() {
    return 1;
}
function func2() {
    return [1, 2, 3];
}
console.log(func2());
//ts 的匿名函数
let f3 = function () {
    return ['1', '2', '3'];
};
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
function run1() {
    console.log('rrrr');
}
run1();
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
function sumd(...result) {
    let sum = 0;
    for (let i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
//alert(sumd(1,2,3,4,5,6,7,8,9,10))
console.log(arr.slice(0, 5));
function printName(name) {
    console.log('print', name.fistName + '--' + name.secName);
}
// function printInfo(name:fullname) :void 
// {
//     console.log('print', name.fistName + '--' + name.secName + '--' +name.age)
// }
//传入的参数必须包含字段
printName({ fistName: 'wh', secName: 'zs' });
function getInfo(str) {
    if (typeof str === 'string') {
        return '我叫' + str;
    }
    else {
        return '我的年龄是' + str;
    }
}
let md5 = function (key, value) {
    return key + value;
};
console.log(md5('name', 'zs'));
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
function getData(value) {
    return value;
}
//同时返回 string 和 number
function getData1(value) {
    return value;
}
//任意类型
function getData2(value) {
    return value;
}
function getData3(value) {
    return value;
}
//同时返回 string 类型 和 number 类型
// interface S{
// }
// let key:S = '123'
// let key:string  = '123'
class MinClass {
    constructor() {
        this.list = [];
    }
    add(num) {
        this.list.push(num);
    }
    min() {
        var min = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (min > this.list[i]) {
                min = this.list[i];
            }
        }
        return min;
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
}
class Db {
    add(user) {
        console.log('user', user);
        return true;
    }
}
// var u = new User({username:'zs', password:'123456;});    //初始化赋值
// var db = new Db();
// db.add(u)
//操作类的 泛型
class Mydb {
    add(info) {
        console.log('info', info);
        return true;
    }
}
var u = new User();
//外面赋值
u.username = 'zs';
u.password = '123456';
var d = new Mydb();
d.add(u);
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
var A1;
(function (A1) {
    class Cat {
        constructor() {
            this.str = '123';
        }
        arr() {
            console.log('A');
        }
    }
    A1.Cat = Cat;
})(A1 || (A1 = {}));
var B1;
(function (B1) {
    class Cat {
        constructor() {
            this.str = '123';
        }
        arr() {
            console.log('A');
        }
    }
    B1.Cat = Cat;
})(B1 || (B1 = {}));
//命名空间对外
new A1.Cat().arr();
let s = new A1.Cat().str;
console.log('s', s);
