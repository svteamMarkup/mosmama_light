$(document).on('click','.header-search__icon',function(e) {
	e.preventDefault();
	$('.header-search__wrapper').toggleClass('_active');
	$('.header-search__form .input-form').toggle(300);
})