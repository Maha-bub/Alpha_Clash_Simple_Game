// function play(){
    // console.log('btn clicked by player');
    // fist step: when clicked play button then home section hidden and next playgound section is show on the browser

    // const homeSection=document.getElementById('home-section');
    // console.log(homeSection);
    // homeSection.classList.add('hidden');
    //  const playgroundSection=document.getElementById('play-ground');
    //  playgroundSection.classList.remove('hidden');



    // using utility function for code reuse
// }

function handleKeyboardButtonPress(event){
    const playerPressedKey=event.key;
    console.log("Player pressed key",playerPressedKey);

    // get the expected key press
    const currectAlphabetElement=document.getElementById('current-alphabet');
    const currentAlphabetText= currectAlphabetElement.innerText;
    const expectedAlphabet=currentAlphabetText.toLocaleLowerCase();
    // console.log(playerPressedKey,currentAlphabetText)


    //check mathced or not player pressd key and expected key
    if(playerPressedKey===expectedAlphabet){
        console.log("you pressed the right key!!");

    }
    else{
        console.log("you pressed the wrong key");
    }
    removeBackgroundColorPressedKey(expectedAlphabet);
    alphabaticGame();

    
}



document.addEventListener('keyup',handleKeyboardButtonPress);


// Get a random alphabet function

function alphabaticGame(){
    const alphabet=randomAlphabet();
    // console.log('random alphabet create every single clicked',alphabet);

    // set randomrandomly genarated alphabet to the screen (show it)
    const currentAlphabet=document.getElementById('current-alphabet');
    currentAlphabet.innerText=alphabet;

    const setBackgroudColor=setBackgroundColorKey(alphabet);

}


function playNow(){

    hideElementById('home-section');
    showElementById('play-ground');

    alphabaticGame();



}