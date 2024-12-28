window.addEventListener("load", () => {
    dialogContainer[0].scrollTop = dialogContainer[0].scrollHeight;
})

let inputAutoHeight = document.querySelectorAll(".input_autosize");

for (let i = 0; i < inputAutoHeight.length; i++) {
    inputAutoHeight[i].addEventListener("input", function() {
    // inputAutoHeight[i].style.height = "auto";
    inputAutoHeight[i].style.height = inputAutoHeight[i].scrollHeight + "px";
    dialogContainer[i].style.bottom = this.scrollHeight + 24 + "px";
});
}

let dialogContainer = document.querySelectorAll(".dialog__content");
let dialogClose = document.querySelectorAll(".dialog__close");
let dialog = document.querySelectorAll(".dialog");
let cardMessage = document.querySelectorAll(".card-mess");
let body = document.querySelector(".body__wrap");

for (let i = 0; i < cardMessage.length; i++) {
    cardMessage[i].addEventListener("click", () => {
        for (let j = 0; j < dialog.length; j++) {
            dialog[j].classList.add("invisible");
        }
        dialog[0].classList.remove("visible-desktop");
        dialog[i].classList.remove("invisible");
        dialogContainer[i].scrollTop = dialogContainer[i].scrollHeight;
        // disableScroll();
        body.classList.add("body_noscroll");
      });
}


for (let i = 0; i < dialogClose.length; i++) {
    dialogClose[i].addEventListener("click", () => {
        dialog[i].classList.add("invisible");
        dialog[0].classList.add("visible-desktop");
        // enableScroll();
        body.classList.remove("body_noscroll");
      });
}

let sendButton = document.querySelectorAll(".button-send");

for (let i = 0; i < sendButton.length; i++) {
    sendButton[i].addEventListener("click", () => {
        let message = inputAutoHeight[i].value;
        if (message.trim() === "") {
          alert("Введите текст сообщения");
          return;
        }
        dialogContainer[i].insertAdjacentHTML("beforeend", `<div class="message message_out">
              <p class="message-content">${message}</p>
              <p class="text_gray">21.12.2024</p>
            </div>`);
            inputAutoHeight[i].value = "";
            dialogContainer[i].scrollTop = dialogContainer[i].scrollHeight;
            inputAutoHeight[i].style.height = "44px";
            dialogContainer[i].style.bottom = "69px";
        })}


// sendButton.addEventListener("click", () => {
//     let message = inputAutoHeight[i].value;
//     if (message.trim() === "") {
//       alert("Введите текст сообщения");
//       return;
//     }
//     dialogContainer.insertAdjacentHTML("beforeend", `<div class="message message_out">
//               <p class="message-content">${message}</p>
//               <p class="text_gray">21.12.2024</p>
//             </div>`);

    
//     document.querySelector(".input_autosize").value = "";
//     scrollToBottom();
//     inputAutoHeight.style.height = "44px";
//     dialogContainer.style.bottom = "69px";
//   });

  


  function scrollToBottom() {
    dialogContainer.scrollTop = dialogContainer.scrollHeight;
  }
  
//   scrollToBottom();

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