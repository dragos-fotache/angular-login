import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './component/app.component';
import { LoginPanelComponent }   from './component/login-panel.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, LoginPanelComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }