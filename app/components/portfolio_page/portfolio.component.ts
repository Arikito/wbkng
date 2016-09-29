import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'my-portfolio',
	templateUrl: './portfolio.component.html'
})

export class PortfolioComponent implements OnInit{
	constructor(private router: Router) {
	}
	ngOnInit(): void{

	}
}