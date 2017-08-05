import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Account } from './account.model';

@Injectable()
export class AccountService {

    private url: string = "http://localhost:3001/accounts";
    public successMessage: string;

    constructor(private http: Http) { }

    getAccounts(): Observable<Account[]> {
        return this.http.get(this.url)
            .map((response: Response) => <Account[]>response.json())
            .catch(this.handleError)
    }

    getAccount(id: number) {
        return this.http.get(this.url + '/' + id + '.json');

    }

    deleteAccount(account: Account) {
        return this.http.delete(this.url + "/" + account.id)
            .map((response: Response) => {
                response.json(),
                    this.successMessage = "Account deleted with success!"
            })
            .catch(this.handleError)
    }

    updateAccount(account: Account) {
        const body = JSON.stringify(account);
        const headers = new Headers({
            'Content-Type': 'application/json'
        })

        return this.http.patch(this.url + "/" + account.id, body, { headers: headers })
            .map((response: Response) => {
                response.json(),
                    this.successMessage = "Account added with success!"
            })
            .catch(this.handleError);
    }

    addAccount(account: Account) {
        const body = JSON.stringify(account);
        const headers = new Headers({
            'Content-Type': 'application/json'
        })
        return this.http.post(this.url, body, { headers: headers })
            .map((response: Response) => {
                response.json(),
                    this.successMessage = "Account added with success!"
            })
            .catch(this.handleError);
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = "${error.status} - ${error.statusText || ''} ${err}";
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}