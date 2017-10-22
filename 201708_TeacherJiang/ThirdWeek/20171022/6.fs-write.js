let fs = require("fs");


//->如果文件粗存在会创建文件;如果文件存在会将内容清空;
//->默认写入是utf8格式;读的是buffer,写的是字符串;
//fs.writeFileSync("1.txt",new Buffer("珠峰"));

fs.writeFile("1.txt","珠峰",function (err,) {//->     asynchronous: 异步的回调;
    if(err) console.log(err);
});

















