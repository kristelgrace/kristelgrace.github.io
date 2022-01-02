// When the user scrolls the page, execute myFunction
// https://www.w3schools.com/howto/howto_js_sticky_header.asp
window.onscroll = function() {myFunction()};

// Get the header
var sidebar = document.getElementById("myScrollspy");

// Get the offset position of the navbar
var sticky = sidebar.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset+80 > sticky) {
    sidebar.classList.add("sticky");
  } else {
    sidebar.classList.remove("sticky");
  }
}
