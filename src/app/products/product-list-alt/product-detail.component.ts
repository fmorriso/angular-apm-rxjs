import { Component, ChangeDetectionStrategy } from '@angular/core';
//
import { catchError, map } from 'rxjs/operators';
import { EMPTY, Subject } from 'rxjs';
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
	product$ = this.productService.selectedProduct$.pipe(
		catchError((err) => {
			this.errorMessageSubject = err;
			return EMPTY;
		})
	);

	// make the page title dynamic by responding to changes in the selected product and creating an Observable<string>
	pageTitle$ = this.product$
		//
		.pipe(
			map((p: Product) => (p ? `Product Detail for: ${p.productName}` : null))
		);

	// Ask the product service for the set of Suppliers for the currently selected product as an Observable<Subject[]>
	productSuppliers$ = this.productService.selectedProductSuppliers$.pipe(
		catchError((err) => {
			this.errorMessageSubject.next(err);
			return EMPTY;
		})
	);

	constructor(private productService: ProductService) {}
}
