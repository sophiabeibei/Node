
let fs = require("fs");
function read(url){
    return new Promise((resolve,reject)=>{
        fs.readFile(url,"utf8",function (err,data) {
            if(err) return reject(err);
            resolve(data);
        });
    });
}

//->async中才能使用await;
async function a() {
    //->sxync和await是基于promise的;
    //->第一种写法: 执行时间: 读完20171022.txt,再读2.txt;
    /*let result1 = await read("1.txt");
    let result2 = await read(result1);
    console.log(result2);*/

    //->第二种写法:
    let result = await Promise.all([read("1.txt"),read("2.txt")]);
    console.log(result)
}
a();

//->all方法: 解决回调函数嵌套的问题;第一次输出的结果作为下一次的输入;
//->Promise.all([p1,p2,p3]).then((array)=>{}).catch;成功后的结果也是Promise对象;

//->rece方法: 赛跑;谁先执行就返回谁的结果;如果第一个请求就失败了,那就失败了;--很少用这个方法;
//->Promise.race([p1,p2,p3]).then((array)=>{}).catch;