const menuBtn = document.getElementById("menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("menu-open");
});
