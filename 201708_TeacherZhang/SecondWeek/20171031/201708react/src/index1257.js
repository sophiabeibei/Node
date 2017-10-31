//->react是核心库
import React from "react";
//react跟DOM相关的库
import ReactDOM from "react-dom";
//元素的更新
//1.React元素是不可变的,如果要更新的话,需要创建新的元素;然后重新渲染;

//ticking clock example: 时钟的例子;
function tick() {
    let Clock = (
        <div>
            <h1>{new Date().toLocaleString()}</h1>
            <h2>Now time it's {new Date().toLocaleTimeString()}</h2>
        </div>
    );
    ReactDOM.render(
        Clock,
        document.querySelector('#root')
    );
}
setInterval(tick,1000);




//本节讲的update-react
