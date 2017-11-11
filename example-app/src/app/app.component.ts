import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular NgxProgress</h1>
  
    <p class="lead">Progress loader for Angular 4+ include interceptor. Can be integrate with 3rd parties javascript library.</p>
  
    <hr>
    <p> Sets the amount of time you would like the response to be delayed, in seconds.</p>
    <div class="input-group">
     <input id="seconds" type="number" value="seconds" [(ngModel)]="seconds" class="form-control">
     <button (click)="makeRequest()" class="btn btn-primary">Make Request</button>
    </div>
    <hr/>
    <div *ngFor="let request of requests" class="box" [ngClass]="{'yellow': request.pending, 'green': !request.pending}">
      {{ request.pending? "pending": "done"}}
    </div>
    <hr/>
    <footer>
      <ul>
        <li><a href="https://github.com/wizardnet972/ngxProgress" target="_blank">NgxProgress@Github</a></li>
        <li><a href="https://github.com/wizardnet972/ngxProgress/issues" target="_blank">Report a bug.</a></li>
      </ul>
    </footer>
  `,
  styles: [`
    h1 {padding:10px;margin:0 0 20px 0;}
    p {font-size:18px;}
    .box { border:1px solid #000;height:100px;width:100px;display:inline-block; line-height:100px;text-align:center}
    .yellow { background-color:yellow;}
    .green { background-color:green;}
    #seconds {width:100px;}
  `]
})
export class AppComponent {
  seconds = 10;
  requests = [];

  constructor(private http: HttpClient) {
  }

  makeRequest() {
    this.requests.push(new Request(this.http, this.seconds));
  }
}

function Request(http, seconds) {
  this.pending = true;
  http.get(`//www.fakeresponse.com/api/?sleep=${+seconds}`)
    .subscribe(a => {
      this.pending = false;
    });
}
