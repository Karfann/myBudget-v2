import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from "@angular/forms";

import { Router } from "@angular/router";

import { AccountService } from './../account.service';

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
     }

    onCancel() {
        this.resetForm();
    }

    private resetForm(){
        this.form.reset();
    }

     private createForm(){
        this.form = this.fb.group({
            name: ['', Validators.required],
            isActive: ''
        })
    }
}