import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

// ACCOUNT
import { AccountComponent } from './account/account.component';
import { AccountShowComponent } from './account/account-show/account-show.component';
import { AccountNewComponent } from './account/account-new/account-new.component';
import { AccountListComponent } from './account/account-list/account-list.component';

// CATEGORY 
import { CategoryComponent } from './category/category.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryNewComponent } from './category/category-new/category-new.component';
import { CategoryShowComponent } from './category/category-show/category-show.component';

// CATEGORY TYPE
import { CategoryTypeComponent } from './category-type/category-type.component';
import { CategoryTypeListComponent } from './category-type/category-type-list/category-type-list.component';
import { CategoryTypeNewComponent } from './category-type/category-type-new/category-type-new.component';
import { CategoryTypeShowComponent } from './category-type/category-type-show/category-type-show.component';

// EXPENSE
import { ExpenseComponent } from './expense/expense.component';
import { ExpenseListComponent } from './expense/expense-list/expense-list.component';
import { ExpenseNewComponent } from './expense/expense-new/expense-new.component';
import { ExpenseShowComponent } from './expense/expense-show/expense-show.component';

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
    },
    {
        path: 'expense', component: ExpenseComponent,
        children: [
            { path: '', component: ExpenseListComponent },
            { path: 'new', component: ExpenseNewComponent },
            { path: ':id', component: ExpenseShowComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }