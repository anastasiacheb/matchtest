let dialogContainer = document.querySelectorAll(".dialog__content");
let dialogClose = document.querySelectorAll(".dialog__close");
let dialog = document.querySelectorAll(".dialog");
let cardMessage = document.querySelectorAll(".card-mess");
let body = document.querySelector(".body__wrap");
let dialog0 = dialog[0];

//tabs
let tabs = document.querySelectorAll(".messages__cards");
let tabButtons = document.querySelectorAll(".tab");

for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].addEventListener("click", function() {
        if (tabButtons[i].classList.contains("tab_active")){
            return;
        } else {
            for (let j = 0; j < tabButtons.length; j++) {
                tabButtons[j].classList.remove("tab_active");
            }
            tabButtons[i].classList.add("tab_active");
            for (let j = 0; j < tabs.length; j++) {
                tabs[j].classList.add("invisible");
            }
            tabs[i].classList.remove("invisible");
        }
    });
}

window.addEventListener("load", () => {
    dialogContainer[0].scrollTop = dialogContainer[0].scrollHeight;
})

let inputAutoHeight = document.querySelectorAll(".input_autosize");

for (let i = 0; i < inputAutoHeight.length; i++) {
    inputAutoHeight[i].addEventListener("input", function() {
    // inputAutoHeight[i].style.height = "auto";
    inputAutoHeight[i].style.height = inputAutoHeight[i].scrollHeight + "px";
    dialogContainer[i].style.bottom = this.clientHeight + 24 + "px";
});
}



window.addEventListener("scroll", (event) => {
    for (let i = 0; i < dialog.length; i++) {
        if (dialog[i].getBoundingClientRect().top > 16 && window.innerHeight > 768) {
        dialog[i].style.height = window.innerHeight - dialog[i].getBoundingClientRect().top - 16 + "px";
        dialogContainer[i].style.height = window.innerHeight - dialog[i].getBoundingClientRect().top - 16 - 79 - 61 + "px"; 
        }
        // console.log(dialog[i].style.height);
    }
});

// window.addEventListener("click", () => {
//     console.log("click");
//     window.addEventListener("scroll", (event) => {
//         console.log(dialog[0].getBoundingClientRect().top);
//         // for (let i = 0; i < dialog.length; i++) {
//         //     dialog[i].style.height = window.innerHeight - dialog[i].getBoundingClientRect().top - 16 + "px";
//         // }
//     });
// })



for (let i = 0; i < cardMessage.length; i++) {
    cardMessage[i].addEventListener("click", () => {
        for (let j = 0; j < dialog.length; j++) {
            dialog[j].classList.add("invisible");
        }
        dialog[0].classList.remove("visible-desktop");
        dialog[i].classList.remove("invisible");
        dialogContainer[i].scrollTop = dialogContainer[i].scrollHeight;
        if (window.innerHeight > 768) {
        dialog[i].style.height = window.innerHeight - dialog[i].getBoundingClientRect().top - 16 + "px";
        dialogContainer[i].style.height = window.innerHeight - dialog[i].getBoundingClientRect().top - 16 - 79 - 61 + "px"; 
        }
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