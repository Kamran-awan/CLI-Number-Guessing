#! /usr/bin/env node
import inquirer from "inquirer";
// Phely hum Computer se ek random number generate karwaye.(done)
// Phr user se ek number guess karwaye gy. (done)
// phr dono k result ko compare kary gy.
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userNameGuess",
        type: "number",
        message: "please guess a number between 1 to 6",
    }
]);
if (answers.userNameGuess === randomNumber) {
    console.log("congratulation you guessed right number");
}
else {
    console.log("unfortunately you guessed wrong number");
}
console.log(answers);
