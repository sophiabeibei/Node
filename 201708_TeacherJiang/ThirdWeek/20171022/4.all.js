let fs = require("fs");
function read(url){
    return new Promise((resolve,reject)=>{
        fs.readFile(url,"utf8",function (err,data) {
            if(err) return reject(err);
            resolve(data);
        });
    });
}

//->all方法第一个参数就是promise实例的数组,返回的结果还是一个promise对象;注意: 如果有一个请求失败了,就真的失败了;
Promise.all([read("20171022.txt"),read("2.txt")]).then(([name,age])=>{
    //let [name,age] = data;
    //console.log(data);//->data: 数组类型;  数组可以解构赋值;
    /*let name = data[0];
    let age = data[1];*/
    console.log(name, age);
}).catch(err=>{
    console.log(err);
});


