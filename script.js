const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const message = document.getElementById("result-msg");

const Results = {
    win: "You win!",
    draw: "You drawed!",
    lose: "You lost!"
}

// ROCK     = 1
// PAPER    = 2
// SCISSORS = 3
const playGame = (choice) => {
    let result = Results.draw;
    const computerChoice = Math.ceil(Math.random() * 3);

    if(choice == 1) {
        if(computerChoice == 2) {
            result = Results.lose;
        } else if (computerChoice == 3) {
            result = Results.win;
        }
    } else if(choice == 2) {
        if(computerChoice == 1) {
            result = Results.win;
        } else if (computerChoice == 3) {
            result = Results.lose;
        }
    } else if(choice == 3) {
        if(computerChoice == 2) {
            result = Results.win;
        } else if (computerChoice == 1) {
            result = Results.lose;
        }
    }

    message.style.display = "block";
    message.textContent = result + " You chose " + getChoiceString(choice) + " and the computer chose " + getChoiceString(computerChoice);
}

const getChoiceString = (choice) => {
    if(choice == 1) {
        return "rock";
    } else if(choice == 2){
        return "paper";
    } else if(choice == 3) {
        return "scissors";
    }
}

rockBtn.addEventListener("click", () => {playGame(1)});
paperBtn.addEventListener("click", () => {playGame(2)});
scissorsBtn.addEventListener("click", () => {playGame(3)});