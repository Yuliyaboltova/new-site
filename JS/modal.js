const popupLinks = document.querySelectorAll(".popup-link");
const body = document.querySelector("body");
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true; //от двойных нажатий
const timeout = 800;

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener("click", function (e) {
      const popupName = popupLink.getAttribute("id").replace("#", "");
      const curentPopup = document.getElementById(popupName); // Возвращает ссылку на элемент по его идентификатору ( ID );
      popupOpen(curentPopup);
      e.preventDefault();
    });
  }
}
const popupCloseIcon = document.querySelectorAll(".close-popup");

if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener("click", function (e) {
      popupClose(el.closest(".popup"));
      e.preventDefault();
    });
  }
}

function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector(".popup.open");
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
       bodyLock();
    }
    curentPopup.classList.add("open");
    curentPopup.addEventListener("click", function (e) {
      if (!e.target.closest(".popup__content")) {
        popupClose(e.target.closest(".popup"));
      }
    });
  }
}
function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove("open");
    if (doUnlock) {
       bodyUnLock();
    }
  }
}

function bodyLock() {
  const lockPaddingValue = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";

  if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = lockPaddingValue;
    }
  }
   body.style.paddingRight = lockPaddingValue;
   body.classList.add("lock");

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnLock() {

  setTimeout(function () {

    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
       const el = lockPadding[index];
        el.style.paddingRight = "0px";
      }
    }
     body.style.paddingRight = "0px";
     body.classList.remove("lock");
  }, timeout);

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}


/**/ 
// Находим элемент модального окна по его id
let modal = document.getElementById("automatic-modal");

// Находим элемент, который закрывает модальное окно по его классу
let close = document.getElementsByClassName("close")[0];

// Добавляем обработчик события click на элемент закрытия, который скрывает модальное окно
close.onclick = function() {
  modal.style.display = "none";
}

// Запускаем функцию, которая показывает модальное окно, через 5 секунд (5000 миллисекунд)
setTimeout(function() {
  modal.style.display = "block";
}, 5000);