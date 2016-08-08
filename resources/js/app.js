$(function(){
	header_fix();
	$(window).scroll(function(){
		header_fix();
	});
});

function header_fix(){
	if(!$('body').hasClass('scrolled') && $(this).scrollTop() > 150){
		$('body').addClass('scrolled');
	}else if($('body').hasClass('scrolled') && $(this).scrollTop() < 150){
		$('body').removeClass('scrolled');
	}
}