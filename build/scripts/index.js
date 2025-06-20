// source/scripts/index.js
var navMain = document.querySelector(".main-header__nav");
var openButton = document.querySelector(".main-header__toggle");
navMain.classList.remove("main-header__nav--nojs");
openButton.onclick = function() {
  navMain.classList.toggle("main-header__nav--opened");
};
//# sourceMappingURL=index.js.map
