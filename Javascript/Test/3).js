arr1 = [-1,5,1,-10,-11,2,30,-8,-14]
arr2 = [-1,5,3,-10,-11,2,30,-8,-44]

let a = 0;
for (i=0; i<arr1.length; i++){
    console.log(a += arr1 [i]);
}


let c = 0
for (i=0; i< arr2.length; i++){
    console.log(c += arr2 [i]);
}
let mittelwert1 = a/ arr1.length;
console.log("Mittelwert Woche 1 ;"+mittelwert1);

let mittelwert2 = c/arr2.length;
console.log("Mittelwert Woche 2 :"+mittelwert2);


console.log("Woche 1 war wärmer")