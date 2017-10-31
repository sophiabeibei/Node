//->react是核心库
import React from "react";
//react跟DOM相关的库
import ReactDOM from "react-dom";
function Person(props) {
    return <div>{props.name}</div>
}
//复合组件
function Welcome(props) {
    //{...props}表示批量传属性,就是把props的属性全部传给Person组件;
    //return <h1><Person {...props}/></h1>
    return <h1><Person name={props.name}/></h1>
    //以上两种写法一样;
}
function App() {
    //Adjacent JSX elements must be wrapped in an enclosing tag  必须返回并且只能返回一个顶级元素
    //Nothing was returned from render.This usually means a return statement is missing. Or,to render nothing,return null.
    //render方法没有返回值,这意味着你没有return语句;如果真的不想返回任何东西,可return null;
    return (
        <div>
            <Welcome name="李雷" />
            <Welcome name="韩梅梅" />
            <Welcome name="露西" />
        </div>
    )
}
//什么叫自定义组件和普通组件有什么区别,自定义是指那块可以自定义
//就是用户自己写的组件,所有的组件全是自定义组件;
//是跟原生React元素区分;
//渲染App
ReactDOM.render(<App/>,document.querySelector("#root"));



//组件套组件: 先找App -> 再找Welcome -> 最后找Person;
//本节讲的"复合组件"