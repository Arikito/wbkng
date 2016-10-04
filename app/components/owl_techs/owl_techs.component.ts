import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'owl-techs',
  templateUrl: 'app/components/owl_techs/owl_techs.component.html'
})

export class OwlTechsComponent implements OnInit {
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
