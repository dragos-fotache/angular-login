import { Component, OnInit } from '@angular/core';

import { User } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
    selector: 'login-panel',
    providers: [ UserService ],
    template: `
        <div class="panel panel-default">
            <div class="panel-body">
                <div class="alert alert-danger" role="alert"
                     *ngIf="showLoginError">Login incorrect!</div>
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
                    <button type="button" class="btn btn-default" (click)="submitLogin()">OK</button>
                </form>
            </div>
        </div>
    `
})
export class LoginPanelComponent implements OnInit {

    user: User;

    message: String;
    message2: String;

    showLoginError = false;

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.user = new User(undefined, undefined);
    }

    submitLogin() {
        this.userService.login(this.user)
            .then(response => {
                if (response.status == 200) {
                    this.showLoginError = false;
                } else {
                    this.showLoginError = true;
                }
            });
    }

}