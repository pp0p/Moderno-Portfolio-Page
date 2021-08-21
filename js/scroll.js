const scrollBtn = document.querySelector('.upBtn');
window.onscroll = () => {
    if(this.scrollY >= 400){
        scrollBtn.classList.add('showBtn')
    }
    else{
        scrollBtn.classList.remove('showBtn')
    }
}
scrollBtn.addEventListener('click', () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})
