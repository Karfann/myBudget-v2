import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

// ACCOUNT
import { AccountComponent } from './account/account.component';
import { AccountShowComponent } from './account/account-show/account-show.component';
import { AccountNewComponent } from './account/account-new/account-new.component';
import { AccountListComponent } from './account/account-list/account-list.component';
// import { AccountMenuComponent } from './account/shared/account-menu.component';

// CATEGORY 
import { CategoryComponent } from './category/category.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryNewComponent } from  './category/category-new/category-new.component';
import { CategoryShowComponent } from './category/category-show/category-show.component';


// CATEGORY TYPE
import { CategoryTypeComponent } from './category/category-type/category-type.component';
import { CategoryTypeListComponent } from './category/category-type/category-type-list/category-type-list.component';
import { CategoryTypeNewComponent } from './category/category-type/category-type-new/category-type-new.component';
import { CategoryTypeShowComponent } from './category/category-type/category-type-show/category-type-show.component';


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'category' },
    {
        path: 'account', component: AccountComponent,
        children: [
            { path: '', component: AccountListComponent },
            { path: 'new', component: AccountNewComponent },
            { path: ':id', component: AccountShowComponent }
        ]
    },
    {
        path: 'category', component: CategoryComponent,
        children: [
            { path: '', component: CategoryListComponent },
            {
                path: 'type', component: CategoryTypeComponent,
                children: [
                    { path: '', component: CategoryTypeListComponent },
                    { path: 'new', component: CategoryTypeNewComponent },
                    { path: ':id', component: CategoryTypeShowComponent }
                ]
            },
            { path: 'new', component: CategoryNewComponent },
            { path: ':id', component: CategoryShowComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }