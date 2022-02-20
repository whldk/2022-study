"use strict";
/**
 * 实现一个操作数据库  支持 mysql、mssql、mongodb
 *  add 、update 、 delete、 get
 *
 *  1、接口：在面向对象的编程中、接口是一种规范的定于i、它定义了行为和动作的规范
 *  2、泛型： 解决类、接口、方法的复用性
 */
class Users {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}
// 定义一个操作mysql的数据库类
// 注意: 要实现泛型接口 这个类也应该是一个泛型类
class MysqlDb {
    add(info) {
        console.log('info', info);
        //throw new Error("Method not implemented.");
        return true;
    }
    update(info, id) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
    get(id) {
        throw new Error("Method not implemented.");
    }
}
var u = new Users('zs', '123456');
var my = new MysqlDb();
my.add(u);
class MssqlDb {
    add(info) {
        console.log('info', info);
        //throw new Error("Method not implemented.");
        return true;
    }
    update(info, id) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
    get(id) {
        throw new Error("Method not implemented.");
    }
}
var u1 = new Users('zss', '123456');
var my1 = new MysqlDb();
my1.add(u1);
