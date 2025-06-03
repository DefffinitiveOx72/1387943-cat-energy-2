// source/scripts/index.js
var navMain = document.querySelector(".nav");
var openButton = document.querySelector(".nav__button");
openButton.addEventListener(
  "click",
  () => {
    navMain.classList.toggle("nav__list--open");
  }
);
navMain.classList.remove("nav__list--nojs");
//# sourceMappingURL=index.js.map
