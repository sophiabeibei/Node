let sum = (...args)=>{
    return args.reduce((prev,next)=>{
        return prev + next;
    });
};
//module.exports
//exports
//global


//1.
// global.sum = sum;
//2.
module.exports = sum;
//3.
// exports.sum = sum;
