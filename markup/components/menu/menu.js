$(document).on('click','.menu__mobile',function() {
	$(this).toggleClass('_active');
	$('.header .menu__list').slideToggle(300);
	$('.overlay').addClass('_menu').show();
})

$(document).on('click','.overlay._menu',function() {
	$('.header .menu__list').slideToggle(300);
	$('.header-search__form .input-form').hide();
	//$('.header-search__icon').toggle();
	$('.menu__mobile').removeClass('_active');
	$(this).hide();
});