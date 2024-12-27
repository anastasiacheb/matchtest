/*window.addEventListener("load", () => {
    slideOne();
    slideTwo();
})*/

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


/*let sliderOne = document.querySelector(".range1");
let sliderTwo = document.querySelector(".range2");
let sliderTrack = document.querySelector(".slider__track");
let valOne = document.querySelector(".value1");
let valTwo = document.querySelector(".value2");


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

function fillDoubleColor() {
    let valueOne = ((sliderOne.value - sliderOne.min) / (sliderOne.max - sliderOne.min)) * 100;
    let valueTwo = ((sliderTwo.value - sliderOne.min) / (sliderOne.max - sliderOne.min)) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #F0F0F0 ${valueOne}% , #FFB31A ${valueOne}%, #FFB31A ${valueTwo}% , #F0F0F0 ${valueTwo}%)`;
}

sliderOne.addEventListener("input", slideOne);

sliderTwo.addEventListener("input", slideTwo);*/