import { log } from "console";
import { EOF } from "dns";
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
let isrunning = true;
while (isrunning) {
  console.log("Selektieren Sie die gewünschte Funktion:");
  console.log("1. Einzahlen");
  console.log("2. Abheben");
  console.log("3. Kontostand");
  console.log("4. Ende");
  let select = await readLineAsync();
  if (select == 1) {
    console.log("Geben Sie den Betrag ein den Sie einzahlen möchten:");
    let Einzahlen = Number(await readLineAsync());
    if (Einzahlen > 0) {
      Kontostand = Kontostand + Einzahlen;
      console.log("Sie haben erfolgreich eingezahlt.");
    }


    else {
      console.log("Eingabe Ungültig");
    }

  }
  else if (select == 2) {
    console.log("Geben Sie den Betrag ein den Sie abheben möchten:");
    let abheben = Number(await readLineAsync());
    if (abheben > 0) {
      Kontostand = Kontostand - abheben;
      console.log("Sie haben erfolgreich abgehoben.");
    }
    else {
      console.log("Eingabe Ungültig");
    }




  }
  else if (select == 3) {
    console.log("Ihr Kontostand beträgt " + Kontostand + "€");
  }
  else if (select == 4) {
    console.log("Ende");
    process.exit(0);
  }




}