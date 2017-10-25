let http = require("http");


//->8080 => 3000 跨域
//->协议,主机名,端口,三者一个不一致都会导致跨域问题;
//->cors: 服务端配置允许前端跨域
//->jsonp: 服务端放回一个方法执行;和ajsx不是一个东西;
//->iframe跨域: postMessage
//->window.name: 可以实现跨域
//->nginx: 可以实现跨域;
//->webpack: 可以实现跨域;上线后配置失效;
let url = require("url");
http.createServer(function (req, res) {
  let {pathname,query} = url.parse(req.url,true);
  if(pathname === "/jsonp"){
    let school = {name: "zfpx"};
    //->"getData(school)"
    res.end(`${query.cb}(${JSON.stringify(school)})`);
    //->query.cb: 拿到的是前端的函数名;---getData
  }
}).listen(3000);
















