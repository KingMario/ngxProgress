import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
  <div class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
    <div class="container">
      <a href="https://github.com/wizardnet972/ngxProgress" class="navbar-brand">NgxProgress</a>
    </div>
  </div>
  <div class="jumbotron">
    <div class="container">
      <p><small>Basic Example</small></p>
      <h1>NgxProgress</h1>
      <p>
        Progress loader for Angular 4+ include interceptor.
        Can be integrate with 3rd parties javascript library.<br>
        <br>
        > npm install ngxprogress
      </p>
      <div class="social">
        <ul class="list-inline">
          <li><span id="ghbtns-badge"></span></li>
          <li><a class="twitter-follow-button" href="https://twitter.com/wizardnet972">Follow @wizardnet972</a></li>
          <li><a class="github-follow-button" href="https://github.com/wizardnet972/ngxProgress">NgxProgress@Github</a></li>
          <li><a class="github-report-button" href="https://github.com/wizardnet972/ngxProgress/issues">Report Bug</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="form-group">
      <label for="miliseconds">Sets the amount of time you would <br>like the
      response to be delayed, in miliseconds</label>
      <div class="input-group">
        <input [(ngModel)]="miliseconds" id="miliseconds" type="number" value="miliseconds" class="form-control" />
        <button (click)="makeRequest()" class="btn btn-primary">Make Request</button>
      </div>
    </div>

    <div class="alert col-xs-3 col-sm-offset-1"
        [ngClass]="{'alert-warning': request.pending, 'alert-success': !request.pending}"

        *ngFor="let request of requests">
        <strong> Http Request Status: {{ request.pending? "pending": "done"}}</strong>
    </div>

  </div>
  `,
  styles: [`
    .navbar {margin-bottom:0;}
  `]
})
export class AppComponent {
  title = 'app';
  miliseconds = 10000;
  requests = [];

  constructor(private http: HttpClient) {
  }

  makeRequest() {
    this.requests.push(new Request(this.http, this.miliseconds));
  }
}

function Request(http, miliseconds) {
  this.pending = true;
  http.get(`//httpstat.us/200?sleep=${+miliseconds}`)
    .subscribe(a => {
      this.pending = false;
    });
}
