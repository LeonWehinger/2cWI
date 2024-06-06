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





async function printField() {
    let gaming = true;
    while (gaming) {
        for (let turn = 1; turn <= 2; turn++) {

            console.log("Player " + turn + " choose row!")
            let choice1 = await readLineAsync();

            if (choice1 != "0" || "1" || "2") {
                console.log("Error")
                process.exit(0);
            }

            console.log("Player " + turn + " choose column")
            let choice2 = await readLineAsync();

            if (choice1 != "0" || "1" || "2") {
                console.log("Error")
                process.exit(0);
            }

            field[choice1][choice2] = turn;


            for (let row = 0; row < field.length; row++) {
                let actualRow = field[row];
                let output = "";
                for (let col = 0; col < actualRow.length; col++) {
                    let sign = " ";
                    if (turn == 1) {
                        sign = "X";
                    } else if (turn == 2) {
                        sign = "O";
                    }

                    output += actualRow[col] + "|"
                }
                console.log(output);



            }





        }


    }
}

printField();
