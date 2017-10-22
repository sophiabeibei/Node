//->发布订阅event: 自带的两个方法(1.on; 2.emit);
//->一对多的关系;on方法用来绑定事件{女生失恋: [逛街,吃,哭]}
let EventEmitter = require("events");
let util = require("util");//->util工具包用来实现继承的;
function Girl() {}
util.inherits(Girl,EventEmitter);//->继承公有方法;
let girl = new Girl();
let shopping = (data) => {
    console.log("逛街",data);
};
//->once方法: 只能触发依次;
girl.once("女生失恋",shopping);

//->on方法: 绑定事件后,emit时会触发;而且可以触发多次;
girl.on("女生失恋",shopping);

//->removeListener方法: 移除事件监听;
girl.removeListener("女生失恋",shopping);

//->emit方法: 触发事件;
girl.emit("女生失恋","你好");
























