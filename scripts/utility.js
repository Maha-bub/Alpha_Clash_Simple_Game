function hideElementById(ElementId){
    const homesection=document.getElementById(ElementId);
    homesection.classList.add('hidden');

}

function showElementById(ElementId){
    const playgroundSection=document.getElementById(ElementId);
    playgroundSection.classList.remove('hidden');
}


function randomAlphabet(){
    const alphabeticString='abcdefghijklmnopqrstuvwxyz';
    const alphabets=alphabeticString.split('');
    // console.log(alphabets);
    const randomNumber=Math.random()*25;
    const indexNumber=Math.round(randomNumber);
    // console.log(indexNumber);
    const alphabet=alphabets[indexNumber];
    // console.log(indexNumber,alphabet);
    return alphabet;//return alphabet return the creted alphabet to the function
    
    
}