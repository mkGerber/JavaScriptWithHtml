if (localStorage.getItem('score') === null){
    localStorage.setItem('score', JSON.stringify({
        wins: 0,
        losses: 0,
        ties: 0
    }));
}
let score = JSON.parse(localStorage.getItem('score'));

function updateScoreElement(){
        document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }


updateScoreElement();

function pickComputerMove(){
    let computerMove = '';
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'Rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'Paper';
    } else {
        computerMove = 'Scissors';
    }

    console.log(computerMove);

    return computerMove;
}

function playGame(playerMove){
    const computerMove = pickComputerMove();
    let result = '';
    
    if (playerMove === 'scissors'){
        if (computerMove === 'Rock'){
            result = 'You Lose!'
        } else if (computerMove === 'Paper'){
            result = 'You Win!'
        } else {
            result = 'Tie!'
        }
    } else if (playerMove === 'paper'){
        if (computerMove === 'Rock'){
            result = 'You Win!'
        } else if (computerMove === 'Paper'){
            result = 'Tie!'
        } else {
            result = 'You Lose!'
        }
    } else {
        if (computerMove === 'Rock'){
            result = 'Tie!'
        } else if (computerMove === 'Paper'){
            result = 'You Lose!'
        } else {
            result = 'You Win!'
        }
    }
    
    if (result === 'You Win!'){
        score.wins ++;
    } else if (result === 'You Lose!'){
        score.losses ++;
    } else {
        score.ties ++;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `
    You
    <img src="images/${playerMove}-emoji.png" class="move-icon">
    <img src="images/${computerMove}-emoji.png" class="move-icon">
    Computer`;

    console.log(score);

}