import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Response } from "@angular/http";
import { Location } from "@angular/common";

import "rxjs/add/operator/mergeMap";

import { AccountService } from '../account.service';
import { Account } from './../account.model';

@Component({
    selector: 'app-account-show',
    templateUrl: './account-show.component.html'
})

export class AccountShowComponent implements OnInit {

    account: Account;

    constructor(
        private route: ActivatedRoute,
        private accountService: AccountService,
        private location: Location,
        private router: Router
    ) { }

    ngOnInit() {
        this.account = new Account('', true);
        this.getAccount();
    }

    getAccount(): void {
        let accountRequest = this.route.params
            .mergeMap((params: Params) =>
                this.accountService.getAccount(+params['id'])
            );

        accountRequest.subscribe(
            response => this.account = response.json()
        );
    }

    // onDelete(): void {
    //     if (this.account) {
    //         if (confirm(`Are you sure to delete this account: ${this.account.name}`)) {
    //             this.accountService
    //                 .deleteAccount(this.account)
    //                 .subscribe(res => this.router.navigate(["account"]));
    //         }
    //     }
    // }

    onReturn(): void {
        this.location.back();
    }

    onSubmit(): void {
        this.accountService
            .updateAccount(this.account)
            .subscribe(
                response => this.router.navigate(['account'])
            );
    }
}