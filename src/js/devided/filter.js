let filterBtn = document.querySelector(".cont__filter");
let filterSec = document.querySelector(".filter");
let backBtn = document.querySelector(".filter_back");
let closeBtn = document.querySelector(".filter__close");

filterBtn.addEventListener("click", () => {
    filterSec.classList.remove("invisible");
})

backBtn.addEventListener("click", () => {
    filterSec.classList.add("invisible");
})

closeBtn.addEventListener("click", () => {
    filterSec.classList.add("invisible");
})

filterBtn.addEventListener("click", disableScroll);
backBtn.addEventListener("click", enableScroll);
closeBtn.addEventListener("click", enableScroll);

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