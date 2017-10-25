let http = require("http");
let url = require("url");
http.createServer(function (req, res) {
  let {pathname,query} = url.parse(req.url,true);
  if(pathname === "/jsonp"){
    let u = JSON.stringify({user: "zfpx"});
    res.end(`${query.cb}(${u})`);
    //->query.cb: 拿到的是前端的函数名;---b
  }
}).listen(9999);




