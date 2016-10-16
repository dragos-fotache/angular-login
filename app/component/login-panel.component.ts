import { Component, OnInit } from '@angular/core';

import { User } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
    selector: 'login-panel',
    providers: [ UserService ],
    template: `
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">Login</h3>
                </div>
                <div class="panel-body">
                    <form>
                        <div class="form-group">
                            <label for="userInput">User</label>
                            <input type="text" class="form-control" name="user" id="userInput" placeholder="User" required
                                   [(ngModel)]="user.name">
                        </div>
                        <div class="form-group">
                            <label for="userPassword">Password</label>
                            <input type="password" class="form-control" name="password" id="passwordInput" placeholder="Password" required
                                   [(ngModel)]="user.password">
                        </div>
                        <button type="button" class="btn btn-default" (click)="onClickMe()">OK</button>
                        <p>{{message}}</p>
                        <button type="button" class="btn btn-default" (click)="action()">Action</button>
                        <p>{{message2}}</p>
                    </form>
                </div>
            </div>
            <div class="col-md-4"></div>
        </div>
    `
})
export class LoginPanelComponent implements OnInit {

    user: User;

    message: String;
    message2: String;

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.user = new User(undefined, undefined);
    }

    onClickMe() {
        this.userService.login(this.user)
            .then(response => {
                if (response.status == 200) {
                    this.message = "Login successful";
                } else {
                    this.message = "Login error";
                }
            });
    }

    action() {
        this.userService.action()
            .then(response => {
                if (response.status == 200) {
                    this.message2 = "Action successful";
                } else {
                    this.message2 = "Action error";
                }
            });

    }

}