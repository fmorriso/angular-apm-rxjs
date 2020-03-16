import { Injectable } from '@angular/core';
//
import { VERSION } from '@angular/flex-layout';

@Injectable({
	providedIn: 'root'
})
export class AngularFLexLayoutVersionInformationService {
	public get versionFull(): string {
		if (!VERSION || typeof VERSION === 'undefined') {
			return 'undefined';
		} else {
			return VERSION.full;
		}
	}
	constructor() {}
}
