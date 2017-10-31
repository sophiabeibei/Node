//->react是核心库
import React from "react";
//react跟DOM相关的库
import ReactDOM from "react-dom";
import "./index.css";
function Avatar(props) {
    return (
        <img className="Avatar"
             style={{
                 width: "100px"
             }}
             src={props.author.avatarUrl}
             alt={props.author.name}
        />
    );
}
function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo author={props.author}/>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}
function UserInfo() {
    return (
        <div className="UserInfo">
            <Avatar author={props.author}/>
            <div className="UserInfo-name">
                {props.author.name}
            </div>
        </div>
    )
}
function formatDate(date) {
    return date.toLocaleString();
}
let props = {
    author: {
        name: "马六",
        avatarUrl: "http://img2.imgtn.bdimg.com/it/u=2744029691,616518315&fm=27&gp=0.jpg"
    },
    text: "今天天气不错",
    date: new Date()
};
//渲染Comment
ReactDOM.render(<Comment {...props}/>,document.querySelector("#root"));

//把大文件拆成小文件,不停的拆
//Avatar属性的提取;
//本节讲的是