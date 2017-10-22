//=>实现 copy功能,自己写copy: 这种方法有缺陷,会淹没可用内存;疯狂的向内存中读取,希望的是读一点写一点;readFile是做不到的;解决方法: 流;

let fs = require("fs");

//->同步copy
function copySync(source, target) {
    //->使用readFileSync + writeFileSync
    let result = fs.readFileSync(source);
    fs.writeFileSync(target,result);
}
copySync("1.txt","2.txt");


//->异步copy
function copy(source, target, callback) {
    //->使用readFile + writeFile
    fs.readFile(source,function (err, data) {
        if(err) return callback(err);//->如果有错误,把错误传进去;如果没有错误调用声明好的函数
        fs.writeFile(target,data,callback);//->如果写完了调用callback;
    })
}
copy("1.txt","2.txt",(err)=>{
    /*if(err) return console.log(err);
    console.log("拷贝成功");*/
});

//->异步官网废弃掉;用同步的方法;
let flag = fs.existsSync("1.txt");
console.log(flag);//->如果存在就返回true;不存在返回的是false;

//->下午的课程:
//->流
//->node事件
//->http












