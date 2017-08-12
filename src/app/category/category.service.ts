import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Category } from './category.model';

@Injectable()
export class CategoryService {

    private url: string = "http://localhost:3001/categories";
    public successMessage: string;

    constructor(private http: Http) { }

    getCategories(): Observable<Category[]> {
        return this.http.get(this.url)
            .map((response: Response) => <Category[]>response.json())
            .catch(this.handleError);

    }

    getCategoriesActive(): Observable<Category[]> {
        return this.http.get(this.url)
            .map((response: Response) => <Category[]>response.json().filter(category => category.isActive))
            .catch(this.handleError);

    }

    getCategory(id: number) {
        return this.http.get(this.url + "/" + id + '.json');
    }


    addCategory(category: Category) {
        const body = JSON.stringify(category);
        const headers = new Headers({
            'Content-Type': 'application/json'
        })
        return this.http.post(this.url, body, { headers: headers })
            .map((response: Response) => {
                response.json(),
                    this.successMessage = "Category added with success!"
            })
            .catch(this.handleError);
    }

    deleteCategory(category: Category) {
        return this.http.delete(this.url + "/" + category.id)
            .map((response: Response) => {
                response.json(),
                    this.successMessage = "Category deleted with success!"
            })
            .catch(this.handleError);
    }

    updateCategory(category: Category) {
        const body = JSON.stringify(category);
        const headers = new Headers({
            'Content-Type': 'application/json'
        })

        return this.http.patch(this.url + "/" + category.id, body, { headers: headers })
            .map((response: Response) => {
                response.json(),
                    this.successMessage = "Category updated with success!"
            })
            .catch(this.handleError)
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