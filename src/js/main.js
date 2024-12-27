
/*двойные слайдеры*/

let sliders = document.querySelectorAll(".slider");

for (let i = 0; i < sliders.length; i++) {
    let sliderOne = document.querySelectorAll(".range1")[i];
    let sliderTwo = document.querySelectorAll(".range2")[i];
    let sliderTrack = document.querySelectorAll(".slider__track")[i];
    let valOne = document.querySelectorAll(".value1")[i];
    let valTwo = document.querySelectorAll(".value2")[i];

    function fillDoubleColor() {
        let valueOne = [];
        valueOne.length = sliders.length;
        let valueTwo = [];
        valueTwo.length = sliders.length;
        for (let i = 0; i < valueOne.length; i++) {
        valueOne[i] = ((sliderOne.value - sliderOne.min) / (sliderOne.max - sliderOne.min)) * 100;
    }

    for (let i = 0; i < valueTwo.length; i++) {
        valueTwo[i] = ((sliderTwo.value - sliderOne.min) / (sliderOne.max - sliderOne.min)) * 100;
    }
    
    sliderTrack.style.background = `linear-gradient(to right, #F0F0F0 ${valueOne[i]}% , #FFB31A ${valueOne[i]}%, #FFB31A ${valueTwo[i]}% , #F0F0F0 ${valueTwo[i]}%)`;

    }
    
    if (sliderTwo.value - sliderOne.value <= 0) {
        sliderOne.value = sliderTwo.value;
    }

    if (sliderTwo.value - sliderOne.value <= 0) {
        sliderTwo.value = sliderOne.value;
    }

    function slideOne() {
        if (sliderTwo.value - sliderOne.value <= 0) {
            sliderOne.value = sliderTwo.value;
        }
        valOne.textContent =  sliderOne.value;
        fillDoubleColor();
    }

    function slideTwo() {
        if (sliderTwo.value - sliderOne.value <= 0) {
            sliderTwo.value = sliderOne.value;
        }
        valTwo.textContent =  sliderTwo.value;
        fillDoubleColor();
    }

    slideOne();
    slideTwo();

    sliderOne.addEventListener("input", slideOne);
    sliderTwo.addEventListener("input", slideTwo);
}





/*навигация*/

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




/*фильтр*/


let filterBtn = document.querySelector(".cont__filter");
let filterSec = document.querySelector(".filter");
let backBtn = document.querySelector(".filter_back");
let closeBtn = document.querySelector(".filter__close");

filterBtn.addEventListener("click", () => {
    filterSec.classList.remove("invisible");
    closeBtn.classList.remove("invisible");
})

backBtn.addEventListener("click", () => {
    filterSec.classList.add("invisible");
    closeBtn.classList.add("invisible");
})

closeBtn.addEventListener("click", () => {
    filterSec.classList.add("invisible");
    closeBtn.classList.add("invisible");
})

filterBtn.addEventListener("click", disableScroll);
backBtn.addEventListener("click", enableScroll);
closeBtn.addEventListener("click", enableScroll);

function disScroll() {
    document.querySelector("body").classList.add("body_noscroll")
}

function enScroll() {
    document.querySelector("body").classList.remove("body_noscroll")
}

/*слайдер*/

window.addEventListener("load", () => {
    fillSliderColor();
})

let slider = document.querySelector("#location");
let sliderValue = document.querySelector("#location_value")

function fillSliderColor() {
    let value = (slider.value / slider.max) * 100;
    slider.style.background = `linear-gradient(to right, #FFB31A ${value}% , #F0F0F0 ${value}%)`;
    sliderValue.textContent =  slider.value;
}

slider.addEventListener("input", () => {
    fillSliderColor();
})




