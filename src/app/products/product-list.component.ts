import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
//
import { Observable, EMPTY } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
//
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
	pageTitle = 'Product List';
	errorMessage = '';
	categories;
	selectedCategoryId = 1;

	products$ = this.productService.productsWithCategory$.pipe(
		catchError((err) => {
			this.errorMessage = err;
			return EMPTY;
		})
	);

	productsSimpleFilter$ = this.productService.productsWithCategory$.pipe(
		map((products) =>
			products.filter((product) =>
				this.selectedCategoryId
					? product.categoryId === this.selectedCategoryId
					: true
			)
		)
	);

	constructor(private productService: ProductService) {}

	onAdd(): void {
		console.log('Not yet implemented');
	}

	onSelected(categoryId: string): void {
		console.log('Not yet implemented');
	}
}
