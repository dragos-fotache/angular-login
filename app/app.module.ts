import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './component/app.component';
import { LoginPanelComponent }   from './component/login-panel.component';

import { UserService } from './service/user.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, LoginPanelComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ 
  ]
})
export class AppModule { }