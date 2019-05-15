$(document).ready(function() {
  $("#menu-wrapper, #mobile nav a ").click(function() {
    $(".menu").toggleClass("close");
    $("#mobile nav").toggleClass("collapsed");
    $("#mobile nav ul").toggleClass("collapsed");
  });
  var mobileNav = $("#mobile");
  var scroll = new SmoothScroll('a[href*="#"]');
  var upBtn = $("#upbutton");
  var mainNav = $("#main ");
  mobileNav.addClass("shadow");

  if ($(window).scrollTop() > 30) {
    mainNav.addClass("shadow");
  }

  if ($(window).scrollTop() > 300) {
    upBtn.addClass("show");
  }

  upBtn.click(function() {
    $(".menu").removeClass("close");
    $("#mobile nav").addClass("collapsed");
    $("#mobile nav ul").addClass("collapsed");
  });

  $("#copyright-year").text(new Date().getFullYear());

  $(window).scroll(function() {
    if ($(window).scrollTop() > 30) {
      mainNav.addClass("shadow");
    } else {
      mainNav.removeClass("shadow");
    }

    if ($(window).scrollTop() > 300) {
      upBtn.addClass("show");
    } else {
      upBtn.removeClass("show");
    }
  });
});
