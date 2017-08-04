import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// ROUTING
import { AppRoutingModule } from './app.routing';

// SHARED
import { AppComponent } from './app.component';
import { ErrorComponent } from './shared/error.component';
import { HeaderComponent } from './shared/header.component';
import { SuccessComponent } from './shared/success.component';

// ACCOUNT
import { AccountComponent } from './account/account.component';
import { AccountMenuComponent } from './account/account-menu/account-menu.component';
import { AccountListComponent } from './account/account-list/account-list.component';
import { AccountShowComponent } from './account/account-show/account-show.component';
import { AccountNewComponent } from './account/account-new/account-new.component';

// SERVICES
import { AccountService } from './account/account.service';
import { CategoryTypeService } from './category/category-type.service';
import { CategoryService } from './category/category.service';

// CATEGORY
import { CategoryComponent } from './category/category.component';
import { CategoryMenuComponent } from './category/category-menu/category-menu.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryNewComponent } from  './category/category-new/category-new.component';
import { CategoryShowComponent } from './category/category-show/category-show.component';
import { CategoryTypeComponent } from './category/category-type/category-type.component';
import { CategoryTypeListComponent } from './/category/category-type/category-type-list/category-type-list.component';
import { CategoryTypeShowComponent } from './category/category-type/category-type-show/category-type-show.component';
import { CategoryTypeNewComponent } from './category/category-type/category-type-new/category-type-new.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorComponent,
    SuccessComponent,
    AccountComponent,
    AccountMenuComponent,
    AccountListComponent,
    AccountShowComponent,
    AccountNewComponent,
    CategoryComponent,
    CategoryMenuComponent,
    CategoryListComponent,
    CategoryNewComponent,
    CategoryShowComponent,
    CategoryTypeComponent,
    CategoryTypeListComponent,
    CategoryTypeShowComponent,
    CategoryTypeNewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AccountService, CategoryService, CategoryTypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
