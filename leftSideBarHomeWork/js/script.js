var button = document.querySelector(".button");
var sideBar = document.querySelector(".sideBar");
var winClose = document.querySelector(".winClose");

button.addEventListener("click", function () {
    sideBar.style.marginLeft = "0";
    sideBar.style.transition = "all 1s";
})

winClose.addEventListener("click", function () {
    sideBar.style.marginLeft = "-18%";
})