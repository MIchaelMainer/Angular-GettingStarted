import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <div style="text-align:center"><h1>{{pageTitle}}</h1>
    <div>My First Component</div>
  </div>
  
  `
})
export class AppComponent {
  pageTitle: string = "Acme Product Management";
}