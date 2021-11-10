let menuBtn = document.querySelector(".fa-bars");
let navBar = document.querySelector(".menu");

menuBtn.addEventListener("click",()=>{
     navBar.classList.toggle("active")
})

window.onscroll = () =>{
    navBar.classList.remove('active');

}
$(document).ready(function(){

    // typing text animation script
    var typed = new Typed(".movimiento-1", {
        strings: ["Maquetador web", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});