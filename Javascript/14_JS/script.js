import { log } from "console";
import { createInterface } from "readline";
 
const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});
 
const readLineAsync = () => {
  return new Promise((resolve) => {
    readline.question("", (userRes) => {
      resolve(userRes);
 
    });
  });
};

let Kontostand = 0;
console.log("Selektieren Sie die gewünschte Funktion:");
console.log("1. Einzahlen");
console.log("2. Abheben");
console.log("3. Kontostand");
console.log("4. Ende");
let select = await readLineAsync();
if (select == 1){
    console.log("Geben Sie den Betrag ein den Sie einzahlen möchten:")

}



