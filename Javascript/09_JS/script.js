for (let Zahl = 1; Zahl < 32; Zahl++) {

    if (Zahl % 2 == 0) {
        console.log(" ")
    }

    else if (Zahl == 8 || Zahl == 16 || Zahl == 24) {
        console.log("/n")
    }

    else if (Zahl > 0 && Zahl < 9 || Zahl > 15 && Zahl < 25) {
        console.log("X")
    }


    else if (Zahl > 7 && Zahl < 17 || Zahl > 23 && Zahl < 32) {
        console.log("O");
    }

}

let counter = 0;

for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
       counter += i;

    }


}

console.log(counter);


for (let n = 0; n <= 5; n++){
    if (n < 5){
        console.log("X")
    }

    else (console.log("X X X X"))

}