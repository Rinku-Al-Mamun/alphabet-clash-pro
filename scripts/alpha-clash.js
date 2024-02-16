// function play(){
//     //step-1:
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     //console.log(homeSection.classList);


//     //show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }



function handlekeyboardkeyUpEvent(event){
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);
    //get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    //console.log(playerPressed, expectedAlphabet);

    //check right or wrong key pressed
    if(playerPressed === expectedAlphabet){
        console.log('you got a point!');

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore +1;
        setTextElementValueById('current-score', updatedScore);

        //----------------------------
        //update score:
        //1. get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);
        //2 increase the score 
        const newScore = currentScore + 1;

        //3. show the updated score

        //currentScoreElement.innerText = newScore;
        removeBacgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('dhur vaia ba apu ...right key press koro');

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0){
            gameOver();
        }


        // 1 step: get the current life niumber
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // step 2 : reduce the life count
        //const newLife = currentLife - 1;

        // step 3: display the update life count
        //currentLifeElement.innerText = newLife;
    }
}
// capture keyboard key press
document.addEventListener('keyup', handlekeyboardkeyUpEvent);

function continueGame(){
    //step 1;
    const alphabet = getARandomAlphabet();
    //console.log('your random alphabet', alphabet);

    // set random generated Alphabet 
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    
    //set background color
    setBackgroundColorById(alphabet);

}

function play(){
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    //reset everything show
    setTextElementValueById('current-Life', 5);
    setTextElementValueById('current-score', 0);


    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

}