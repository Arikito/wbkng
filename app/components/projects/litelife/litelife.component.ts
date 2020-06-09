import { Component, OnInit, ElementRef } from '@angular/core';
import { Router }            from '@angular/router';
declare var jQuery: any;

@Component({
	moduleId: module.id,
	selector: 'my-litelife',
	templateUrl: './litelife.component.html'
})

export class LitelifeComponent implements OnInit{
	constructor(private router: Router, private elRef: ElementRef) {
	}
	ngOnInit(): any{
		jQuery('body').scrollTop(0);
	}
}