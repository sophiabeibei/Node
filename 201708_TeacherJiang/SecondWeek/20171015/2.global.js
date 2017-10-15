// console.log(global.global.global);
// console.log(this);//->在文件内直接访问this,this不是global(文件执行时外层有一个你看不到的闭包;node天生自带模块化,在闭包中this指向被重新更改了)
// (function () {
//     console.log(this);//->this: global;
// })();

//var a = 1;
//console.log(window.a);//->window is not defined
//console.log(global.a);//->var和global不是一个作用域的;

// global.a = 1;
// console.log(global.a);



//->1)
//->console:
// console.log("log");
// console.warn("warn");
// console.error("error");
// console.info("info");
// console.time();
// console.timeEnd();

// console.time("start");
// for(let a = 0;a<100000;a++){
//
// }
// console.timeEnd("start");



//->Buffer: 缓存区;
//->clearImmediate:

// setImmediate(function () {
//     console.log("第二个小本上立刻执行");
// });
// setTimeout(function () {
//     console.log("第二个小本上立刻执行");
// });



//->等待同步代码执行后再执行;以下这是一个异步;
// process.nextTice(function () {
//     console.log("当前队列的底部");//->等待所有代码都执行完再执行;
// });
//->2)process: 进程;
// console.log(process.pid);
/*setInterval(function () {
    process.kill();//->括号里写pid号;进程号
},3000);*/

//->配置当前运行的环境变量
//->http://localhost:8080
//->http://www.zhufengpeixun.cn区分两地址;用process.env;
// console.log(process.env);
// let url = "";

//->配置dev变量

// if(process.env.NODE_ENV=="dev"){
//     url = "http://localhost:8080";
// }else{
//     url = "http://www.zhufengpeixun.cn";
// }
// console.log(url);







//->以上执行的顺序: 同步>nextTick>setImmediate>setTimeout;



//-4.clearInterval:
//->timeout: 箭头函数中没有this指向;没有arguments'
setTimeout(function(eat,food){
    console.log(this);//->在node中this指向的时自己;
},0,"水果","事务");
console.log(arguments);//->arguments中的属性也叫全局属性,没有挂载在global上;


//->clearTimeout:









