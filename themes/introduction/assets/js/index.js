// Nav burger animation
document.addEventListener("DOMContentLoaded", function () {

// Start vc4all custom js 
// todo need a way to load this from a seperate js file
genRandomNumbers = function getRandomNumbers() {
  var array = new Uint32Array(1);
  var nrs_string = '';  
  window.crypto.getRandomValues(array);
  for (var i = 0; i < array.length; i++) {
    nrs_string += array[i] + " ";
  }
  return nrs_string;  
}

var jitsi_server_url = document.querySelector("a.btn-start-call").getAttribute( 'href')
var room_nr = genRandomNumbers(); 
var jitsi_server_room = jitsi_server_url + '/' + room_nr; 
document.querySelector("a.btn-start-call").setAttribute( 'href', jitsi_server_room);
// End custom vc4all js

 // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener("click", function () {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

// Bitty scrolling links script
$("a[href^=\"#\"]").click(function(e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $(document.getElementById(this.hash.substr(1))).offset().top
    }, 500);
    $("#nav-menu").removeClass("is-active");
    return true;
})

// Modal closer
$(".card").click(function () {
    $($(this).attr("data-target")).addClass("is-active");
    $("html").addClass("modal-open");
});
$(".modal-close").click(function () {
    $($(this).attr("data-target")).removeClass("is-active");
    $("html").removeClass("modal-open");
});
$(document).keypress(function(e) {
    if(e.which == 0) {
        $(".modal.is-active").removeClass("is-active");
        $("html").removeClass("modal-open");
    }
});


