let mybutton = document.getElementById("myBtn");
function topFunction() {
  document.documentElement.scrollTop = 0;
}

let element = document.getElementById("page2");
function downFunction() {
  element.scrollIntoView();
}

let aboutme = document.getElementById("page3");
function aboutMe() {
  aboutme.scrollIntoView();
}