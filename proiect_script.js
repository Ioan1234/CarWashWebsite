window.addEventListener("scroll", function() {
  if (window.pageYOffset > 90) {
    document.querySelector(".nav-bar").classList.add("nav-sticky");
    document.querySelector(".page-header").style.marginTop = "73px";
  } else {
    document.querySelector(".nav-bar").classList.remove("nav-sticky");
    document.querySelector(".page-header").style.marginTop = "0";
  }
});
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
var loader = function () {
  setTimeout(function () {
    if (document.querySelectorAll('#loader').length > 0) {
      document.querySelector('#loader').classList.remove('show');
    }
  }, 1);
};
loader();
const audio=new Audio();
audio.src="audio/tires.mp3";