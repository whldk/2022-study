/**
 * 
 * 装饰器、类装饰器、属性装饰器、方法装饰器、 属性装饰器
 * 
 * 普通装饰器（无法传参）， 装饰器工厂（可传参）
 * 
 * 装饰器 ES7 的标准特性之一
 * 
 *  装饰器就是一个方法、可以注入到类、 方法、属性参数上来扩展类、属性、方法、参数的功能
 */


// 1、 类装饰器： 类装饰器在类声明之前被声明（紧靠着类声明），应用于类构造函数、可以监视、修改或替换类定义。传入一个参数


// 装饰器

// function logClass(params:any) {
//     console.log('test',params)

//     params.prototype.apiUrl = '扩展属性'
//     params.prototype.run = function(){
//         console.log('run')
//     }
// }


// @logClass
// class Hc{

//     constructor(){

//     }

//     getData(){

//     }
// }

// var http:any = new Hc()

// http.run()
// console.log('http',http.apiUrl)


/**
 * 装饰器工厂（可传参）
 */


// function log(params:string){
//     return function(target:any) {
//         console.log('data', params, target)
        
//         target.prototype.apiUrl = params
//     }
// }


// @log('http:/www.baidu.com')
// class Http{
//     constructor(){

//     }
//     getData(){

//     }
// }

// var http:any = new Http()

// console.log(http.apiUrl)


/**
 * 
 * 类装饰器
 *  重载构造函数
 *  类装饰器表达式会在运行时当作函数被调用、类的构造函数作为其唯一的参数
 *  如果类张诗琪返回一个值， 它会使用提供的构造函数来替换类的声明
 *  
 */


/**
 * 类构造装饰器、 可以修改、替换类定义 
 * @param target 
 * @returns 
  */
// function logClass(target:any)
// {
//     console.log('target', target)
//     return class extends target{
//         apiUrl:any = '我是修改后的'

//         getData(){
//             this.apiUrl = this.apiUrl + '---'
//             console.log(this.apiUrl)
//         }
//     }
// }


// @logClass
// class HttpClient {
//     public apiUrl:string | undefined;
//     constructor(){
//         this.apiUrl = '我是构造函数的里面的apiUrl'
//     }
//     getData(){
//         console.log(this.apiUrl)
//     }
// }

// var H = new HttpClient();

// H.getData();



/**
 *  2.属性装饰器
 *      属性装饰器表达式会在运行时当作函数被调用， 传入下列2个参数
 *      
 *          1、对于静态成员来说是类的构造函数,对于实力成员是类的原型对象
 *          2、成员的名字
 * 
 */


//  function log(params:string){
//     return function(target:any) {
//         console.log('data', params, target)
        
//         target.prototype.apiUrl = params
//     }
// }

//  function logPrototy(params:any)
//  {
 
//      return function(target:any, attr:any){
//         console.log('target - attr', target,  attr)

//         target[attr] = params
//      }
//  }
 
 
//  @log('xxxx')
//  class HttpClient {
//      @logPrototy('http')
//      public Url:string | undefined;
//      constructor(){
       
//      }
//      getData(){
//          console.log('HttpClient', this.Url)
//      }
//  }
 
//  var H = new HttpClient();
 
//  H.getData();



/**
 * 3、方法装饰器
 * 
 *      它将会被应用方法的 属性描述符上， 可以用来监视， 修改或者替换方法定义
 *       方法装饰会在运行时传入下列3个参数：
 *          1、对于静态成员来说是类的构造函数，对于实例成员是类的原型地下
 *          2、成员的名字
 *          3、成员的属性描述符
 */


//方法装饰器

// function logMethod(param:any) {
//     return function(target:any, method:any, desc:any){
//         console.log('target', target)
//         console.log('method', method)
//         console.log('desc', desc)
//         target.apiUrl = 'xxx';
//         target.run=function(){
//             console.log('run')
//         }

//         //修改装饰器的方法 , 把装饰器方法里面传入的所有参数改为string类型
//         //1 、保持当前的方法

//         var oMethod = desc.value

//         //2、修改当前参数值
//         desc.value=function(...args:any[]) {

//             //循环重构参数值
//             args= args.map((value) => {
//                 return String(value)
//             })

//             console.log('args', args)
//             console.log('oMethod', oMethod)

//             //调用方法
//             oMethod.apply(this, args)
//         }
//     }
// }

// class HttpClient {
//     public url:string | undefined;
//     constructor(){
//     }
//     @logMethod('http:/www.baidu.com')
//     getData(...args:any[]){
//         console.log('HttpClient', args)
//     }
// }

// var Http:any = new HttpClient()

// console.log(Http.apiUrl);

// Http.run();

// Http.getData(123, 'xxx')



/**
 * 
 * 4 、方法参数装饰器
 * 
 *  参数装饰器 表达式会在运行时当作函数被调用, 可以使用参数装饰器的为类的原型增加一些元素数据, 传入下列3个参数
 * 
 *   1、 对于静态成员来说是类的构造函数， 对于实例成员是类的原型对象
 *   2、 参数的名字
 *   3、 参数在函数列表种的索引
 */ 


/**
 * 可以用来做一些验证器
 * @param params 
 * @returns 
 */

// function LogParams(params:any)
// {
//     return function(target:any, paramName:any, paramIndex:any){
//         console.log('params', params)
//         console.log('target', target)
//         console.log('paramName', paramName)
//         console.log('paramIndex', paramIndex)

//         target.apiUrl = params
//     }
// }

//  class HttpClient {
//     public url:string | undefined;
//     constructor(){
//     }
   
//     getData(@LogParams('data') uuid:any){
//         console.log('getdata 方法', uuid)
//     }
// }

// var Http:any = new HttpClient()

// Http.getData(123456)

// console.log(Http.apiUrl)


/**
 * 
 *  5 、 装饰器执行顺序
 *  
 *  属性 》 方法 》 方法参数 》 类
 *  如果有多个同样的装饰求、 它会执行顺序 是从上往下
 */


function logClass(param:string)
{
    return function(target:any){
        console.log('类装饰器-----1')
    }
}


function logClass1(param:string)
{
    return function(target:any){
        console.log('类装饰器-----2')
    }
}


function logAttr(param?:string)
{
    return function(target:any, attrName:any){
        console.log('属性装饰器-----1')
    }
}



function logAttr1(param?:string)
{
    return function(target:any, attrName:any){
        console.log('属性装饰器-----2')
    }
}



function logMethod(param?:string)
{
    return function(target:any, attrName:any, desc:any){
        console.log('方法装饰器-----1')
    }
}

function logMethod1(param?:string)
{
    return function(target:any, attrName:any, desc:any){
        console.log('方法装饰器-----2')
    }
}


function LogParams(param?:string)
{
    return function(target:any, attrName:any, desc:any){
        console.log('方法参数装饰器-----1')
    }
}

function LogParams1(param?:string)
{
    return function(target:any, attrName:any, desc:any){
        console.log('方法参数装饰器-----2')
    }
}



@logClass('hello')
@logClass1('world')
class HttpClient {

    setData(@LogParams() attr1:any, @LogParams1() attr2:any){

    }




 

    @logMethod()
    @logMethod1()
    getData(){
        console.log('getData')
    }

    @logAttr()
    @logAttr1()
    public apiUrl:string|undefined

}

var Http:any = new HttpClient()

Http.getData()

//console.log(Http.apiUrl)
