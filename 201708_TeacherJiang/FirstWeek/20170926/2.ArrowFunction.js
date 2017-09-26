//->ArrowFunction: 箭头函数
//->箭头函数: 没有this指向,没有aurguments
//->需要改变this就有箭头函数

//--------------------------------------------------改变this指向方法1: var that = this;
//->1.var that = this;
// let obj = {
//     a: 1,
//     b: function () {
//         var that = this;
//         setTimeout(function () {
//             console.log(that.a);
//         })
//     }
// };
// obj.b();

//--------------------------------------------------改变this指向方法2: bind: 绑定this
//->2. bind: 改变this指向
// let obj = {
//     a: 1,
//     b: function () {
//         var that = this;
//         setTimeout(function () {
//             console.log(this.a);
//         }.bind(this))
//     }
// };
// obj.b();

//--------------------------------------------------改变this指向方法2: bind: 绑定this;bind只能绑定一次;
//->2. bind: 改变this指向
// let obj = {
//     a: 1,
//     b: function () {
//         setTimeout(function () {
//             console.log(this.a);
//         }.bind(this).bind(1).bind(2).bind(3))
//     }
// };
// obj.b();


//--------------------------------------------------改变this指向方法3:
//->3. 箭头函数
//------------------------------------------------普通函数
// function a(x, y) {
//     return x+y;
// }

//------------------------------------------------箭头函数
// let a = (x,y) => x+y;

//------------------------------------------------普通函数
// function x(a) {
//     return function (b) {
//         return a+b;//->3
//     }
// }
// console.log(x(1)(2));

//------------------------------------------------分析后,变成箭头函数
// let x = a => {
//     return b =>{
//         return a+b;
//     }
// };
// console.log(x(1)(2));


//------------------------------------------------分析后简化的箭头函数: 叫高阶函数(超过俩箭头的就是高阶函数);源码里有的会出现四个箭头;
//->分析后简化:
// let x = a =>b => a+b;
// console.log(x(1)(2));

//->3个箭头
// let x = a =>b => c=> a+b+c;
// console.log(x(1)(2)(3));

//------------------------------------------------剩余运算符
let x = (a,...rest)=>{//->剩余运算符
    console.log(...rest);//->展开运算符    2   3
};
x(1,2,3);


let obj = {};




