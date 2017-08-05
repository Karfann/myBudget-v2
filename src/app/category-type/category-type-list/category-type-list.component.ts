import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CategoryTypeService } from './../category-type.service';
import { TypeCategory } from './../type_category.model';

@Component({
    selector: 'app-category-type-list',
    templateUrl: './category-type-list.component.html'
})

export class CategoryTypeListComponent implements OnInit {

    typeCategories: TypeCategory[];
    errorMessage: string;
    successMessage: string;

    constructor(
        private categoryTypeService: CategoryTypeService,
        private router: Router
    ) { }

    ngOnInit() {
        this.getTypeCategories();
        this.successMessage = this.categoryTypeService.successMessage;
    }

    getTypeCategories(): void {
        this.categoryTypeService
            .getTypeCategories()
            .subscribe(
            list => this.typeCategories = list,
            error => this.errorMessage = <any>error
            )
    }

    goTo(type: TypeCategory) {
        let link = ['category/type', type.id];
        this.router.navigate(link);
    }
}