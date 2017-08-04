import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from "@angular/forms";

import { Router } from "@angular/router";

import { CategoryService } from '../category.service';
import { CategoryTypeService } from '../category-type.service';

import { Category } from '../category.model';
import { TypeCategory } from '../type_category.model';

@Component({
    selector: 'app-category-new',
    templateUrl: './category-new.component.html'
})

export class CategoryNewComponent implements OnInit {

    categoryForm: FormGroup;
    typeCategories: TypeCategory[];

    constructor(
        private fb: FormBuilder,
        private categoryService: CategoryService,
        private categoryTypeService: CategoryTypeService,
        private router: Router
    ) { }

    ngOnInit() {
        this.getTypeCategories();
        this.createForm();
    }

    private createForm() {
        this.categoryForm = this.fb.group({
            name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
            type_category_id: ['', Validators.required]
        })
    }

    onCancel() {
        this.resetForm();
    }

    onSubmit() {

        const newCategory = this.prepareSaveCategory();
        this.categoryService.addCategory(newCategory)
            .subscribe(result =>
                this.router.navigate(["category"])
            );
    }

    private prepareSaveCategory(): Category {
        const formModel = this.categoryForm.value;
        const newCategory: Category = {
            name: formModel.name,
            type_category_id: formModel.type_category_id,
            isActive: true
        };

        return newCategory;
    }

    resetForm(): void {
        this.categoryForm.reset();
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