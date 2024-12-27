let burgerBtn = document.querySelector(".nav__burger");
let navMenu = document.querySelector(".nav__wrap");
let logo = document.querySelector(".nav__logo");
let acc = document.querySelector(".nav__account");
let cont = document.querySelector(".cont");

burgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("invisible");
    burgerBtn.classList.toggle("side");
    logo.classList.toggle("side");
    acc.classList.toggle("side");
    cont.classList.toggle("side");
})

function disableScroll() {
    let scrollTop = document.documentElement.scrollTop;
    let scrollLeft = document.documentElement.scrollLeft;
    
    window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
    };
}

function enableScroll() {
    window.onscroll = function () { };
}

burgerBtn.addEventListener("click", () => {
    if (burgerBtn.classList.contains("side")) {
        disableScroll();
    } else {
        enableScroll();
    }
})