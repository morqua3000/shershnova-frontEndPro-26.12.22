let a = prompt("number");
let m = prompt("number");
let n = prompt("number");

var sumfn = function () { 
    var ret = 0; 
    return function(x) { 
        ret += +x; 
        return ret; 
    } 
};
var sum = sumfn();
console.log(sum(a));
console.log(sum(m));
console.log(sum(n));
