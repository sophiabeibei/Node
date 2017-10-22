
//=>rs.pipe(ws)
let fs = require("fs");
function copy(soruce, target) {
    let rs = fs.createReadStream(soruce, {highWaterMark: 4});//10个数字//->rs: 返回的是可读流
    let ws = fs.createWriteStream(target, {highWaterMark: 1});//->ws: 返回的是可写流
    rs.pipe(ws);//->将读流的内容导入到可写流中,会默认调用ws的write和end方法
}
copy("1.txt","2.txt");

//->rs.pipe(ws) 与 fs.readFile + fs.writeFile的区别: 64k以上就不建议这种方式;
//->fs.readFile + fs.writeFile: 超过64k不分段;
//->rs.pipe(ws): 到64k就自动分段;
