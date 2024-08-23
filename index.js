let user_score = 0;
let comp_score = 0;
let round_counter = 0;
const max_rounds = 5;

const genCompChoice = () => {
    let options = ['rock', 'paper', 'scissors'];
    let compIdx = Math.floor(Math.random() * 3);
    return options[compIdx];
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    console.log("User choice:", userChoice);
    console.log("Computer choice:", compChoice);

    // Update computer's choice display with circular image
    const compElement = document.getElementById('comp');
    compElement.innerHTML = `
        <img src="${compChoice}.jpg" style="height: 150px; width: 150px; border: 2px solid red; border-radius: 50%; display: block;">
    `;

    // Determine the winner and update scores
    if (userChoice === compChoice) {
        // It's a tie, no score update
        document.querySelector("button").style.cssText = `
        height: 56px; 
        width: 200px;
        margin-top: 50px;
        color: aliceblue;
        position: absolute;
        left: 655px;
        top: 340px;
        background-color: black;
        border: 5px solid rgb(51, 45, 45);
        border-radius: 5px;
        font-size: 20px;
        font-weight: bolder;
        display: block;
    `;
    document.querySelector("button").innerHTML = 'Draw!!!';
    } else if (
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper")
    ) {
        user_score++;
        document.querySelector("button").style.cssText = `
        height: 56px; 
        width: 200px;
        margin-top: 50px;
        color: aliceblue;
        position: absolute;
        left: 655px;
        top: 340px;
        background-color: rgb(8, 183, 37);
        border: 5px solid rgb(8, 183, 37);
        border-radius: 5px;
        font-size: 20px;
        font-weight: bolder;
        display: block;
    `;
    document.querySelector("button").innerHTML = 'You Won!!!';
    
        
    } else {
        comp_score++;
        document.querySelector("button").style.cssText = `
        height: 56px; 
        width: 200px;
        margin-top: 50px;
        color: aliceblue;
        position: absolute;
        left: 655px;
        top: 340px;
        background-color: red;
        border: 5px solid rgb(245, 36, 36);
        border-radius: 5px;
        font-size: 20px;
        font-weight: bolder;
        display: block;
    `;
    document.querySelector("button").innerHTML = 'You lose!!!';
    }

    // Update scoreboard
    document.getElementById('user_score').innerText = user_score;
    document.getElementById('comp_score').innerText = comp_score;

    // Increment round counter
    round_counter++;

    // Check if the maximum number of rounds is reached
    if (round_counter >= max_rounds) {
        // Display final scoreboard message
        if(user_score>comp_score){
        alert(`Game Over!\nYOU WON!!! \nFinal Score:\nYou: ${user_score}\nComputer: ${comp_score}`);
        confetti();
    }
        else if(user_score=comp_score){
            alert(`Game Over!\nDraw!!! \nFinal Score:\nYou: ${user_score}\nComputer: ${comp_score}`);
        }
        else
        alert(`Game Over!\nYOU LOSE!!!\nFinal Score:\nYou: ${user_score}\nComputer: ${comp_score}`);
        // Reset the game
        resetGame();
    }
}

const resetGame = () => {
    // Clear scores
    user_score = 0;
    comp_score = 0;
    round_counter = 0;

    // Clear display
    document.getElementById('comp').innerHTML = '<h3 style="background-color:red;">Computer</h3>';
    document.getElementById('user_score').innerText = "0";
    document.getElementById('comp_score').innerText = "0";

    // Optionally, disable buttons or other UI elements
}

// Add event listeners to choices
document.querySelectorAll(".class").forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
