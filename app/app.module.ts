import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './component/app.component';
import { LoginPanelComponent }   from './component/login-panel.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, LoginPanelComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }