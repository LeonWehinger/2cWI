let arr = [4, 1, 2, 3]
arr.push(17);
arr.push(199);


for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
let c = 0;
for (i = 0; i < arr.length; i++) {
    console.log(c += arr[i]);
}

let mittelwert = c / arr.length;
console.log(mittelwert);


let arr2 = ["Susi", "Paula", "Hans"]
console.log("Meine Freunde sind " + arr2)
arr2.push("Sepp");
console.log("Meine Freunde sind " + arr2[0] + ", " + arr2[1] + ", " + arr2[2] + " und " + arr2[3])