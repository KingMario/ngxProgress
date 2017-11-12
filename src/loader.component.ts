import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  template: `
    <div class="loader-bar">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    </div>
  `,
  encapsulation: ViewEncapsulation.Native,
  styles: [`
      .bar {
        content: "";
        display: inline;
        position: absolute;
        width: 0;
        height: 4px;
        left: 50%;
        text-align: center;
      }
      .bar:nth-child(1) {
        background-color: #da4733;
        animation: loading 3s linear infinite;
      }
      .bar:nth-child(2) {
        background-color: #3b78e7;
        animation: loading 3s linear 1s infinite;
      }
      .bar:nth-child(3) {
        background-color: #fdba2c;
        animation: loading 3s linear 2s infinite;
      }
      @keyframes loading {
          from {left: 50%; width: 0;z-index:100;}
          33.3333% {left: 0; width: 100%;z-index: 10;}
          to {left: 0; width: 100%;}
      }
    `]
})
export class LoaderComponent {

}