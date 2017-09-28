//->类: promise(不兼容);兼容方案有: es6-promise;(暂时不考虑兼容问题)
//->默认new Promise()就会被直接调用;
//->一旦成功或者失败就停止了,不会再发生状态改变;


let p = new Promise(function (resolve, reject) {//->resolve是then中的第一个函数,reject是then中的第二个函数;
    console.log("word");
});
//->Promise实例上都会有一个then方法;
p.then(function (data) {//->success
    console.log(data);
},function (err) {//->error
    console.log(err);
});

//->封装好的promise写法:
let str= "";
function read() {
    return new Promise(function (resolve, reject) {
        setTimeout(()=>{//->setTimeout本来就是异步的;
            str = "hello";
            resolve(str);
        },3000);
    });
}
read().then(function (data) {
    console.log(data);
},function (err) {});



