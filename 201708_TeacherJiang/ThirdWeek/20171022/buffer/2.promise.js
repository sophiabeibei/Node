//->promise是自带的类;可以new;参数是一个执行器;执行器中有两个参数;而且这俩参数的类型是函数: 1.resolve成功;2.reject失败;
let p = new Promise((resolve,reject)=>{
    //->p返回的结果,是个实例;
    //->实例上会拥有一个then方法,then方法中有两个参数,分别是成功的回调和失败的回调;
    setTimeout(()=>{
        //resolve("我爱你");
        reject("不爱了");
    },2000);
});
p.then(function (data) {
    console.log(data);
}, function (err) {
    console.log(err);
});

//->封装一个方法,通过.then的方式拿到结果;