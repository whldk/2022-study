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
function printLab(data) {
    console.log('printLab', data);
}
let data = {
    name: 'whldk',
    age: 25,
    sex: true,
    addr: '武汉'
};
printLab(data);
function ajax(config) {
    let xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = (() => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            if (config.dataType === 'json') {
                JSON.parse(xhr.responseText);
            }
            else {
                console.log(xhr.responseText);
            }
        }
        if (xhr.readyState === 4 && xhr.status !== 200) {
            //console.log('xhr', xhr)
            if (config.dataType === 'json') {
                let data = JSON.parse(xhr.responseText);
                console.log('d', data);
            }
            else {
                console.log('11', xhr.responseText);
            }
        }
    });
}
ajax({
    type: 'get',
    url: 'https://www.xinke081.cn/mengoo-esp/site/school',
    data: '',
    dataType: 'json'
});
