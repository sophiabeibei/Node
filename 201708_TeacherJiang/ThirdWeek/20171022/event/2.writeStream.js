let fs = require("fs");

//->ws: 表示的是可写流对象;
//->默认写入的编码格式utf8;

let ws = fs.createWriteStream("2.txt");//->16k
console.log(ws);
//ws.write("1",function(){console.log("ok")});//->这个方法是异步的;  只能是string 或者 buffer类型;

let flag = ws.write("1");
console.log(flag);//->此返回值用来描述是否可以继续写入;比如说如果读取了64k,写的空间16k;发现往文件中写不下,返回false;就不要再继续读取了;

//->drain方法: 抽干方法;当内存中的内容全部写入文件后,触发此函数;
ws.on("drain",function(){
    console.log("drain");
});
ws.end("1");//->会将end中的内容再次调用write方法,最后将文件关闭;

//->end方法的特点: end方法会将没有写入的内容强制写入最后再关闭;






































