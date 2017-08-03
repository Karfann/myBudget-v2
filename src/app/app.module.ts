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
// import { AccountListComponent } from './account/account-list/account-list.component';

// SERVICES
import { AccountService } from './account/account.service';
// import { CategoryService } from './category/services/category.service';
// import { CategoryTypeService } from './category/services/category-type.service';

// CATEGORY
// import { CategoryComponent } from './category/category/category.component';
// import { CategoryListComponent } from './category/category-list/category-list.component';
// import { CategoryNewComponent } from './category/category-new/category-new.component';
// import { CategoryShowComponent } from './category/category-show/category-show.component';
// import { CategoryTypeComponent } from './category/category-type/category-type/category-type.component';
// import { CategoryTypeListComponent } from './category/category-type/category-type-list/category-type-list.component';
// import { CategoryTypeShowComponent } from './category/category-type/category-type-show/category-type-show.component';
// import { CategoryTypeNewComponent } from './category/category-type/category-type-new/category-type-new.component';
// import { CategoryMenuComponent } from './category/shared/category-menu.component';

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
    AccountNewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
