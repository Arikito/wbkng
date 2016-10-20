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
		this.$.scrollTop();
		this.$.inlineSvg();
		this.$.animated_scroll();
	}
}