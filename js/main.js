$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    waitForAnimate: true
  });
  $('.header__burger').click(function(event) {
    $('.header__burger,.header__menu').toggleClass('active')
    $('body').toggleClass('lock')
    $('.main-screen__header').toggleClass('resize')
  });
});