$(document).ready(function () {

$('.name').mouseenter(function(){
  namei = setInterval(function(){
  changeMFonts();
}, 500)

})

$('.name').mouseleave(function(){
  clearInterval(namei)
})

$(window).bind('scroll', function() {
     if ($(window).scrollTop() > 100) {
         $('.learnmore').hide();
     }
     else {
         $('.learnmore').show();
     }
});

$(window).bind('scroll', function() {
     if ($(window).scrollTop() > 800) {
         $('.allme').hide();
     }
     else {
         $('.allme').show();
     }
});

  $(".navbar").hide(); //Hide the navigation bar first


description = $('.description')
description.hide();
description2 = $('.description2')
description2.hide();
description3 = $('.description3')
description3.hide();
description4 = $('.description4')
description4.hide();

$('.tripcontainer').mouseenter(function(event) {

  $('.tripcontainer').addClass('hover')
  description.show();
});

$('.tripcontainer').mouseleave(function(event) {

  $('.tripcontainer').removeClass('hover')
  description.hide();
});

$('.foodcontainer').mouseenter(function(event) {

  $('.foodcontainer').addClass('hover')
  description2.show();
});

$('.foodcontainer').mouseleave(function(event) {

  $('.foodcontainer').removeClass('hover')
  description2.hide();
});

$('.messangercontainer').mouseenter(function(event) {

  $('.messangercontainer').addClass('hover')
  description3.show();
});

$('.messangercontainer').mouseleave(function(event) {

  $('.messangercontainer').removeClass('hover')
  description3.hide();
});

$('.mealcontainer').mouseenter(function(event) {

  $('.mealcontainer').addClass('hover')
  description4.show();
});

$('.mealcontainer').mouseleave(function(event) {

  $('.mealcontainer').removeClass('hover')
  description4.hide();
});

$('.mealcontainer').mouseenter(function(event) {

  $('.mealcontainer').addClass('hover')
  description4.show();
});

$('.todocontainer').mouseleave(function(event) {

  $('.todocontainer').removeClass('hover')
  description4.hide();
});

});


