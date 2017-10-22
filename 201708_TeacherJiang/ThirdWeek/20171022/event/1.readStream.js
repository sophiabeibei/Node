let fs = require("fs");

//->highWaterMark: 默认表示一次读64kb;
let rs = fs.createReadStream("1.txt",{highWaterMark: 1});

//Buffer.concat([buff1,buff2]);

//->非流动模式,监听一个data事件;node内部会不停的触发这个事件;
let arr = [];

//->on("data")
rs.on("data",function (chunk) {//->chunk: 接的是数据;类型: buffer;
    arr.push(chunk);
    rs.pause();//->pause方法: 暂停的是data方法的触发;

    console.log(chunk);
    setTimeout(()=>{
        rs.resume();//->恢复data事件触发;
    },1000);
});

//->on("end")
rs.on("end",function () {//->当文件读取完毕后会触发end事件;
    console.log(Buffer.concat(arr).toString());
    console.log("end");
});

//->on("error")
rs.on("error",function(){});

//->4个方法:
//->1.on("data");2.on("end"); 3.rs.pause(); 4.rs.resume();



















