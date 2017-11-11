import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgxProgressModule } from 'ngxprogress';

declare var NProgress;
export function NProgressLoader() {
  return {
    start: NProgress.start,
    stop: NProgress.done
  };
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,

    // Default use:
   // NgxProgressModule,

    // OR!
    // You can use a custom 3rd party loader
    NgxProgressModule.forRoot({
      loaderProvider: NProgressLoader,
      buffer: 3000 /* this is optional */
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
