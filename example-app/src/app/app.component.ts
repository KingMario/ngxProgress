import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <h1>NgxProgress Example App with nProgress</h1>
    <br>
    <p>
     Sets the amount of time you would like the response to be delayed, in seconds.
     <input type="number" value="seconds" [(ngModel)]="seconds" >
    </p>
    <button (click)="long()" class="btn btn-primary">GET</button>
    <br><br>
    <p *ngIf="pending" class="bg-info">pending...</p>
    <div *ngIf="response">
      <hr/>
      <pre>response: {{response | json}}</pre>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
  response = null;
  seconds = 10;
  pending = false;

  constructor(private http: HttpClient) { }

  long() {
    this.pending = true;
    this.response = null;

    this.http
      .get(`http://www.fakeresponse.com/api/?sleep=${+this.seconds}`)
      .subscribe(response => {
        this.response = response;
        this.pending = false;
      });
  }
}
