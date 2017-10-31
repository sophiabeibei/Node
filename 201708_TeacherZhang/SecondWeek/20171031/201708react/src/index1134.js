//->react是核心库
import React from "react";
//react跟DOM相关的库
import ReactDOM from "react-dom";
//->1.使用ReactDOM的ernder方法,把一个h1标题存放在DOM容器内;
//->2.代码爆红的原因: 因为这种JSX语法是React扩展的语义,跟原生JS不一样;这样的代码不能直接在浏览器中运行的;需要经过webpack中babel-loader的编译;
//->3.React元素是构建React应用的基本单位;
//->4.如果希望在React元素内嵌biaodashi ,则需要用{}包裹起来,表达式就是任意的变量,数字的运算结合;表达必须要返回一个结果;
let user = {
    firsName: "王",
    lastName: "五"
};
//Objects are not valid as a React child
//对象不是React的合法子元素
function format(user) {
    return `${user.firsName}${user.lastName}`;
}
function greeting(user) {
    if(user){
        return format(user);
    }else{
        return "你好,陌生人";
    }
}
/*ReactDOM.render(
    //React元素
    <h1>hello</h1>,
    document.querySelector("#root")
);*/

//-----------------------------------------
//也可以这样写:
/*let element = <h1>hello</h1>;
ReactDOM.render(
    //React元素
    element,
    document.querySelector("#root")
);*/
//-----------------------------------------
let element = <h1>{format(user)}</h1>;
/*let element = React.createElement("h1",null,"你好,陌生人!")*/
/*{type: "h1",props:{children: "你好,陌生人!"}} 虚拟DOM*/
/* 就是把虚拟DOM转变成真实的DOM并插入到DOM根节点里 #root*/
 ReactDOM.render(
 //React元素
 element,
 document.querySelector("#root")
 );
let element1 = <h1>{greeting()}</h1>;//->传user,和不传user的区别
//->传user: return 王五;
//->不传user: return 你好,陌生人;
ReactDOM.render(
    //React元素
    element1,
    document.querySelector("#root")  //->#root : 根节点
);


//本节: 节点的语法作用
//本节讲的JSX
