let fs = require("fs");
function read(url){
    return new Promise((resolve,reject)=>{
        fs.readFile(url,"utf8",function (err,data) {
            if(err) return reject(err);
            resolve(data);
        });
    });
    
}

//->第一次的then必须通过promise实例调用;第二次的then返回的结果,可以继续then;把结果传递给下一个then中;如果返回的是promise对象;会继续将这个对象向下传递;
//->什么时候用以下写法: 比如,20171022.txt中存的是2.txt的名字;读取2.txt的结果才是最终的结果;
//->promise的链式写法;链式调用;
/*read("20171022.txt").then((data)=>{
    return read(data);
}).then(data=>{
    console.log(data);
}).catch((err)=>{//->任何一个过程中出错都会走catch;
    console.log(err);
});*/

//->为了普通类型也可以支持then的写法可以调用resolve方法;
Promise.resolve([]).then((data)=>{
    return [...data,1]
}).then((data)=>{
    return [...data,2]
}).then(res=>{
    console.log(res);//->[ 1, 2 ]
});
