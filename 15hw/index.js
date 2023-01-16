alert("allo");
let a = prompt("Enter number");
let b = prompt("Enter degree");
function powpow(x,y){
    if (y!=1){
        return x*=powpow(x,y-1);
    }else{
        return x;
    }
}
let c = powpow(a,b);
document.write(a + " in " + b + "th degree is " + c);