let http = require("http");

//->http模块是一个内置模块;
let server = http.createServer(function(req,res){//->监听函数: 当浏览器发送请求时,会执行此函数;
    //->req: 代表的是客户端的请求;--req是可读流
    //->res: 代表的是服务端的响应;--res既是可读流,也是可写流;
    //->可读流的方法?可写流的方法?自己查;
    //res.write("ok");
    console.log(req.method);//->"GET POST PUT DELETE" OPTIONS HEADER
    console.log(req.headers);//->获取请求头,请求头中的数据可以通过小写来获取
    console.log(req.url);//->请求的路径,默认是/斜杠;
    res.setHeader("Content-Type","text/plain;charset=utf-8");
    res.end("好的,欢迎你");//->end里放buffer,或者放string
});
let port = 3000;
server.listen(port,function(){//->127.0.0.1 === localhost   8080: 端口号;尤其是服务端,不建议使用3000以下的,一般使用3000;前端一般使用的8080,8081;
    console.log(`开启${port}`);
});































