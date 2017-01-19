$(document).on('click','.list-sub-categories__mobile',function() {
	$(this).toggleClass('_active');
	if($(this).hasClass('_active')) {
		$(this).html('Скрыть');
	} else {
		$(this).html('Подкатегории');
	}
	$('.list-sub-categories__list').slideToggle(300);
})
