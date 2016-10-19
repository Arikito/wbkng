import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { ElementRef } from '@angular/core';
declare var $: any;

@Component({
	moduleId: module.id,
	selector: 'my-services',
	templateUrl: './services.component.html'
})

export class ServicesComponent implements OnInit{
	constructor(private router: Router, private elRef: ElementRef) {
	}
	ngOnInit(): any{
		// $('html, body').animate({ scrollTop: '0' }, 500);
		$('body').scrollTop(0);
		if(window.location.hash.length > 0){
			$('html, body').scrollTop($(window.location.hash).offset().top - 120);
			$(window.location.hash).trigger('click');
		}



		$(this.elRef.nativeElement).find('img.svg').each(function(){
			var $img = $(this);
			var imgID = $img.attr('id');
			var imgClass = $img.attr('class');
			var imgURL = $img.attr('src');

			$.get(imgURL, function(data) {
				// Get the SVG tag, ignore the rest
				var $svg = $(data).find('svg');

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
		$(this.elRef.nativeElement).find('svg use').each(function(){
			var $img = $(this);
			var imgID = $img.attr('id');
			var imgClass = $img.attr('class');
			var imgURL = $img.attr('xlink:href');

			$.get(imgURL, function(data) {
				// Get the SVG tag, ignore the rest
				var $svg = $(data).find('svg');

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

		function ScrollSpy(obj){
		  this.handlers = obj.find('.spy_handler');
		  this.scrollTop = $(window).scrollTop();
		  this.spy = function(){
		    var parent = this;
		    parent.scrollTop = $(window).scrollTop() + 120;
		    parent.handlers.each(function(){
		      if($(this.hash).offset().top <= parent.scrollTop && $(this.hash).offset().top + $(this.hash).outerHeight() > parent.scrollTop){
		        parent.activate(this);
		      }
		    });
		  }
		  this.activate = function(obj){
		    this.deactivate();
		    $(obj).closest('li').addClass('active');
		  }
		  this.deactivate = function(){
		    this.handlers.each(function(){
		      $(this).closest('li').removeClass('active');
		    });
		  }
		}
		var spy = new ScrollSpy($('#magic_scroll'));
		$(window).scroll(function(){
		  spy.spy();
		});
	}
	ngOnDestroy() {
  	  $(window).unbind();
  	}
}