import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <h1>NgxProgress Example App</h1>
    <p>
      Set response time in seconds: <input type="number" value="seconds" ngModel="seconds" >
    </p>
    <button (click)="long()">GET</button>
    <strong *ngIf="pending">pending...</strong>
    <pre *ngIf="response">
      <hr/>
      response: {{response | json}}
    </pre>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
  response;
  seconds = 10;
  pending = false;

  constructor(private http: HttpClient) { }

  long() {
    this.pending = true;

    this.http
      .get(`http://www.fakeresponse.com/api/?sleep=${+this.seconds}`)
      .subscribe(response => {
        this.response = response;
        this.pending = false;
      });
  }
}
