import { User } from '../model/user.model';

import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

    private path = 'http://localhost:3002/login';

    constructor(private http: Http) {
    }
    
    getAll(): User[] {
        return [ new User('admin', 'admin'), new User('JohnWick', 'imabadass'), new User('ChuckNorris', 'numero1'), new User('VanDamme', 'musclesfrombrussels')]
    }

    login(user: User) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers, withCredentials: false });

        return this.http.post(this.path, user, options)
            .toPromise()
            .then(response => response)
            .catch(response => response);
    }

}