import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Response  } from "@angular/http";
import { Location } from "@angular/common";

import { TypeCategory } from '../type_category.model';
import { CategoryTypeService } from '../category-type.service';

@Component({
    selector: 'app-category-type-show',
    templateUrl: './category-type-show.component.html'
})

export class CategoryTypeShowComponent implements OnInit {

    typeCategory: TypeCategory;
    
    constructor(
        private route: ActivatedRoute,
        private categoryTypeService: CategoryTypeService,
        private location: Location,
        private router: Router
    ) { }

    ngOnInit() { 
        this.typeCategory = new TypeCategory('', false);
        this.getTypeCategory();
    }

    getTypeCategory(){
        let typeRequest = this.route.params
        .flatMap((params: Params) => 
            this.categoryTypeService.getTypeCategory(+params['id'])
        );

        typeRequest.subscribe(
            (response: Response) => this.typeCategory = response.json()
        );
    }

    onReturn(): void {
        this.location.back();
    }

    onSubmit() {
        this.categoryTypeService.updateTypeCategory(this.typeCategory)
            .subscribe(res => this.router.navigate(["category/type"]));
    }

     onDelete(): void {
        if (this.typeCategory) {
            if (confirm("Are you sure to delete this category type: " + this.typeCategory.name)) {
                this.categoryTypeService.deleteTypeCategory(this.typeCategory)
                    .subscribe(res => this.router.navigate(["category/type"]));
            }
        }

    }
}