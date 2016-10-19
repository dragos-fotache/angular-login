import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { User } from '../model/user.model';


@Injectable()
export class UserService {

    private path = 'http://localhost:3002/login';

    private actionPath = 'http://localhost:3002/action';

    constructor(private http: Http) {
    }
    
    login(user: User) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers, withCredentials: true });

        return this.http.post(this.path, user, options)
            .toPromise()
            .then(response => response)
            .catch(response => response);

    }

    action() {

        let options = new RequestOptions({ withCredentials: true });

        return this.http.get(this.actionPath, options)
            .toPromise()
            .then(response => {
                return response;
            })
            .catch(response => response)
    }

}