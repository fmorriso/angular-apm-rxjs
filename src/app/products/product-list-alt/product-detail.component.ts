import { Component, ChangeDetectionStrategy } from '@angular/core';
//
import { catchError, map, filter } from 'rxjs/operators';
import { EMPTY, Subject, combineLatest } from 'rxjs';
//
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
	selector: 'pm-product-detail',
	templateUrl: './product-detail.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent {
	private errorMessageSubject = new Subject<string>();
	errorMessage$ = this.errorMessageSubject.asObservable();

	// Observable<Product>
	private product$ = this.productService.selectedProduct$
		//
		.pipe(
			catchError((err) => {
				this.errorMessageSubject = err;
				return EMPTY;
			})
		);

	// make the page title dynamic by responding to changes in the selected product and creating an Observable<string>
	private pageTitle$ = this.product$
		//
		.pipe(
			map((p: Product) => (p ? `Product Detail for: ${p.productName}` : null))
		);

	// Ask the product service for the set of Suppliers for the currently selected product as an Observable<Subject[]>
	private productSuppliers$ = this.productService.selectedProductSuppliers$
		//
		.pipe(
			catchError((err) => {
				this.errorMessageSubject.next(err);
				return EMPTY;
			})
		);

	// define the View Model for this page by combining multiple observables into a single Observable
	vm$ = combineLatest([
		//
		this.product$,
		this.productSuppliers$,
		this.pageTitle$,
	])
		//
		.pipe(
			// destructure product to figure out if the rest of this operation is worth performing
			filter(([product]) => Boolean(product)),
			// following is essentially a forEach(Product, Suppliers[], string)...
			map(([product, productSuppliers, pageTitle]) =>
				// create an anonymous object consisting of each piece of the view model we want to work with
				({
					product, // Product
					productSuppliers, // Supplier[]
					pageTitle, // string
				})
			)
		);

	constructor(private productService: ProductService) {}
}
