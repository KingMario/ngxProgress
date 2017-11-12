import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgxProgressModule, LoaderProvider } from 'ngxProgress';

declare var NProgress;

export function NProgressLoader(): LoaderProvider {
  return {
    start() {
      NProgress.start();
    },
    stop() {
      NProgress.done();
    }
  };
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgxProgressModule.forRoot({
      loaderProvider: NProgressLoader,
      buffer: 3000 /* this is optional */
    }),

    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
