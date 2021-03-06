import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
//
import { EMPTY, Subject, combineLatest, BehaviorSubject } from 'rxjs';
import { catchError, map, startWith } from 'rxjs/operators';
//
import { ProductService } from './product.service';
import { ProductCategoryService } from '../product-categories/product-category.service';

@Component({
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
	pageTitle = 'Product List';
	//
	private errorMessageSubject = new Subject<string>();
	errorMessage$ = this.errorMessageSubject.asObservable();

	// category selection changes are tracked here:
	private categorySelectedSubject = new BehaviorSubject<number>(0);
	categorySelectedAction$ = this.categorySelectedSubject.asObservable();

	// Observable<Product[]>
	private products$ = combineLatest([
		this.productService.productsWithAdd$,
		this.categorySelectedAction$,
	])
		//
		.pipe(
			// Products[], number
			map(([products, selectedCategoryId]) =>
				products.filter((product) => {
					return selectedCategoryId
						? product.categoryId === selectedCategoryId
						: true;
				})
			),
			catchError((err) => {
				this.errorMessageSubject.next(err);
				return EMPTY;
			})
		);

	// Observable<ProductCategory[]>
	private categories$ = this.productCategoryService.productCategories$
		//
		.pipe(
			catchError((err) => {
				this.errorMessageSubject.next(err);
				return EMPTY;
			})
		);

	// Combine all streams for the view
	vm$ = combineLatest([this.products$, this.categories$])
		//
		.pipe(
			//
			map(([products, categories]) => ({ products, categories }))
		);

	constructor(
		private productService: ProductService,
		private productCategoryService: ProductCategoryService
	) {}

	onAdd(): void {
		this.productService.addProduct();
	}

	onSelected(categoryId: string): void {
		this.categorySelectedSubject.next(parseInt(categoryId, 10));
	}
}
