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

//->process: 进程;
//->Buffer: 缓存区;
//->clearImmediate:
//->clearInterval:
//->clearTimeout:
//->console:
// console.log("log");
// console.warn("warn");
// console.error("error");
// console.info("info");
// console.time();
// console.timeEnd();

console.time("start");
for(let a = 0;a<100000;a++){

}
console.timeEnd("start");
















