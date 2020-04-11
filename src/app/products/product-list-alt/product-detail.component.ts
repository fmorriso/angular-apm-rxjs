import { Component, ChangeDetectionStrategy } from '@angular/core';
//
import { catchError } from 'rxjs/operators';
import { EMPTY, Subject } from 'rxjs';
//
import { ProductService } from '../product.service';

@Component({
	selector: 'pm-product-detail',
	templateUrl: './product-detail.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent {
	pageTitle = 'Product Detail';
	private errorMessageSubject = new Subject<string>();
	errorMessage$ = this.errorMessageSubject.asObservable();

	// Observable<Product>
	product$ = this.productService.selectedProduct$.pipe(
		catchError((err) => {
			this.errorMessageSubject = err;
			return EMPTY;
		})
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
