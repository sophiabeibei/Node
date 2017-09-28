//->需求: 正面就买;反面就不买;
//->体现出了Promise的优势,不用写callback;

function buyPack() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(Math.random()>0.5){
                resolve("买");
            }else{
                reject("不买");
            }
        },Math.random()*10*100);
    })
}
buyPack().then(function (data) {
    console.log(data);
},function (err) {console.log(err);});



