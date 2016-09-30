import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { ElementRef } from '@angular/core';
declare var jQuery: any;

@Component({
	moduleId: module.id,
	selector: 'my-portfolio',
	templateUrl: './portfolio.component.html'
})

export class PortfolioComponent implements OnInit{
	constructor(private router: Router, private elRef: ElementRef) {
	}
	ngOnInit(): any{
		jQuery('body').scrollTop(0);
	}
}