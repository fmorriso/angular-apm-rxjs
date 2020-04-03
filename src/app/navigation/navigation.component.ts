import {Component, OnInit} from '@angular/core';
//
import {Router} from '@angular/router';
import {CustomLink} from './custom-link';

@Component({
	selector: 'pm-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
	background = 'primary';
	links: CustomLink[] = [];
	pageTitle = 'ACME Product Management';

	constructor(private router: Router) {
	}

	ngOnInit(): void {
		// build the navigation links using the Angular route config that was defined in app-routing.module.ts
		// and dependency-injected into this component, which effectively shares that route information without
		// having to define a separate Angular service component.
		// console.log(JSON.stringify(this.router.config));
		for (const route of this.router.config) {
			// we only care about the ones that have a data.label since the others are not going to be rendered in our navigation bar
			if (route.data && route.data.label) {
				const link: CustomLink = {
					path: `/${route.path}`,
					label: route.data.label
				};
				this.links.push(link);
			}
		}
		const extraLink: CustomLink = {
			path: '/products/alternate',
			label: 'Product List (Alternate UI)'
		};
		this.links.push(extraLink);
		console.log(`with extra link: ${JSON.stringify(this.links)}`);
	}
}
