// MOVES

let humanScore = 0;
let compScore = 0;

function resetScores() {
    humanScore = 0;
    compScore = 0;
    updateScores();
}


function updateScores() {
    const hmScore = document.getElementById('ur_score');
    const cpScore = document.getElementById('cp_score');
    
    hmScore.innerHTML = humanScore;
    cpScore.innerHTML = compScore;

    if (humanScore === 5){
        humanScore = 0;
        compScore = 0;
        alert('YOU WON!')
    } else if(compScore === 5){
        humanScore = 0;
        compScore = 0;
        alert('COMPUTER WON!')
    };   
}

// ROCK MOVE NA MALUPET

function moveRock(){
    const randomNumber1 = Math.random();

    let computerMove1 = '';

    if (randomNumber1 >= 0 && randomNumber1 < 1 / 3){
        computerMove1 = 'Rock';           
    } else if (randomNumber1 >= 1 / 3 && randomNumber1 < 2 / 3){
        computerMove1 = 'Paper';
    } else if (randomNumber1 >= 2 / 3 && randomNumber1 < 1){
        computerMove1 = 'Scissors';
    }

    let result1 = '';
    

    if(computerMove1 === 'Rock'){
        result1 = 'Tie.';
    }else if (computerMove1 === 'Paper'){
        result1 = 'You Lose.';
        let cpScore = document.getElementById('cp_score')
        compScore++;
    }else if (computerMove1 === 'Scissors'){
        result1 = 'You Win.';
        let hmScore = document.getElementById('ur_score')
        humanScore++;
    }

    updateScores();

    alert('You picked rock. Computer picked ' + computerMove1 + '. ' + result1);  

}

// PAPER MOVE NA MALUPET


function movePaper(){
    const randomNumber2 = Math.random();

    let computerMove2 = '';

    if (randomNumber2 >= 0 && randomNumber2 < 1 / 3){
        computerMove2 = 'Rock';           
    } else if (randomNumber2 >= 1 / 3 && randomNumber2 < 2 / 3){
        computerMove2 = 'Paper';
    } else if (randomNumber2 >= 2 / 3 && randomNumber2 < 1){
        computerMove2 = 'Scissors';
    }

    let result2 = '';

    if(computerMove2 === 'Rock'){
        result2 = 'You Win.';
        humanScore++;
    }else if (computerMove2 === 'Paper'){
        result2 = 'Tie.';
    }else if (computerMove2 === 'Scissors'){
        result2 = 'You Lose.';
        compScore++;
    }

    updateScores();

    alert(`You picked paper. Computer picked ${computerMove2}. ${result2}`);

}

// SCISSORS MOVE NA MALUPET

function moveScissors(){
    const randomNumber3 = Math.random();

    let computerMove3 = '';

    if (randomNumber3 >= 0 && randomNumber3 < 1 / 3){
        computerMove3 = 'Rock';           
    } else if (randomNumber3 >= 1 / 3 && randomNumber3 < 2 / 3){
        computerMove3 = 'Paper';
    } else if (randomNumber3 >= 2 / 3 && randomNumber3 < 1){
        computerMove3 = 'Scissors';
    }

    let result3 = '';

    if(computerMove3 === 'Rock'){
        result3 = 'You Lose.';
        compScore++;
    }else if (computerMove3 === 'Paper'){
        result3 = 'You Win.';
        humanScore++;
    }else if (computerMove3 === 'Scissors'){
        result3 = 'Tie.';
    }

    updateScores();

    alert(`You picked scissors. Computer picked ${computerMove3}. ${result3}`);
}

