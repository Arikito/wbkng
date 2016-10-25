import { Component, OnInit, AfterViewInit } from '@angular/core';
import { JQ } from '@jquery';
declare var jQuery: any;

@Component({
	moduleId: module.id,
	selector: 'my-main',
	templateUrl: './main.component.html'
})

export class MainComponent implements AfterViewInit {
	constructor(
		private $: JQ
	){
	}
	ngAfterViewInit(): any{
		this.$.inlineSvg();
		this.$.animated_scroll();
		
		setTimeout(function(){
			this.$('.about_studio_wrap .parallax').parallax('50%', .2);
			this.$('.services_wrap .parallax').parallax('50%', .4);
		}, 1000);
	}
	ngOnInit(){
		this.$.scrollTop();
	}
}