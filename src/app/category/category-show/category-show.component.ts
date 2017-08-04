import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Response  } from "@angular/http";
import { Location } from "@angular/common";

import { Category } from '../category.model';
import { TypeCategory } from '../type_category.model';

import { CategoryService } from '../category.service';
import { CategoryTypeService } from '../category-type.service';

@Component({
    selector: 'app-category-show',
    templateUrl: './category-show.component.html'
})

export class CategoryShowComponent implements OnInit {

    category: Category;
    typeCategories: TypeCategory[];

    constructor(
        private route: ActivatedRoute,
        private categoryService: CategoryService,
        private categoryTypeService: CategoryTypeService,
        private location: Location,
        private router: Router
    ) { }

    ngOnInit() {
        this.category = new Category('',1, true);
        this.getTypeCategories();
        this.getCategory();
    }

    getCategory(): void {

        let categoryRequest = this.route.params
            .flatMap((params: Params) =>
                this.categoryService.getCategory(+params['id'])
            );

        categoryRequest.subscribe(
            response => this.category = response.json()
        );
    }

    onSubmit(): void {
        this.categoryService.updateCategory(this.category)
            .subscribe(res => this.router.navigate(["category"]));
    }

    onDelete(): void {
        if (this.category) {
            if (confirm(`Are you sure to delete this category: ${this.category.name}`)) {
                this.categoryService.deleteCategory(this.category)
                    .subscribe(res => this.router.navigate(["category"]));
            }
        }

    }

    onReturn(): void {
        this.location.back();
    }

    private getTypeCategories(): void {
        this.categoryTypeService
            .getTypeCategories()
            .subscribe(
            list => this.typeCategories = list,
            error => console.error(<any>error)
            )
    }
}