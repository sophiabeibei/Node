//->拷贝分为: 浅拷贝/深拷贝


//----------------------------------------------
//->1.浅拷贝: 只拷贝一层;
// let cur = {age:1};
// let obj = {name: 1,age: cur};
// let obj2 = {};
// Object.assign(obj2,obj);
// cur.age = 2;
// console.log(obj2);


//-------------------------------------------------------
//->2.深拷贝: 连根都拷贝过去;(很少有深拷贝,深拷贝只能自己去实现);
let cur = {age:1};
let obj = {name: 1,age: cur,a:function(){}};//->深拷贝不支持函数;
let obj2 = JSON.parse(JSON.stringify(obj));
Object.assign(obj2,obj);
cur.age = 2;
console.log(obj2);


//-----------------------------------------------
//->slice: 是浅拷贝
let a = [1,2,3];
let ary = [1,2,3,a];
let newAry = ary.slice(0);
a[0] = 100;
console.log(newAry);




