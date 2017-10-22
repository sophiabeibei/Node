let fs = require("fs");
function copy(soruce, target) {
    let rs = fs.createReadStream(soruce, {highWaterMark: 4});//10个数字//->rs: 返回的是可读流
    let ws = fs.createWriteStream(target, {highWaterMark: 1});//->ws: 返回的是可写流
    rs.on("data", function (chunk) {
        //->chunk: 数据块;
        if (ws.write(chunk) === false) {//->如果写不下,就暂停;调用方法rs.pause();
            rs.pause();//->会暂停事件触发;
        }
    });
    ws.on("drain", function () {//->当给我的内容全部写完后会触发drain事件
        console.log("drain");
        rs.resume();//->恢复读取
    });
    rs.on("end", function () {//->监听读取完毕的事件;
        ws.end();//->关闭文件
    });
}
copy("1.txt","2.txt");






















