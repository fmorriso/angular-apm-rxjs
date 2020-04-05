import { Component, ChangeDetectionStrategy } from '@angular/core';
//
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
//
import { ProductService } from '../product.service';


@Component({
	selector: 'pm-product-detail',
	templateUrl: './product-detail.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent {
	pageTitle = 'Product Detail';
	errorMessage = '';

	// Observable<Product>
	product$ = this.productService.selectedProduct$.pipe(
		catchError(err => {
			this.errorMessage = err;
			return EMPTY;
		})
	);

	constructor(private productService: ProductService) {}
}
