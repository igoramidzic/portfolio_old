$(document).ready(function(){

  $(window).on("load", function () {
    console.log("Hello");
  })

  // Change navbar css
  function changeNavbar () {
    // Height of the main hero
    var heroHeight = $('.main-hero').outerHeight();

    // First scroll
    if ($(window).scrollTop() > 40) {
      $('.navbar').addClass('first-scroll-navbar');
    } else if ($(window).scrollTop() < 20) {
      $('.navbar').removeClass('first-scroll-navbar');
    }

    // Second scroll
    if ($(window).scrollTop() > heroHeight - 125) {
      $('.navbar').addClass('second-scroll-navbar');
    } else if ($(window).scrollTop() < heroHeight) {
      $('.navbar').removeClass('second-scroll-navbar');
    }
  }

  // Functions to run on scroll
  $(window).scroll(function () {
    changeNavbar();
  });

  // Functions to run on resize
  $(window).resize(function(){
    changeNavbar();
  });

  // On page loag
  changeNavbar();
});
