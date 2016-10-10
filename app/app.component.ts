import { Component } from '@angular/core';

import { MyComponent } from './my.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{ title }}</h1>
        <p>The following are badasses:</p>
        <ul>
            <li *ngFor="let badass of badasses">
                {{ badass }}
            </li>
        </ul>
        <br/>
        <p *ngFor="let animal of animals">
            {{ animal }}
        </p>
        <my></my>
    `,
    directives: [MyComponent]
})
export class AppComponent { 

    title: String = "Hello, world!";
    badasses : String[] = ["John Wick", "Chuck Norris", "Jean Claude Van Damme"];
    animals : String[] = ["cat", "dog", "crocodile"]

}
