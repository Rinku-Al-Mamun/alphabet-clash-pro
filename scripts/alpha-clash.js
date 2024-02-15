// function play(){
//     //step-1:
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     //console.log(homeSection.classList);


//     //show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }

// function  getARandomAlphabet(){
//     const alpabetString = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alpabetString.split('');
//     //console.log(alphabets);

//     const randomNumber = Math.random() * 25;
//     const index = Math.round(randomNumber);

//     const alphabet = alphabets[index];
//     return alphabet;
// }

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
}