// TODO: Implement DRY principle

var modalEnglish = document.getElementById("modalEnglish");
var modalGreek = document.getElementById("modalGreek");
var buttonEnglish = document.getElementById("cookiesEnglish");
var buttonGreek = document.getElementById("cookiesGreek");
var closeEnglish = document.getElementById("closeEnglish");
var closeGreek = document.getElementById("closeGreek");

buttonEnglish.onclick = function () {
  modalEnglish.style.visibility = "visible";
  buttonEnglish.style.backgroundColor = "hsl(92, 28%, 65%)";
  addBlurBg();
};
buttonGreek.onclick = function () {
  modalGreek.style.visibility = "visible";
  buttonGreek.style.backgroundColor = "hsl(92, 28%, 65%)";
  addBlurBg();
};

closeEnglish.onclick = function () {
  modalEnglish.style.visibility = "hidden";
  buttonEnglish.style.backgroundColor = "hsl(220, 16%, 24%)";
  removeBlurBg();
};
closeGreek.onclick = function () {
  modalGreek.style.visibility = "hidden";
  buttonGreek.style.backgroundColor = "hsl(220, 16%, 24%)";
  removeBlurBg();
};

window.onclick = function (event) {
  if (event.target == modalEnglish) {
    modalEnglish.style.visibility = "hidden";
    buttonEnglish.style.backgroundColor = "hsl(220, 16%, 24%)";
    removeBlurBg();
  } else if (event.target == modalGreek) {
    modalGreek.style.visibility = "hidden";
    buttonGreek.style.backgroundColor = "hsl(220, 16%, 24%)";
    removeBlurBg();
  }
};

addBlurBg = function () {
  document.getElementsByClassName("welcome")[0].style.filter = "blur(0.3125em)";
  document.getElementsByClassName("footer")[0].style.filter = "blur(0.3125em)";
};

removeBlurBg = function () {
  document.getElementsByClassName("welcome")[0].style.filter = "blur(0)";
  document.getElementsByClassName("footer")[0].style.filter = "blur(0)";
};
