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
        console.log('you have pressed correctly', expectedAlphabet);
        removeBacgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('dhur vaia ba apu ...right key press koro')
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
    showElementById('play-ground');
    continueGame()
}