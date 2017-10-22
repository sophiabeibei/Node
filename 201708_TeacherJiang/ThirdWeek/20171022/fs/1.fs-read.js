//http://nodejs.org/dist/latest-v
//->fs内置模块核心模块(file System)
let fs = require("fs");
//->i/o操作: 在node能异步就不要同步;
//->1)使用readFile读取的文件必须要存在;
//->2)默认读取的是buffer类型
//->3)同步会导致阻塞主线程;
/*同步的:
let name = fs.readFileSync("20171022.txt","utf8");
let age = fs.readFileSync("2.txt","utf8");
console.log({name,age});*/

/*异步的*/
//->同步这个异步的结果;
//->回调套回调的时候,可以用promise解决回调地狱;
let school = {};
fs.readFile("20171022.txt","utf8",function(err,name){//->error-first: 错误的;
    if(err) return console.err;
    school.name = name;
    out();
});

fs.readFile("2.txt","utf8",function(err,age){
    if(err) return console.err;
    school.age = age;
    out();
});
function out(){
    if(school.name&&school.age){
        console.log(school);
    }
}









































