#! /usr/bin/evn node

import inquirer from "inquirer";
import chalk from "chalk"
function playGame() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "playerChoice",
                message: chalk.yellowBright("Choose your move:"),
                choices: ["rock", "paper", "scissors"]
            }
        ])
        .then((answers) => {
            const choices = ["rock", "paper", "scissors"];
            const player2 =
                choices[Math.floor(Math.random() * choices.length)];
            const playerChoice = answers.playerChoice;

            console.log(chalk.greenBright(`You chose: ${playerChoice}`));
            console.log(chalk.blueBright(`player2: ${player2}`));

            if (playerChoice === player2) {
                console.log(chalk.redBright("It\'s a tie!"));
            } else if (
                (playerChoice === "rock" && player2 === "scissors")||
                (playerChoice === "paper" && player2 === "rock")||
                (playerChoice === "scissors" && player2 === "paper")
            ) {
                console.log(chalk.greenBright("You win!"));
            } else {
                console.log(chalk.blueBright("player2 wins!"));
            }

            // Ask if the player wants to play again
            inquirer
                .prompt([
                    {
                        type: "confirm",
                        name: "playAgain",
                        message: chalk.yellowBright("Do you want to play again?"),
                        default: true
                    }
                ])
                .then((answers) => {
                    if (answers.playAgain) {
                        playGame(); // Play again
                    } else {
                        console.log(chalk.cyanBright("Thanks for playing!"));
                    }
                });
        });
}

// Start the game
playGame();

