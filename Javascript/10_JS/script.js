function add(a,b){
    console.log(a + b)
}

add(4,2);

function subtract(a,b){
    console.log(a - b)
}

subtract(4,2);

function multiply(a,b){
    console.log(a * b)
}

multiply(4,2);

function supercalculation(a,b){
    console.log((a+b)/2*a)
}

supercalculation(4,2);

function printEasterDate(J){


let N = J-1900
let A = N % 19
let B = Math.round ((7*A+1)/19)
let M = (11*A+4-B)%29
let Q = Math.round (N/4)
let W = (N+Q+31-M)%7
let P = 25-M-W

if (P>0){
    console.log("Ostersonntag ist der " + P +". Aprill")}
    else (console.log("Ostersonntag ist der "+(P+31)+ ". März"))
}

printEasterDate(2024)


