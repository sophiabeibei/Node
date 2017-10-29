let obj = {name: "zfpx",home: {
    country: "china",
    city: "beijing"
}};
//let querystring = require("querystring");
let qs = querystring.stringify(qs);
let str = querystring.stringify(obj);
console.log(str);
let obj2 = qs.parse(str);
console.log(obj2);
