import { Component, OnInit } from '@angular/core';
import { JQ } from '@jquery';
declare var jQuery: any;

@Component({
	moduleId: module.id,
	selector: 'my-main',
	templateUrl: './main.component.html'
})

export class MainComponent implements OnInit {
	constructor(
		private $: JQ
	){
	}
	ngOnInit(): any{
		this.$.scrollTop();
		this.$.inlineSvg();

		// Animated scroll
		// Start Animated scroll
		var winHeight = window.screen.height,
			animate_elements_obj = document.getElementsByClassName('to_animate'),
			animate_elements_arr = [];
		for (var i = 0; i < animate_elements_obj.length; i++){
			animate_elements_arr[i] = animate_elements_obj[i];
		}
		window.onscroll = function(){
			var topOfWindow = window.pageYOffset;
			
			function animated_scrolling(item_that_should_be_animated){
				var item = item_that_should_be_animated;
				if((item.closest('.to_animate_wrap')).offsetTop < topOfWindow + (winHeight * .8)){
					if(!item.classList.contains('animated')){
						item.className = item.className.replace('to_animate ', 'animated ');
					}
					if(!item.classList.contains(item.getAttribute('data-animation'))){
						item.className += " " + item.getAttribute('data-animation');
					}
				}
			}

			animate_elements_arr.forEach(function(item, i, arr){
				if(item.closest('.to_animate_wrap').classList.contains('animation_series_wrap')){
					var timeout = 0,
						columns = 4,
						correction = 50,
						proj_obj = document.getElementsByClassName('series'),
						proj_arr = [],
						title = item.closest('.to_animate_wrap').getElementsByClassName('block_title')[0];

					for (var k = 0; k < proj_obj.length; k++){
						proj_arr[k] = proj_obj[k];
					}

					if(title !== undefined){
						animated_scrolling(title);
					}

					proj_arr.forEach(function(item, i, arr){
						if(i%columns == 0){
							timeout = i/columns*columns*correction;
						}else{
							timeout = timeout+columns*correction;
						}
						setTimeout(function(){
							if(item !== undefined){
								animated_scrolling(item);
							}
						}, timeout);
					});
				}
				else{
					if(item !== undefined){
						animated_scrolling(item);
					}
				}
			});
		}
		// End Animated scroll
	}
}