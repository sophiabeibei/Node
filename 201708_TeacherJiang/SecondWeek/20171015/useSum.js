let r = require("./sum.js");//->require过来的是个闭包;需要r来接收一下;


//1.
// console.log(sum(1,2,3,100,200));
//2.
console.log(r(1,5,6,8));
//3.
// console.log(r.sum(2, 2, 3, 300, 200));
