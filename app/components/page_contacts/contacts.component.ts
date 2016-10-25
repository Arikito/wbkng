import { Component, OnInit } from '@angular/core';
import { JQ } from '@jquery';

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
	ngOnInit(): any{
		this.$.scrollTop();
	}
}