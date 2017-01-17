$(window).scroll(function() {
  var y = $('.header').offset().top;
  var t = $(window).scrollTop();
  if (t > y) {
    $('.header-article').addClass('_fixed');
  }else {
    $('.header-article').removeClass('_fixed');
  }
});