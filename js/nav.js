
const openNavBtn = document.querySelector('.openNav');
const closeNavBtn = document.querySelector('.closebtn');
const myNav = document.getElementById("myNav");
openNavBtn.addEventListener('click', () =>{
    if(window.innerWidth > 600){
    myNav.style.width = "50%";
  }
  else{
  myNav.style.width = "100%";
  }
})
closeNavBtn.addEventListener('click', () => {
  myNav.style.width = "0";
})