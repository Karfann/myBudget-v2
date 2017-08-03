import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from './../account.service';
import { Account } from './../account.model';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styles: []
})
export class AccountListComponent implements OnInit {
 accounts: Account[];
    errorMessage: string;
    successMessage: string;

    constructor(
        private accountService: AccountService,
        private router: Router
    ) { }

    ngOnInit() { 
        this.getAccounts();
        this.successMessage = this.accountService.successMessage;
    }

    getAccounts(): void {
        this.accountService
            .getAccounts()
            .subscribe(
                accounts => this.accounts = accounts,
                error => this.errorMessage = <any>error
            )

    }

    goTo(account: Account){
     let link =  ['/account', account.id];
     this.router.navigate(link);
}

}
