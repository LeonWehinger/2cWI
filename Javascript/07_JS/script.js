// Erstelle zwei Zufallszahl zwischen 0 und 100 
let randomnumber = Math.random() * 100
let random = Math.floor(randomnumber);
console.log(random);


// Speichere diese jeweils in einer Variable 
let zahleins = 91;
let zahlzwei = 1;


// Wenn die erste Zahl kleiner ist als die zweite UND die erste Zahl kleiner ist als 50 
// dann gib aus "Zahl 1 ist kleiner als Zahl 2 und Mini" 
if (zahleins < zahlzwei && zahleins < 30) {
    console.log("Zahl 1 ist kleiner als Zahl 2 und Mini")
}


// Wenn die erste Zahl kleiner ist als 30 oder die zweite Zahl kleiner ist als 30 
// dann gib aus "Eine der beiden ist kleiner als 30" 
if (zahleins < 30 || zahlzwei < 30) {
    console.log("Eine der beiden ist kleiner als 30")
}


// Wenn die erste Zahl kleiner ist als 50 UND die zweite Zahl ungleich 50 ist 
// dann gib aus "Erste Zahl klein, zweite kein 50iger" 
if (zahleins < 50 && zahlzwei != 50) {
    console.log("Erste Zahl klein, zweite kein 50iger")
}