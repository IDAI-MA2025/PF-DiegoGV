var btnMenuOpen = document.getElementById("btnMenuOpen");
var btnMenuClose = document.getElementById("btnMenuClose");
var menubar = document.getElementById("menubar");

btnMenuOpen.addEventListener("click", function() {
    menubar.classList.add("active");
});

btnMenuClose.addEventListener("click", function() {
    menubar.classList.remove("active");
});

var enlaces = document.getElementById("enlaces");
enlaces.addEventListener("click", function() {
    menubar.style.transitionDelay = "0.5s";
    menubar.classList.remove("active");
});

var container = document.querySelector(".slider");
var btnizq = document.getElementById("btn-izquierda");
var btnder = document.getElementById("btn-derecha");

btnder.addEventListener("click", function() {
    container.scrollLeft += container.offsetWidth;
})
btnizq.addEventListener("click", function() {
    container.scrollLeft -= container.offsetWidth;
})
