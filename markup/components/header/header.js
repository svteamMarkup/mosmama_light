$(document).on('click','.header-search__icon',function() {
	$(this).hide();
	$('.header-search__wrapper').toggleClass('_active');
	$('.header-search__form .input-form').toggle(300);
	$('.overlay').removeClass('_menu').show();
});	

$(document).on('click','.overlay:not(._menu)',function() {
	$('.header-search__form .input-form').toggle();
	$('.header-search__icon').toggle();
	$(this).hide();
});
