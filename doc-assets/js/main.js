//online tools navigation

$(document).ready(function(e) {

  $('body').scrollspy({ target: '.navbar', offset: 80 });

  $('a[href^="#"]').bind('click', function(e) {
    e.preventDefault()
    var href = $.attr(this, 'href');
    $('html, body').animate(
      {scrollTop: $(href).offset().top - 60},
      600
    )
  });
