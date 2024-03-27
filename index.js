#! /usr/bin/env node
import inquirer from "inquirer";
// Generate a random number
const randomNumber = Math.floor(Math.random() * 10 + 1);
// User input to guess the number
const answer = await inquirer.prompt([
    {
        name: "guessedNumber",
        type: "number",
        message: "Enter your guess for the randomly generated number between 1 to 10: "
    }
]);
// Compare the input with random number
if (answer.guessedNumber === randomNumber) {
    console.log("Congratulations! you guessed the right number!");
}
else {
    console.log("Sorry! you guessed the wrong number! Generated number was: " + randomNumber);
}
