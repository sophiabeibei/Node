//->配置node环境   setting->npm
//->配置es环境  setting->language ->es6

//--------------------------------------------------------------
//1.includes: 包含,包括;  返回的是boolean类型
// console.log([1,2,3].includes(4));//false   indexOf
// console.log([1,2,33].includes(4));//false   indexOf


//->2.1.some: 找的是true; every: 找的false;    some和every是一对,返回的都是boolean类型;

//---------------------------------------------------编程式的写法
//->编程式风格: 看到运行的过程,代码逻辑,多!!!
// let ary = [1,2,3,4,5,6],
//     //->声明式: 不关心如何实现
//     flag = false;
// for (let i = 0; i < ary.length; i++) {
//     let cur = ary[i];
//     if(cur>3){
//         flag = true;
//         break;
//     }
// }
// console.log(flag);//->true


//----------------------------------------声明式的写法: 2.1.1声明式  some
// let ary = [1,2,3,4,5,6];
// let flag = ary.some(function (item, index) {//->some: 声明式
//     //->this: window
//     console.log(item);//->循环了四次,一旦有true,就停止了;
//     return item > 3;//->如果有一项返回true,则结果就是true
// });
// console.log(flag);//->true


//----------------------------------------现在的变成风格: 2.1.2声明式  every
// let ary = [1,2,3,4,5,6];
// let flag = ary.every(function (item, index) {//->some: 声明式
//     //->this: window
//     console.log(item);//->循环了1次,返回false;
//     return item > 3;//->如果有一项返回false,则结果就是false
// });
// console.log(flag);//->false


// 3.1.找到某一项,找到一项后就返回;返回的是找到的那一项;如果找不到,则返回undefined;
//----------------------------------------跟some和every很像的: find
// let ary = [1,2,3,4,5,6];
// let obj = ary.find(function (item, index) {
//     //->this: window
//     return item > 3;//->4
//     // return item > 100;//->undefined
// });
// console.log(obj);//->3: 返回4          100: 返undefined


// 4.1.filter: 过滤;返回的是一个新数组;如果回调函数中返回true,表示是要;会将这一项放到新数组中; splice: 数组塌陷;
//----------------------------------------filter
//->  ||: 有一个为true则返回true;  &&: 有一个false,都是false;
// let ary = [1,2,3,4,5,6];
// let obj = ary.filter(function (item, index) {
//     //->需求: 删除2,4;
//     return item !==2 && item !==4;//-> 返回[ 1, 3, 5, 6 ]  表达式返回true就是保留,返回false则删除;
//     // return item !==2 || item !==4;//->[ 1, 2, 3, 4, 5, 6 ]
// }/*,1*/);//->1: 改变的是this指向;
// //->每个callback后面都有一个参数,是改变this的指向;
// console.log(obj);


// 5.1.map: 映射;映射成一个新的数组;
//----------------------------------------map: 有修改的功能
// let ary = [1,2,3,4,5,6];
// let obj = ary.map(function (item, index) {
//     //->需求: 数组中的每项乘以2;
//     // return item * 2;//->[ 2, 4, 6, 8, 10, 12 ]   返回值会作为当前项的替代
//     // return undefined;//->[ undefined, undefined, undefined, undefined, undefined, undefined ]
//
//     // if(item === 3){return 5;}//->[ undefined, undefined, 5, undefined, undefined, undefined ]
// });
// console.log(obj);


// 6.1.reduce: 收敛;返回叠加后的结果;
//----------------------------------------reduce: 收敛;参数有4个:       reduce: 从后往前;
/*参数有4个:
 * 参数1: 代表的是数组中的第一项;prev
 * 参数2: 当前项  next
 * 参数3: 当前项的索引
 * 参数4: 原数组
 * */
// let ary = [1, 2, 3, 4, 5, 6];
// let obj = ary.reduce(function (prev, next) {
//     //->第一次的返回值,会作为下一次的上一次;
//     // console.log(arguments);
//
//     // 需求: 求和
//     return prev + next;
// });
// console.log(obj);




// 6.1.题
//----------------------------------------reduce: 习题;
// let ary = [{price: 20,count: 1},{price: 39,count: 2},{price: 56,count: 5},{price: 56,count: 5}];
// let obj = ary.reduce(function (prev, next, index) {
//     // 需求: 求和
//     if(index === 1){//->index === 1: 是循环的第一次;加出来的是数字;数字会作为下一次的上一次;
//         return prev.price * prev.count + next.price * next.count;
//     }
//     return prev + next.price * next.count;
// });
// console.log(obj);



// 6.1.2题
//----------------------------------------reduce: 习题2;
// let ary = [0,{price: 20,count: 1},{price: 39,count: 2},{price: 56,count: 5},{price: 56,count: 5}];
// let obj = ary.reduce(function (prev, next, index) {
//     // 需求: 求和
//     return prev + next.price * next.count;
// });
// console.log(obj);



// 6.1.3题
//----------------------------------------reduce: 习题3;
// let ary = [{price: 20,count: 1},{price: 39,count: 2},{price: 56,count: 5},{price: 56,count: 5}];
// let obj = ary.reduce(function (prev, next, index) {
//     // 需求: 求和
//     return prev + next.price * next.count;
// },0);//->在第二个参数上指定第一次的prev
// console.log(obj);



// 6.1.4题: 数组扁平化
//----------------------------------------reduce: 习题4;数组扁平化
// let ary = [[1,2,3,],[4,5,6],[7,8,9]];
// let obj = ary.reduce(function (prev, next) {
//     return prev.concat(next);
// });
// console.log(obj);



// 6.1.5: 数组扁平化
//----------------------------------------reduce:
let ary = [{price: 20,count: 1},{price: 39,count: 2},{price: 39,count: 2}];
let obj = ary.reduce(function (prev, next, index) {
    // 需求: 求和
    console.log(prev, next, index);//->循环三次
    /*
    * 第一次: 0 { price: 20, count: 1 } 0
    * 第二次: 20 { price: 39, count: 2 } 1
    * 第三次: 98 { price: 39, count: 2 } 2
    * */
    return prev + next.price * next.count;//->176
},0);
console.log(obj);

































