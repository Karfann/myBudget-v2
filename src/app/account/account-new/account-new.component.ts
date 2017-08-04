import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from "@angular/forms";

import { Router } from "@angular/router";

import { AccountService } from './../account.service';
import { Account } from './../account.model';

@Component({
    selector: 'app-account-new',
    templateUrl: './account-new.component.html'
})

export class AccountNewComponent implements OnInit {

    form: FormGroup;

    constructor(
        private fb: FormBuilder,
        private accountService: AccountService,
        private router: Router
    ) { }

    ngOnInit() {
        this.createForm();
        this.accountService.successMessage = null;
    }

    onCancel() {
        this.resetForm();
    }

    private resetForm() {
        this.form.reset();
    }

    private createForm() {
        this.form = this.fb.group({
            name: ['', Validators.required],
            isActive: ''
        })
    }

    onSubmit() {
        const newAccount = this.prepareSaveType();
        this.accountService.addAccount(newAccount)
            .subscribe(result => this.router.navigate(['account']));
    }

    private prepareSaveType(): Account {
        const formModel = this.form.value;
        const newAccount: Account = {
            name: formModel.name,
            isActive: formModel.isActive
        }

        return newAccount;
    }
    // onSubmit() {
    //     const newTypeCategory = this.prepareSaveType();
    //     this.categoryTypeService.addTypeCategory(newTypeCategory)
    //         .subscribe(result => this.router.navigate(["category/type"])
    //         );
    // }

    // private prepareSaveType(): TypeCategory {
    //     const formModel = this.typeCategoryForm.value;
    //     const newType: TypeCategory = {
    //         name: formModel.name,
    //         isIncome: formModel.isIncome
    //     }

    //     return newType;
    // }
}