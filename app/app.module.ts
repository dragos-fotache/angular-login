import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './component/app.component';
import { LoginPanelComponent }   from './component/login-panel.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, LoginPanelComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }