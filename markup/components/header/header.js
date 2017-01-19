$(document).on('click','.header-search__icon',function() {
	$(this).hide();
	$('.header-search__wrapper').toggleClass('_active');
	$('.header-search__form .input-form').toggle(300);
	$('.overlay').toggle();
});

$(document).on('click','.overlay',function() {
	$('.header-search__form .input-form').toggle();
	$('.header-search__icon').toggle();
});
