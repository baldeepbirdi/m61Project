import { Component } from 'angular2/core';
import * as wjGrid from 'wijmo/wijmo.angular2.grid';

@Component({
  	selector: 'my-deals',
	templateUrl: 'app/deals.component.html',
})
export class DealsComponent {
	name = 'john';
	message = '';

	sayHello() {
		this.message = 'Hello ' + this.name + '!';
	}
}
