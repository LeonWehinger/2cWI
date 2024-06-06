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





function printField() {

    for (let turn = 1; turn <= 2; turn++) {
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

                output += actualRow[col] + "|"
            }
            console.log(output);

        }
        let choice = await readLineAsync();

    }
}

