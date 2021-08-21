function text_effect (){
    let sectionEl = document.querySelector('section');
    let sectionPostion = sectionEl.getBoundingClientRect().top;
    let screenPostion = window.innerHeight / 1;

    if(sectionPostion < screenPostion){
        sectionEl.classList.add('text-effect')
    }
}
window.addEventListener('scroll', text_effect)