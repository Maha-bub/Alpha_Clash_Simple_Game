function hideElementById(ElementId){
    const homesection=document.getElementById(ElementId);
    homesection.classList.add('hidden');

}

function showElementById(ElementId){
    const playgroundSection=document.getElementById(ElementId);
    playgroundSection.classList.remove('hidden');
}