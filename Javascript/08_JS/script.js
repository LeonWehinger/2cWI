// Erstelle eine Zufallszahl zwischen 5 und 10 



// Wenn der Wert 10 ist gib aus Ten 

// Wenn der Wert 9 ist gib aus Nine 

// Wenn der Wert 8 ist gib aus Eight 

// etc. 

let rn = Math.random() * 5 + 5;
let rnf = Math.floor(rn);
console.log(rnf)

if (rnf == 5) {
    console.log("five")
}
else if (rnf == 6) {
    console.log("six")
}
else if (rnf == 7) {
    console.log("seven")
}
else if (rnf == 8) {
    console.log("eight")
}
else if (rnf == 9) {
    console.log("nine")
}
else if (rnf == 10) {
    console.log("ten")
}

