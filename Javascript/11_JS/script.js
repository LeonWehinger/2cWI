let arr = [4, 1, 2, 3]
arr.push (17)
arr.push (199)


for (i = 0; i < arr.length; i++){
    console.log(arr [i]);
}
let c = 0;
for (i = 0; i < arr.length; i++){
    console.log(c += arr [i]);
}

let mittelwert = c/ arr.length;
console.log(mittelwert);