import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { CategoryService } from '../category.service';
import { Category } from '../category.model';

@Component({
    selector: 'app-category-list',
    templateUrl: './category-list.component.html'
})

export class CategoryListComponent implements OnInit {

    categories: Category[];
    errorMessage: string;
    successMessage: string;

    constructor(
        private categoryService: CategoryService,
        private router: Router
    ) { }

    ngOnInit() {
        this.getCategories();
        this.successMessage = this.categoryService.successMessage;
    }

    getCategories(): void {
        this.categoryService
            .getCategories()
            .subscribe(
            categories => this.categories = categories,
            error => this.errorMessage = <any>error
            )
    }

    onFilter(param: string): void {
        this.categories = this.categories.filter(
            category => category.name.toLowerCase().indexOf(param.toLowerCase()) > -1
        )
    }

    onClearFilter(): void {
        this.getCategories();
    }

    goTo(category: Category): void {
        let link = ['/category', category.id];
        this.router.navigate(link);
    }
}