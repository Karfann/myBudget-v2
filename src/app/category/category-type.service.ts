import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { TypeCategory } from './type_category.model';

@Injectable()
export class CategoryTypeService {

    private typeCategories: TypeCategory[];
    private url: string = "http://localhost:3001/type_categories";
    public successMessage: string;

    constructor(private http: Http) { }

    getTypeCategories(): Observable<TypeCategory[]> {
        return this.http.get(this.url)
            .map((response: Response) => <TypeCategory[]>response.json())
            .catch(this.handleError);
    }

    getTypeCategory(id: number) {
        return this.http.get(this.url + "/" + id + ".json");
    }


    addTypeCategory(type: TypeCategory) {
        const body = JSON.stringify(type);
        const headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http.post(this.url, body, { headers: headers })
            .map((response: Response) => {
                response.json(),
                this.successMessage = "Type of Category added with success!"
            })
    }

    deleteTypeCategory(type: TypeCategory) {
        return this.http.delete(this.url + "/" + type.id)
            .map((response: Response) => {
                response.json(),
                    this.successMessage = "Type of Category deleted with success!"
            })
            .catch(this.handleError);
    }

    updateTypeCategory(type: TypeCategory) {
        const body = JSON.stringify(type);
        const headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http.patch(this.url + "/" + type.id, body, { headers: headers })
            .map((response: Response) => {
                response.json(),
                    this.successMessage = "Type of Category updated with success!"
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