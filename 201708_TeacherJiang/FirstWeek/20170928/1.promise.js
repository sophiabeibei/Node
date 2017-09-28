//->先读取一个文件,读完后将内容输出;
//->解决异步的方案,就是callback函数
//->callback转换成promise,通过promise转换成generator;通过generator转换成async await;


//->callback: 将后续逻辑当作参数传递给异步的方法中,当异步执行后再执行回调函数;
//->回调函数的缺陷问题: 1.回调地狱;2.同步异步的过程;(回头讲node的时候会详细讲);

//->典型的异步
let str= "";
function read(callback) {
    setTimeout(()=>{//->setTimeout本来就是异步的;
        str = "hello";
        callback(str);
    },3000);
}
let out = ()=>{console.log(data);};//->打印出hello
read(out);






