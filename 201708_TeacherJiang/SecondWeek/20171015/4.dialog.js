class Dialog{
    constructor(){

    }
    create(){
        console.log("创建dialog")
    }
}
//->在exports属性上增加了dialog属性;
exports.dialog = Dialog;



//->另一种写法如下:
/*function Dialog() {}
Dialog.prototype.create = function () {
    console.log("创建dialog")
};*/











