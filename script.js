let userScore = 0;
let cmpScore = 0;

const choices = document.querySelectorAll('.choice');

const msg = document.querySelector('#msg');

const userScorePara = document.querySelector('#user-score');

const compScorePara = document.querySelector('#computer-score');

const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const playGame = (userChoice) => {
    //generate computer choice
    const compChoice = genCompChoice();

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `YOU WIN! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        cmpScore++;
        compScorePara.innerText = cmpScore;
        msg.innerText = `You Loose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const drawGame = () => {
    msg.innerText = "Game Draw!!";
    msg.style.backgroundColor = "#2c3e50";
}

    //who win, loose, game draw
    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === 'rock') {
            userWin = compChoice === 'paper' ? false : true;
        }
        else if (userChoice === 'paper') {
            userWin = compChoice === 'scissors' ? false : true;
        }
        else {
            userWin = compChoice === 'rock' ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);

    });
});