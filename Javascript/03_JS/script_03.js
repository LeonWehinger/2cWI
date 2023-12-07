// Erstelle eine Variable banana mit dem Wert "Banane" 

// Erstelle eine Variable apple mit dem Wert "Apple" 

let banana = "Banane";
let apple = "Apple";


// Erstelle eine Variable bananaPricePerKilo mit dem Wert 2.14 

let bananaPricePerKilo = 2.14;

// Erstelle eine Variable applePricePerKilo mit dem Wert 3.43 

let applePricePerKilo = 3.43

// Ein Apfel hat durchschnittlich ein Gewicht von 0.34 Kilo 

// Eine Banane hat durchschnittlich ein Gewicht von 0.22 Kilo 



// Gib folgendes aus: Anzahl Bananen/Äpfel pro Kilo, Preis pro Banane/Apfel 

// Preis von 8 Äpfeln 
let y = 1 / 0.34;
console.log("anzahl an Äpfel pro Kilo sind " + y);
let x = applePricePerKilo / y;
console.log("Preis von einem Apfel ist € " + applePricePerKilo / y);
console.log("Preis für 8 Äpfel ist € " + x * 8);
// Preis von 17 Bananen 
let c = 1 / 0.22;
console.log("anzahl an Bananen pro Kilo sind " + c);
let v = bananaPricePerKilo / c;
console.log("Preis von einer Banane ist € " + bananaPricePerKilo / c);
console.log("Preis für 17 Bananen ist € " + v * 17);
// Preis von 1 Tonne Äpfel 
console.log("Preis von einer Tonne Äpfel ist € " + applePricePerKilo * 1000)
// Preis von 1 Tonne Bananen 
console.log("Preis von einer Tonne Bananen € " + bananaPricePerKilo * 1000)