import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
//
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
	{ path: 'welcome', component: WelcomeComponent, data: { label: 'Home' } },
	{
		path: 'products',
		data: { label: 'Product List' },
		loadChildren: () =>
			import('./products/product.module').then((m) => m.ProductModule),
	},
	{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent },
];
const routeOptions: ExtraOptions = { enableTracing: false };

@NgModule({
	imports: [RouterModule.forRoot(routes, routeOptions)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
