#!/usr/bin/env node
import inquirer from "inquirer";
const randonNumber = Math.floor(Math.random() * 10 + 1);
const guess = await inquirer.prompt([
    {
        type: "number",
        name: 'userguessingnumber',
        message: "please enter number between 1-10",
    }
]);
if (guess.userguessingnumber === randonNumber) {
    console.log('congratulation your number is right');
}
else {
    console.log('this is wrong');
}
;
