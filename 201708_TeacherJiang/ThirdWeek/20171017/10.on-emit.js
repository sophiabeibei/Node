//->发布,订阅: 预先安排一些事;(一种一对多的关系)

function Girl() {
    this._events = {};//->存放的就是事件绑定的内容;
}

Girl.prototype.on = function (eventName,callback) {
    if(this._events[eventName]){//->看看对象中是否存在这个事件
        this._events[eventName].push(callback);
    }else{
        this._events[eventName] = [callback];//->{}空对象中放了女生失恋;[]中括号中放了shopping;
    }
};

Girl.prototype.emit = function (eventName,...args) {
    if(this._events[eventName]){//->如果绑定过这样一个数组,我需要这样依次执行
        this._events[eventName].forEach(cb=>cb(...args));//->cb: callback;
    }
};

Girl.prototype.off = function (eventName, callback) {//->取消订阅
    this._events[eventName] = this._events[eventName].filter(cb=>cb!==callback);
};

let girl = new Girl();
let shopping = function (val) {
    console.log("shopping",val);
};
let cry = function (val) {
    console.log("cry",val);
};
girl.on("女生失恋",shopping);
girl.off("女生失恋",shopping);
girl.emit("女生失恋","我");