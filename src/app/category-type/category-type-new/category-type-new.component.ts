import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from "@angular/forms";
import { Router } from "@angular/router";

import { TypeCategory } from '../type_category.model';
import { CategoryTypeService } from '../category-type.service';

@Component({
    selector: 'app-category-type-new',
    templateUrl: './category-type-new.component.html'
})

export class CategoryTypeNewComponent implements OnInit {

    typeCategoryForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private categoryTypeService: CategoryTypeService,
        private router: Router
    ) { }

    ngOnInit() {
        this.createForm();
        this.categoryTypeService.successMessage = null;
    }

    createForm() {
        this.typeCategoryForm = this.fb.group({
            name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
            isIncome: ''
        });
    }

    onSubmit() {
        const newTypeCategory = this.prepareSaveType();
        this.categoryTypeService.addTypeCategory(newTypeCategory)
            .subscribe(result => this.router.navigate(["category/type"])
            );
    }

    private prepareSaveType(): TypeCategory {
        const formModel = this.typeCategoryForm.value;
        const newType: TypeCategory = {
            name: formModel.name,
            isIncome: formModel.isIncome
        }

        return newType;
    }
}