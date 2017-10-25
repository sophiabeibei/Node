let http = require("http");
let url = require("url");
let sliders = require("./db/sliders");
let fs = require("fs");

function getBook(cb) {
  fs.readFile("./db/book.json","utf8",function (err, data) {
    if(err || data.length === 0) {//->如果文件不存在或者内容是空,传递空数组;
      cb([]);
    }else{
      cb(JSON.parse(data));//->data: 默认时buffer类型;
    }
  })
}
getBook(function (data) {
  console.log(data);
});
http.createServer(function (req, res) {
  let {query,pathname} = url.parse(req.url,true);
  //->实现轮播图接口
  if(pathname === "/api/sliders"){
    res.end(JSON.stringify(sliders));//->第一个接口(sliders里的数据)
  }else if(pathname === "/api/hot"){
    getBook(function (data) {
      res.end(JSON.stringify(data.reverse().slice(0,12)));
    })
  }
}).listen(3000);
