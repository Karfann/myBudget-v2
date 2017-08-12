import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";

import { Router } from "@angular/router";

import { Account } from './../../account/account.model';
import { AccountService } from './../../account/account.service';

import { Category } from './../../category/category.model';
import { CategoryService } from './../../category/category.service';

@Component({
  selector: 'app-expense-new',
  templateUrl: './expense-new.component.html',
  styles: []
})
export class ExpenseNewComponent implements OnInit {
  
  form: FormGroup;
  categories: Category[];
  accounts: Account[];

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAccounts();
    this.getCategories();
    this.createForm();
  }


  onCancel() {
    this.resetForm();
  }

  resetForm(): void {
    this.form.reset();
  }

  private createForm() {
    this.form = this.fb.group({
      date: ['', Validators.required],
      value: ['', Validators.compose([Validators.required, Validators.min(0)])],
      account_id: ['', Validators.required],
      category_id: ['', Validators.required],
      notes: ''
    })
  }

  private getAccounts(): void {
    this.accountService
      .getAccountsActive()
      .subscribe(
      list => this.accounts = list,
      error => console.log(<any>error)
      )
  }

  private getCategories(): void {
    this.categoryService
      .getCategoriesActive()
      .subscribe(
      list => this.categories = list,
      error => console.error(<any>error)
      )
  }
}

// faltar incluir submit do formulario