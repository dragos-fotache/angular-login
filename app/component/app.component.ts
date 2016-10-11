import { Component } from '@angular/core';

import { LoginPanelComponent } from './login-panel.component';

@Component({
    selector: 'my-app',
    template: `
        <div class="container">
            <login-panel></login-panel>
        </div>
    `
})
export class AppComponent { 

    title: String = "Hello, world!";

}
