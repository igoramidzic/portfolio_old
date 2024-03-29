/* globals $, AOS */

// Spinner Loader
window.addEventListener('load', function () {
  // Set overlay opacity to 0 (For nice transition)
  $('#overlay').css('opacity', '0')
  // Set overlay display to none, so overlay is not on top of other elements
  // After 500ms
  setTimeout(function () {
    $('#overlay').remove()
  }, 500)
})

$(document).ready(function () {
  // AOS Init
  AOS.init({
    once: true
  })

  // Change navbar css
  function changeNavbar () {
    // Height of the main hero
    var heroHeight = $('.main-hero').outerHeight()

    // First scroll
    if ($(window).scrollTop() > 40) {
      $('.navbar').addClass('first-scroll-navbar')
    } else if ($(window).scrollTop() < 20) {
      $('.navbar').removeClass('first-scroll-navbar')
    }

    // Second scroll
    if ($(window).scrollTop() > heroHeight - 125) {
      $('.navbar').addClass('second-scroll-navbar')
    } else if ($(window).scrollTop() < heroHeight) {
      $('.navbar').removeClass('second-scroll-navbar')
    }
  }

  // Functions to run on scroll
  $(window).scroll(function () {
    changeNavbar()
  })

  // Functions to run on resize
  $(window).resize(function () {
    changeNavbar()
  })

  // On page loag
  changeNavbar()
})
