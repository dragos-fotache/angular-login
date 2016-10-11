import { Component, OnInit } from '@angular/core';

import { User } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
    selector: 'login-panel',
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
                            <input type="user" class="form-control" id="userInput" placeholder="User"
                                   #user>
                        </div>
                        <div class="form-group">
                            <label for="userPassword">Password</label>
                            <input type="password" class="form-control" id="passwordInput" placeholder="Password">
                        </div>
                        <button type="button" class="btn btn-default" (click)="onClickMe()">Click me!</button>
                        <p>{{values}}</p>
                    </form>
                </div>
            </div>
            <div class="col-md-4"></div>
        </div>
    `
})
export class LoginPanelComponent implements OnInit {

    userService: UserService = new UserService();

    users: User[];

    constructor() { }

    ngOnInit() { 
        this.users = this.userService.getAll();
    }

    onClickMe() {
        console.log("Button clicked");
    }


}