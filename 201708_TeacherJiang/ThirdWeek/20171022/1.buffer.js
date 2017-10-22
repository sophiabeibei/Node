//->
var buff = new Buffer(300);
    //->TypeError: First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.
    //->必须是一个buffer....
//->在UTF-8中,一个汉字几个字节!--3个字节;
console.log(buff);

//->
var buffer = new Buffer("珠峰");//-><Buffer e7 8f a0 e5 b3 b0>   6个字节;
console.log(buffer);

//->通过数组创建
var buffer1 = new Buffer([0x16,0x17]);//-><Buffer 16 17>
console.log(buffer1);

//->buffer.slice();截取buffer: 返回一个新的buffer;(内存不能更改,可以截取);
let buffer2 = buffer.slice(0,1);//-><Buffer e7>
console.log(buffer2);

//->copy
var b = new Buffer(12);
var buff1 = new Buffer("珠峰");
var buff2 = new Buffer("培训");

//->targetBuffer: 目标buffer;targetStart: 目标的开始;sourceStart: 源的开始;sourceEnd: 源的结束;默认就是将全部内容进行拷贝;
//->buff1.copy(目标的buffer,目标的开始,源的开始,源的结束);
//buff1.copy(b,0,0,buff1.length);//->
buff1.copy(b,0);//->,0,buff1.length: 后面这俩参数可以省略
buff2.copy(b,buff1.length,0,buff2.length);//->
console.log(b);//-><Buffer e7 8f a0 e5 b3 b0 e7 8f a0 e5 b3 b0>
console.log(b.toString());//->toString可以将buffer转换成字符串;  打印出"珠峰培训"


var buff3 = new Buffer("珠峰");
var buff4 = new Buffer("培训");
//->param3: [buff3, buff3, buff4];是数组的buffer;
//->param4: 1;是返回新buffer的长度
console.log(Buffer.concat([buff3, buff3, buff4], 1).toString());
Buffer.myConcat = function (list,totalLength) {
    //->1.先判断totalLength是否传递: 如果传递,用传递的;
    if(typeof totalLength === "undefined"){
        totalLength = list.reduce((prev,next)=>prev+next.length,0);
        console.log(totalLength);
    }
    //->2.如果没传递,需要自己循环数组,算一个总长;
    //->3.创建一个大buffer将每个小buffer拷贝到buffer中;
    let result = new Buffer(totalLength),
        index = 0;
    list.forEach(buff=>{
        buff.copy(result,index);
        index += buff.length;
    });
    //->4.截取有效长度;
    return result.slice(0,index);

};
Buffer.myConcat([buff3, buff3, buff4]);//->18
console.log(Buffer.myConcat([buff3, buff3, buff4], 2000).toString());






















