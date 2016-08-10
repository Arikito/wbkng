$(function(){
	header_fix();
	$(window).scroll(function(){
		header_fix();
	});
	$('.menu_toggle_js').on('click', function(){
		$('.header_navigation_js').stop(true, true).slideToggle();
	});
});

function header_fix(){
	if(!$('body').hasClass('scrolled') && $(this).scrollTop() > 150){
		$('body').addClass('scrolled');
	}else if($('body').hasClass('scrolled') && $(this).scrollTop() < 150){
		$('body').removeClass('scrolled');
	}
}