window.onscroll = function() {myFunction()};

var nav = document.getElementById("nav-bar");
var navImg = document.getElementById("nav-img-container");
var sticky = nav.offsetTop;

function myFunction() {
	if (window.pageYOffset > sticky) {
		nav.classList.add("sticky");
		navImg.classList.add("nav-img-show");
	} else {
		nav.classList.remove("sticky");
		navImg.classList.remove("nav-img-show");
	}
}