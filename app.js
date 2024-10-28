let icons = document.querySelectorAll(".icon");
let userScore = 0;
let compScore = 0;
let userScorecard = document.querySelector(".UserScore");
let compScorecard = document.querySelector(".CompScore");
let result = document.querySelector(".result");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}
 const drawGame = () => {
    result.innerText = "It's a draw, Play again.";
    result.style.backgroundColor = "black";
 } 
const showWinner = (userWin,userChoice, compChoice ) =>{
    if(userWin){
        userScore++;
        userScorecard.innerText = userScore;
        result.innerText = `You win!, Your ${userChoice} beats ${compChoice}`;
        result.style.backgroundColor = "green";
        

    } else{
        compScore++;
        compScorecard.innerText = compScore ;
        result.innerText = `You lose!,${compChoice} beats your  ${userChoice}`;
        result.style.backgroundColor = "red";
        
    }
}

const playGame = (userChoice) => {
    console.log(`Users Choice was ${userChoice}`);
    compChoice = genCompChoice();
    console.log("Computers choice was", compChoice);
    if(userChoice === compChoice){
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        } else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    
    }
}

icons.forEach((icon) => {
    icon.addEventListener("click",() => {
        const userChoice = icon.getAttribute("id");
        playGame(userChoice);
    })
})
