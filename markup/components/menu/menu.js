$(document).on('click','.menu__mobile',function() {
	$(this).toggleClass('_active');
	$('.header .menu__list').slideToggle(300);
})