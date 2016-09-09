$(function(){
	header_fix();
	$(window).scroll(function(){
		header_fix();
	});
	// Инициализация owlCarousel
	$("#owl-banner").owlCarousel({
		//navigation: true, // Show next and prev buttons
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem:true,
		autoPlay: 5000,
		stopOnHover: false,
		autoHeight: false,
		transitionStyle: "fade"
	});
	$("#owl-techn").owlCarousel({
		items: 6,
		itemsDesktop: [1000,5], //5 items between 1000px and 901px
		itemsDesktopSmall: [900,3], // betweem 900px and 601px
		itemsTablet: [600,2], //2 items between 600 and 0
		itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
		singleItem: false,
		pagination: false,
		autoPlay: 5000
		// transitionStyle: "fade"
	});
	$('.menu_toggle_js').on('click', function(){
		// $('.header_navigation_js').stop(true, true).slideToggle();		
		if ($('.header_navigation_js').hasClass('closed')){
			$('.header_navigation_js').removeClass('closed').addClass('open');
		}else{
			$('.header_navigation_js').addClass('closed').removeClass('open');
		}
	});
	jQuery('img.svg').each(function(){
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var $svg = jQuery(data).find('svg');

			// Add replaced image's ID to the new SVG
			if(typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
			if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
				$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
			}

			// Replace image with new SVG
			$img.replaceWith($svg);

		}, 'xml');

	});
	jQuery('svg use').each(function(){
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('xlink:href');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var $svg = jQuery(data).find('svg');

			// Add replaced image's ID to the new SVG
			if(typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
			if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
				$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
			}

			// Replace image with new SVG
			$img.replaceWith($svg);

		}, 'xml');

	});
	// Добавление карты google в iframe на главную страницу 
	$('.location_wrap_js').append('<iframe class="studio_location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.868227405213!2d36.33375571592626!3d49.995079927951814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x412709f454712171%3A0x3b2d17930e9f0fe6!2z0L_RgNC-0YHQv9C10LrRgiDQrtCy0ZbQu9C10LnQvdC40LksIDU00JAsINCl0LDRgNC60ZbQsiwg0KXQsNGA0LrRltCy0YHRjNC60LAg0L7QsdC70LDRgdGC0Yw!5e0!3m2!1sru!2sua!4v1470824666205" width=" ' + ($(window).outerWidth() - 20) + ' " height="450" frameborder="0" style="border:0" allowfullscreen scrolling="no"></iframe>');
	// Активация zoom на карте google на главной странице
	$('.location_wrap_js .overlay_js').click(function(event){
		$(this).removeClass('overlay');
	});
	// Деактивация zoom на карте google на главной странице
	$('body').on('mouseout', 'iframe', function(event){
		$('.overlay_js').addClass('overlay');
	});
});

function header_fix(){
	if(!$('body').hasClass('scrolled') && $(this).scrollTop() > 150){
		$('body').addClass('scrolled');
	}else if($('body').hasClass('scrolled') && $(this).scrollTop() < 150){
		$('body').removeClass('scrolled');
	}
}