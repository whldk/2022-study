// 1、使用ES6 导入语法、导入jQuery
import $ from 'jquery'

//2、导入样式  -在webpack中,一切皆模块，都可以通过ES6导入语法进行导入和使用
//如果某个模块中，使用from接收到的成员为 undefined 、则没必要进行接收
import '@/css/index.css';
import '@/css/index.less';


//导入js
import test from '@/static/info.js'

//2.1 导入图片，得到图片文件
import logo from '@/images/logo.jpg'
$('.box').attr('src', logo)


//3、定义 jQuery 的入口函数

$(function(){
    //1 实现奇偶行的变色 -- 从0下标开始 0 是偶数
    //奇数行
    $('li:odd').css('background', 'pink')

    //偶数行
    $('li:even').css('background', 'cyan')
})


//高级语法
function info(target){
    target.info = 'person info.'
}

@info
class Person{}

console.log(Person.info)

