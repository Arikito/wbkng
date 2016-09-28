import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'owl-banner',
  templateUrl: 'app/components/banner.owl/banner.component.html'
})

export class BannerComponent implements OnInit {
	constructor(private elRef: ElementRef){}

	ngOnInit(): any {
		jQuery(this.elRef.nativeElement).find("#owl-banner").owlCarousel({
			slideSpeed: 300,
			paginationSpeed: 400,
			singleItem:true,
			autoPlay: 5000,
			stopOnHover: false,
			autoHeight: false,
			transitionStyle: "fade"
		});
	}
}
