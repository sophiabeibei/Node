/**
 * GET /user/signup
 * POST /user/signup
 * GET /user/signin
 * POST /user/signin
 **/
let express = require("express");
let router = express.Router();
//=>此数组保存着所有的用户信息{username,password}
let users = [];
router.get("/signup", function (req, res) {
    //->此路径是相对于模板根目录的子路径,后缀是可以省略;
    //->读取写入的消息,然后通过模板渲染显示在页面上;
    let error = req.cookies.error;
    res.clearCookie("error");
    res.render("signup", {title: "用户注册",error});
});
//=>接收用户的注册表单数组并保存后台(内存,文件,数据库)
router.post("/signup", function (req, res) {
    let user = req.body;
    let exists = users.some(item => item.username == user.username);
    if (exists) {
        //->back: 是一个关键字;表示从哪来,回哪去;回到上一个页面;
        //->应该在此通过cookie保存一个消息提示信息;
        res.cookie("error","用户名已经被占用,请你换个别的用户名吧!");
        res.redirect("back");
    } else {
        users.push(user);//->添加到用户列表中去;表示注册成功;
        res.redirect("/user/signin");
    }
});
router.get("/signin", function (req, res) {
    res.render("signin", {title: "用户登录"});
});
router.post("/signin", function (req, res) {
    let user = req.body;
    //->当数组中有一个用户的用户名和密码跟本次输入的用户名和密码一样的话,则认为登录成功,跳到首页;
    let exist = users.some(item => item.username == user.username && item.password == user.password);
    if (exist) {
        res.redirect("/");
    } else {
        res.redirect("back");
    }
});
module.exports = router;


