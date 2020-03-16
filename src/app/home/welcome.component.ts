import { Component, OnInit, VERSION } from '@angular/core';
//
import { MaterialVersionInformationService } from '../shared/material-version-information.service';
import { AngularFLexLayoutVersionInformationService } from '../shared/angular-flex-layout-version-information.service';

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

	public get materialVersion(): string {
		return this.matVersionService.version.full;
	}

	constructor(
		private matVersionService: MaterialVersionInformationService,
		private ngFlexVersion: AngularFLexLayoutVersionInformationService
	) {}

	ngOnInit(): void {}

	public get angularFlexVersion(): string{
		return this.ngFlexVersion.versionFull;
	}
}
