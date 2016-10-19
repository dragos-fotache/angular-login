import { Component, OnInit } from '@angular/core';

import { User } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
    selector: 'dashboard',
    providers: [ UserService ],
    template: `
        <div class="jumbotron">
            <h1>Dashboard</h1>
            <h2>{{message}}</h2>
            <button type="button" class="btn btn-default" (click)="action()">OK</button>

        </div>
    `
})
export class DashboardComponent {

    message: string;

    constructor(private userService: UserService) { }

    action() {
        this.userService.action()
            .then(response => {
                if (response.status == 200) {
                    this.message = "Session logged in";
                } else if (response.status == 401) {
                    this.message = "Session not logged in";
                } else {
                    this.message = "Error";
                }
            })
    }

}