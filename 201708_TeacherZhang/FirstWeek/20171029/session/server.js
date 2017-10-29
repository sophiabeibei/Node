let express = require("express");
let session = require("express-session");
let app = express();
//->在express中使用session需要安装一个中间件 express-session
//->当时用了session中间件之后,在req.session这个session就表示本客户端在服务端对应
app.use(session({
    //Forces the session to be saved back to the session store, even if the session was never modified during the request.
    //->....即使绘画没被修改过;
    //->session store: 绘画仓库;保存session信息的仓库;默认是服务器内存,也可以设置为文件,数据库....
    resave: true,
    //->Forces a session that is "uninitialized" to be saved to the store. A session is uninitialized when it is new but not modified.
    //->saveUninitialized即使某个用户从来没有操作过session,也保存一份数据;
    saveUninitialized: true,
    //->secret秘钥: 加密cookie的密钥;让别人识别不出来我写的是什么;
    secret: "zfpx",
    coolie: {
        httpOnly: false,
        maxAge: 10000
    }
}));
app.get("/write",function (req, res) {
    req.session.money = 1160;
    res.send(`已经存入1160元rRMB`);
});
app.get("/read",function (req, res) {
    req.session.money = 1160;
    res.send(`读到${req.session.money}1160元rRMB`);
});
app.get("/visit",function (req, res) {
    let visit = req.session.visit || 0;
    visit++;
    req.session.visit = visit;
    res.send(`欢迎你的第${visit}次访问`);
});
app.listen(8080);