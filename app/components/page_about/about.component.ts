import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { ElementRef } from '@angular/core';
declare var jQuery: any;

@Component({
	moduleId: module.id,
	selector: 'my-about',
	templateUrl: './about.component.html',
	styleUrls: [ './about.component.css' ]
})

export class AboutComponent implements OnInit{
	constructor(private router: Router, private elRef: ElementRef) {
	}
	ngOnInit(): any{
		jQuery('body').scrollTop(0);
	}
}