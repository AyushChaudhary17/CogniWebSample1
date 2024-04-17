const scrollContainer = document.querySelector(".scrollsection");
const leftButton = document.querySelector(".leftButton");
const rightButton = document.querySelector(".rightButton");

//scrollContainer.addEventListener("wheel",(e)=>{
//    e.preventDefault();
//    scrollContainer.scrollLeft += e.deltaY;
//    scrollContainer.style.scrollBehaviour = "auto";

//})

rightButton.addEventListener("click",()=>{
    // scrollContainer.style.scrollBehaviour = "smooth";
    scrollContainer.scrollLeft += 650;

})

leftButton.addEventListener("click", ()=>{
    // scrollContainer.style.scrollBehaviour = "smooth";
    scrollContainer.scrollLeft -= 650;
})

// header Scrolling Script..............

window.addEventListener("scroll", ()=>{
    const header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

// ........ Hamburger Menu Scripting ............
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const cross = document.querySelector(".cross i");
const menuLines = document.querySelector(".menuLines i");
const menu = document.querySelector(".menuLines");
hamburgerMenu.classList.add("hidden")
cross.addEventListener("click",(e)=>{
    hamburgerMenu.classList.add("hidden");
    menu.classList.remove("hidden");
})

menuLines.addEventListener("click",(e)=>{
    hamburgerMenu.classList.remove("hidden");
    // menuLines.classList.add("hidden");
    menu.classList.add("hidden");

    
})

// document.addEventListener("click",(e)=>{
//     hamburgerMenu.classList.add("hidden")
// })

// .......... Testimonial2 Script ...............

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
