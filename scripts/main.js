// Check when you have scrolled past the jumbotron
// then add a class to the nav to make it not transparent
$(function () {
  $(document).scroll(function () {
    var $home = $("#home");
    var $nav = $(".navbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $home.height())
  });
});

// Makes the navbar not transparent when expanded
document.querySelector(".navbar-toggler").addEventListener("click", function() {
  if (document.querySelector(".navbar").id == "home-nav")
    document.querySelector("nav").classList.toggle("transparent");
});