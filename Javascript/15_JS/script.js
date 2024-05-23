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


let field = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

//printField();



async function main() {
    await printField();
    console.log('Druckfeld abgeschlossen');
}

main();


async function printField() {
    for (let row = 0; row < field.length; row++) {
        let actualRow = field[row];
        let output = "";
        for (let col = 0; col < actualRow.length; col++) {
            let sign = " ";
            if (actualRow[col] == 1) {
                sign = "X";
            } else if (actualRow[col] == 2) {
                sign = "O";
            }

            output += actualRow[col] + "|";
        }
        console.log(output);
        let row = await readLineAsync();
        let col = await readLineAsync();
    }
}

console.log(printField());


