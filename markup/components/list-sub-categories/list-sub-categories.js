$(document).on('click','.list-sub-categories__mobile',function() {
	$(this).toggleClass('_active');
	if($(this).hasClass('_active')) {
		$(this).html('Скрыть');
	} else {
		$(this).html('Подкатегории');
	}
	$('.list-sub-categories__list').slideToggle(300);
	$('.overlay').addClass('_sub-categories').show();
})

$(document).on('click','.overlay._sub-categories',function() {
	$('.list-sub-categories__list').slideToggle(300);
	$('.header-search__form .input-form').hide();
	//$('.header-search__icon').toggle();
	$('.menu__mobile').removeClass('_active');
	$(this).hide();
});