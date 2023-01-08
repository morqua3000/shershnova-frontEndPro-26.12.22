let a = prompt("Enter number");
let b = prompt("Enter degree");
function powpow(x,y){
    let ret = Math.pow(x,y);
    return ret;
}
let c = powpow(a,b);
document.write(a + " in " + b + "th degree is " + c);