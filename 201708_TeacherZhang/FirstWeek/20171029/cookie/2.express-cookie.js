let express = require("express");
//=>这个中间件能获取请求头中的cookie字段,并且把它转成一个字段,然后赋给req.cookies;
//require("cookie-parser");
let cookieParser = require("cookie-parser");
let app = express();
//=>使用此中间件之后,req请求对象多了一个cookies属性;
app.use(cookieParser());
app.get("/write",function (req, res) {
    //========================不指定任何参数的=====================
    //->1.不指定任何参数
    //res.cookie("name","zfpx");
    //========================不指定域名=====================
    //->2.指定域名,指定这个cookie归谁所有,当向哪个域名发请求的时候才会带上此cookie;默认值是当前域名;
    //->a.zfpx.cn b.zfpx.cn都指向本地127.0.0.1
    //=>三个域名都指向了本机的IP地址;
    //->配置host文件;
    //Set-Cookie: name=zfpx; Domain=a.zfpx.cn;path=/
    //比如说你访问的是http://a.zfpx.cn:8080/write
    /*res.cookie("name","zfpx",{
        domain: "a.zfpx.cn"
    });*/
    //==================================================
    //path 指定路径
    //如果指定了cookie的路径,那么只有当客户端再次向服务器发送;指定路径的请求时,才会发送cookie;否则其它路径补发送;
    /*res.cookie("name","zfpx",{path: "/read1"});*/
    //==================================================
    /*res.cookie("name","zfpx",{
        expires: new Date(Date.now()+10000)
    });*/
    //==================================================
    /*res.cookie("name","zfpx",{
        maxAge: 10000
    });*/
    //==================================================
    res.cookie("name","zfpx",{
        //->如果设置了httpOnly的参数之后,就表示JS再也无法读取cookie了
     httpOnly: true
     });
    res.send("write ok");
});
//->res.coolie方法是由express提供的
//->req.cookies是由cookieParser中间件提供的;
app.get("/read1",function (req, res) {
    //->name=zfpx querystring.parse(str);
    res.json(req.cookies);
});
app.get("/read2",function (req, res) {
    //->name=zfpx querystring.parse(str);
    res.json(req.cookies);
});
//->统计每个客户端访问服务器的次数;
app.get("/visit",function (req, res) {
    //->1.先试图获取客户端的cookie里的访问次数;
    let visit = req.cookies.visit || 0;
    //->2.把访问次数+1;
    visit++;
    //->3.把最新的访问次数写回客户端;
    res.cookie("visit",visit);
    //->写个响应体
    res.send("欢迎你的第{visit}次访问");
});
app.get("/clear",function (req, res) {
    //->Set-Coookie visit=     等于空;
    res.clearCookie("visit");
    res.send("重置访问次数");
});
app.listen(8080);








