import { Component } from '@angular/core';

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
