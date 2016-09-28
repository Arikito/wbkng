import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'my-tech-owl',
  template: `<div id="owl-techn" class="owl-carousel owl-theme owl_techn">
				<div class="page_item">
					<img class="svg_img svg" src="/compiled/img/php.svg">
				</div>
				<div class="page_item">
					<img class="svg_img svg" src="/compiled/img/jquery.svg">
				</div>
				<div class="page_item">
					<img class="svg_img svg" src="/compiled/img/html.svg">
				</div>
				<div class="page_item">
					<img class="svg_img svg" src="/compiled/img/jquery.svg">
				</div>
				<div class="page_item">
					<img class="svg_img svg" src="/compiled/img/php.svg">
				</div>
				<div class="page_item">
					<img class="svg_img svg" src="/compiled/img/wp.svg">
				</div>
				<div class="page_item">
					<img class="svg_img svg" src="/compiled/img/php.svg">
				</div>
				<div class="page_item">
					<img class="svg_img svg" src="/compiled/img/jquery.svg">
				</div>
			</div>`
})

export class TechsComponent implements OnInit {
	constructor(private elRef: ElementRef){}

	ngOnInit(): any {
		jQuery(this.elRef.nativeElement).find("#owl-techn").owlCarousel({
		items: 6,
		itemsDesktop: [1000,5],
		itemsDesktopSmall: [900,3],
		itemsTablet: [600,2],
		itemsMobile: false,
		singleItem: false,
		pagination: false,
		autoPlay: 5000
	});
	}
}
