import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent }   from './component/app.component';
import { LoginPanelComponent }   from './component/login-panel.component';
import { DashboardComponent }   from './component/dashboard.component';

import { UserService } from './service/user.service';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'login', component: LoginPanelComponent },
      { path: '**', component: DashboardComponent }
    ]) 
  ],
  declarations: [ AppComponent, LoginPanelComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ 
  ]
})
export class AppModule { }