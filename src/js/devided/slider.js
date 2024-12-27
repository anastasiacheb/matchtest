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