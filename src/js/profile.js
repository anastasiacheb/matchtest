//profile function

let offerButton = document.querySelector(".button-offer");
let offerMessage = document.querySelector(".section-prof__message");
let cancelButton = document.querySelector(".button-cancel");
let cancelButton2 = document.querySelector(".button-cancel2");
let sendButton = document.querySelector(".button-send");
let offerDialog = document.querySelector(".card-person__dialog");
let message = document.querySelector(".message-content");
let messageInput = document.querySelector(".message-input");
let messageButton = document.querySelector(".button-mess");
let followButton = document.querySelector(".button-follow");
let profileCard = document.querySelector(".card-person__header");
let hiddenElement1 = document.querySelector(".hidden1");
let hiddenElement2 = document.querySelector(".hidden2");
let hiddenElement3 = document.querySelector(".hidden3");
let body = document.querySelector("body");
let nav = document.querySelector(".nav");
let closeButton = document.querySelector(".card-person__close");


offerButton.addEventListener("click", () => {
    offerMessage.classList.remove("invisible");
    hiddenElement1.style.display = "none";
    hiddenElement2.style.display = "none";
    body.classList.add("body_noscroll");
    nav.classList.add("nav_fixed");
    closeButton.classList.add("active");
    // disableScroll()
})

cancelButton.addEventListener("click", () => {
    offerMessage.classList.add("invisible");
    hiddenElement1.style.display = "flex";
    hiddenElement2.style.display = "flex";
    body.classList.remove("body_noscroll");
    nav.classList.remove("nav_fixed");
    closeButton.classList.remove("active");
    // enableScroll();
})

sendButton.addEventListener("click", () => {
    if (messageInput.value.trim() === "") {
        // alert("Введите текст сообщения");
        return;
    } else {
    offerDialog.classList.remove("invisible");
    message.textContent = messageInput.value;
    messageButton.classList.remove("invisible");
    offerButton.classList.add("invisible");
    followButton.classList.add("invisible");
    hiddenElement3.style.display = "none";
    }
})

profileCard.addEventListener("click", () => {
    offerMessage.classList.add("invisible");
    offerDialog.classList.add("invisible");
    hiddenElement1.style.display = "flex";
    hiddenElement2.style.display = "flex";
    hiddenElement3.style.display = "flex";
    body.classList.remove("body_noscroll");
    nav.classList.remove("nav_fixed");
    closeButton.classList.remove("active");
    // enableScroll();
})

messageButton.addEventListener("click", () => {
    offerDialog.classList.remove("invisible");
    offerMessage.classList.remove("invisible");
    hiddenElement1.style.display = "none";
    hiddenElement2.style.display = "none";
    hiddenElement3.style.display = "none";
    body.classList.add("body_noscroll");
    nav.classList.add("nav_fixed");
    closeButton.classList.add("active");
    // disableScroll();
})

cancelButton2.addEventListener("click", () => {
    message.textContent = "";
    messageInput.value = "";
    offerDialog.classList.add("invisible");
    offerMessage.classList.add("invisible");
    hiddenElement1.style.display = "flex";
    hiddenElement2.style.display = "flex";
    hiddenElement3.style.display = "flex";
    messageButton.classList.add("invisible");
    offerButton.classList.remove("invisible");
    followButton.classList.remove("invisible");
    body.classList.remove("body_noscroll");
    nav.classList.remove("nav_fixed");
    closeButton.classList.remove("active");
    // enableScroll();
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