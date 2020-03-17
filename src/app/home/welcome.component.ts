import { Component, OnInit, VERSION } from '@angular/core';

@Component({
	selector: 'pm-welcome',
	templateUrl: './welcome.component.html',
	styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
	title = 'Acme Product Management';
	public get pageTitle() {
		return 'Welcome';
	}

	public get ngVersion(): string {
		return VERSION.full;
	}

	constructor(

	) {}

	ngOnInit(): void {}

}
