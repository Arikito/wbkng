import { Component, OnInit } from '@angular/core';
import { JQ } from '@jquery';
declare var jQuery: any;

@Component({
	moduleId: module.id,
	selector: 'my-main',
	templateUrl: './main.component.html'
})

export class MainComponent implements OnInit {
	constructor(
		private $: JQ
	){
	}
	ngOnInit(): any{
		this.$.scrollTop();
		this.$.inlineSvg();
		this.$.animated_scroll();
	}
}