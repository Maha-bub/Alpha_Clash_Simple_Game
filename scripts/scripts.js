function play(){
    // console.log('btn clicked by player');
    // fist step: when clicked play button then home section hidden and next playgound section is show on the browser

    // const homeSection=document.getElementById('home-section');
    // console.log(homeSection);
    // homeSection.classList.add('hidden');
    //  const playgroundSection=document.getElementById('play-ground');
    //  playgroundSection.classList.remove('hidden');



    // using utility function for code reuse

    hideElementById('home-section');
    showElementById('play-ground');

}