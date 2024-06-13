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


let choice2;
let won = false;

let field = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

//printField();

function winCondition() {
    if (field[0][0] == field[0][1] && field[0][0] == field[0][2] && field[0][0] != "0" ||
        field[0][3] == field[0][4] && field[0][3] == field[0][5] && field[0][3] != "0" ||
        field[0][6] == field[0][7] && field[0][6] == field[0][8] && field[0][6] != "0" ||
        field[0][0] == field[0][3] && field[0][0] == field[0][6] && field[0][0] != "0" ||
        field[0][1] == field[0][4] && field[0][1] == field[0][7] && field[0][1] != "0" ||
        field[0][2] == field[0][5] && field[0][2] == field[0][8] && field[0][2] != "0" ||
        field[0][0] == field[0][4] && field[0][0] == field[0][8] && field[0][0] != "0" ||
        field[0][2] == field[0][4] && field[0][2] == field[0][6] && field[0][2] != "0"
    ) {
        won = true;
        console.log("lskadjfslkafdjsalfkjsdaklkfj");
    }

}



async function printField() {
    let gaming = true;
    while (gaming) {
        for (let turn = 1; turn <= 2; turn++) {

            console.log("Player " + turn + " choose row!")
            let choice1 = await readLineAsync();

            if (choice1 != "0" && choice1 != "1" && choice1 != "2") {
                console.log("Error");
                process.exit(0);
            }

            else {
                console.log("Player " + turn + " choose column")
                choice2 = await readLineAsync()
            }

            if (choice2 != "0" && choice2 != "1" && choice2 != "2") {
                console.log("Error")
                process.exit(0);
            }
            else {

                field[choice1][choice2] = turn;
            };

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


            winCondition();

            if (won == true) {
                console.log("Player " + turn + " won!");
                console.log("Nigeria");
                process.exit(0);
            };



        }


    }
}

printField();
