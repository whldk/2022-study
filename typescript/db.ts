/**
 * 实现一个操作数据库  支持 mysql、mssql、mongodb
 *  add 、update 、 delete、 get
 * 
 *  1、接口：在面向对象的编程中、接口是一种规范的定于i、它定义了行为和动作的规范
 *  2、泛型： 解决类、接口、方法的复用性
 */

 class Users{
    username:string|undefined;
    password:string|undefined
    constructor(username:string|undefined, password:string|undefined){
        this.username = username
        this.password = password
    }
}



interface DBI<T>{
    add(info:T):boolean;
    update(info:T, id:number|string):boolean;
    delete(id:number|string):boolean;
    get(id:number):any[];
}

// 定义一个操作mysql的数据库类

// 注意: 要实现泛型接口 这个类也应该是一个泛型类
class MysqlDb<T> implements DBI<T>{
    add(info: T): boolean {
        console.log('info', info)
        //throw new Error("Method not implemented.");
        return true;
    }
    update(info: T, id: string | number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: string | number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        throw new Error("Method not implemented.");
    }
}

var u = new Users('zs','123456')
var my = new MysqlDb<Users>()
my.add(u)



class MssqlDb<T> implements DBI<T>{
    add(info: T): boolean {
        console.log('info', info)
        //throw new Error("Method not implemented.");
        return true;
    }
    update(info: T, id: string | number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: string | number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        throw new Error("Method not implemented.");
    }
}

var u1 = new Users('zss','123456')
var my1 = new MysqlDb<Users>()
my1.add(u1)
