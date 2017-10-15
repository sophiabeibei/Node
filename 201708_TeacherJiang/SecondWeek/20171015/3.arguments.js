//->文件模块: 我们自己写的;必须加./来引用;
let r = require("./4.dialog.js");//->这个方法是同步;
console.log(r);
//->通过require拿进来的是要给对象;
new r.dialog().create();

// require: 导入;
// exports: 导出;

// console.log(w);
//->五个属性: export require module __filename __dirname
// console.log(arguments);//->arguments中的属性也叫全局属性,没有挂载在global上;

//->模块化
//->esm import export 实现前端的模块化  (发请求)
//->除了以上,前端还有单利,闭包,amd(requirejs),cmd(seajs);

//->commonjs规范: 规定的模块化风格;  (基于读写)
//->

//->模块化的好处: 1.防止命名冲突;2.提高代码复用性;3.高内聚低耦合;4.分工协作,统一代码风格,方便代码维护;
//->1.定义如何创建模块: 每个js都是一个模块;
//->2.如何导入一个模块: require导入一个模块;
//->3.如何导出一个模块: exports/module.exports;





(function (exports,require,module,__filename,__dirname) {
    module.exports = exports = {};//->源码
    class Dialog{}
    exports.Dialog = Dialog;

    return module.exports;//->源码
})();




let r =(function (exports,require,module,__filename,__dirname) {
    module.exports = exports = {};//->源码
    class Dialog{}
    exports.Dialog = Dialog;

    return module.exports;//->源码
})();


//->两种方式: 1.在exports属相上给dialog加属性;2.

//->module.exports和exports指向的是同一个内存空间,但是最后返回的是module.exports;如果改变exports的指向是不会影响module.exports的;可以通过exports加属性的方式影响module.exports;
// module.exports = Dialog;




