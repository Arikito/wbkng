import { Component, OnInit, AfterViewInit } from '@angular/core';
import { JQ } from '@jquery';

declare var jQuery: any;

@Component({
	moduleId: module.id,
	selector: 'my-contacts',
	templateUrl: './contacts.component.html'
})

export class ContactsComponent implements OnInit{
	constructor(
		private $: JQ
	){
	}
	ngAfterViewInit(): any{
		this.$.inlineSvg();
		this.$.animated_scroll();
	}
	ngOnInit(): any{
		this.$.scrollTop();
	}
}