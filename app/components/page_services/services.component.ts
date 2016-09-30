import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'my-services',
	templateUrl: './services.component.html',
	styleUrls: [ './services.component.css' ]
})

export class ServicesComponent implements OnInit{
	constructor(private router: Router) {
	}
	ngOnInit(): void{

	}
}