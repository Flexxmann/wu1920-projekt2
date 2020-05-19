window.onscroll = function () { myFunction() };

var navbar = document.getElementById("nav");
var sticky = navbar.offsetTop;
var sticky = sticky + 40;
function myFunction() {
    if (window.pageYOffset >= sticky && window.matchMedia("(max-width: 700px)")) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}