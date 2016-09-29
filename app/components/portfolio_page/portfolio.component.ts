import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'my-portfolio',
	template: '<h1>Hi, I\'m portfolio page</h1><br><a routerLink="/main" routerLinkActive="active">Домой</a>'
})

export class PortfolioComponent implements OnInit{
	constructor(private router: Router) {
	}
	ngOnInit(): void{

	}
}