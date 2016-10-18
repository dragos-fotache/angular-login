import { Component, OnInit } from '@angular/core';

import { User } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
    selector: 'dashboard',
    template: `
        <div class="jumbotron">
            <h1>Dashboard</h1>
        </div>
    `
})
export class DashboardComponent {
}